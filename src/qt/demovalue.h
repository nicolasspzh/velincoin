// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_DEMOVALUE_H
#define BITCOIN_QT_DEMOVALUE_H

#include <consensus/amount.h>

#include <QString>

/**
 * A fixed demo value of VLC in Swiss francs, so that amounts feel tangible
 * while Velincoin is being tested. It is not a price: VLC is not traded
 * anywhere. All arithmetic is in whole numbers (satoshi and thousandths of a
 * franc), never in floating point.
 */
namespace DemoValue {
//! The demo rate in thousandths of a franc per 1 VLC: 1 VLC = 0.001 CHF.
//! This is the only place where the rate is defined.
static constexpr CAmount MILLI_CHF_PER_COIN{1};

/** Value of an amount in satoshi in thousandths of a franc, rounded half away from zero. */
CAmount ToMilliChf(CAmount amount);

/**
 * The value as text with three decimals and a decimal point, thousands
 * separated by a thin space like VLC amounts: "0.050 CHF", "21 000.000 CHF".
 * Amounts above 0 that round to nothing are "< 0.001 CHF" (below 0: "> -0.001 CHF").
 */
QString Format(CAmount amount);

/** Format() for HTML, kept on one line. */
QString FormatHtml(CAmount amount);

/** Short label with the demo note, e.g. "≈ 0.050 CHF · demo value". */
QString Label(CAmount amount);

/** Tooltip explaining that the value is not a price. */
QString ToolTip();
} // namespace DemoValue

#endif // BITCOIN_QT_DEMOVALUE_H
