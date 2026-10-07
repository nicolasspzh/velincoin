// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_CPUMINER_H
#define BITCOIN_QT_CPUMINER_H

#include <consensus/amount.h>
#include <script/script.h>
#include <sync.h>
#include <uint256.h>

#include <atomic>
#include <cstdint>
#include <memory>
#include <string>
#include <thread>
#include <vector>

namespace interfaces {
class Init;
class Mining;
} // namespace interfaces

/**
 * Mines blocks on the processor for the wallet's Mining page.
 *
 * It does what the generatetoaddress RPC does, but on several cores and
 * without a fixed number of tries. Every worker thread puts its own extra
 * nonce into the coinbase, so no two threads hash the same header. A control
 * thread fetches a new block template when the chain tip changes, and every
 * 30 seconds otherwise so that new transactions and the time are picked up.
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
        int64_t started{0};
        //! Height of the block being mined, -1 before the first template
        int height{-1};
        uint32_t bits{0};
        std::string payout_address;
        //! Blocks found since the program started, oldest first
        std::vector<FoundBlock> found;
        std::string error;
    };

    explicit CpuMiner(interfaces::Init& init);
    ~CpuMiner();

    CpuMiner(const CpuMiner&) = delete;
    CpuMiner& operator=(const CpuMiner&) = delete;

    /** Start mining to payout on the given number of threads; restarts if already running. */
    void Start(const CScript& payout, const std::string& payout_address, int threads);
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
    void Found(const Work& work, const uint256& hash, bool accepted);

    interfaces::Init& m_init;
    //! Only used by the control thread
    std::unique_ptr<interfaces::Mining> m_mining;

    std::vector<std::thread> m_threads;
    std::atomic<bool> m_stop{true};
    std::atomic<uint64_t> m_generation{0};
    std::atomic<uint64_t> m_hashes{0};

    mutable Mutex m_mutex;
    std::shared_ptr<const Work> m_work GUARDED_BY(m_mutex);
    Stats m_stats GUARDED_BY(m_mutex);

    //! submitSolution changes the shared template, one submission at a time
    Mutex m_submit_mutex;
};

#endif // BITCOIN_QT_CPUMINER_H
