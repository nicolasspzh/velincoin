// Copyright (c) 2026 The Velincoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.
//
// Search of the static explorer export. There is no server, so the search
// uses the list of blocks, transactions and addresses in search-index.js.

(function () {
  "use strict";

  var nf = new Intl.NumberFormat("de-CH");
  var info = window.VLC_SEARCH;

  // Time of the export and confirmations come from search-index.js, so the
  // pages themselves do not change with every new block.
  if (info && typeof info.tip === "number") {
    var stamp = document.querySelector("[data-snapshot]");
    if (stamp) {
      stamp.textContent = "Stand vom " + info.time_text + ", Blockhöhe " + nf.format(info.tip) +
        ". Neue Blöcke erscheinen mit der nächsten Aktualisierung.";
    }
    var confs = document.querySelectorAll("[data-confs]");
    for (var i = 0; i < confs.length; i++) {
      var n = info.tip - parseInt(confs[i].getAttribute("data-confs"), 10) + 1;
      var words = confs[i].getAttribute("data-words") === "1";
      confs[i].textContent = nf.format(n) + (words ? (n === 1 ? " Bestätigung" : " Bestätigungen") : "");
    }
  }

  var form = document.querySelector("form.search");
  if (!form) return;
  var base = form.getAttribute("data-base") || "";

  function message(text) {
    var p = form.querySelector(".search-msg");
    if (!p) {
      p = document.createElement("p");
      p.className = "search-msg";
      p.setAttribute("role", "status");
      form.appendChild(p);
    }
    p.textContent = text;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var index = window.VLC_SEARCH || { heights: [], txids: [], addresses: [] };
    var q = form.elements.q.value.trim();
    var target = null;
    if (/^\d{1,10}$/.test(q)) {
      var byHeight = index.heights[parseInt(q, 10)];
      if (byHeight) target = "block/" + byHeight + ".html";
    } else if (/^[0-9a-fA-F]{64}$/.test(q)) {
      var hex = q.toLowerCase();
      if (index.heights.indexOf(hex) >= 0) target = "block/" + hex + ".html";
      else if (index.txids.indexOf(hex) >= 0) target = "tx/" + hex + ".html";
    } else {
      var address = /^(vlc1|tvlc1|bcrt1)/i.test(q) ? q.toLowerCase() : q;
      if (index.addresses.indexOf(address) >= 0) target = "address/" + address + ".html";
    }
    if (target) {
      window.location.href = base + target;
    } else {
      message("Nichts gefunden für «" + q + "». Der Explorer zeigt nur Daten bis zum letzten Export.");
    }
  });
})();
