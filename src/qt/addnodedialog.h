// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_ADDNODEDIALOG_H
#define BITCOIN_QT_ADDNODEDIALOG_H

#include <QDialog>
#include <QString>

class QLabel;
class QLineEdit;
class QSpinBox;

namespace interfaces {
class Node;
} // namespace interfaces

/**
 * Connect to another Velincoin node by IP address or host name. The node is
 * connected right away (like the addnode RPC with "add") and also stored as
 * "addnode" in the network's settings.json, which -addnode reads at every
 * start, so the connection survives a restart.
 */
class AddNodeDialog : public QDialog
{
    Q_OBJECT

public:
    AddNodeDialog(interfaces::Node& node, int default_port, QWidget* parent = nullptr);

    /**
     * "host:port" for what was entered, or an empty string if it is not usable.
     * A port typed into the host field ("1.2.3.4:9733") wins over port; IPv6
     * addresses get brackets ("[2001:db8::1]:9733").
     */
    static QString NodeAddress(const QString& host, int port);

    /** Connect to address now and keep it for later starts. */
    static bool AddNode(interfaces::Node& node, const QString& address, QString& error);

public Q_SLOTS:
    void accept() override;

private:
    interfaces::Node& m_node;
    QLineEdit* m_host{nullptr};
    QSpinBox* m_port{nullptr};
    QLabel* m_status{nullptr};
};

#endif // BITCOIN_QT_ADDNODEDIALOG_H
