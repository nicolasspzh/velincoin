// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/miningpage.h>

#include <addresstype.h>
#include <interfaces/wallet.h>
#include <key_io.h>
#include <qt/bitcoinunits.h>
#include <qt/clientmodel.h>
#include <qt/cpuminer.h>
#include <qt/guiutil.h>
#include <qt/optionsmodel.h>
#include <qt/velincointheme.h>
#include <qt/walletmodel.h>
#include <util/translation.h>

#include <QFrame>
#include <QGridLayout>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QPushButton>
#include <QSettings>
#include <QSpinBox>
#include <QStyle>
#include <QTableWidget>
#include <QTimer>
#include <QVBoxLayout>

#include <algorithm>
#include <chrono>
#include <cmath>
#include <iterator>

namespace {
const QString THREADS_SETTING{QStringLiteral("nMiningThreads")};

QLabel* ValueLabel()
{
    QLabel* label = new QLabel(QStringLiteral("–"));
    label->setObjectName(QStringLiteral("miningValue"));
    label->setTextFormat(Qt::PlainText);
    label->setTextInteractionFlags(Qt::TextSelectableByMouse);
    label->setWordWrap(true);
    return label;
}
} // namespace

MiningPage::MiningPage(WalletModel* wallet_model, QWidget* parent)
    : QWidget(parent),
      m_wallet_model(wallet_model)
{
    QVBoxLayout* layout = new QVBoxLayout(this);

    QLabel* intro = new QLabel(tr("Mine test VLC with the processor of this computer. Every block you find pays to a new "
                                  "address of this wallet. Mining is only possible on the test network and on regtest."));
    intro->setObjectName(QStringLiteral("miningText"));
    intro->setWordWrap(true);
    layout->addWidget(intro);

    QHBoxLayout* controls = new QHBoxLayout();
    controls->setSpacing(10);
    QLabel* threads_label = new QLabel(tr("Processor cores"));
    m_threads = new QSpinBox();
    m_threads->setRange(1, CpuMiner::MaxThreads());
    m_threads->setValue(std::clamp(QSettings().value(THREADS_SETTING, 1).toInt(), 1, CpuMiner::MaxThreads()));
    m_threads->setToolTip(tr("More cores find blocks faster, but the computer gets slower and louder."));
    threads_label->setBuddy(m_threads);
    QLabel* threads_max = new QLabel(tr("of %1").arg(CpuMiner::MaxThreads()));
    threads_max->setObjectName(QStringLiteral("miningText"));
    m_start_stop = new QPushButton();
    m_start_stop->setMinimumWidth(170);
    controls->addWidget(threads_label);
    controls->addWidget(m_threads);
    controls->addWidget(threads_max);
    controls->addStretch();
    controls->addWidget(m_start_stop);
    layout->addLayout(controls);

    QFrame* card = new QFrame();
    card->setProperty("card", true);
    QGridLayout* grid = new QGridLayout(card);
    grid->setContentsMargins(20, 16, 20, 16);
    grid->setHorizontalSpacing(24);
    grid->setVerticalSpacing(10);
    grid->setColumnStretch(1, 1);
    const auto add_row = [&](int row, const QString& text, QLabel* value) {
        QLabel* label = new QLabel(text);
        label->setObjectName(QStringLiteral("miningLabel"));
        grid->addWidget(label, row, 0, Qt::AlignTop);
        grid->addWidget(value, row, 1);
    };
    m_state = ValueLabel();
    m_speed = ValueLabel();
    m_expected = ValueLabel();
    m_payout = ValueLabel();
    add_row(0, tr("Status"), m_state);
    add_row(1, tr("Speed"), m_speed);
    add_row(2, tr("Expected time per block"), m_expected);
    add_row(3, tr("Paid to"), m_payout);
    layout->addWidget(card);

    m_error = new QLabel();
    m_error->setObjectName(QStringLiteral("miningError"));
    m_error->setWordWrap(true);
    m_error->setVisible(false);
    layout->addWidget(m_error);

    QLabel* note = new QLabel(tr("Mined coins can be spent after 100 more blocks. Until then the overview shows them as immature."));
    note->setObjectName(QStringLiteral("miningText"));
    note->setWordWrap(true);
    layout->addWidget(note);

    m_offline_hint = new QFrame();
    m_offline_hint->setObjectName(QStringLiteral("connectionHint"));
    QHBoxLayout* hint_layout = new QHBoxLayout(m_offline_hint);
    hint_layout->setContentsMargins(14, 10, 14, 10);
    QLabel* hint = new QLabel(tr("Not connected to the Velincoin network. Blocks you find stay on this computer until it "
                                 "connects, and nobody else sees them."));
    hint->setWordWrap(true);
    hint_layout->addWidget(hint);
    m_offline_hint->setVisible(false);
    layout->addWidget(m_offline_hint);

    QLabel* found_title = new QLabel(tr("Blocks found"));
    found_title->setObjectName(QStringLiteral("miningSection"));
    layout->addSpacing(6);
    layout->addWidget(found_title);
    m_no_blocks = new QLabel(tr("No blocks found yet."));
    m_no_blocks->setObjectName(QStringLiteral("labelNoTransactions"));
    m_no_blocks->setAlignment(Qt::AlignCenter);
    layout->addWidget(m_no_blocks);
    m_blocks = new QTableWidget(0, 4);
    m_blocks->setHorizontalHeaderLabels({tr("Block"), tr("Time"), tr("Reward"), tr("Status")});
    m_blocks->verticalHeader()->setVisible(false);
    m_blocks->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_blocks->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_blocks->setShowGrid(false);
    m_blocks->horizontalHeader()->setStretchLastSection(true);
    m_blocks->horizontalHeader()->setDefaultAlignment(Qt::AlignLeft | Qt::AlignVCenter);
    m_blocks->setVisible(false);
    layout->addWidget(m_blocks, 1);
    layout->addStretch();

    m_timer = new QTimer(this);
    m_timer->setInterval(1000);
    connect(m_timer, &QTimer::timeout, this, &MiningPage::updateStatus);
    connect(m_start_stop, &QPushButton::clicked, this, &MiningPage::startStopClicked);
    updateStatus();
}

