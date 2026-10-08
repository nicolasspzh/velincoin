// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_TEST_DEMOVALUETESTS_H
#define BITCOIN_QT_TEST_DEMOVALUETESTS_H

#include <QObject>
#include <QTest>

class DemoValueTests : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void conversionTests();
    void formatTests();
};

#endif // BITCOIN_QT_TEST_DEMOVALUETESTS_H
