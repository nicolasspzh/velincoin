// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <bitcoin-build-config.h> // IWYU pragma: keep

#include <qt/testnetreset.h>

#include <chainparams.h>
#include <common/args.h>
#include <hash.h>
#include <util/chaintype.h>
#include <util/fs_helpers.h>

#include <QCoreApplication>
#include <QDateTime>
#include <QMessageBox>
#include <QString>

#include <algorithm>
#include <array>
#include <filesystem>
#include <fstream>
#include <span>
#include <system_error>

namespace TestnetReset {
std::optional<uint256> StoredGenesis(const fs::path& blocks_dir, const MessageStartChars& message_start)
{
    // Block files are XORed with the 8 byte key in xor.dat (no file: no key)
    std::array<unsigned char, 8> key{};
    std::ifstream key_file{std::filesystem::path{blocks_dir / "xor.dat"}, std::ios::binary};
    if (key_file) key_file.read(reinterpret_cast<char*>(key.data()), key.size());

    // magic (4) + block size (4) + block header (80)
    std::array<unsigned char, 88> data{};
    std::ifstream block_file{std::filesystem::path{blocks_dir / "blk00000.dat"}, std::ios::binary};
    if (!block_file.read(reinterpret_cast<char*>(data.data()), data.size())) return std::nullopt;
    for (size_t i{0}; i < data.size(); ++i) data[i] ^= key[i % key.size()];

    if (!std::equal(message_start.begin(), message_start.end(), data.begin())) return std::nullopt;
    return Hash(std::span{data}.subspan(8, 80));
}

std::optional<fs::path> MoveOldChain(const fs::path& net_dir, const fs::path& blocks_dir, const CChainParams& params, const std::string& stamp)
{
    const std::optional<uint256> stored{StoredGenesis(blocks_dir, params.MessageStart())};
    if (!stored || *stored == params.GenesisBlock().GetHash()) return std::nullopt;
    // Another instance of the wallet or a node is running with this data
    if (util::LockDirectory(net_dir, ".lock", /*probe_only=*/true) != util::LockResult::Success) return std::nullopt;

    const fs::path folder{fs::u8path("old-chain-" + stamp)};
    for (const fs::path& dir : {blocks_dir, net_dir / "chainstate", net_dir / "indexes"}) {
        if (!fs::exists(dir)) continue;
        const fs::path target{fs::path{dir.parent_path()} / folder};
        std::error_code ec;
        fs::create_directories(target, ec);
        fs::rename(dir, target / fs::path{dir.filename()}, ec);
        // Nothing moved yet if the blocks stay; the node then reports the old chain itself
        if (ec && dir == blocks_dir) return std::nullopt;
    }
    // The node expects the (now empty) blocks directory
    fs::create_directories(blocks_dir);
    return net_dir / folder;
}

void CheckAtStart()
{
    if (Params().GetChainType() != ChainType::TESTNET4) return;
    const std::string stamp{QDateTime::currentDateTime().toString(QStringLiteral("yyyyMMdd-HHmmss")).toStdString()};
    const std::optional<fs::path> moved{MoveOldChain(gArgs.GetDataDirNet(), gArgs.GetBlocksDirPath(), Params(), stamp)};
    if (!moved) return;
    QMessageBox::information(nullptr, CLIENT_NAME,
        QCoreApplication::translate("TestnetReset",
            "The Velincoin test network was started anew. The blocks of the old test network on this computer "
            "were moved to:\n\n%1\n\nYour wallets and addresses stay. Test coins from the old test network are gone. "
            "The wallet now loads the new test network.").arg(QString::fromStdString(fs::PathToString(*moved))));
}
} // namespace TestnetReset
