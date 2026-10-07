// Copyright (c) 2011-present The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_GUICONSTANTS_H
#define BITCOIN_QT_GUICONSTANTS_H

#include <qt/velincointheme.h>

#include <chrono>
#include <cstdint>

using namespace std::chrono_literals;

/* A delay between model updates */
static constexpr auto MODEL_UPDATE_DELAY{250ms};

/* A delay between shutdown pollings */
static constexpr auto SHUTDOWN_POLLING_DELAY{200ms};

/* AskPassphraseDialog -- Maximum passphrase length */
static const int MAX_PASSPHRASE_SIZE = 1024;

/* BitcoinGUI -- Size of icons in status bar */
static const int STATUSBAR_ICONSIZE = 16;

static const bool DEFAULT_SPLASHSCREEN = true;

/* Invalid field background style */
#define STYLE_INVALID "border: 3px solid #FF8080"

/* Transaction list colors, from the Velincoin theme so they are readable on its background */
/* Transaction list -- unconfirmed transaction */
#define COLOR_UNCONFIRMED VelincoinTheme::TEXT_FAINT
/* Transaction list -- negative amount */
#define COLOR_NEGATIVE VelincoinTheme::NEGATIVE
/* Transaction list -- bare address (without label) */
#define COLOR_BAREADDRESS VelincoinTheme::TEXT_DIM
/* Transaction list -- TX status decoration - danger, tx needs attention */
#define COLOR_TX_STATUS_DANGER VelincoinTheme::NEGATIVE
/* Transaction list -- TX status decoration - default color (was black, invisible on dark) */
#define COLOR_BLACK VelincoinTheme::TEXT

/* Tooltips longer than this (in characters) are converted into rich text,
   so that they can be word-wrapped.
 */
static const int TOOLTIP_WRAP_THRESHOLD = 80;

/* Number of frames in spinner animation */
#define SPINNER_FRAMES 36

#define QAPP_ORG_NAME "Velincoin"
#define QAPP_ORG_DOMAIN "velincoin.com"
#define QAPP_APP_NAME_DEFAULT "Velincoin-Qt"
#define QAPP_APP_NAME_TESTNET "Velincoin-Qt-testnet"
#define QAPP_APP_NAME_TESTNET4 "Velincoin-Qt-testnet4"
#define QAPP_APP_NAME_SIGNET "Velincoin-Qt-signet"
#define QAPP_APP_NAME_REGTEST "Velincoin-Qt-regtest"

/* One gigabyte (GB) in bytes */
static constexpr uint64_t GB_BYTES{1000000000};

// Default prune target displayed in GUI.
static constexpr int DEFAULT_PRUNE_TARGET_GB{2};

#endif // BITCOIN_QT_GUICONSTANTS_H
