// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_TEST_ADDNODETESTS_H
#define BITCOIN_QT_TEST_ADDNODETESTS_H

#include <QObject>
#include <QTest>

class AddNodeTests : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void addressTests();
};

#endif // BITCOIN_QT_TEST_ADDNODETESTS_H
