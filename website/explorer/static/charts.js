// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.
//
// Draws the charts on the statistics page as SVG. No libraries.
// The data comes from <script type="application/json" id="chart-data">.

(function () {
  "use strict";

  var dataEl = document.getElementById("chart-data");
  if (!dataEl) return;
  var DATA = JSON.parse(dataEl.textContent);
  var SVG_NS = "http://www.w3.org/2000/svg";
  var HEIGHT = 240;

  var nf2 = new Intl.NumberFormat("de-CH", { maximumFractionDigits: 2 });
  var nf8 = new Intl.NumberFormat("de-CH", { maximumFractionDigits: 8 });
  var nfInt = new Intl.NumberFormat("de-CH", { maximumFractionDigits: 0 });
  var compact = new Intl.NumberFormat("de-CH", { notation: "compact", maximumFractionDigits: 1 });
  var small = new Intl.NumberFormat("de-CH", { maximumSignificantDigits: 3 });

  var CHARTS = {
    supply: {
      kind: "line",
      value: function (v) { return nf8.format(v) + " VLC"; }
    },
    difficulty: {
      kind: "line",
      value: function (v) { return v !== 0 && Math.abs(v) < 0.001 ? v.toExponential(3) : nf8.format(v); }
    },
    blocks_per_day: {
      kind: "bar",
      value: function (v) { return nfInt.format(v) + (v === 1 ? " Block" : " Blöcke"); }
    },
    txs_per_day: {
      kind: "bar",
      value: function (v) { return nfInt.format(v) + (v === 1 ? " Transaktion" : " Transaktionen"); }
    }
  };

  // ---- helpers -------------------------------------------------------------

  function svgEl(name, attrs, parent) {
    var e = document.createElementNS(SVG_NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function axisValue(v) {
    if (v === 0) return "0";
    var a = Math.abs(v);
    if (a < 0.001) return v.toExponential(1);
    if (a >= 1e6) return compact.format(v);
    if (a < 1) return small.format(v);  // 0.0039 instead of 0
    return nf2.format(v);
  }

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function dateLabel(t, withTime) {
    var d = new Date(t * 1000);
    var s = pad2(d.getUTCDate()) + "." + pad2(d.getUTCMonth() + 1) + ".";
    if (withTime) s += " " + pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes());
    return s;
  }

  function dateTimeFull(t) {
    var d = new Date(t * 1000);
    return pad2(d.getUTCDate()) + "." + pad2(d.getUTCMonth() + 1) + "." + d.getUTCFullYear() + " " +
      pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes()) + " UTC";
  }

  function dayShort(s) { var p = s.split("-"); return p[2] + "." + p[1] + "."; }
  function dayFull(s) { var p = s.split("-"); return p[2] + "." + p[1] + "." + p[0]; }

  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(raw)));
    var f = raw / p;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p;
  }

  // Round tick values from 0 up to at least max.
  function yTicks(max, integer) {
    if (!(max > 0)) max = 1;
    var step = niceStep(max / 4);
    if (integer) step = Math.max(1, Math.round(step));
    var ticks = [];
    for (var i = 0; ; i++) {
      var v = i * step;
      ticks.push(v);
      if (v >= max) break;
    }
    return ticks;
  }

  function maxOf(points) {
    var m = 0;
    for (var i = 0; i < points.length; i++) if (points[i].v > m) m = points[i].v;
    return m;
  }

  // Tooltip: one per figure, filled with textContent only.
  function tooltip(fig) {
    var tip = fig.querySelector(".tip");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "tip";
      tip.hidden = true;
      var row = document.createElement("div");
      row.className = "tip-value";
      var key = document.createElement("span");
      key.className = "tip-key";
      var val = document.createElement("span");
      row.appendChild(key);
      row.appendChild(val);
      var sub = document.createElement("div");
      sub.className = "tip-sub";
      tip.appendChild(row);
      tip.appendChild(sub);
      fig.appendChild(tip);
    }
    var plot = fig.querySelector(".plot");
    return {
      show: function (x, y, value, subText) {
        tip.querySelector(".tip-value span:last-child").textContent = value;
        tip.querySelector(".tip-sub").textContent = subText;
        tip.hidden = false;
        var w = tip.offsetWidth, hgt = tip.offsetHeight;
        var left = plot.offsetLeft + x - w / 2;
        left = Math.max(4, Math.min(fig.clientWidth - w - 4, left));
        var top = plot.offsetTop + y - hgt - 14;
        if (top < 4) top = plot.offsetTop + y + 14;
        tip.style.left = left + "px";
        tip.style.top = top + "px";
      },
      hide: function () { tip.hidden = true; }
    };
  }

  function baseSvg(fig, plot, width) {
    var title = fig.querySelector(".chart-title").textContent;
    return svgEl("svg", {
      viewBox: "0 0 " + width + " " + HEIGHT,
      width: width,
      height: HEIGHT,
      role: "img",
      tabindex: "0",
      "aria-label": title + ". Mit den Pfeiltasten durch die Werte gehen. Alle Werte stehen auch in der Tabelle."
    }, plot);
  }

  function drawYAxis(svg, ticks, ml, mt, pw, ph, yMax) {
    ticks.forEach(function (v, i) {
      var y = mt + ph - (v / yMax) * ph;
      svgEl("line", { class: i === 0 ? "axis-line" : "grid-line", x1: ml, x2: ml + pw, y1: y, y2: y }, svg);
      var t = svgEl("text", { class: "tick", x: ml - 8, y: y, "text-anchor": "end", "dominant-baseline": "middle" }, svg);
      t.textContent = axisValue(v);
    });
  }

  function leftMargin(ticks) {
    var longest = 0;
    ticks.forEach(function (v) { longest = Math.max(longest, axisValue(v).length); });
    return Math.round(longest * 6.6 + 14);
  }

  function keyboard(svg, count, show, hide) {
    var current = -1;
    svg.addEventListener("focus", function () { current = count - 1; show(current); });
    svg.addEventListener("blur", hide);
    svg.addEventListener("keydown", function (e) {
      var next = current;
      if (e.key === "ArrowLeft") next = Math.max(0, current - 1);
      else if (e.key === "ArrowRight") next = Math.min(count - 1, current + 1);
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = count - 1;
      else return;
      e.preventDefault();
      current = next;
      show(current);
    });
  }

  // ---- line chart ----------------------------------------------------------

  function lineChart(fig, points, spec) {
    var plot = fig.querySelector(".plot");
    plot.textContent = "";
    var W = Math.max(260, plot.clientWidth);
    var yMaxRaw = maxOf(points);
    var ticks = yTicks(yMaxRaw, false);
    var yMax = ticks[ticks.length - 1];
    var ml = leftMargin(ticks), mr = 20, mt = 22, mb = 28;
    var pw = W - ml - mr, ph = HEIGHT - mt - mb;
    var t0 = points[0].t, t1 = points[points.length - 1].t;
    if (t1 === t0) { t0 -= 3600; t1 += 3600; }
    function x(t) { return ml + ((t - t0) / (t1 - t0)) * pw; }
    function y(v) { return mt + ph - (v / yMax) * ph; }

    var svg = baseSvg(fig, plot, W);
    drawYAxis(svg, ticks, ml, mt, pw, ph, yMax);

    // x axis: a few evenly spaced dates
    var withTime = (t1 - t0) < 3 * 86400;
    var n = Math.max(2, Math.min(6, Math.floor(pw / 100)));
    for (var i = 0; i < n; i++) {
      var tt = t0 + ((t1 - t0) * i) / (n - 1);
      var lab = svgEl("text", {
        class: "tick", x: x(tt), y: HEIGHT - 8,
        "text-anchor": i === 0 ? "start" : i === n - 1 ? "end" : "middle"
      }, svg);
      lab.textContent = dateLabel(tt, withTime);
    }

    var d = "";
    points.forEach(function (p, i) { d += (i ? "L" : "M") + x(p.t).toFixed(1) + "," + y(p.v).toFixed(1); });
    var first = points[0], last = points[points.length - 1];
    if (points.length > 1) {
      svgEl("path", {
        class: "series-area",
        d: d + "L" + x(last.t).toFixed(1) + "," + y(0) + "L" + x(first.t).toFixed(1) + "," + y(0) + "Z"
      }, svg);
      svgEl("path", { class: "series-line", d: d }, svg);
    }
    svgEl("circle", { class: "end-dot", cx: x(last.t), cy: y(last.v), r: 4 }, svg);
    var endLabel = svgEl("text", { class: "end-label", x: x(last.t) - 8, y: y(last.v) - 10, "text-anchor": "end" }, svg);
    endLabel.textContent = axisValue(last.v);

    var cross = svgEl("line", { class: "crosshair", y1: mt, y2: mt + ph, visibility: "hidden" }, svg);
    var dot = svgEl("circle", { class: "end-dot", r: 4, visibility: "hidden" }, svg);
    var hit = svgEl("rect", { class: "hit", x: ml, y: 0, width: pw, height: mt + ph }, svg);
    var tip = tooltip(fig);
    var xs = points.map(function (p) { return x(p.t); });

    function show(i) {
      var p = points[i], cx = xs[i], cy = y(p.v);
      cross.setAttribute("x1", cx);
      cross.setAttribute("x2", cx);
      cross.setAttribute("visibility", "visible");
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", cy);
      dot.setAttribute("visibility", "visible");
      tip.show(cx, cy, spec.value(p.v), "Block " + nfInt.format(p.h) + " · " + dateTimeFull(p.t));
    }
    function hide() {
      cross.setAttribute("visibility", "hidden");
      dot.setAttribute("visibility", "hidden");
      tip.hide();
    }
    function nearest(px) {
      var lo = 0, hi = xs.length - 1;
      while (hi - lo > 1) {
        var mid = (lo + hi) >> 1;
        if (xs[mid] < px) lo = mid; else hi = mid;
      }
      return Math.abs(xs[lo] - px) <= Math.abs(xs[hi] - px) ? lo : hi;
    }
    hit.addEventListener("pointermove", function (e) {
      var r = svg.getBoundingClientRect();
      show(nearest(((e.clientX - r.left) * W) / r.width));
    });
    hit.addEventListener("pointerleave", hide);
    keyboard(svg, points.length, show, hide);
  }

  // ---- bar chart -----------------------------------------------------------

  function barChart(fig, points, spec) {
    var plot = fig.querySelector(".plot");
    plot.textContent = "";
    var W = Math.max(260, plot.clientWidth);
    var ticks = yTicks(maxOf(points), true);
    var yMax = ticks[ticks.length - 1];
    var ml = leftMargin(ticks), mr = 20, mt = 22, mb = 28;
    var pw = W - ml - mr, ph = HEIGHT - mt - mb;
    var n = points.length;
    var band = pw / n;
    var bw = Math.max(1, Math.min(24, band - 2));
    var base = mt + ph;

    var svg = baseSvg(fig, plot, W);
    drawYAxis(svg, ticks, ml, mt, pw, ph, yMax);

    var every = Math.ceil(n / Math.max(1, Math.floor(pw / 56)));
    var bars = [];
    points.forEach(function (p, i) {
      var cx = ml + band * (i + 0.5);
      var bh = (p.v / yMax) * ph;
      var bar = null;
      if (bh > 0) {
        var r = Math.min(4, bw / 2, bh);
        var x0 = cx - bw / 2, y0 = base - bh;
        bar = svgEl("path", {
          class: "bar",
          d: "M" + x0 + "," + base + "L" + x0 + "," + (y0 + r) + "Q" + x0 + "," + y0 + " " + (x0 + r) + "," + y0 +
             "L" + (x0 + bw - r) + "," + y0 + "Q" + (x0 + bw) + "," + y0 + " " + (x0 + bw) + "," + (y0 + r) +
             "L" + (x0 + bw) + "," + base + "Z"
        }, svg);
      }
      bars.push(bar);
      if (i % every === (n - 1) % every) {
        var lab = svgEl("text", { class: "tick", x: cx, y: HEIGHT - 8, "text-anchor": "middle" }, svg);
        lab.textContent = dayShort(p.d);
      }
    });

    var tip = tooltip(fig);
    var active = -1;
    function show(i) {
      hide();
      active = i;
      if (bars[i]) bars[i].classList.add("hover");
      var p = points[i];
      tip.show(ml + band * (i + 0.5), base - (p.v / yMax) * ph, spec.value(p.v), dayFull(p.d));
    }
    function hide() {
      if (active >= 0 && bars[active]) bars[active].classList.remove("hover");
      active = -1;
      tip.hide();
    }
    points.forEach(function (p, i) {
      var hit = svgEl("rect", { class: "hit", x: ml + band * i, y: mt, width: band, height: ph }, svg);
      hit.addEventListener("pointerenter", function () { show(i); });
      hit.addEventListener("pointerleave", hide);
    });
    keyboard(svg, n, show, hide);
  }

  // ---- render --------------------------------------------------------------

  function renderAll() {
    var figs = document.querySelectorAll("figure.chart[data-chart]");
    for (var i = 0; i < figs.length; i++) {
      var id = figs[i].getAttribute("data-chart");
      var spec = CHARTS[id];
      var points = DATA[id];
      if (!spec || !points || points.length === 0) continue;
      if (spec.kind === "line") lineChart(figs[i], points, spec);
      else barChart(figs[i], points, spec);
    }
  }

  var timer = null;
  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(renderAll, 150);
  });
  renderAll();
})();
