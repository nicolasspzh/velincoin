// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/demovalue.h>

#include <qt/bitcoinunits.h>

#include <QChar>
#include <QCoreApplication>

namespace DemoValue {
CAmount ToMilliChf(CAmount amount)
{
    const CAmount magnitude{amount < 0 ? -amount : amount};
    // Whole coins and the rest separately, so that no intermediate value can overflow
    const CAmount whole{magnitude / COIN * MILLI_CHF_PER_COIN};
    const CAmount rest{magnitude % COIN * MILLI_CHF_PER_COIN};
    const CAmount rounded{whole + rest / COIN + (rest % COIN * 2 >= COIN ? 1 : 0)};
    return amount < 0 ? -rounded : rounded;
}

QString Format(CAmount amount)
{
    const CAmount milli{ToMilliChf(amount)};
    if (milli == 0 && amount > 0) return QStringLiteral("< 0.001 CHF");
    if (milli == 0 && amount < 0) return QStringLiteral("> -0.001 CHF");
    const CAmount magnitude{milli < 0 ? -milli : milli};
    QString whole{QString::number(magnitude / 1000)};
    for (int i = whole.size() - 3; i > 0; i -= 3) {
        whole.insert(i, QChar(THIN_SP_CP));
    }
    const QString fraction{QString::number(magnitude % 1000).rightJustified(3, QLatin1Char('0'))};
    return QStringLiteral("%1%2.%3 CHF").arg(milli < 0 ? QStringLiteral("-") : QString(), whole, fraction);
}

QString FormatHtml(CAmount amount)
{
    QString text{Format(amount).toHtmlEscaped()};
    text.replace(QChar(THIN_SP_CP), QStringLiteral(THIN_SP_HTML));
    return QStringLiteral("<span style='white-space: nowrap;'>%1</span>").arg(text);
}

QString Label(CAmount amount)
{
    QString value{Format(amount)};
    // "≈" for rounded values; not for zero and not for "< 0.001 CHF"
    if (amount != 0 && ToMilliChf(amount) != 0) value.prepend(QString(QChar(0x2248)) + QLatin1Char(' '));
    return QCoreApplication::translate("DemoValue", "%1 · demo value").arg(value);
}

QString ToolTip()
{
    return QCoreApplication::translate("DemoValue", "Fixed demo value, not a market price. VLC is not traded anywhere yet.");
}
} // namespace DemoValue
