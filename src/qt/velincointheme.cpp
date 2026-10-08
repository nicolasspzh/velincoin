// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/velincointheme.h>

#include <qt/guiconstants.h>

#include <QApplication>
#include <QFile>
#include <QFont>
#include <QFontDatabase>
#include <QPalette>
#include <QSettings>
#include <QStyleFactory>

namespace VelincoinTheme {
namespace {
//! A color (or image) of the style sheet: @name@ in velincoin.qss
struct Token {
    const char* name;
    const char* dark;
    const char* light;
};

// Dark: near-black surfaces, white type, violet accent (like the website).
// Light: white surfaces, near-black type, a darker violet for contrast.
constexpr Token TOKENS[]{
    {"window", "#09090b", "#f6f6f8"},
    {"sidebar", "#0c0c0f", "#efeff3"},
    {"base", "#0f0f12", "#ffffff"},
    {"card", "#101013", "#ffffff"},
    {"input", "#121216", "#ffffff"},
    {"raised", "#18181d", "#ececf1"},
    {"button", "#1a1a1f", "#ffffff"},
    {"button-hover", "#222228", "#f3f3f6"},
    {"pressed", "#141418", "#e9e9ee"},
    {"sidebar-hover", "#16161b", "#e6e6ec"},
    {"hover", "#1c1c22", "#ececf1"},
    {"selected", "#1e1b29", "#ede9fe"},
    {"selected-border", "#3b3358", "#c4b5fd"},
    {"row-selected", "#2a2340", "#ede9fe"},
    {"border", "#26262d", "#dcdce3"},
    {"border-soft", "#1f1f25", "#e6e6ec"},
    {"card-border", "#1d1d23", "#e4e4ea"},
    {"sidebar-border", "#1a1a20", "#e1e1e7"},
    {"border-hover", "#32323a", "#c6c6cf"},
    {"control-border", "#2a2a31", "#d6d6de"},
    {"control-border-hover", "#37373f", "#bfbfc9"},
    {"strong-border", "#3a3a43", "#b4b4be"},
    {"tooltip-border", "#2c2c34", "#d6d6de"},
    {"badge-border", "#22222a", "#dcdce3"},
    {"disabled", "#121215", "#f2f2f5"},
    {"disabled-border", "#1c1c21", "#e4e4ea"},
    {"check-disabled-border", "#24242a", "#dcdce3"},
    {"text", "#f4f4f6", "#18181b"},
    {"text-strong", "#ffffff", "#09090b"},
    {"on-accent", "#ffffff", "#ffffff"},
    {"text-dim", "#9a9aa5", "#5b5b66"},
    {"text-label", "#8e8e98", "#63636e"},
    {"sidebar-text", "#a3a3ad", "#4b4b55"},
    {"text-faint", "#6b6b75", "#8a8a94"},
    {"text-disabled", "#5d5d66", "#a6a6b0"},
    {"accent", "#8b5cf6", "#7c3aed"},
    {"link", "#a78bfa", "#6d28d9"},
    {"link-hover", "#c4b5fd", "#5b21b6"},
    {"primary", "#fdfdfd", "#18181b"},
    {"primary-hover", "#ffffff", "#27272a"},
    {"primary-pressed", "#e6e6ea", "#3f3f46"},
    {"primary-text", "#050505", "#ffffff"},
    {"warning-text", "#fde68a", "#92400e"},
    {"warning", "#17140c", "#fffbeb"},
    {"warning-border", "#3a3220", "#fcd34d"},
    {"alert", "#19150b", "#fffbeb"},
    {"pending", "#fbbf24", "#b45309"},
    {"negative", "#f87171", "#dc2626"},
    {"info", "#15121f", "#f5f3ff"},
    {"info-border", "#2f2750", "#ddd6fe"},
    {"info-text", "#ddd6fe", "#5b21b6"},
    // Arrows in combo and spin boxes: light on dark, dark on light
    {"icon-chevron-down", ":/icons/chevron_down", ":/icons/chevron_down_on_light"},
    {"icon-chevron-up", ":/icons/chevron_up", ":/icons/chevron_up_on_light"},
};

QColor Color(const char* name, Mode mode)
{
    for (const Token& token : TOKENS) {
        if (qstrcmp(token.name, name) == 0) return QColor(QLatin1String(mode == Mode::DARK ? token.dark : token.light));
    }
    return {};
}

QSettings GlobalSettings()
{
    // The application name changes per network later; the theme is for all networks
    return QSettings(QStringLiteral(QAPP_ORG_NAME), QStringLiteral(QAPP_APP_NAME_DEFAULT));
}

Mode g_current_mode{Mode::DARK};

void SetColors(Mode mode)
{
    WINDOW = Color("window", mode);
    SURFACE = mode == Mode::DARK ? QColor(0x11, 0x11, 0x14) : Color("card", mode);
    RAISED = Color("raised", mode);
    BORDER = mode == Mode::DARK ? QColor(0x22, 0x22, 0x29) : Color("border", mode);
    TEXT = Color("text", mode);
    TEXT_DIM = Color("text-dim", mode);
    TEXT_FAINT = Color("text-faint", mode);
    ACCENT = Color("accent", mode);
    POSITIVE = mode == Mode::DARK ? QColor(0x86, 0xef, 0xac) : QColor(0x15, 0x80, 0x3d);
    NEGATIVE = Color("negative", mode);
    PENDING = Color("pending", mode);
    ACCENT_TEXT = Color("link", mode);
    PRIMARY_BUTTON_TEXT = Color("primary-text", mode);
    PENDING_BACKGROUND = Color("warning", mode);
    PENDING_BORDER = Color("warning-border", mode);
}

QPalette MakePalette(Mode mode)
{
    const bool dark{mode == Mode::DARK};
    QPalette p;
    p.setColor(QPalette::Window, WINDOW);
    p.setColor(QPalette::WindowText, TEXT);
    p.setColor(QPalette::Base, SURFACE);
    p.setColor(QPalette::AlternateBase, dark ? QColor(0x14, 0x14, 0x18) : QColor(0xf7, 0xf7, 0xf9));
    p.setColor(QPalette::Text, TEXT);
    p.setColor(QPalette::PlaceholderText, TEXT_FAINT);
    p.setColor(QPalette::Button, dark ? RAISED : Color("button", mode));
    p.setColor(QPalette::ButtonText, TEXT);
    p.setColor(QPalette::BrightText, Qt::white);
    p.setColor(QPalette::Highlight, ACCENT);
    p.setColor(QPalette::HighlightedText, Qt::white);
    p.setColor(QPalette::ToolTipBase, RAISED);
    p.setColor(QPalette::ToolTipText, TEXT);
    p.setColor(QPalette::Link, ACCENT_TEXT);
    p.setColor(QPalette::LinkVisited, ACCENT_TEXT);
    p.setColor(QPalette::Light, dark ? QColor(0x2a, 0x2a, 0x31) : QColor(0xff, 0xff, 0xff));
    p.setColor(QPalette::Midlight, dark ? QColor(0x22, 0x22, 0x29) : QColor(0xec, 0xec, 0xf1));
    p.setColor(QPalette::Mid, dark ? QColor(0x1c, 0x1c, 0x22) : QColor(0xd6, 0xd6, 0xde));
    p.setColor(QPalette::Dark, dark ? QColor(0x05, 0x05, 0x06) : QColor(0xa1, 0xa1, 0xaa));
    p.setColor(QPalette::Shadow, dark ? QColor(Qt::black) : QColor(0x71, 0x71, 0x7a));
    for (const auto role : {QPalette::WindowText, QPalette::Text, QPalette::ButtonText}) {
        p.setColor(QPalette::Disabled, role, Color("text-disabled", mode));
    }
    p.setColor(QPalette::Disabled, QPalette::Base, dark ? QColor(0x0f, 0x0f, 0x12) : Color("disabled", mode));
    p.setColor(QPalette::Disabled, QPalette::Button, dark ? QColor(0x13, 0x13, 0x16) : Color("disabled", mode));
    return p;
}
} // namespace

Mode StoredMode()
{
    return GlobalSettings().value(QStringLiteral("theme")).toString() == QLatin1String("light") ? Mode::LIGHT : Mode::DARK;
}

void SetStoredMode(Mode mode)
{
    GlobalSettings().setValue(QStringLiteral("theme"), mode == Mode::LIGHT ? QStringLiteral("light") : QStringLiteral("dark"));
}

Mode CurrentMode()
{
    return g_current_mode;
}

QString StyleSheet(const QString& source, Mode mode)
{
    QString style{source};
    for (const Token& token : TOKENS) {
        style.replace(QStringLiteral("@%1@").arg(QLatin1String(token.name)), QLatin1String(mode == Mode::DARK ? token.dark : token.light));
    }
    return style;
}

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

    g_current_mode = StoredMode();
    SetColors(g_current_mode);
    app.setPalette(MakePalette(g_current_mode));

    QFile qss(QStringLiteral(":/styles/velincoin"));
    if (qss.open(QIODevice::ReadOnly | QIODevice::Text)) {
        app.setStyleSheet(StyleSheet(QString::fromUtf8(qss.readAll()), g_current_mode));
    }
}

} // namespace VelincoinTheme
