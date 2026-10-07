// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/cpuminer.h>

#include <arith_uint256.h>
#include <chainparams.h>
#include <consensus/merkle.h>
#include <interfaces/init.h>
#include <interfaces/mining.h>
#include <interfaces/node.h>
#include <node/context.h>
#include <pow.h>
#include <primitives/block.h>
#include <primitives/transaction.h>
#include <util/threadnames.h>

#include <algorithm>
#include <chrono>
#include <exception>

using namespace std::chrono_literals;

struct CpuMiner::Work {
    uint64_t generation{0};
    std::shared_ptr<interfaces::BlockTemplate> block_template;
    CBlock block;
    //! What has to stay at the start of the coinbase scriptSig (BIP34 height)
    CScript script_sig_prefix;
    int height{0};
    CAmount reward{0};
};

namespace {
//! Hashes per worker between two looks at the stop flag and a new template
constexpr uint32_t CHUNK{0x10000};
//! New template at least this often (new transactions, time, lower difficulty)
constexpr auto TEMPLATE_REFRESH{10s};
//! Shortest time between two found blocks
constexpr auto MIN_BLOCK_INTERVAL{1s};
} // namespace

CpuMiner::CpuMiner(interfaces::Node& node) : m_node(node) {}

CpuMiner::~CpuMiner()
{
    Stop();
}

int CpuMiner::MaxThreads()
{
    return std::max(1, static_cast<int>(std::thread::hardware_concurrency()));
}

double CpuMiner::ExpectedHashes(uint32_t bits)
{
    arith_uint256 target;
    bool negative, overflow;
    target.SetCompact(bits, &negative, &overflow);
    if (negative || overflow || target == 0) return 0;
    // 2^256 / (target + 1), like GetBlockProof
    return ((~target / (target + 1)) + 1).getdouble();
}

bool CpuMiner::Start(const CScript& payout, const std::string& payout_address, const std::string& wallet_name, int threads, std::string& error)
{
    Stop();
    if (!m_mining) {
        node::NodeContext* context{m_node.context()};
        if (!context || !context->init) {
            error = "Mining is not available in this program.";
            return false;
        }
        m_mining = context->init->makeMining();
        if (!m_mining) {
            error = "Mining is not available in this program.";
            return false;
        }
    }
    threads = std::clamp(threads, 1, MaxThreads());
    {
        LOCK(m_mutex);
        m_stats.running = true;
        m_stats.threads = threads;
        m_stats.height = -1;
        m_stats.bits = 0;
        m_stats.payout_address = payout_address;
        m_stats.wallet_name = wallet_name;
        m_stats.error.clear();
        m_work.reset();
        m_sample_hashes = m_hashes;
        m_sample_time = SteadyClock::now();
        m_hashrate = 0;
    }
    m_stop = false;
    m_threads.emplace_back([this, payout] { ControlLoop(payout); });
    for (int id{0}; id < threads; ++id) {
        m_threads.emplace_back([this, id] { WorkerLoop(id); });
    }
    return true;
}

void CpuMiner::Stop()
{
    m_stop = true;
    for (std::thread& thread : m_threads) {
        if (thread.joinable()) thread.join();
    }
    m_threads.clear();
    LOCK(m_mutex);
    m_stats.running = false;
    m_work.reset();
}

CpuMiner::Stats CpuMiner::GetStats() const
{
    LOCK(m_mutex);
    const auto now{SteadyClock::now()};
    const double seconds{std::chrono::duration<double>(now - m_sample_time).count()};
    if (seconds >= 1) {
        const uint64_t hashes{m_hashes};
        const double rate{(hashes - m_sample_hashes) / seconds};
        m_hashrate = m_hashrate == 0 ? rate : 0.7 * m_hashrate + 0.3 * rate;
        m_sample_hashes = hashes;
        m_sample_time = now;
    }
    Stats stats{m_stats};
    stats.hashrate = m_stats.running ? m_hashrate : 0;
    return stats;
}

