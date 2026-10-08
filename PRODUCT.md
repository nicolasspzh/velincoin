# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: static HTML, CSS and JavaScript in `website/`, no build step. three.js is vendored and bundled with the 3D scenes into one plain script (`assets/js/scenes.bundle.js`, rebuild command at the top of `scenes.js`), so `index.html` also opens straight from disk. Fonts and icons are self-hosted.

## Users

Friends and early testers who want to try a new cryptocurrency on Windows. They download the wallet, mine their first coins on the test network, connect to each other and send coins back and forth. Most are curious, not experts: they need plain steps, not protocol detail.

## Product Purpose

Velincoin is a cryptocurrency with its own blockchain and its own desktop wallet, Velincoin Core. The website's job right now: explain what Velincoin is, let a tester download the Windows installer, and get them from install to their first mined coins.

Success: a visitor downloads the installer, starts the wallet on the test network and mines or receives coins without asking for help.

## Positioning

Its own proof-of-work blockchain with a fixed supply of 21 million VLC, no premine and an open-source desktop wallet that validates every block itself.

## Operating Context

- Windows 10/11 desktop; the installer is not code-signed, so Windows SmartScreen shows a warning.
- The installer adds Velincoin Core and a test network shortcut to the start menu.
- One seed server for the test network (`159.195.4.228`, port 29733): the wallet connects to it by itself at start. It also runs the live block explorer.
- Mining uses the wallet's Mining page (test network only) or the console command `generatetoaddress`: about 1 to 2 minutes per block on the test network with one CPU core (90-second target block time). Mined coins are spendable after 100 more blocks.

## Capabilities and Constraints

- Download: `velincoin-win64-setup.exe`, Velincoin Core 31.1, about 28 MB, served from the website folder.
- Networks: main network (`vlc1…` addresses, port 9733) and test network (`tvlc1…`, port 29733).
- Status: testing phase. Only the test network is shown and used, including at the presentation on Friday, 9 October 2026. The main network exists in the code but is not finished and not launched. VLC has no market value, there is no exchange, no sale and no presale.
- Decided: the mining algorithm stays SHA-256.

## Brand Commitments

- Name Velincoin, ticker VLC.
- Logo: a faceted crystal "V" in blue, violet and pink (`doc/velincoin/logo/`).
- The website follows the desktop wallet's look: near-black surfaces, white type, violet as the single accent, Inter.
- The site never names the people behind the project.
- Language: German with Swiss spelling (ss, never ß); visitors are addressed with «du». Wallet menu names follow the German wallet (Fenster, Konsole, Empfangen).

## Evidence on Hand

- The installer itself, with its SHA-256 checksum.
- Real screenshots of the wallet (taken with sample data on a local test chain).
- No users, prices, partners, testimonials or statistics exist; none may be invented.

## Product Principles

1. Honest about the stage: testing, no value, no sale.
2. Practical over promotional: every claim leads to something a tester can do.
3. The wallet is the product: show it as it really is.
