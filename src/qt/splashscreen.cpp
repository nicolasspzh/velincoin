// Copyright (c) 2011-present The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <bitcoin-build-config.h> // IWYU pragma: keep

#include <qt/splashscreen.h>

#include <clientversion.h>
#include <common/system.h>
#include <interfaces/handler.h>
#include <interfaces/node.h>
#include <interfaces/wallet.h>
#include <qt/guiutil.h>
#include <qt/networkstyle.h>
#include <qt/velincointheme.h>
#include <qt/walletmodel.h>
#include <util/translation.h>

#include <functional>

#include <QApplication>
#include <QCloseEvent>
#include <QPainter>
#include <QRadialGradient>
#include <QScreen>


SplashScreen::SplashScreen(const NetworkStyle* networkStyle)
    : QWidget()
{
    float devicePixelRatio = static_cast<QGuiApplication*>(QCoreApplication::instance())->devicePixelRatio();

    // define text to place
    QString titleText       = CLIENT_NAME;
    QString versionText     = QString("Version %1").arg(QString::fromStdString(FormatFullVersion()));
    QString copyrightText   = QString::fromUtf8(CopyrightHolders(strprintf("\xc2\xA9 %u-%u ", 2009, COPYRIGHT_YEAR)).c_str());
    const QString& titleAddText    = networkStyle->getTitleAddText();

    const QString font = QApplication::font().family();

    // create a bitmap according to device pixelratio
    QSize splashSize(480*devicePixelRatio,320*devicePixelRatio);
    pixmap = QPixmap(splashSize);

    // change to HiDPI if it makes sense
    pixmap.setDevicePixelRatio(devicePixelRatio);

    QPainter pixPaint(&pixmap);
    pixPaint.setRenderHint(QPainter::Antialiasing);
    pixPaint.setRenderHint(QPainter::TextAntialiasing);

    // dark background with a faint violet glow behind the logo
    const QRect area(0, 0, 480, 320);
    pixPaint.fillRect(area, VelincoinTheme::WINDOW);
    QRadialGradient glow(QPointF(96, 112), 240);
    QColor glow_color{VelincoinTheme::ACCENT};
    glow_color.setAlpha(60);
    glow.setColorAt(0, glow_color);
    glow_color.setAlpha(0);
    glow.setColorAt(1, glow_color);
    pixPaint.fillRect(area, glow);

    // the Velincoin logo
    const int paddingLeft = 48;
    QPixmap icon(networkStyle->getAppIcon().pixmap(QSize(1024, 1024)));
    pixPaint.drawPixmap(QRect(paddingLeft, 52, 88, 88), icon);

    QFont titleFont(font, 22);
    titleFont.setWeight(QFont::DemiBold);
    pixPaint.setFont(titleFont);
    pixPaint.setPen(VelincoinTheme::TEXT);
    pixPaint.drawText(paddingLeft, 186, titleText);

    QFont versionFont(font, 10);
    pixPaint.setFont(versionFont);
    pixPaint.setPen(VelincoinTheme::TEXT_DIM);
    pixPaint.drawText(paddingLeft, 212, versionText);

    // draw copyright stuff
    {
        QFont smallFont(font, 8);
        pixPaint.setFont(smallFont);
        pixPaint.setPen(VelincoinTheme::TEXT_FAINT);
        QRect copyrightRect(paddingLeft, 228, 480 - 2 * paddingLeft, 50);
        pixPaint.drawText(copyrightRect, Qt::AlignLeft | Qt::AlignTop | Qt::TextWordWrap, copyrightText);
    }

    // network badge if this is not the main network
    if(!titleAddText.isEmpty()) {
        const QString badgeText = VelincoinTheme::NetworkLabel(titleAddText);
        QFont badgeFont(font, 9);
        badgeFont.setWeight(QFont::DemiBold);
        pixPaint.setFont(badgeFont);
        const QFontMetrics fm = pixPaint.fontMetrics();
        const int w = GUIUtil::TextWidth(fm, badgeText) + 20;
        const QRect badge(480 - w - 20, 20, w, 24);
        pixPaint.setPen(VelincoinTheme::PENDING_BORDER);
        pixPaint.setBrush(VelincoinTheme::PENDING_BACKGROUND);
        pixPaint.drawRoundedRect(badge, 12, 12);
        pixPaint.setPen(VelincoinTheme::PENDING);
        pixPaint.drawText(badge, Qt::AlignCenter, badgeText);
    }

    pixPaint.end();

    // Set window title
    setWindowTitle(titleText + " " + titleAddText);

    // Resize window and move to center of desktop, disallow resizing
    QRect r(QPoint(), QSize(pixmap.size().width()/devicePixelRatio,pixmap.size().height()/devicePixelRatio));
    resize(r.size());
    setFixedSize(r.size());
    move(QGuiApplication::primaryScreen()->geometry().center() - r.center());

    installEventFilter(this);

    GUIUtil::handleCloseWindowShortcut(this);
}