void CpuMiner::ControlLoop(CScript payout)
{
    util::ThreadRename("miner-control");
    while (!m_stop) {
        SteadyClock::time_point last_found;
        {
            LOCK(m_mutex);
            last_found = m_last_found;
        }
        if (SteadyClock::now() < last_found + MIN_BLOCK_INTERVAL) {
            std::this_thread::sleep_for(50ms);
            continue;
        }
        std::unique_ptr<interfaces::BlockTemplate> block_template;
        std::optional<interfaces::BlockRef> tip;
        try {
            // The same template as generatetoaddress
            block_template = m_mining->createNewBlock({.coinbase_output_script = payout, .include_dummy_extranonce = true}, /*cooldown=*/false);
            tip = m_mining->getTip();
        } catch (const std::exception& e) {
            LOCK(m_mutex);
            m_stats.error = e.what();
            break;
        }
        if (!block_template || !tip) break; // shutdown
        auto work{std::make_shared<Work>()};
        work->block = block_template->getBlock();
        // The tip moved on while the template was made: make a new one
        if (tip->hash != work->block.hashPrevBlock) continue;
        work->script_sig_prefix = block_template->getCoinbaseTx().script_sig_prefix;
        work->height = tip->height + 1;
        work->reward = work->block.vtx[0]->GetValueOut();
        work->block_template = std::move(block_template);
        work->generation = ++m_generation;
        {
            LOCK(m_mutex);
            m_work = work;
            m_stats.height = work->height;
            m_stats.bits = work->block.nBits;
        }
        const auto refresh{SteadyClock::now() + TEMPLATE_REFRESH};
        while (!m_stop && SteadyClock::now() < refresh) {
            const std::optional<interfaces::BlockRef> new_tip{m_mining->waitTipChanged(tip->hash, 1s)};
            if (!new_tip) {
                m_stop = true; // shutdown
                break;
            }
            if (new_tip->hash != tip->hash) break;
        }
    }
    m_stop = true;
    LOCK(m_mutex);
    m_work.reset();
}

void CpuMiner::WorkerLoop(int id)
{
    util::ThreadRename(strprintf("miner-%d", id));
    const Consensus::Params& consensus{Params().GetConsensus()};
    uint64_t generation{0};
    uint32_t extra_nonce{0};
    while (!m_stop) {
        std::shared_ptr<const Work> work;
        {
            LOCK(m_mutex);
            work = m_work;
        }
        if (!work || (work->generation == generation && extra_nonce == UINT32_MAX)) {
            std::this_thread::sleep_for(100ms);
            continue;
        }
        if (work->generation != generation) {
            generation = work->generation;
            extra_nonce = 0;
        }

        // Own extra nonce per thread and round: a different coinbase, so a
        // different merkle root and header than any other thread
        CBlock block{work->block};
        CMutableTransaction coinbase{*block.vtx[0]};
        coinbase.vin[0].scriptSig = CScript{work->script_sig_prefix} << ((int64_t{id} << 32) | extra_nonce++);
        block.vtx[0] = MakeTransactionRef(std::move(coinbase));
        block.hashMerkleRoot = BlockMerkleRoot(block);

        bool found{false};
        uint32_t nonce{0};
        do {
            for (uint32_t i{0}; i < CHUNK; ++i, ++nonce) {
                block.nNonce = nonce;
                if (CheckProofOfWork(block.GetHash(), block.nBits, consensus)) {
                    found = true;
                    break;
                }
            }
            m_hashes += CHUNK;
        } while (!found && nonce != 0 && !m_stop && m_generation == generation);

        if (found) {
            Found(*work, block);
            // Wait for the template on top of the new block
            while (!m_stop && m_generation == generation) std::this_thread::sleep_for(50ms);
        }
    }
}

void CpuMiner::Found(const Work& work, const CBlock& block)
{
    const uint256 hash{block.GetHash()};
    bool accepted{false};
    try {
        LOCK(m_submit_mutex);
        accepted = work.block_template->submitSolution(block.nVersion, block.nTime, block.nNonce, block.vtx[0]);
        // Another block at the same height may have arrived first
        const std::optional<interfaces::BlockRef> tip{m_mining->getTip()};
        accepted = accepted && tip && tip->hash == hash;
    } catch (const std::exception&) {
        accepted = false;
    }
    LOCK(m_mutex);
    m_stats.found.push_back({.height = work.height, .hash = hash, .time = block.nTime, .reward = work.reward, .accepted = accepted});
    m_last_found = SteadyClock::now();
    if (accepted) m_stats.height = work.height + 1;
    // The other threads wait for the template on top of this block
    if (m_work && m_work->generation == work.generation) m_work.reset();
}
