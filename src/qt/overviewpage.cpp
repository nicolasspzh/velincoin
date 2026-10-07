// Copyright (c) 2011-present The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/overviewpage.h>
#include <qt/forms/ui_overviewpage.h>

#include <qt/bitcoinunits.h>
#include <qt/clientmodel.h>
#include <qt/demovalue.h>
#include <qt/guiconstants.h>
#include <qt/guiutil.h>
#include <qt/optionsmodel.h>
#include <qt/platformstyle.h>
#include <qt/transactionfilterproxy.h>
#include <qt/transactionoverviewwidget.h>
#include <qt/transactiontablemodel.h>
#include <qt/velincointheme.h>
#include <qt/walletmodel.h>

#include <QAbstractItemDelegate>
#include <QApplication>
#include <QDateTime>
#include <QImage>
#include <QPainter>
#include <QPixmap>
#include <QStatusTipEvent>

#include <algorithm>
#include <map>

#define DECORATION_SIZE 60
#define NUM_ITEMS 6

Q_DECLARE_METATYPE(interfaces::WalletBalances)

namespace {
//! Recolor a single-color icon, keeping its shape (alpha channel).
QIcon TintedIcon(const QString& filename, const QColor& color)
{
    QImage img(filename);
    img = img.convertToFormat(QImage::Format_ARGB32_Premultiplied);
    QPainter p(&img);
    p.setCompositionMode(QPainter::CompositionMode_SourceIn);
    p.fillRect(img.rect(), color);
    p.end();
    return QIcon(QPixmap::fromImage(img));
}
} // namespace

class TxViewDelegate : public QAbstractItemDelegate
{
    Q_OBJECT
public:
    explicit TxViewDelegate(const PlatformStyle* _platformStyle, QObject* parent = nullptr)
        : QAbstractItemDelegate(parent), platformStyle(_platformStyle)
    {
        connect(this, &TxViewDelegate::width_changed, this, &TxViewDelegate::sizeHintChanged);
    }

    inline void paint(QPainter *painter, const QStyleOptionViewItem &option,
                      const QModelIndex &index ) const override
    {
        painter->save();
        painter->setRenderHint(QPainter::Antialiasing);

        const QRect mainRect = option.rect;
        const int circle = 38;
        const QRect circleRect(mainRect.left(), mainRect.center().y() - circle / 2 + 1, circle, circle);
        const int xspace = circle + 14;
        const int ypad = 11;
        const int halfheight = (mainRect.height() - 2 * ypad) / 2;
        const QRect topRect(mainRect.left() + xspace, mainRect.top() + ypad, mainRect.width() - xspace, halfheight);
        const QRect bottomRect(mainRect.left() + xspace, mainRect.top() + ypad + halfheight, mainRect.width() - xspace, halfheight);

        // icon in a round tile
        painter->setPen(Qt::NoPen);
        painter->setBrush(VelincoinTheme::RAISED);
        painter->drawEllipse(circleRect);
        QIcon icon = qvariant_cast<QIcon>(index.data(TransactionTableModel::RawDecorationRole));
        icon = platformStyle->SingleColorIcon(icon);
        icon.paint(painter, circleRect.adjusted(10, 10, -10, -10));

        // divider under every row but the last visible one
        if (index.row() + 1 < std::min(index.model()->rowCount(), NUM_ITEMS)) {
            painter->setPen(VelincoinTheme::BORDER);
            painter->drawLine(topRect.left(), mainRect.bottom(), mainRect.right(), mainRect.bottom());
        }

        QDateTime date = index.data(TransactionTableModel::DateRole).toDateTime();
        QString address = index.data(Qt::DisplayRole).toString();
        qint64 amount = index.data(TransactionTableModel::AmountRole).toLongLong();
        bool confirmed = index.data(TransactionTableModel::ConfirmedRole).toBool();
        QVariant value = index.data(Qt::ForegroundRole);
        QColor foreground = option.palette.color(QPalette::Text);
        if(value.canConvert<QBrush>())
        {
            QBrush brush = qvariant_cast<QBrush>(value);
            foreground = brush.color();
        }

        QFont titleFont = option.font;
        titleFont.setWeight(QFont::Medium);
        painter->setFont(titleFont);
        painter->setPen(foreground);
        QRect boundingRect;
        const QString elided = painter->fontMetrics().elidedText(address, Qt::ElideMiddle, topRect.width() * 6 / 10);
        painter->drawText(topRect, Qt::AlignLeft | Qt::AlignVCenter, elided, &boundingRect);

        if (!confirmed) {
            foreground = VelincoinTheme::TEXT_DIM;
        } else if (amount < 0) {
            foreground = option.palette.color(QPalette::Text);
        } else {
            foreground = VelincoinTheme::POSITIVE;
        }
        painter->setPen(foreground);
        QString amountText = BitcoinUnits::formatWithUnit(unit, amount, true, BitcoinUnits::SeparatorStyle::ALWAYS);
        QRect amount_bounding_rect;
        painter->drawText(topRect, Qt::AlignRight | Qt::AlignVCenter, amountText, &amount_bounding_rect);

        painter->setFont(option.font);
        painter->setPen(VelincoinTheme::TEXT_DIM);
        QRect date_bounding_rect;
        painter->drawText(bottomRect, Qt::AlignLeft | Qt::AlignVCenter, GUIUtil::dateTimeStr(date), &date_bounding_rect);
        if (!confirmed) {
            painter->setPen(VelincoinTheme::PENDING);
            painter->drawText(bottomRect, Qt::AlignRight | Qt::AlignVCenter, tr("Pending"));
        }

        // 0.4*date_bounding_rect.width() is used to visually distinguish a date from an amount.
        const int minimum_width = 1.4 * date_bounding_rect.width() + amount_bounding_rect.width();
        const auto search = m_minimum_width.find(index.row());
        if (search == m_minimum_width.end() || search->second != minimum_width) {
            m_minimum_width[index.row()] = minimum_width;
            Q_EMIT width_changed(index);
        }

        painter->restore();
    }