SplashScreen::~SplashScreen()
{
    if (m_node) unsubscribeFromCoreSignals();
}

void SplashScreen::setNode(interfaces::Node& node)
{
    assert(!m_node);
    m_node = &node;
    subscribeToCoreSignals();
    if (m_shutdown) m_node->startShutdown();
}

void SplashScreen::shutdown()
{
    m_shutdown = true;
    if (m_node) m_node->startShutdown();
}

bool SplashScreen::eventFilter(QObject * obj, QEvent * ev) {
    if (ev->type() == QEvent::KeyPress) {
        QKeyEvent *keyEvent = static_cast<QKeyEvent *>(ev);
        if (keyEvent->key() == Qt::Key_Q) {
            shutdown();
        }
    }
    return QObject::eventFilter(obj, ev);
}

static void InitMessage(SplashScreen *splash, const std::string &message)
{
    bool invoked = QMetaObject::invokeMethod(splash, "showMessage",
        Qt::QueuedConnection,
        Q_ARG(QString, QString::fromStdString(message)),
        Q_ARG(int, Qt::AlignBottom|Qt::AlignLeft),
        Q_ARG(QColor, QColor(154,154,165)));
    assert(invoked);
}

static void ShowProgress(SplashScreen *splash, const std::string &title, int nProgress, bool resume_possible)
{
    InitMessage(splash, title + std::string("\n") +
            (resume_possible ? SplashScreen::tr("(press q to shutdown and continue later)").toStdString()
                                : SplashScreen::tr("press q to shutdown").toStdString()) +
            strprintf("\n%d", nProgress) + "%");
}

void SplashScreen::subscribeToCoreSignals()
{
    // Connect signals to client
    m_handler_init_message = m_node->handleInitMessage([this](const std::string& message) {
        InitMessage(this, message);
    });
    m_handler_show_progress = m_node->handleShowProgress([this](const std::string& title, int nProgress, bool resume_possible) {
        ShowProgress(this, title, nProgress, resume_possible);
    });
    m_handler_init_wallet = m_node->handleInitWallet([this]() { handleLoadWallet(); });
}

void SplashScreen::handleLoadWallet()
{
#ifdef ENABLE_WALLET
    if (!WalletModel::isWalletEnabled()) return;
    m_handler_load_wallet = m_node->walletLoader().handleLoadWallet([this](std::unique_ptr<interfaces::Wallet> wallet) {
        m_connected_wallet_handlers.emplace_back(wallet->handleShowProgress([this](const std::string& title, int nProgress) {
            ShowProgress(this, title, nProgress, /*resume_possible=*/false);
        }));
        m_connected_wallets.emplace_back(std::move(wallet));
    });
#endif
}

void SplashScreen::unsubscribeFromCoreSignals()
{
    // Disconnect signals from client
    m_handler_init_message->disconnect();
    m_handler_show_progress->disconnect();
    for (const auto& handler : m_connected_wallet_handlers) {
        handler->disconnect();
    }
    m_connected_wallet_handlers.clear();
    m_connected_wallets.clear();
}

void SplashScreen::showMessage(const QString &message, int alignment, const QColor &color)
{
    curMessage = message;
    curAlignment = alignment;
    curColor = color;
    update();
}

void SplashScreen::paintEvent(QPaintEvent *event)
{
    QPainter painter(this);
    painter.drawPixmap(0, 0, pixmap);
    QRect r = rect().adjusted(48, 5, -48, -18);
    painter.setPen(curColor);
    painter.drawText(r, curAlignment, curMessage);
}

void SplashScreen::closeEvent(QCloseEvent *event)
{
    shutdown(); // allows an "emergency" shutdown during startup
    event->ignore();
}
