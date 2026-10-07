// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_BALANCECHART_H
#define BITCOIN_QT_BALANCECHART_H

#include <consensus/amount.h>
#include <qt/bitcoinunits.h>

#include <QWidget>

#include <utility>
#include <vector>

class QAbstractItemModel;
class QButtonGroup;
class QTimer;

/**
 * Small chart of the balance over the last week, month or all time, on the
 * overview. Drawn with QPainter (Qt Charts is not part of the build). The
 * balance after every transaction comes from the wallet's transaction list,
 * so it is a step line: flat between transactions.
 */
class BalanceChart : public QWidget
{
    Q_OBJECT

public:
    enum class Range { WEEK, MONTH, ALL };

    //! (time, balance after this transaction), oldest first
    using Points = std::vector<std::pair<qint64, CAmount>>;

    explicit BalanceChart(QWidget* parent = nullptr);

    /** Transactions to chart: rows with TransactionTableModel's DateRole and AmountRole. */
    void setModel(QAbstractItemModel* model);
    void setDisplayUnit(BitcoinUnit unit);
    bool hasData() const { return !m_points.empty(); }

    /** Balance after each change, from (time, amount) pairs in any order. */
    static Points BalanceHistory(std::vector<std::pair<qint64, CAmount>> changes);
    /** The balance at time t: the last point not after t, or 0 before the first. */
    static CAmount BalanceAt(const Points& points, qint64 t);

    QSize sizeHint() const override;

Q_SIGNALS:
    //! The chart got its first transaction or lost its last one
    void hasDataChanged(bool has_data);

protected:
    void paintEvent(QPaintEvent* event) override;
    void mouseMoveEvent(QMouseEvent* event) override;
    void leaveEvent(QEvent* event) override;
    void changeEvent(QEvent* event) override;

private:
    void recompute();
    void setRange(Range range);
    QRect plotRect() const;
    //! First and last time shown
    std::pair<qint64, qint64> timeSpan() const;

    QAbstractItemModel* m_model{nullptr};
    BitcoinUnit m_unit{BitcoinUnit::BTC};
    Points m_points;
    Range m_range{Range::MONTH};
    QWidget* m_header{nullptr};
    QButtonGroup* m_buttons{nullptr};
    QTimer* m_recompute_timer{nullptr};
    int m_hover_x{-1};
};

#endif // BITCOIN_QT_BALANCECHART_H
