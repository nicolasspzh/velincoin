// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_MININGPAGE_H
#define BITCOIN_QT_MININGPAGE_H

#include <QString>
#include <QWidget>

class ClientModel;
class CpuMiner;
class QFrame;
class QLabel;
class QPushButton;
class QSpinBox;
class QTableWidget;
class QTimer;
class WalletModel;

/**
 * Mining page of a wallet (test network and regtest only). Mines in the
 * background with CpuMiner to a new address of this wallet, shows the speed,
 * the expected time per block and the blocks found.
 */
class MiningPage : public QWidget
{
    Q_OBJECT

public:
    explicit MiningPage(WalletModel* wallet_model, QWidget* parent = nullptr);

    void setClientModel(ClientModel* client_model);
    /** The miner of the program, shared by all wallets; nullptr on shutdown. */
    void setMiner(CpuMiner* miner);

    /** "3.7 MH/s" */
    static QString FormatHashrate(double hashes_per_second);

protected:
    void showEvent(QShowEvent* event) override;
    void hideEvent(QHideEvent* event) override;

private Q_SLOTS:
    void startStopClicked();
    void updateStatus();

private:
    WalletModel* m_wallet_model;
    ClientModel* m_client_model{nullptr};
    CpuMiner* m_miner{nullptr};

    QSpinBox* m_threads{nullptr};
    QPushButton* m_start_stop{nullptr};
    QLabel* m_state{nullptr};
    QLabel* m_speed{nullptr};
    QLabel* m_expected{nullptr};
    QLabel* m_payout{nullptr};
    QLabel* m_error{nullptr};
    QFrame* m_offline_hint{nullptr};
    QLabel* m_no_blocks{nullptr};
    QTableWidget* m_blocks{nullptr};
    QTimer* m_timer{nullptr};
    int m_shown_blocks{-1};
};

#endif // BITCOIN_QT_MININGPAGE_H
