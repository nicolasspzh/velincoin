// Copyright (c) 2025-present The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <arith_uint256.h>
#include <common/system.h>
#include <interfaces/mining.h>
#include <node/miner.h>
#include <util/time.h>
#include <validation.h>

#include <test/util/setup_common.h>

#include <boost/test/unit_test.hpp>

using interfaces::BlockTemplate;
using interfaces::Mining;
using node::BlockAssembler;
using node::BlockWaitOptions;

namespace testnet4_miner_tests {

struct Testnet4MinerTestingSetup : public Testnet4Setup {
    std::unique_ptr<Mining> MakeMining()
    {
        return interfaces::MakeMining(m_node, /*wait_loaded=*/false);
    }
};
} // namespace testnet4_miner_tests

BOOST_FIXTURE_TEST_SUITE(testnet4_miner_tests, Testnet4MinerTestingSetup)

BOOST_AUTO_TEST_CASE(MiningInterface)
{
    auto mining{MakeMining()};
    BOOST_REQUIRE(mining);

    BlockAssembler::Options options;
    options.include_dummy_extranonce = true;
    std::unique_ptr<BlockTemplate> block_template;

    // Set node time a minute past the testnet4 genesis block
    const int64_t genesis_time{WITH_LOCK(cs_main, return m_node.chainman->ActiveChain().Tip()->GetBlockTime())};
    const int64_t min_difficulty_after{2 * m_node.chainman->GetConsensus().nPowTargetSpacing};
    SetMockTime(genesis_time + 60);

    block_template = mining->createNewBlock(options, /*cooldown=*/false);
    BOOST_REQUIRE(block_template);

    // The template should use the mocked system time
    BOOST_REQUIRE_EQUAL(block_template->getBlockHeader().nTime, genesis_time + 60);
    // Velincoin: the genesis block is harder than the lowest difficulty, and so is the next block
    const uint32_t genesis_bits{WITH_LOCK(cs_main, return m_node.chainman->ActiveChain().Tip()->nBits)};
    const uint32_t pow_limit_bits{UintToArith256(m_node.chainman->GetConsensus().powLimit).GetCompact()};
    BOOST_REQUIRE(genesis_bits != pow_limit_bits);
    BOOST_REQUIRE_EQUAL(block_template->getBlockHeader().nBits, genesis_bits);

    const BlockWaitOptions wait_options{.timeout = MillisecondsDouble{0}, .fee_threshold = 1};

    // waitNext() should return nullptr because there is no better template
    auto should_be_nullptr = block_template->waitNext(wait_options);
    BOOST_REQUIRE(should_be_nullptr == nullptr);

    // This remains the case when exactly twice the target spacing has gone by
    // (20 minutes on Bitcoin's testnet4, 3 minutes on Velincoin's)
    {
        LOCK(cs_main);
        SetMockTime(m_node.chainman->ActiveChain().Tip()->GetBlockTime() + min_difficulty_after);
    }
    should_be_nullptr = block_template->waitNext(wait_options);
    BOOST_REQUIRE(should_be_nullptr == nullptr);

    // One second later the difficulty drops and it returns a new template
    {
        LOCK(cs_main);
        SetMockTime(m_node.chainman->ActiveChain().Tip()->GetBlockTime() + min_difficulty_after + 1);
    }
    block_template = block_template->waitNext(wait_options);
    BOOST_REQUIRE(block_template);
    BOOST_REQUIRE_EQUAL(block_template->getBlockHeader().nBits, pow_limit_bits);
}

BOOST_AUTO_TEST_SUITE_END()