void MiningPage::setClientModel(ClientModel* client_model)
{
    m_client_model = client_model;
    updateStatus();
}

void MiningPage::setMiner(CpuMiner* miner)
{
    m_miner = miner;
    updateStatus();
}

QString MiningPage::FormatHashrate(double hashes_per_second)
{
    static const char* const UNITS[]{"H/s", "kH/s", "MH/s", "GH/s", "TH/s"};
    size_t unit{0};
    while (hashes_per_second >= 1000 && unit + 1 < std::size(UNITS)) {
        hashes_per_second /= 1000;
        ++unit;
    }
    return QStringLiteral("%1 %2").arg(hashes_per_second, 0, 'f', 1).arg(QLatin1String(UNITS[unit]));
}

void MiningPage::showEvent(QShowEvent* event)
{
    updateStatus();
    m_timer->start();
    QWidget::showEvent(event);
}

void MiningPage::hideEvent(QHideEvent* event)
{
    m_timer->stop();
    QWidget::hideEvent(event);
}

void MiningPage::startStopClicked()
{
    if (!m_miner) return;
    m_error->setVisible(false);
    if (m_miner->GetStats().running) {
        m_miner->Stop();
        updateStatus();
        return;
    }
    QSettings().setValue(THREADS_SETTING, m_threads->value());

    interfaces::Wallet& wallet{m_wallet_model->wallet()};
    const auto dest{wallet.getNewDestination(wallet.getDefaultAddressType(), tr("Mining").toStdString())};
    std::string error;
    if (!dest) {
        error = util::ErrorString(dest).translated;
    } else if (m_miner->Start(GetScriptForDestination(*dest), EncodeDestination(*dest), m_wallet_model->getWalletName().toStdString(), m_threads->value(), error)) {
        updateStatus();
        return;
    }
    m_error->setText(tr("Mining could not start: %1").arg(QString::fromStdString(error)));
    m_error->setVisible(true);
}

