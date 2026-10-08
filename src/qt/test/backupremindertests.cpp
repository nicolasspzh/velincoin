// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/test/backupremindertests.h>

#include <qt/backupreminder.h>

#include <QSettings>

void BackupReminderTests::backupReminderTests()
{
    // never backed up, never put off: remind
    QVERIFY(BackupReminder::ShouldRemind(0, 0, 1000));
    // backed up once: never again
    QVERIFY(!BackupReminder::ShouldRemind(500, 0, 1000));
    // "Later": not before the time is up
    QVERIFY(!BackupReminder::ShouldRemind(0, 2000, 1000));
    QVERIFY(BackupReminder::ShouldRemind(0, 2000, 2000));

    // Per wallet, also for names with "/" and the unnamed default wallet
    for (const QString& name : {QStringLiteral("reminder test/a"), QStringLiteral("reminder test b"), QString()}) {
        QSettings().remove(QStringLiteral("nWalletBackupTime"));
        QSettings().remove(QStringLiteral("nWalletBackupSnooze"));
        QVERIFY(BackupReminder::ShouldRemind(name));
        BackupReminder::Snooze(name);
        QVERIFY(!BackupReminder::ShouldRemind(name));
        QVERIFY(BackupReminder::ShouldRemind(QStringLiteral("another wallet")));
        QSettings().remove(QStringLiteral("nWalletBackupSnooze"));
        BackupReminder::MarkBackedUp(name);
        QVERIFY(!BackupReminder::ShouldRemind(name));
        QVERIFY(BackupReminder::ShouldRemind(QStringLiteral("another wallet")));
    }
    QSettings().remove(QStringLiteral("nWalletBackupTime"));
    QSettings().remove(QStringLiteral("nWalletBackupSnooze"));
}
