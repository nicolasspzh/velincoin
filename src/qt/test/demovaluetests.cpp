// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/test/demovaluetests.h>

#include <consensus/amount.h>
#include <qt/bitcoinunits.h>
#include <qt/demovalue.h>

#include <QChar>
#include <QString>

void DemoValueTests::conversionTests()
{
    // 1 VLC = 0.001 CHF, i.e. one thousandth of a franc
    QCOMPARE(DemoValue::ToMilliChf(0), CAmount{0});
    QCOMPARE(DemoValue::ToMilliChf(1), CAmount{0});
    QCOMPARE(DemoValue::ToMilliChf(COIN), CAmount{1});
    QCOMPARE(DemoValue::ToMilliChf(50 * COIN), CAmount{50});
    // half a VLC is 0.0005 CHF and rounds up (commercial rounding)
    QCOMPARE(DemoValue::ToMilliChf(COIN / 2), CAmount{1});
    QCOMPARE(DemoValue::ToMilliChf(COIN / 2 - 1), CAmount{0});
    QCOMPARE(DemoValue::ToMilliChf(3 * COIN / 2), CAmount{2});
    QCOMPARE(DemoValue::ToMilliChf(21'000'000 * COIN), CAmount{21'000'000});
    QCOMPARE(DemoValue::ToMilliChf(MAX_MONEY), CAmount{21'000'000});
    // negative amounts round away from zero as well
    QCOMPARE(DemoValue::ToMilliChf(-1), CAmount{0});
    QCOMPARE(DemoValue::ToMilliChf(-COIN), CAmount{-1});
    QCOMPARE(DemoValue::ToMilliChf(-COIN / 2), CAmount{-1});
    QCOMPARE(DemoValue::ToMilliChf(-21'000'000 * COIN), CAmount{-21'000'000});
}

void DemoValueTests::formatTests()
{
    const QString thin_sp{QChar(THIN_SP_CP)};
    QCOMPARE(DemoValue::Format(0), QString("0.000 CHF"));
    QCOMPARE(DemoValue::Format(1), QString("< 0.001 CHF"));
    QCOMPARE(DemoValue::Format(COIN), QString("0.001 CHF"));
    QCOMPARE(DemoValue::Format(COIN / 2), QString("0.001 CHF"));
    QCOMPARE(DemoValue::Format(50 * COIN), QString("0.050 CHF"));
    QCOMPARE(DemoValue::Format(1'000 * COIN), QString("1.000 CHF"));
    QCOMPARE(DemoValue::Format(1'234'567 * COIN), QString("1" + thin_sp + "234.567 CHF"));
    QCOMPARE(DemoValue::Format(21'000'000 * COIN), QString("21" + thin_sp + "000.000 CHF"));
    QCOMPARE(DemoValue::Format(-1), QString("> -0.001 CHF"));
    QCOMPARE(DemoValue::Format(-COIN), QString("-0.001 CHF"));
    QCOMPARE(DemoValue::Format(-21'000'000 * COIN), QString("-21" + thin_sp + "000.000 CHF"));

    // the label always says that it is a value in CHF; "≈" only for rounded values
    QVERIFY(DemoValue::Label(50 * COIN).startsWith(QString(QChar(0x2248)) + " 0.050 CHF"));
    QVERIFY(DemoValue::Label(50 * COIN).contains("value"));
    QVERIFY(DemoValue::Label(0).startsWith("0.000 CHF"));
    QVERIFY(DemoValue::Label(1).startsWith("< 0.001 CHF"));
    QVERIFY(DemoValue::FormatHtml(1).contains("&lt; 0.001 CHF"));
}