    inline QSize sizeHint(const QStyleOptionViewItem &option, const QModelIndex &index) const override
    {
        const auto search = m_minimum_width.find(index.row());
        const int minimum_text_width = search == m_minimum_width.end() ? 0 : search->second;
        return {38 + 14 + minimum_text_width, DECORATION_SIZE};
    }

    BitcoinUnit unit{BitcoinUnit::BTC};

Q_SIGNALS:
    //! An intermediate signal for emitting from the `paint() const` member function.
    void width_changed(const QModelIndex& index) const;

private:
    const PlatformStyle* platformStyle;
    mutable std::map<int, int> m_minimum_width;
};

#include <qt/overviewpage.moc>

OverviewPage::OverviewPage(const PlatformStyle *platformStyle, QWidget *parent) :
    QWidget(parent),
    ui(new Ui::OverviewPage),
    m_platform_style{platformStyle},
    txdelegate(new TxViewDelegate(platformStyle, this))
{
    ui->setupUi(this);

    updateIcons();

    // Recent transactions
    ui->listTransactions->setItemDelegate(txdelegate);
    ui->listTransactions->setIconSize(QSize(DECORATION_SIZE, DECORATION_SIZE));
    ui->listTransactions->setMinimumHeight(3 * DECORATION_SIZE);
    ui->listTransactions->setAttribute(Qt::WA_MacShowFocusRect, false);
    ui->listTransactions->setCursor(Qt::PointingHandCursor);

    // The CHF value is a fixed demo rate, not a price; the tooltip says so
    for (QLabel* label : {ui->labelTotalDemo, ui->labelBalanceDemo, ui->labelUnconfirmedDemo}) {
        label->setToolTip(DemoValue::ToolTip());
    }

    connect(ui->listTransactions, &TransactionOverviewWidget::clicked, this, &OverviewPage::handleTransactionClicked);
    connect(ui->sendButton, &QPushButton::clicked, this, &OverviewPage::sendCoinsClicked);
    connect(ui->receiveButton, &QPushButton::clicked, this, &OverviewPage::receiveCoinsClicked);
    connect(ui->showAllButton, &QPushButton::clicked, this, &OverviewPage::showHistoryClicked);

    // start with displaying the "out of sync" warnings
    showOutOfSyncWarning(true);
    connect(ui->labelWalletStatus, &QPushButton::clicked, this, &OverviewPage::outOfSyncWarningClicked);
    connect(ui->labelTransactionsStatus, &QPushButton::clicked, this, &OverviewPage::outOfSyncWarningClicked);
}

