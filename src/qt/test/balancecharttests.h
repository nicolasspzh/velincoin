// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_TEST_BALANCECHARTTESTS_H
#define BITCOIN_QT_TEST_BALANCECHARTTESTS_H

#include <QObject>
#include <QTest>

class BalanceChartTests : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void balanceHistoryTests();
};

#endif // BITCOIN_QT_TEST_BALANCECHARTTESTS_H
