// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/velincoinserver.h>

#include <chainparams.h>
#include <interfaces/node.h>
#include <univalue.h>

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
} // namespace VelincoinServer
