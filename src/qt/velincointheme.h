// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_VELINCOINTHEME_H
#define BITCOIN_QT_VELINCOINTHEME_H

#include <QColor>
#include <QString>

class QApplication;

/** Velincoin dark theme: one place for the colors used by painted widgets. */
namespace VelincoinTheme {
inline const QColor WINDOW{0x09, 0x09, 0x0b};
inline const QColor SURFACE{0x11, 0x11, 0x14};
inline const QColor RAISED{0x18, 0x18, 0x1d};
inline const QColor BORDER{0x22, 0x22, 0x29};
inline const QColor TEXT{0xf4, 0xf4, 0xf6};
inline const QColor TEXT_DIM{0x9a, 0x9a, 0xa5};
inline const QColor TEXT_FAINT{0x6b, 0x6b, 0x75};
inline const QColor ACCENT{0x8b, 0x5c, 0xf6};
inline const QColor POSITIVE{0x86, 0xef, 0xac};
inline const QColor NEGATIVE{0xf8, 0x71, 0x71};
inline const QColor PENDING{0xfb, 0xbf, 0x24};
//! Violet for text and links (lighter than ACCENT, readable on dark surfaces)
inline const QColor ACCENT_TEXT{0xa7, 0x8b, 0xfa};
//! Text on the white primary button
inline const QColor PRIMARY_BUTTON_TEXT{0x05, 0x05, 0x05};
//! Test network badge: background and border around PENDING text
inline const QColor PENDING_BACKGROUND{0x17, 0x14, 0x0c};
inline const QColor PENDING_BORDER{0x3a, 0x32, 0x20};

/** Readable network name from NetworkStyle::getTitleAddText() ("" for main, "[testnet4]", ...). */
QString NetworkLabel(QString title_add_text);

/** Load the bundled Inter font, switch to the Fusion style with the dark palette and apply the style sheet. */
void Apply(QApplication& app);
} // namespace VelincoinTheme

#endif // BITCOIN_QT_VELINCOINTHEME_H
