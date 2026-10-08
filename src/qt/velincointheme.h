// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_VELINCOINTHEME_H
#define BITCOIN_QT_VELINCOINTHEME_H

#include <QColor>
#include <QString>

class QApplication;

/**
 * Velincoin theme, dark (default) or light: one place for all colors. The
 * colors below are for widgets that paint themselves; the style sheet
 * (res/styles/velincoin.qss) names its colors as @tokens@, whose values are in
 * velincointheme.cpp. Apply() sets them for the chosen theme at startup.
 */
namespace VelincoinTheme {
inline QColor WINDOW{0x09, 0x09, 0x0b};
inline QColor SURFACE{0x11, 0x11, 0x14};
inline QColor RAISED{0x18, 0x18, 0x1d};
inline QColor BORDER{0x22, 0x22, 0x29};
inline QColor TEXT{0xf4, 0xf4, 0xf6};
inline QColor TEXT_DIM{0x9a, 0x9a, 0xa5};
inline QColor TEXT_FAINT{0x6b, 0x6b, 0x75};
inline QColor ACCENT{0x8b, 0x5c, 0xf6};
inline QColor POSITIVE{0x86, 0xef, 0xac};
inline QColor NEGATIVE{0xf8, 0x71, 0x71};
inline QColor PENDING{0xfb, 0xbf, 0x24};
//! Violet for text and links (readable on the surfaces of the theme)
inline QColor ACCENT_TEXT{0xa7, 0x8b, 0xfa};
//! Text on the primary button (near-black on the white button of the dark theme, white on the near-black one of the light theme)
inline QColor PRIMARY_BUTTON_TEXT{0x05, 0x05, 0x05};
//! Test network badge: background and border around PENDING text
inline QColor PENDING_BACKGROUND{0x17, 0x14, 0x0c};
inline QColor PENDING_BORDER{0x3a, 0x32, 0x20};

enum class Mode { DARK, LIGHT };

/** The theme chosen in Options → Display, the same for all networks. Dark if none. */
Mode StoredMode();
void SetStoredMode(Mode mode);
/** The theme in use since startup (a change applies after a restart). */
Mode CurrentMode();

/** The style sheet with the @tokens@ replaced by the colors of mode. */
QString StyleSheet(const QString& source, Mode mode);

/** Readable network name from NetworkStyle::getTitleAddText() ("" for main, "[testnet4]", ...). */
QString NetworkLabel(QString title_add_text);

/** Load the bundled Inter font, switch to the Fusion style with the palette of the stored theme and apply the style sheet. */
void Apply(QApplication& app);
} // namespace VelincoinTheme

#endif // BITCOIN_QT_VELINCOINTHEME_H
