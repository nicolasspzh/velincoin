// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/backupreminder.h>

#include <QDateTime>
#include <QSettings>
#include <QUrl>

namespace BackupReminder {
namespace {
//! Wallet names may contain "/", which QSettings would take as a group
QString Key(const char* name, const QString& wallet_name)
{
    return QStringLiteral("%1/%2").arg(QLatin1String(name), QString::fromLatin1(QUrl::toPercentEncoding(wallet_name.isEmpty() ? QStringLiteral("[default]") : wallet_name)));
}
} // namespace

bool ShouldRemind(qint64 backed_up, qint64 snoozed_until, qint64 now)
{
    return backed_up == 0 && now >= snoozed_until;
}

bool ShouldRemind(const QString& wallet_name)
{
    const QSettings settings;
    return ShouldRemind(settings.value(Key("nWalletBackupTime", wallet_name), 0).toLongLong(),
                        settings.value(Key("nWalletBackupSnooze", wallet_name), 0).toLongLong(),
                        QDateTime::currentSecsSinceEpoch());
}

void MarkBackedUp(const QString& wallet_name)
{
    QSettings().setValue(Key("nWalletBackupTime", wallet_name), QDateTime::currentSecsSinceEpoch());
}

void Snooze(const QString& wallet_name)
{
    QSettings().setValue(Key("nWalletBackupSnooze", wallet_name), QDateTime::currentSecsSinceEpoch() + qint64{SNOOZE_DAYS} * 24 * 60 * 60);
}
} // namespace BackupReminder
