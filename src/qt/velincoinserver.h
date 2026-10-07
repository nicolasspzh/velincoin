// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_VELINCOINSERVER_H
#define BITCOIN_QT_VELINCOINSERVER_H

#include <QString>
#include <QStringList>

namespace interfaces {
class Node;
} // namespace interfaces

/** The Velincoin server that runs a node for every network (also the fixed seed). */
namespace VelincoinServer {
//! Addresses of the server; the port is the network's default port
inline const QStringList HOSTS{QStringLiteral("159.195.4.228"), QStringLiteral("[2a00:11c0:5f:4539:1448:c9ff:fe1d:3565]")};

/**
 * Ask the node to connect to the server now (addnode "onetry"), so that new
 * blocks arrive without waiting for peer discovery. Returns false and an error
 * text if the node refused every address.
 */
bool ConnectNow(interfaces::Node& node, QString& error);

/**
 * Keep the wallet connected to the server from the start (addnode "add"): the
 * node connects within seconds instead of waiting a minute for the fixed seeds,
 * and connects again by itself whenever the connection drops. Only on the main
 * and the test network (the server runs no other), and not when the peers were
 * chosen with -connect.
 */
void ConnectAtStart(interfaces::Node& node);
} // namespace VelincoinServer

#endif // BITCOIN_QT_VELINCOINSERVER_H
