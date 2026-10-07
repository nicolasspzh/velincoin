// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include <qt/balancechart.h>

#include <qt/guiutil.h>
#include <qt/transactiontablemodel.h>
#include <qt/velincointheme.h>

#include <QAbstractItemModel>
#include <QButtonGroup>
#include <QDateTime>
#include <QHBoxLayout>
#include <QLabel>
#include <QLinearGradient>
#include <QMouseEvent>
#include <QPainter>
#include <QPainterPath>
#include <QPushButton>
#include <QSettings>
#include <QTimer>
#include <QToolTip>
#include <QVBoxLayout>

#include <algorithm>

namespace {
const QString RANGE_SETTING{QStringLiteral("nBalanceChartRange")};
constexpr qint64 DAY{24 * 60 * 60};
} // namespace

BalanceChart::BalanceChart(QWidget* parent) : QWidget(parent)
{
    setMouseTracking(true);
    setMinimumWidth(240);
    setMinimumHeight(90);
    setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Preferred);

    QVBoxLayout* layout = new QVBoxLayout(this);
    layout->setContentsMargins(0, 0, 0, 0);
    m_header = new QWidget(this);
    QHBoxLayout* header = new QHBoxLayout(m_header);
    header->setContentsMargins(0, 0, 0, 0);
    header->setSpacing(4);
    QLabel* title = new QLabel(tr("History"), m_header);
    title->setObjectName(QStringLiteral("chartTitle"));
    header->addWidget(title);
    header->addStretch();
    m_buttons = new QButtonGroup(this);
    m_buttons->setExclusive(true);
    const std::pair<Range, QString> ranges[]{{Range::WEEK, tr("1W")}, {Range::MONTH, tr("1M")}, {Range::ALL, tr("All")}};
    for (const auto& [range, text] : ranges) {
        QPushButton* button = new QPushButton(text, m_header);
        button->setObjectName(QStringLiteral("chartRange"));
        button->setCheckable(true);
        button->setCursor(Qt::PointingHandCursor);
        m_buttons->addButton(button, static_cast<int>(range));
        header->addWidget(button);
    }
    m_buttons->button(static_cast<int>(Range::WEEK))->setToolTip(tr("Last 7 days"));
    m_buttons->button(static_cast<int>(Range::MONTH))->setToolTip(tr("Last 30 days"));
    m_buttons->button(static_cast<int>(Range::ALL))->setToolTip(tr("Since the first transaction"));
    connect(m_buttons, &QButtonGroup::idClicked, this, [this](int id) { setRange(static_cast<Range>(id)); });
    layout->addWidget(m_header);
    layout->addStretch();

    const int stored{QSettings().value(RANGE_SETTING, static_cast<int>(Range::MONTH)).toInt()};
    m_range = stored >= 0 && stored <= static_cast<int>(Range::ALL) ? static_cast<Range>(stored) : Range::MONTH;
    m_buttons->button(static_cast<int>(m_range))->setChecked(true);

    // Many transactions can arrive at once (rescan, mining): recompute once
    m_recompute_timer = new QTimer(this);
    m_recompute_timer->setSingleShot(true);
    m_recompute_timer->setInterval(250);
    connect(m_recompute_timer, &QTimer::timeout, this, &BalanceChart::recompute);
    // "Now" moves on
    QTimer* minute = new QTimer(this);
    minute->setInterval(60 * 1000);
    connect(minute, &QTimer::timeout, this, qOverload<>(&QWidget::update));
    minute->start();
}

QSize BalanceChart::sizeHint() const
{
    return {360, 120};
}

void BalanceChart::setModel(QAbstractItemModel* model)
{
    if (m_model) disconnect(m_model, nullptr, this, nullptr);
    m_model = model;
    if (m_model) {
        const auto schedule{[this] { m_recompute_timer->start(); }};
        connect(m_model, &QAbstractItemModel::rowsInserted, this, schedule);
        connect(m_model, &QAbstractItemModel::rowsRemoved, this, schedule);
        connect(m_model, &QAbstractItemModel::dataChanged, this, schedule);
        connect(m_model, &QAbstractItemModel::modelReset, this, schedule);
        connect(m_model, &QAbstractItemModel::layoutChanged, this, schedule);
    }
    recompute();
}

void BalanceChart::setDisplayUnit(BitcoinUnit unit)
{
    m_unit = unit;
    update();
}

BalanceChart::Points BalanceChart::BalanceHistory(std::vector<std::pair<qint64, CAmount>> changes)
{
    std::stable_sort(changes.begin(), changes.end(), [](const auto& a, const auto& b) { return a.first < b.first; });
    Points points;
    CAmount balance{0};
    for (const auto& [time, amount] : changes) {
        balance += amount;
        if (!points.empty() && points.back().first == time) {
            points.back().second = balance;
        } else {
            points.emplace_back(time, balance);
        }
    }
    return points;
}

CAmount BalanceChart::BalanceAt(const Points& points, qint64 t)
{
    const auto it{std::upper_bound(points.begin(), points.end(), t, [](qint64 time, const auto& point) { return time < point.first; })};
    return it == points.begin() ? 0 : std::prev(it)->second;
}

void BalanceChart::recompute()
{
    const bool had_data{hasData()};
    std::vector<std::pair<qint64, CAmount>> changes;
    if (m_model) {
        changes.reserve(m_model->rowCount());
        for (int row{0}; row < m_model->rowCount(); ++row) {
            const QModelIndex index{m_model->index(row, 0)};
            changes.emplace_back(index.data(TransactionTableModel::DateRole).toDateTime().toSecsSinceEpoch(),
                                 index.data(TransactionTableModel::AmountRole).toLongLong());
        }
    }
    m_points = BalanceHistory(std::move(changes));
    if (had_data != hasData()) Q_EMIT hasDataChanged(hasData());
    update();
}

