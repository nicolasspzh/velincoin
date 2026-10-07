// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/addnodedialog.h>

#include <common/settings.h>
#include <interfaces/node.h>
#include <qt/velincointheme.h>
#include <rpc/protocol.h>
#include <univalue.h>

#include <QDialogButtonBox>
#include <QFormLayout>
#include <QIcon>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QSpinBox>
#include <QStyle>
#include <QVBoxLayout>

AddNodeDialog::AddNodeDialog(interfaces::Node& node, int default_port, QWidget* parent)
    : QDialog(parent, Qt::WindowTitleHint | Qt::WindowCloseButtonHint),
      m_node(node)
{
    setWindowTitle(tr("Add node"));
    setMinimumWidth(460);

    QVBoxLayout* layout = new QVBoxLayout(this);
    layout->setContentsMargins(24, 22, 24, 20);
    layout->setSpacing(14);

    QLabel* intro = new QLabel(tr("Connect to another Velincoin node, for example a friend's computer or a server. "
                                  "The wallet connects right away and again at every start."), this);
    intro->setWordWrap(true);
    layout->addWidget(intro);

    QFormLayout* form = new QFormLayout();
    form->setHorizontalSpacing(14);
    form->setVerticalSpacing(10);
    m_host = new QLineEdit(this);
    m_host->setPlaceholderText(tr("for example 192.168.1.20"));
    form->addRow(tr("IP address or name"), m_host);
    m_port = new QSpinBox(this);
    m_port->setRange(1, 65535);
    m_port->setValue(default_port);
    m_port->setToolTip(tr("Default port of this network: %1").arg(default_port));
    form->addRow(tr("Port"), m_port);
    layout->addLayout(form);

    m_status = new QLabel(this);
    m_status->setWordWrap(true);
    m_status->setVisible(false);
    layout->addWidget(m_status);

    QDialogButtonBox* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    QPushButton* ok = buttons->button(QDialogButtonBox::Ok);
    ok->setText(tr("Add node"));
    // White primary button like the rest of the wallet, without the style's default icons
    ok->setProperty("primary", true);
    ok->style()->unpolish(ok);
    ok->style()->polish(ok);
    for (QAbstractButton* button : buttons->buttons()) button->setIcon(QIcon());
    connect(buttons, &QDialogButtonBox::accepted, this, &AddNodeDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &AddNodeDialog::reject);
    layout->addWidget(buttons);

    m_host->setFocus();
}

QString AddNodeDialog::NodeAddress(const QString& host_in, int port)
{
    QString host{host_in.trimmed()};
    if (host.isEmpty() || host.contains(QLatin1Char(' '))) return {};
    if (host.startsWith(QLatin1Char('['))) {
        // "[ipv6]" or "[ipv6]:port"
        const int close{static_cast<int>(host.indexOf(QLatin1Char(']')))};
        if (close < 2) return {};
        const QString rest{host.mid(close + 1)};
        if (rest.startsWith(QLatin1Char(':'))) {
            bool ok{false};
            const int typed_port{rest.mid(1).toInt(&ok)};
            if (!ok || typed_port < 1 || typed_port > 65535) return {};
            port = typed_port;
        } else if (!rest.isEmpty()) {
            return {};
        }
        host = host.left(close + 1);
    } else if (host.count(QLatin1Char(':')) == 1) {
        // "host:port"
        bool ok{false};
        const int typed_port{host.section(QLatin1Char(':'), 1).toInt(&ok)};
        if (!ok || typed_port < 1 || typed_port > 65535) return {};
        port = typed_port;
        host = host.section(QLatin1Char(':'), 0, 0);
        if (host.isEmpty()) return {};
    } else if (host.count(QLatin1Char(':')) > 1) {
        // bare IPv6 address
        host = QStringLiteral("[%1]").arg(host);
    }
    if (port < 1 || port > 65535) return {};
    return QStringLiteral("%1:%2").arg(host).arg(port);
}

bool AddNodeDialog::AddNode(interfaces::Node& node, const QString& address, QString& error)
{
    const std::string addr{address.toStdString()};
    UniValue params{UniValue::VARR};
    params.push_back(addr);
    params.push_back("add");
    try {
        node.executeRpc("addnode", params, "");
    } catch (const UniValue& e) {
        // Already added (in this session or from settings.json) is fine
        if (e.find_value("code").getInt<int>() != RPC_CLIENT_NODE_ALREADY_ADDED) {
            error = QString::fromStdString(e.find_value("message").getValStr());
            return false;
        }
    } catch (const std::exception& e) {
        error = QString::fromStdString(e.what());
        return false;
    }

    // Keep it for later starts: -addnode also reads the "addnode" list in settings.json
    common::SettingsValue stored{node.getPersistentSetting("addnode")};
    UniValue list{UniValue::VARR};
    if (stored.isArray()) {
        for (const UniValue& value : stored.getValues()) {
            if (value.isStr() && value.get_str() != addr) list.push_back(value.get_str());
        }
    } else if (stored.isStr() && stored.get_str() != addr) {
        list.push_back(stored.get_str());
    }
    list.push_back(addr);
    node.updateRwSetting("addnode", list);
    return true;
}

void AddNodeDialog::accept()
{
    const QString address{NodeAddress(m_host->text(), m_port->value())};
    QString error;
    if (address.isEmpty()) {
        error = tr("Please enter an IP address or a name, for example 192.168.1.20.");
    } else if (AddNode(m_node, address, error)) {
        QDialog::accept();
        return;
    }
    m_status->setStyleSheet(QStringLiteral("QLabel { color: %1; }").arg(VelincoinTheme::NEGATIVE.name()));
    m_status->setText(error);
    m_status->setVisible(true);
}
