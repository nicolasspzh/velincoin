// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/test/testnetresettests.h>

#include <kernel/chainparams.h>
#include <primitives/block.h>
#include <qt/testnetreset.h>
#include <streams.h>

#include <QTemporaryDir>

#include <array>
#include <filesystem>
#include <fstream>
#include <vector>

namespace {
//! Write blk00000.dat with one block header, XORed like the node does
void WriteBlockFile(const fs::path& blocks_dir, const MessageStartChars& magic, const CBlockHeader& header)
{
    const std::array<unsigned char, 8> key{0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88};
    fs::create_directories(blocks_dir);
    std::ofstream{std::filesystem::path{blocks_dir / "xor.dat"}, std::ios::binary}.write(reinterpret_cast<const char*>(key.data()), key.size());
    DataStream stream;
    stream << magic << uint32_t{285} << header;
    std::vector<unsigned char> data(UCharCast(stream.data()), UCharCast(stream.data()) + stream.size());
    for (size_t i{0}; i < data.size(); ++i) data[i] ^= key[i % key.size()];
    std::ofstream{std::filesystem::path{blocks_dir / "blk00000.dat"}, std::ios::binary}.write(reinterpret_cast<const char*>(data.data()), data.size());
}
} // namespace

void TestnetResetTests::testnetResetTests()
{
    const auto params{CChainParams::TestNet4()};
    QTemporaryDir tmp;
    QVERIFY(tmp.isValid());
    const fs::path net_dir{fs::u8path(tmp.path().toStdString()) / "testnet4"};
    const fs::path blocks_dir{net_dir / "blocks"};

    // The current test network stays
    WriteBlockFile(blocks_dir, params->MessageStart(), params->GenesisBlock());
    QCOMPARE(TestnetReset::StoredGenesis(blocks_dir, params->MessageStart()), params->GenesisBlock().GetHash());
    QVERIFY(!TestnetReset::MoveOldChain(net_dir, blocks_dir, *params, "a"));
    QVERIFY(fs::exists(blocks_dir / "blk00000.dat"));

    // Another network's block file is not ours to move
    WriteBlockFile(blocks_dir, MessageStartChars{0xf9, 0xbe, 0xb4, 0xd9}, params->GenesisBlock());
    QVERIFY(!TestnetReset::StoredGenesis(blocks_dir, params->MessageStart()));
    QVERIFY(!TestnetReset::MoveOldChain(net_dir, blocks_dir, *params, "b"));

    // An older test network (other genesis block) is moved aside, wallets stay
    CBlockHeader old_genesis{params->GenesisBlock()};
    old_genesis.nNonce += 1;
    WriteBlockFile(blocks_dir, params->MessageStart(), old_genesis);
    fs::create_directories(net_dir / "chainstate");
    fs::create_directories(net_dir / "wallets");
    QCOMPARE(TestnetReset::StoredGenesis(blocks_dir, params->MessageStart()), old_genesis.GetHash());
    const auto moved{TestnetReset::MoveOldChain(net_dir, blocks_dir, *params, "c")};
    QVERIFY(moved);
    QVERIFY(*moved == net_dir / "old-chain-c");
    QVERIFY(fs::exists(net_dir / "old-chain-c" / "blocks" / "blk00000.dat"));
    QVERIFY(fs::exists(net_dir / "old-chain-c" / "chainstate"));
    QVERIFY(fs::is_directory(blocks_dir));
    QVERIFY(!fs::exists(blocks_dir / "blk00000.dat"));
    QVERIFY(!fs::exists(net_dir / "chainstate"));
    QVERIFY(fs::exists(net_dir / "wallets"));

    // Nothing stored: nothing to do
    QVERIFY(!TestnetReset::MoveOldChain(net_dir, blocks_dir, *params, "d"));
}
