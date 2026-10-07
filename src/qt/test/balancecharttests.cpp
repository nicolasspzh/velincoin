// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/test/balancecharttests.h>

#include <qt/balancechart.h>

void BalanceChartTests::balanceHistoryTests()
{
    // Transactions in any order (the overview lists the newest first)
    const BalanceChart::Points points{BalanceChart::BalanceHistory({{300, -20 * COIN}, {100, 50 * COIN}, {200, 5 * COIN}, {200, 1 * COIN}})};
    // two transactions in the same second make one point
    QCOMPARE(points.size(), size_t{3});
    QCOMPARE(points[0], std::make_pair(qint64{100}, CAmount{50 * COIN}));
    QCOMPARE(points[1], std::make_pair(qint64{200}, CAmount{56 * COIN}));
    QCOMPARE(points[2], std::make_pair(qint64{300}, CAmount{36 * COIN}));

    QCOMPARE(BalanceChart::BalanceAt(points, 99), CAmount{0});
    QCOMPARE(BalanceChart::BalanceAt(points, 100), CAmount{50 * COIN});
    QCOMPARE(BalanceChart::BalanceAt(points, 250), CAmount{56 * COIN});
    QCOMPARE(BalanceChart::BalanceAt(points, 1000), CAmount{36 * COIN});
    QVERIFY(BalanceChart::BalanceHistory({}).empty());
    QCOMPARE(BalanceChart::BalanceAt({}, 1000), CAmount{0});
}
