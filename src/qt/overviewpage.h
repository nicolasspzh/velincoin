// Copyright (c) 2011-present The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_OVERVIEWPAGE_H
#define BITCOIN_QT_OVERVIEWPAGE_H

#include <interfaces/wallet.h>

#include <QWidget>
#include <memory>

class ClientModel;
class TransactionFilterProxy;
class TxViewDelegate;
class PlatformStyle;
class WalletModel;

namespace Ui {
    class OverviewPage;
}

QT_BEGIN_NAMESPACE
class QModelIndex;
class QPushButton;
class QToolButton;
class QFrame;
QT_END_NAMESPACE

/** Overview ("home") page widget */
class OverviewPage : public QWidget
{
    Q_OBJECT

public:
    explicit OverviewPage(const PlatformStyle *platformStyle, QWidget *parent = nullptr);
    ~OverviewPage();

    void setClientModel(ClientModel *clientModel);
    void setWalletModel(WalletModel *walletModel);
    void showOutOfSyncWarning(bool fShow);

public Q_SLOTS:
    void setBalance(const interfaces::WalletBalances& balances);
    void setPrivacy(bool privacy);

Q_SIGNALS:
    void transactionClicked(const QModelIndex &index);
    void outOfSyncWarningClicked();
    void sendCoinsClicked();
    void receiveCoinsClicked();
    void showHistoryClicked();
    //! The eye button next to the total balance was clicked
    void togglePrivacyClicked();
    //! The "Add node" button of the no-connection hint was clicked
    void addNodeClicked();

protected:
    void changeEvent(QEvent* e) override;

private:
    Ui::OverviewPage *ui;
    ClientModel* clientModel{nullptr};
    WalletModel* walletModel{nullptr};
    bool m_privacy{false};
    QPushButton* m_sync_button{nullptr};
    QToolButton* m_privacy_button{nullptr};
    QFrame* m_connection_hint{nullptr};
    bool m_connection_hint_allowed{false};
    bool m_sync_requested{false};

    const PlatformStyle* m_platform_style;

    TxViewDelegate *txdelegate;
    std::unique_ptr<TransactionFilterProxy> filter;

private Q_SLOTS:
    void syncClicked();
    void updateSyncButton();
    void LimitTransactionRows();
    void updateIcons();
    void updateDisplayUnit();
    void handleTransactionClicked(const QModelIndex &index);
    void updateAlerts(const QString &warnings);
    void setMonospacedFont(const QFont&);
};

#endif // BITCOIN_QT_OVERVIEWPAGE_H
