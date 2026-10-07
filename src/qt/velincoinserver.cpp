// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/velincoinserver.h>

#include <chainparams.h>
#include <common/args.h>
#include <interfaces/node.h>
#include <univalue.h>
#include <util/chaintype.h>

namespace VelincoinServer {
bool ConnectNow(interfaces::Node& node, QString& error)
{
    const QString port{QString::number(Params().GetDefaultPort())};
    bool any_ok{false};
    for (const QString& host : HOSTS) {
        UniValue params{UniValue::VARR};
        params.push_back(QString(host + QLatin1Char(':') + port).toStdString());
        params.push_back("onetry");
        try {
            node.executeRpc("addnode", params, "");
            any_ok = true;
        } catch (const UniValue& e) {
            error = QString::fromStdString(e.find_value("message").getValStr());
        } catch (const std::exception& e) {
            error = QString::fromStdString(e.what());
        }
    }
    return any_ok;
}

void ConnectAtStart(interfaces::Node& node)
{
    const ChainType chain{Params().GetChainType()};
    if (chain != ChainType::MAIN && chain != ChainType::TESTNET4) return;
    if (gArgs.IsArgSet("-connect")) return;
    // Only the IPv4 address: both addresses would connect to the same server
    // twice. IPv6-only computers still find it through the fixed seeds.
    UniValue params{UniValue::VARR};
    params.push_back(QString(HOSTS.front() + QLatin1Char(':') + QString::number(Params().GetDefaultPort())).toStdString());
    params.push_back("add");
    try {
        node.executeRpc("addnode", params, "");
    } catch (const UniValue&) {
        // Already added, for example through the Add node dialog
    } catch (const std::exception&) {
    }
}
} // namespace VelincoinServer
