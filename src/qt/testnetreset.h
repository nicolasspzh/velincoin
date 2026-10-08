// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_TESTNETRESET_H
#define BITCOIN_QT_TESTNETRESET_H

#include <kernel/messagestartchars.h>
#include <uint256.h>
#include <util/fs.h>

#include <optional>
#include <string>

class CChainParams;

/**
 * The Velincoin test network was started anew a few times (new genesis block,
 * see README). The node refuses to start with the blocks of an older test
 * network ("Incorrect or no genesis block found"), so the wallet moves them
 * aside at startup. Wallets are not touched.
 */
namespace TestnetReset {
/**
 * Hash of the first block in blk00000.dat, which is the genesis block of the
 * stored chain. Nothing if there is no such file or it is not from a network
 * with this message start.
 */
std::optional<uint256> StoredGenesis(const fs::path& blocks_dir, const MessageStartChars& message_start);

/**
 * If blocks_dir holds a chain with a different genesis block than params,
 * move blocks, chainstate and indexes into an "old-chain-<stamp>" folder next
 * to them and return the folder in net_dir. Nothing if the stored chain is the
 * current one, there is none, or another program uses the data directory.
 */
std::optional<fs::path> MoveOldChain(const fs::path& net_dir, const fs::path& blocks_dir, const CChainParams& params, const std::string& stamp);

/** On the test network: move an old chain aside and tell the user. */
void CheckAtStart();
} // namespace TestnetReset

#endif // BITCOIN_QT_TESTNETRESET_H
