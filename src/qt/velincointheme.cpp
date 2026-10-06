// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/velincointheme.h>

#include <QApplication>
#include <QFile>
#include <QFont>
#include <QFontDatabase>
#include <QPalette>
#include <QStyleFactory>

namespace VelincoinTheme {

QString NetworkLabel(QString title_add_text)
{
    title_add_text.remove('[').remove(']');
    if (title_add_text.isEmpty()) return QApplication::translate("VelincoinTheme", "Main network");
    if (title_add_text == QLatin1String("testnet4")) return QApplication::translate("VelincoinTheme", "Test network");
    if (title_add_text == QLatin1String("regtest")) return QApplication::translate("VelincoinTheme", "Regtest");
    return title_add_text;
}

void Apply(QApplication& app)
{
    for (const char* weight : {"Regular", "Medium", "SemiBold", "Bold"}) {
        QFontDatabase::addApplicationFont(QStringLiteral(":/fonts/inter-%1").arg(QString::fromLatin1(weight).toLower()));
    }
    QFont font(QStringLiteral("Inter"));
    font.setPointSizeF(10);
    font.setHintingPreference(QFont::PreferNoHinting);
    font.setStyleStrategy(QFont::PreferAntialias);
    app.setFont(font);

    // Fusion draws every control from the palette, so it looks the same on Windows, macOS and Linux.
    if (QStyle* fusion = QStyleFactory::create(QStringLiteral("Fusion"))) {
        app.setStyle(fusion);
    }

    QPalette p;
    p.setColor(QPalette::Window, WINDOW);
    p.setColor(QPalette::WindowText, TEXT);
    p.setColor(QPalette::Base, SURFACE);
    p.setColor(QPalette::AlternateBase, QColor(0x14, 0x14, 0x18));
    p.setColor(QPalette::Text, TEXT);
    p.setColor(QPalette::PlaceholderText, TEXT_FAINT);
    p.setColor(QPalette::Button, RAISED);
    p.setColor(QPalette::ButtonText, TEXT);
    p.setColor(QPalette::BrightText, Qt::white);
    p.setColor(QPalette::Highlight, ACCENT);
    p.setColor(QPalette::HighlightedText, Qt::white);
    p.setColor(QPalette::ToolTipBase, RAISED);
    p.setColor(QPalette::ToolTipText, TEXT);
    p.setColor(QPalette::Link, QColor(0xa7, 0x8b, 0xfa));
    p.setColor(QPalette::LinkVisited, QColor(0xa7, 0x8b, 0xfa));
    p.setColor(QPalette::Light, QColor(0x2a, 0x2a, 0x31));
    p.setColor(QPalette::Midlight, QColor(0x22, 0x22, 0x29));
    p.setColor(QPalette::Mid, QColor(0x1c, 0x1c, 0x22));
    p.setColor(QPalette::Dark, QColor(0x05, 0x05, 0x06));
    p.setColor(QPalette::Shadow, Qt::black);
    for (const auto role : {QPalette::WindowText, QPalette::Text, QPalette::ButtonText}) {
        p.setColor(QPalette::Disabled, role, QColor(0x5d, 0x5d, 0x66));
    }
    p.setColor(QPalette::Disabled, QPalette::Base, QColor(0x0f, 0x0f, 0x12));
    p.setColor(QPalette::Disabled, QPalette::Button, QColor(0x13, 0x13, 0x16));
    app.setPalette(p);

    QFile qss(QStringLiteral(":/styles/velincoin"));
    if (qss.open(QIODevice::ReadOnly | QIODevice::Text)) {
        app.setStyleSheet(QString::fromUtf8(qss.readAll()));
    }
}

} // namespace VelincoinTheme