void OverviewPage::handleTransactionClicked(const QModelIndex &index)
{
    if(filter)
        Q_EMIT transactionClicked(filter->mapToSource(index));
}

void OverviewPage::setPrivacy(bool privacy)
{
    m_privacy = privacy;
    clientModel->getOptionsModel()->setOption(OptionsModel::OptionID::MaskValues, privacy);
    const auto& balances = walletModel->getCachedBalance();
    if (balances.balance != -1) {
        setBalance(balances);
    }

    LimitTransactionRows();

    const QString status_tip = m_privacy ? tr("Privacy mode activated for the Overview tab. To unmask the values, uncheck Settings->Mask values.") : "";
    setStatusTip(status_tip);
    QStatusTipEvent event(status_tip);
    QApplication::sendEvent(this, &event);
}

OverviewPage::~OverviewPage()
{
    delete ui;
}

void OverviewPage::setBalance(const interfaces::WalletBalances& balances)
{
    BitcoinUnit unit = walletModel->getOptionsModel()->getDisplayUnit();
    // formatWithPrivacy pads amounts to a common width for column layouts; this page stacks them, so trim
    ui->labelBalance->setText(BitcoinUnits::formatWithPrivacy(unit, balances.balance, BitcoinUnits::SeparatorStyle::ALWAYS, m_privacy).trimmed());
    ui->labelUnconfirmed->setText(BitcoinUnits::formatWithPrivacy(unit, balances.unconfirmed_balance, BitcoinUnits::SeparatorStyle::ALWAYS, m_privacy).trimmed());
    ui->labelImmature->setText(BitcoinUnits::formatWithPrivacy(unit, balances.immature_balance, BitcoinUnits::SeparatorStyle::ALWAYS, m_privacy).trimmed());
    // Large total: the number in full size, the unit smaller and dimmed
    QString total = BitcoinUnits::formatWithPrivacy(unit, balances.balance + balances.unconfirmed_balance + balances.immature_balance, BitcoinUnits::SeparatorStyle::ALWAYS, m_privacy).trimmed();
    const QString unit_suffix = QStringLiteral(" ") + BitcoinUnits::shortName(unit);
    if (total.endsWith(unit_suffix)) {
        total = total.left(total.size() - unit_suffix.size()).toHtmlEscaped() +
                QStringLiteral("<span style=\"font-size:15pt; font-weight:500; color:%1;\">&nbsp;%2</span>").arg(VelincoinTheme::TEXT_DIM.name(), BitcoinUnits::shortName(unit).toHtmlEscaped());
    } else {
        total = total.toHtmlEscaped();
    }
    ui->labelTotal->setText(total);
    // only show immature (newly mined) balance if it's non-zero, so as not to complicate things
    // for the non-mining users
    bool showImmature = balances.immature_balance != 0;

    ui->labelImmature->setVisible(showImmature);
    ui->labelImmatureText->setVisible(showImmature);

    // Demo value in CHF, hidden together with the amounts when values are masked
    const bool show_demo{walletModel->getOptionsModel()->getShowDemoValue() && !m_privacy};
    ui->labelTotalDemo->setText(DemoValue::Label(balances.balance + balances.unconfirmed_balance + balances.immature_balance));
    ui->labelBalanceDemo->setText(DemoValue::Label(balances.balance));
    ui->labelUnconfirmedDemo->setText(DemoValue::Label(balances.unconfirmed_balance));
    ui->labelTotalDemo->setVisible(show_demo);
    ui->labelBalanceDemo->setVisible(show_demo);
    ui->labelUnconfirmedDemo->setVisible(show_demo);
}

void OverviewPage::setClientModel(ClientModel *model)
{
    this->clientModel = model;
    if (model) {
        // Show warning, for example if this is a prerelease version
        connect(model, &ClientModel::alertsChanged, this, &OverviewPage::updateAlerts);
        updateAlerts(model->getStatusBarWarnings());

        connect(model->getOptionsModel(), &OptionsModel::fontForMoneyChanged, this, &OverviewPage::setMonospacedFont);
        setMonospacedFont(clientModel->getOptionsModel()->getFontForMoney());
    }
}

