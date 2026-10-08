// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_CPUMINER_H
#define BITCOIN_QT_CPUMINER_H

#include <consensus/amount.h>
#include <script/script.h>
#include <sync.h>
#include <uint256.h>
#include <util/time.h>

#include <atomic>
#include <cstdint>
#include <memory>
#include <string>
#include <thread>
#include <vector>

class CBlock;

namespace interfaces {
class Mining;
class Node;
} // namespace interfaces

/**
 * Mines blocks on the processor for the wallet's Mining page (test network
 * and regtest only).
 *
 * It mines like the generatetoaddress RPC: a block template from the node
 * that pays the wallet's address, then the nonce is counted up until the
 * block hash meets the target. Unlike the RPC it runs in the background on
 * one or more threads until it is stopped. Every thread puts its own extra
 * nonce into the coinbase, so no two threads hash the same header. A control
 * thread fetches a new template when the chain tip changes, and every 10
 * seconds otherwise so that new transactions, the time and (on the test
 * network) the lower difficulty after 3 minutes without a block are used.
 * After a block is found the next one starts one second later at the
 * earliest, so regtest does not fill the wallet with thousands of blocks.
 */
class CpuMiner
{
public:
    struct FoundBlock {
        int height{0};
        uint256 hash;
        int64_t time{0};
        CAmount reward{0};
        //! The node took the block as its new tip
        bool accepted{false};
    };

    struct Stats {
        bool running{false};
        //! Hashes per second, smoothed over the last seconds
        double hashrate{0};
        int threads{0};
        //! Height of the block being mined, -1 before the first template
        int height{-1};
        uint32_t bits{0};
        std::string payout_address;
        //! Wallet the payout address belongs to
        std::string wallet_name;
        //! Blocks found since the program started, oldest first
        std::vector<FoundBlock> found;
        std::string error;
    };

    explicit CpuMiner(interfaces::Node& node);
    ~CpuMiner();

    CpuMiner(const CpuMiner&) = delete;
    CpuMiner& operator=(const CpuMiner&) = delete;

    /** Start mining to payout on the given number of threads; restarts if already running. */
    bool Start(const CScript& payout, const std::string& payout_address, const std::string& wallet_name, int threads, std::string& error);
    /** Stop mining and wait for the threads to finish. */
    void Stop();
    Stats GetStats() const;

    static int MaxThreads();
    /** Average number of hashes needed for a block with these bits. */
    static double ExpectedHashes(uint32_t bits);

private:
    struct Work;

    void ControlLoop(CScript payout);
    void WorkerLoop(int id);
    void Found(const Work& work, const CBlock& block);

    interfaces::Node& m_node;
    std::unique_ptr<interfaces::Mining> m_mining;

    std::vector<std::thread> m_threads;
    std::atomic<bool> m_stop{true};
    std::atomic<uint64_t> m_generation{0};
    std::atomic<uint64_t> m_hashes{0};

    mutable Mutex m_mutex;
    std::shared_ptr<const Work> m_work GUARDED_BY(m_mutex);
    Stats m_stats GUARDED_BY(m_mutex);
    //! For the hash rate in GetStats
    mutable uint64_t m_sample_hashes GUARDED_BY(m_mutex){0};
    mutable SteadyClock::time_point m_sample_time GUARDED_BY(m_mutex);
    mutable double m_hashrate GUARDED_BY(m_mutex){0};
    //! At most one block a second (regtest finds one in no time)
    SteadyClock::time_point m_last_found GUARDED_BY(m_mutex);

    //! submitSolution changes the template's block, one submission at a time
    Mutex m_submit_mutex;
};

#endif // BITCOIN_QT_CPUMINER_H