void MiningPage::updateStatus()
{
    m_offline_hint->setVisible(m_client_model && m_client_model->getNumConnections() == 0);
    if (!m_miner) {
        m_start_stop->setText(tr("Start mining"));
        m_start_stop->setEnabled(false);
        m_threads->setEnabled(false);
        m_state->setText(tr("Mining is not available."));
        return;
    }

    const CpuMiner::Stats stats{m_miner->GetStats()};
    m_start_stop->setEnabled(true);
    m_start_stop->setText(stats.running ? tr("Stop mining") : tr("Start mining"));
    // White primary button to start; a normal button to stop
    if (m_start_stop->property("primary").toBool() == stats.running) {
        m_start_stop->setProperty("primary", !stats.running);
        m_start_stop->style()->unpolish(m_start_stop);
        m_start_stop->style()->polish(m_start_stop);
    }
    m_threads->setEnabled(!stats.running);

    if (!stats.running) {
        m_state->setText(tr("Not mining"));
    } else if (stats.height < 0) {
        m_state->setText(tr("Starting…"));
    } else {
        m_state->setText(tr("Mining block %1").arg(stats.height));
    }
    m_speed->setText(stats.running && stats.hashrate > 0 ? FormatHashrate(stats.hashrate) : QStringLiteral("–"));
    if (stats.running && stats.bits && stats.hashrate > 0) {
        const auto seconds{std::chrono::seconds{std::llround(CpuMiner::ExpectedHashes(stats.bits) / stats.hashrate)}};
        m_expected->setText(tr("about %1 on this computer").arg(GUIUtil::formatDurationStr(seconds)));
    } else {
        m_expected->setText(QStringLiteral("–"));
    }
    if (!stats.running) {
        m_payout->setText(tr("A new address of this wallet"));
    } else if (stats.wallet_name != m_wallet_model->getWalletName().toStdString()) {
        m_payout->setText(tr("%1 (wallet %2)").arg(QString::fromStdString(stats.payout_address), QString::fromStdString(stats.wallet_name)));
    } else {
        m_payout->setText(QString::fromStdString(stats.payout_address));
    }
    if (!stats.error.empty()) {
        m_error->setText(tr("Mining stopped: %1").arg(QString::fromStdString(stats.error)));
        m_error->setVisible(true);
    }

    if (static_cast<int>(stats.found.size()) == m_shown_blocks) return;
    m_shown_blocks = stats.found.size();
    m_no_blocks->setVisible(stats.found.empty());
    m_blocks->setVisible(!stats.found.empty());
    m_blocks->setRowCount(stats.found.size());
    const BitcoinUnit unit{m_wallet_model->getOptionsModel()->getDisplayUnit()};
    int row{0};
    for (auto it{stats.found.rbegin()}; it != stats.found.rend(); ++it, ++row) {
        m_blocks->setItem(row, 0, new QTableWidgetItem(QString::number(it->height)));
        m_blocks->setItem(row, 1, new QTableWidgetItem(GUIUtil::dateTimeStr(it->time)));
        m_blocks->setItem(row, 2, new QTableWidgetItem(BitcoinUnits::formatWithUnit(unit, it->reward)));
        QTableWidgetItem* status{new QTableWidgetItem(it->accepted ? tr("In the chain") : tr("Not in the chain, another block was faster"))};
        status->setForeground(it->accepted ? VelincoinTheme::POSITIVE : VelincoinTheme::TEXT_DIM);
        m_blocks->setItem(row, 3, status);
        m_blocks->item(row, 0)->setToolTip(QString::fromStdString(it->hash.GetHex()));
    }
    m_blocks->resizeColumnsToContents();
}