void OverviewPage::setWalletModel(WalletModel *model)
{
    this->walletModel = model;
    if(model && model->getOptionsModel())
    {
        // Set up transaction list
        filter.reset(new TransactionFilterProxy());
        filter->setSourceModel(model->getTransactionTableModel());
        filter->setDynamicSortFilter(true);
        filter->setSortRole(Qt::EditRole);
        filter->setShowInactive(false);
        filter->sort(TransactionTableModel::Date, Qt::DescendingOrder);

        ui->listTransactions->setModel(filter.get());
        ui->listTransactions->setModelColumn(TransactionTableModel::ToAddress);

        connect(filter.get(), &TransactionFilterProxy::rowsInserted, this, &OverviewPage::LimitTransactionRows);
        connect(filter.get(), &TransactionFilterProxy::rowsRemoved, this, &OverviewPage::LimitTransactionRows);
        connect(filter.get(), &TransactionFilterProxy::rowsMoved, this, &OverviewPage::LimitTransactionRows);
        LimitTransactionRows();
        // Keep up to date with wallet
        setBalance(model->getCachedBalance());
        connect(model, &WalletModel::balanceChanged, this, &OverviewPage::setBalance);

        connect(model->getOptionsModel(), &OptionsModel::displayUnitChanged, this, &OverviewPage::updateDisplayUnit);
        connect(model->getOptionsModel(), &OptionsModel::showDemoValueChanged, this, &OverviewPage::updateDisplayUnit);
    }

    // update the display unit, to not use the default ("BTC")
    updateDisplayUnit();
}

void OverviewPage::changeEvent(QEvent* e)
{
    if (e->type() == QEvent::PaletteChange) {
        updateIcons();
    }

    QWidget::changeEvent(e);
}

void OverviewPage::updateIcons()
{
    // use a SingleColorIcon for the "out of sync warning" icon
    const QIcon warning = TintedIcon(QStringLiteral(":/icons/warning"), VelincoinTheme::PENDING);
    ui->labelTransactionsStatus->setIcon(warning);
    ui->labelWalletStatus->setIcon(warning);
    // the primary button is white, so its icon is drawn dark
    ui->sendButton->setIcon(TintedIcon(QStringLiteral(":/icons/send"), VelincoinTheme::PRIMARY_BUTTON_TEXT));
    ui->receiveButton->setIcon(TintedIcon(QStringLiteral(":/icons/receiving_addresses"), VelincoinTheme::TEXT));
}

// Only show most recent NUM_ITEMS rows
void OverviewPage::LimitTransactionRows()
{
    int rows = 0;
    if (filter && ui->listTransactions && ui->listTransactions->model() && filter.get() == ui->listTransactions->model()) {
        rows = filter->rowCount();
        for (int i = 0; i < rows; ++i) {
            ui->listTransactions->setRowHidden(i, i >= NUM_ITEMS);
        }
    }
    ui->listTransactions->setVisible(!m_privacy && rows > 0);
    ui->labelNoTransactions->setVisible(!m_privacy && rows == 0);
    ui->showAllButton->setVisible(rows > NUM_ITEMS);
}

void OverviewPage::updateDisplayUnit()
{
    if (walletModel && walletModel->getOptionsModel()) {
        const auto& balances = walletModel->getCachedBalance();
        if (balances.balance != -1) {
            setBalance(balances);
        }

        // Update txdelegate->unit with the current unit
        txdelegate->unit = walletModel->getOptionsModel()->getDisplayUnit();

        ui->listTransactions->update();
    }
}

void OverviewPage::updateAlerts(const QString &warnings)
{
    this->ui->labelAlerts->setVisible(!warnings.isEmpty());
    this->ui->labelAlerts->setText(warnings);
}

void OverviewPage::showOutOfSyncWarning(bool fShow)
{
    ui->labelWalletStatus->setVisible(fShow);
    ui->labelTransactionsStatus->setVisible(fShow);
}

void OverviewPage::setMonospacedFont(const QFont& f)
{
    // Sizes come from the theme style sheet, which takes precedence over setFont(), so the
    // chosen family is passed the same way. The large total always uses the interface font.
    const QString family = QStringLiteral("font-family: \"%1\";").arg(f.family());
    ui->labelBalance->setStyleSheet(family);
    ui->labelUnconfirmed->setStyleSheet(family);
    ui->labelImmature->setStyleSheet(family);
}