void BalanceChart::setRange(Range range)
{
    m_range = range;
    QSettings().setValue(RANGE_SETTING, static_cast<int>(range));
    update();
}

QRect BalanceChart::plotRect() const
{
    QRect plot{rect().adjusted(0, 0, 0, -2)};
    plot.setTop(m_header->geometry().bottom() + 8);
    return plot;
}

std::pair<qint64, qint64> BalanceChart::timeSpan() const
{
    const qint64 end{std::max(QDateTime::currentSecsSinceEpoch(), m_points.empty() ? 0 : m_points.back().first)};
    switch (m_range) {
    case Range::WEEK: return {end - 7 * DAY, end};
    case Range::MONTH: return {end - 30 * DAY, end};
    case Range::ALL: break;
    }
    const qint64 first{m_points.empty() ? end : m_points.front().first};
    return {std::min(first, end - DAY), end};
}

void BalanceChart::paintEvent(QPaintEvent*)
{
    if (m_points.empty()) return;
    QPainter painter(this);
    painter.setRenderHint(QPainter::Antialiasing);
    const QRect plot{plotRect()};
    if (plot.height() < 10 || plot.width() < 10) return;

    const auto [t0, t1]{timeSpan()};
    const CAmount start_balance{BalanceAt(m_points, t0)};
    CAmount low{std::min<CAmount>(0, start_balance)};
    CAmount high{start_balance};
    for (const auto& [time, balance] : m_points) {
        if (time <= t0 || time > t1) continue;
        low = std::min(low, balance);
        high = std::max(high, balance);
    }
    if (high <= low) high = low + COIN;
    const auto x{[&](qint64 t) { return plot.left() + double(t - t0) / double(t1 - t0) * plot.width(); }};
    const auto y{[&](CAmount b) { return plot.bottom() - double(b - low) / double(high - low) * plot.height(); }};

    // Step line: the balance stays the same between two transactions
    QPainterPath line;
    line.moveTo(x(t0), y(start_balance));
    CAmount balance{start_balance};
    for (const auto& [time, after] : m_points) {
        if (time <= t0 || time > t1) continue;
        line.lineTo(x(time), y(balance));
        line.lineTo(x(time), y(after));
        balance = after;
    }
    line.lineTo(x(t1), y(balance));

    QPainterPath area{line};
    area.lineTo(x(t1), plot.bottom());
    area.lineTo(x(t0), plot.bottom());
    area.closeSubpath();
    QColor top{VelincoinTheme::ACCENT};
    top.setAlpha(90);
    QColor bottom{VelincoinTheme::ACCENT};
    bottom.setAlpha(0);
    QLinearGradient fill(0, plot.top(), 0, plot.bottom());
    fill.setColorAt(0, top);
    fill.setColorAt(1, bottom);
    painter.fillPath(area, fill);
    painter.setPen(QPen(VelincoinTheme::BORDER, 1));
    painter.drawLine(plot.bottomLeft(), plot.bottomRight());
    painter.setPen(QPen(VelincoinTheme::ACCENT, 2, Qt::SolidLine, Qt::RoundCap, Qt::RoundJoin));
    painter.drawPath(line);

    // Balance at the mouse position
    if (m_hover_x >= plot.left() && m_hover_x <= plot.right()) {
        const qint64 t{t0 + qint64(double(m_hover_x - plot.left()) / plot.width() * (t1 - t0))};
        const CAmount at{BalanceAt(m_points, std::max(t, t0))};
        painter.setPen(QPen(VelincoinTheme::TEXT_FAINT, 1, Qt::DashLine));
        painter.drawLine(QPointF(m_hover_x, plot.top()), QPointF(m_hover_x, plot.bottom()));
        painter.setPen(Qt::NoPen);
        painter.setBrush(VelincoinTheme::ACCENT);
        painter.drawEllipse(QPointF(m_hover_x, y(at)), 4, 4);
    }
}

void BalanceChart::mouseMoveEvent(QMouseEvent* event)
{
    const QRect plot{plotRect()};
    const int mouse_x{static_cast<int>(event->position().x())};
    if (m_points.empty() || !plot.contains(event->position().toPoint())) {
        if (m_hover_x != -1) {
            m_hover_x = -1;
            QToolTip::hideText();
            update();
        }
        return;
    }
    m_hover_x = std::clamp(mouse_x, plot.left(), plot.right());
    const auto [t0, t1]{timeSpan()};
    const qint64 t{t0 + qint64(double(m_hover_x - plot.left()) / plot.width() * (t1 - t0))};
    QToolTip::showText(event->globalPosition().toPoint(),
                       tr("%1: %2").arg(GUIUtil::dateTimeStr(QDateTime::fromSecsSinceEpoch(t)),
                                        BitcoinUnits::formatWithUnit(m_unit, BalanceAt(m_points, t), false, BitcoinUnits::SeparatorStyle::ALWAYS)),
                       this);
    update();
}

void BalanceChart::leaveEvent(QEvent* event)
{
    m_hover_x = -1;
    QToolTip::hideText();
    update();
    QWidget::leaveEvent(event);
}

void BalanceChart::changeEvent(QEvent* event)
{
    if (event->type() == QEvent::PaletteChange || event->type() == QEvent::StyleChange) update();
    QWidget::changeEvent(event);
}
