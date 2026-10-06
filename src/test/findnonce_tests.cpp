// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <chainparams.h>
#include <node/miner.h>
#include <pow.h>
#include <primitives/block.h>
#include <test/util/setup_common.h>
#include <util/chaintype.h>
#include <util/signalinterrupt.h>

#include <boost/test/unit_test.hpp>

#include <cstdint>
#include <limits>

BOOST_FIXTURE_TEST_SUITE(findnonce_tests, BasicTestingSetup)

namespace {
struct Result {
    bool found;
    uint32_t nonce;
    uint64_t max_tries;
};

// The one-by-one loop that the generate RPCs used before FindNonce().
Result SerialReference(CBlockHeader header, uint64_t max_tries, const Consensus::Params& params)
{
    while (max_tries > 0 && header.nNonce < std::numeric_limits<uint32_t>::max() && !CheckProofOfWork(header.GetHash(), header.nBits, params)) {
        ++header.nNonce;
        --max_tries;
    }
    const bool found{max_tries > 0 && header.nNonce < std::numeric_limits<uint32_t>::max()};
    return {found, header.nNonce, max_tries};
}

Result Run(CBlockHeader header, uint64_t max_tries, const Consensus::Params& params, unsigned int threads, uint64_t serial_tries)
{
    util::SignalInterrupt interrupt;
    const bool found{node::FindNonce(header, max_tries, params, interrupt, threads, serial_tries)};
    return {found, header.nNonce, max_tries};
}

void CheckSame(const CBlockHeader& header, uint64_t max_tries, const Consensus::Params& params)
{
    const Result expected{SerialReference(header, max_tries, params)};
    for (const unsigned int threads : {1U, 2U, 3U, 8U}) {
        for (const uint64_t serial_tries : {uint64_t{0}, uint64_t{1000}, uint64_t{1} << 16}) {
            const Result got{Run(header, max_tries, params, threads, serial_tries)};
            BOOST_CHECK_EQUAL(got.found, expected.found);
            BOOST_CHECK_EQUAL(got.nonce, expected.nonce);
            BOOST_CHECK_EQUAL(got.max_tries, expected.max_tries);
        }
    }
}

CBlockHeader MakeHeader(uint32_t time, uint32_t bits, uint32_t nonce = 0)
{
    CBlockHeader header;
    header.nVersion = 0x20000000;
    header.nTime = time;
    header.nBits = bits;
    header.nNonce = nonce;
    return header;
}
} // namespace

// Needs about 65536 tries per header, so the threads really have to work.
BOOST_AUTO_TEST_CASE(same_nonce_as_serial)
{
    const auto params{CreateChainParams(*m_node.args, ChainType::REGTEST)->GetConsensus()};
    for (uint32_t time{1791190318}; time < 1791190318 + 6; ++time) {
        const CBlockHeader header{MakeHeader(time, 0x1f00ffff)};
        CheckSame(header, std::numeric_limits<uint64_t>::max(), params);
        CheckSame(header, 1'000'000, params);
    }
}

BOOST_AUTO_TEST_CASE(max_tries_used_up)
{
    const auto params{CreateChainParams(*m_node.args, ChainType::REGTEST)->GetConsensus()};
    const CBlockHeader header{MakeHeader(1791190318, 0x1f00ffff)};
    const Result first{SerialReference(header, std::numeric_limits<uint64_t>::max(), params)};
    BOOST_REQUIRE(first.found);
    BOOST_REQUIRE(first.nonce > 0);
    // Exactly one try too few, exactly enough, and none at all.
    CheckSame(header, first.nonce, params);
    CheckSame(header, uint64_t{first.nonce} + 1, params);
    CheckSame(header, 0, params);

    const Result got{Run(header, first.nonce, params, 4, 0)};
    BOOST_CHECK(!got.found);
    BOOST_CHECK_EQUAL(got.max_tries, 0U);
}

BOOST_AUTO_TEST_CASE(end_of_nonce_space)
{
    const auto params{CreateChainParams(*m_node.args, ChainType::REGTEST)->GetConsensus()};
    // Target 1: no nonce is valid.
    const CBlockHeader header{MakeHeader(1791190318, 0x03000001, std::numeric_limits<uint32_t>::max() - 100'000)};
    CheckSame(header, std::numeric_limits<uint64_t>::max(), params);
    CheckSame(header, 100'000, params);
    CheckSame(header, 99'999, params);

    const Result got{Run(header, 1'000'000, params, 4, 0)};
    BOOST_CHECK(!got.found);
    BOOST_CHECK_EQUAL(got.nonce, std::numeric_limits<uint32_t>::max());
    BOOST_CHECK_EQUAL(got.max_tries, 900'000U);
}

BOOST_AUTO_TEST_CASE(interrupted)
{
    const auto params{CreateChainParams(*m_node.args, ChainType::REGTEST)->GetConsensus()};
    CBlockHeader header{MakeHeader(1791190318, 0x03000001)};
    util::SignalInterrupt interrupt;
    BOOST_REQUIRE(interrupt());
    uint64_t max_tries{1'000'000};
    BOOST_CHECK(!node::FindNonce(header, max_tries, params, interrupt, 4));
    BOOST_CHECK_EQUAL(max_tries, 1'000'000U);
}

BOOST_AUTO_TEST_CASE(miner_threads)
{
    BOOST_CHECK_EQUAL(node::MinerThreads(1), 1U);
    BOOST_CHECK_EQUAL(node::MinerThreads(6), 6U);
    BOOST_CHECK_GE(node::MinerThreads(0), 1U);
    BOOST_CHECK_GE(node::MinerThreads(-3), 1U);
}

BOOST_AUTO_TEST_SUITE_END()
