// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_BACKUPREMINDER_H
#define BITCOIN_QT_BACKUPREMINDER_H

#include <QString>
#include <QtGlobal>

/**
 * Reminder on the overview until a wallet is backed up. Remembered per
 * wallet (and per network, as QSettings are) when it was backed up with
 * File → Backup Wallet, and until when "Later" put the reminder off.
 */
namespace BackupReminder {
//! "Later" puts the reminder off for this many days
constexpr int SNOOZE_DAYS{7};

/** Whether to remind, from the stored times (seconds since 1970, 0 = never) and now. */
bool ShouldRemind(qint64 backed_up, qint64 snoozed_until, qint64 now);

/** Whether to remind for this wallet now. */
bool ShouldRemind(const QString& wallet_name);
/** The wallet was just backed up. */
void MarkBackedUp(const QString& wallet_name);
/** "Later": remind again in SNOOZE_DAYS days. */
void Snooze(const QString& wallet_name);
} // namespace BackupReminder

#endif // BITCOIN_QT_BACKUPREMINDER_H
