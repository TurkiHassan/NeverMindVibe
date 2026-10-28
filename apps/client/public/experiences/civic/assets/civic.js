/* Civic, split stage. One persistent stage sits over four spacer acts (data-sc-act="pin").
   Scroll position picks the divider position; the divider can also be dragged (mouse, touch)
   or moved with the keyboard (role="slider"). Every figure shown comes from #cv-data, which
   carries the sample content verbatim; nothing is interpolated or derived. */
(function () {
  "use strict";
  var DATA = JSON.parse(document.getElementById("cv-data").textContent);
  var NB = DATA.nb, UI = DATA.ui, MAX = DATA.max;
  var RTL = document.documentElement.dir === "rtl";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var phoneMQ = matchMedia("(max-width: 860px)");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };
  var ramp = function (p, a, b) { return b <= a ? (p >= a ? 1 : 0) : clamp((p - a) / (b - a), 0, 1); };
  var sm = function (t) { return t * t * (3 - 2 * t); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var pw = function (p, ks, vs) { for (var i = 1; i < ks.length; i++) if (p <= ks[i]) return lerp(vs[i - 1], vs[i], (p - ks[i - 1]) / (ks[i] - ks[i - 1])); return vs[vs.length - 1]; };
  var U = [0.09, 0.27, 0.43, 0.7, 0.89];                 // district centres, as a fraction from the start edge
  var YF = [0.44, 0.52, 0.4, 0.5, 0.46];             // pin heights, as a fraction of the map height

  var stage = $("#stage"), rail = $(".cv-rail"), acts = $$("[data-sc-act]"), band = $(".cv-band");
  var tab = $(".cv-tab"), lblOld = $(".cv-lbl--old"), lblNew = $(".cv-lbl--new"), dock = $(".cv-dock");
  var heroEl = $(".cv-hero"), cardsEl = $(".cv-cards"), cta = $(".cv-cta"), ctaM = $(".cv-cta-m");
  var layerNew = $(".cv-layer--new"), layerOld = $(".cv-layer--old");
  var G = { W: 0, H: 0, Hm: 0, ph: false, tabW: 0, lblOld: 0, lblNew: 0 };

  function minText(n) { return typeof UI.min === "string" ? n + " " + UI.min : n + " " + (n <= 10 ? UI.min[0] : UI.min[1]); }
  function isoNum(n) { return "⁦" + n + "⁩"; }

  /* ------------------------------------------------------------ the map == */
  function rng(seed) { return function () { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function escS(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function esc(s) { s = String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); return RTL ? s.replace(/(\d+)/g, '<bdi dir="ltr">$1</bdi>') : s; }

  function geometry() {
    var W = G.W, H = G.H, ph = G.ph, rnd = rng(14);
    var X = function (u) { return RTL ? W - u : u; };
    var cell = ph ? 36 : Math.round(W / 26);
    var g = { X: X, cell: cell, minor: "", major: "", blds: "", parks: "", river: "", rw: ph ? 16 : 26 };
    var riverU = function (y) { return 0.6 * W + Math.sin(y / H * 3.4) * 0.03 * W; };
    var i, j;
    for (i = 0; i * cell < W + cell; i++) {
      var u = i * cell + cell / 2, tgt = (i % 5 === 2) ? "major" : "minor";
      g[tgt] += "M" + X(u).toFixed(1) + " 0V" + H;
    }
    for (j = 0; j * cell < H + cell; j++) {
      var y = j * cell + cell / 2, t2 = (j % 5 === 2) ? "major" : "minor";
      g[t2] += "M0 " + y.toFixed(1) + "H" + W;
    }
    for (i = 0; i * cell < W; i++) for (j = 0; j * cell < H; j++) {
      var cu = i * cell + cell, cy = j * cell + cell; // building sits in the block right/below the street at (i, j)
      var mu = cu - cell / 2 + cell / 2, my = cy - cell / 2 + cell / 2;
      var r1 = rnd(), r2 = rnd(), r3 = rnd();
      if (Math.abs(mu - riverU(my)) < g.rw / 2 + cell * 0.55) continue;
      var bw = cell - 12 - r1 * 10, bh = cell - 12 - r2 * 10;
      var bu = i * cell + cell / 2 + 6 + (cell - 12 - bw) * r3, by = j * cell + cell / 2 + 6 + (cell - 12 - bh) * r1;
      if (r3 > 0.94) { g.parks += '<rect class="pk" x="' + (X(bu) - (RTL ? (cell - 6) : 0)).toFixed(1) + '" y="' + by.toFixed(1) + '" width="' + (cell - 6) + '" height="' + (cell - 6) + '" rx="6"/>'; continue; }
      if (r1 > 0.9) continue;
      g.blds += '<rect class="bd" x="' + (X(bu) - (RTL ? bw : 0)).toFixed(1) + '" y="' + by.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="2"/>';
    }
    var d = "";
    for (var yy = -20; yy <= H + 20; yy += 24) d += (d ? "L" : "M") + X(riverU(yy)).toFixed(1) + " " + yy;
    g.river = d;
    return g;
  }

  function layer(kind, g) {
    var W = G.W, H = G.H, Hm = G.Hm, ph = G.ph, X = g.X, old = kind === "old";
    var s = '<svg class="cv-svg cv-svg--' + kind + '" viewBox="0 0 ' + W + " " + H + '" aria-hidden="true" focusable="false">';
    s += '<rect class="g" width="' + W + '" height="' + H + '"/>' + g.parks;
    s += '<path class="rv" stroke-width="' + g.rw + '" d="' + g.river + '"/>';
    s += '<path class="st" stroke-width="3" d="' + g.minor + '"/><path class="st" stroke-width="7" d="' + g.major + '"/>' + g.blds;
    [0.18, 0.35, 0.565, 0.795].forEach(function (f) { s += '<path class="dv" d="M' + X(f * W).toFixed(1) + " 0V" + (Hm - 6).toFixed(1) + '"/>'; });
    var gap = ph ? 26 : W * 0.07;
    NB.forEach(function (n, i) {
      var u = U[i] * W, py = YF[i] * Hm, sg = i % 2 ? 1 : -1, px = X(u);
      if (i === 3) {                                  // Hartley Heights: nothing inside the 20 minute walk
        var rr = ph ? 30 : W * 0.085;
        s += '<circle class="ring" cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="' + rr.toFixed(1) + '"/>';
        s += '<text class="rl" x="' + px.toFixed(1) + '" y="' + (py + rr + 20).toFixed(1) + '"' + (ph ? ' style="font-size:11px"' : "") + ">" + escS(DATA.ring) + "</text>";
      } else {
        var ru = X(u + sg * gap), ru2 = X(u - sg * gap * 0.8);
        if (old) {
          var d1 = "M" + ru.toFixed(1) + " " + py.toFixed(1) + "L" + X(u + sg * gap * 1.2).toFixed(1) + " " + (py + 80).toFixed(1) + "L" + X(u - sg * gap * 0.7).toFixed(1) + " " + (py + 80).toFixed(1) + "L" + X(u - sg * gap * 0.7).toFixed(1) + " " + (py - 64).toFixed(1) + "L" + X(u + sg * gap * 0.5).toFixed(1) + " " + (py - 64).toFixed(1) + "L" + px.toFixed(1) + " " + py.toFixed(1);
          s += '<path class="dt" d="' + d1 + '"/>';
        } else {
          s += '<path class="rt" d="M' + ru.toFixed(1) + " " + py.toFixed(1) + "L" + px.toFixed(1) + " " + py.toFixed(1) + '"/>';
          if (!ph) s += '<path class="rt" d="M' + ru2.toFixed(1) + " " + (py + 64).toFixed(1) + "V" + py.toFixed(1) + "H" + px.toFixed(1) + '"/>';
        }
        s += '<circle class="rs" cx="' + ru.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="5"/>';
        if (!ph || !old) s += '<circle class="rs" cx="' + ru2.toFixed(1) + '" cy="' + (py + 64).toFixed(1) + '" r="' + (ph ? 0 : 5) + '"/>';
        s += '<circle class="pn" cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="13"/>';
        if (!old) s += '<path class="pg" d="M' + (px - 5).toFixed(1) + " " + (py - 1.5).toFixed(1) + "h10v3h-10z M" + (px - 1.5).toFixed(1) + " " + (py - 5).toFixed(1) + 'h3v10h-3z"/>';
        if (!old && !ph && n.svc) s += '<text class="sv" x="' + px.toFixed(1) + '" y="' + (py + 36).toFixed(1) + '">' + escS(n.svc) + "</text>";
      }
      var fs = ph ? ' style="font-size:11.5px"' : "";
      var words = ph && n.name.indexOf(" ") > 0 ? n.name.split(" ") : [n.name];
      var ny = py - (ph ? 56 : 52) - (words.length - 1) * 13;
      var nm = '<text class="nm" x="' + px.toFixed(1) + '" y="' + ny.toFixed(1) + '"' + fs + ">";
      words.forEach(function (w, k) { nm += '<tspan x="' + px.toFixed(1) + '" dy="' + (k ? 13 : 0) + '">' + escS(w) + "</tspan>"; });
      s += nm + "</text>";
      var shown = old ? (i === 0 ? n.was : null) : n.v;
      if (shown != null) s += '<text class="mn" x="' + px.toFixed(1) + '" y="' + (ny + (words.length - 1) * 13 + 19).toFixed(1) + '"' + fs + ">" + escS(minText(isoNum(shown))) + "</text>";
    });
    return s + "</svg>";
  }

  function build() {
    G.W = stage.clientWidth; G.H = stage.clientHeight; G.ph = phoneMQ.matches; G.Hm = band.offsetTop;
    var g = geometry();
    layerNew.innerHTML = layer("new", g); layerOld.innerHTML = layer("old", g);
    stage.style.setProperty("--tabtop", Math.round(G.Hm * 0.7) + "px");
    G.tabW = tab.offsetWidth; G.lblOld = lblOld.offsetWidth; G.lblNew = lblNew.offsetWidth;
  }

  /* ------------------------------------------------------------ readouts == */
  var cache = {};
  function setHTML(el, k, v) { if (cache[k] !== v) { cache[k] = v; el.innerHTML = v; } }
  var tName = $(".cv-tn span"), tNum = $(".cv-tv b"), tUnit = $(".cv-tv small"), tWas = $(".cv-tw"), tBar = $(".cv-bar i");
  var oName = $(".cv-card--old .nm2"), oBig = $(".cv-card--old .cv-big"), oNote = $(".cv-card--old .cv-cn");
  var nName = $(".cv-card--new .nm2"), nTitle = $(".cv-card--new .cv-ct"), nMeta = $(".cv-card--new .cv-cm"), nNote = $(".cv-card--new .cv-cn");
  function setReadouts(i) {
    var n = NB[i];
    setHTML(tName, "tn", esc(n.name)); setHTML(tNum, "tv", "<bdi dir=\"ltr\">" + n.v + "</bdi>");
    setHTML(tUnit, "tu", esc(typeof UI.min === "string" ? UI.min : (n.v <= 10 ? UI.min[0] : UI.min[1])));
    setHTML(tWas, "tw", n.was != null ? esc(UI.was) + " <bdi dir=\"ltr\">" + n.was + "</bdi>" : "");
    tBar.style.setProperty("--w", (n.v / MAX).toFixed(4));
    setHTML(oName, "on", esc(n.name)); setHTML(oNote, "ono", esc(n.note));
    setHTML(oBig, "ob", n.was != null ? "<bdi dir=\"ltr\">" + n.was + "</bdi> <small>" + esc(typeof UI.min === "string" ? UI.min : UI.min[1]) + "</small>" : "");
    oBig.hidden = n.was == null;
    setHTML(nName, "nn", esc(n.name));
    if (n.cs) { setHTML(nTitle, "nt", esc(n.cs.t)); setHTML(nMeta, "nm", n.cs.m); setHTML(nNote, "nno", esc(n.cs.n)); }
    else { setHTML(nTitle, "nt", esc(UI.nocase)); setHTML(nMeta, "nm", ""); setHTML(nNote, "nno", ""); }
    tab.setAttribute("aria-valuetext", n.name + ", " + minText(n.v) + (n.was != null ? ", " + UI.was + " " + n.was : ""));
  }

  /* ------------------------------------------------------------ state == */
  var S = { d: 0.5, target: 0.5, manual: null, manualY: 0, drag: false, idx: -1, closeMode: false };
  function timeline() {
    var y = scrollY, tops = acts.map(function (a) { return a.getBoundingClientRect().top + y; });
    var railTop = rail.getBoundingClientRect().top + y, maxY = railTop + rail.offsetHeight - innerHeight;
    var k = 0; for (var i = 0; i < acts.length; i++) if (y >= tops[i] - 1) k = i;
    var end = k < acts.length - 1 ? tops[k + 1] : maxY;
    return { k: k, q: clamp((y - tops[k]) / Math.max(1, end - tops[k]), 0, 1) };
  }
  function scrollD(k, q) {
    if (k === 0) return pw(q, [0, 0.2, 0.78, 1], [0.5, 0.5, U[4] - 0.01, U[4] - 0.01]);
    if (k === 1) return pw(q, [0, 0.12, 0.74, 1], [U[4] - 0.01, U[4] - 0.01, U[2], U[2]]);
    if (k === 2) return pw(q, [0, 0.1, 0.78, 1], [U[2], U[2], U[0], U[0]]);
    return pw(q, [0, 0.25, 0.6, 1], [U[0], U[0], 0, 0]);
  }
  function setManual(d) { S.manual = clamp(d, 0.04, 0.96); S.manualY = scrollY; S.d = S.manual; }

  var shownT = null, last = performance.now();
  function frame(now) {
    var dt = Math.min(0.1, (now - last) / 1000); last = now;
    var T = timeline(), k = T.k, q = T.q;
    var closing = k === 3 && q > 0.2;
    S.closeMode = closing;
    if (closing || (S.manual != null && Math.abs(scrollY - S.manualY) > 30)) S.manual = null;
    var target = S.manual != null ? S.manual : scrollD(k, q);
    if (S.drag || reduce || S.manual != null) S.d = target;
    else S.d += (target - S.d) * (1 - Math.exp(-dt / 0.07));
    if (Math.abs(S.d - target) < 0.0004) S.d = target;
    render(k, q);
    requestAnimationFrame(frame);
  }

  function render(k, q) {
    var W = G.W, d = S.d, dpx = d * W, dx = RTL ? W - dpx : dpx;
    stage.style.setProperty("--dpx", dpx.toFixed(1) + "px"); stage.style.setProperty("--dx", dx.toFixed(1) + "px");
    var idx = 0; for (var z = 1; z < 5; z++) if (Math.abs(d - U[z]) < Math.abs(d - U[idx])) idx = z;
    if (idx !== S.idx) { S.idx = idx; setReadouts(idx); }
    var heroO = k === 0 ? 1 - sm(ramp(q, 0.16, 0.3)) : 0;
    var cardsO = k === 0 ? sm(ramp(q, 0.24, 0.38)) : (k < 3 ? 1 : 1 - sm(ramp(q, 0.2, 0.34)));
    if (S.manual != null && k === 0) { heroO = 0; cardsO = 1; }
    var out = k === 3 ? sm(ramp(q, 0.3, 0.46)) : 0;
    var closeO = k === 3 ? sm(ramp(q, 0.46, 0.64)) : 0;
    var tabO = k === 3 ? 1 - sm(ramp(q, 0.22, 0.34)) : 1;
    vis(heroEl, heroO); vis(cardsEl, cardsO); vis(cta, closeO); vis(ctaM, closeO);
    band.setAttribute("data-out", out > 0.5 ? "1" : "0");
    vis(tab, tabO); vis(stage.querySelector(".cv-strip"), tabO); $(".cv-line").style.opacity = (1 - sm(ramp(q, 0.3, 0.46)) * (k === 3 ? 1 : 0)).toFixed(2);
    var roomOld = d * W, roomNew = (1 - d) * W;
    vis(lblOld, tabO * (roomOld > G.lblOld + 24 ? 1 : 0)); vis(lblNew, tabO * (roomNew > G.lblNew + 24 ? 1 : 0));
    var dockO = k === 3 ? sm(ramp(q, 0.4, 0.55)) : 0; vis(dock, dockO);
    // keep the tab inside the stage
    var half = G.tabW / 2, adj = clamp(dx, half + 8, W - half - 8) - dx;
    tab.style.setProperty("--tadj", adj.toFixed(1) + "px");
    tab.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    var hold = (k === 0 && q <= 0.14) || (k === 3 && q >= 0.8);
    stage.setAttribute("data-sc-verify-state", [k, Math.round(d * 100), idx, Math.round(heroO * 10), Math.round(cardsO * 10), Math.round(closeO * 10), Math.round(tabO * 10), Math.round(out * 10)].join("|"));
    if (hold) stage.setAttribute("data-sc-verify-hold", "true"); else stage.removeAttribute("data-sc-verify-hold");
  }
  function vis(el, o) {
    o = clamp(o, 0, 1);
    var v = o.toFixed(2); if (el._o !== v) { el._o = v; el.style.opacity = v; }
    var off = o < 0.02; if (el._off !== off) { el._off = off; el.classList.toggle("is-off", off); }
  }

  /* ------------------------------------------------------------ the divider: pointer + keyboard == */
  function posToD(cx) { var r = stage.getBoundingClientRect(), x = cx - r.left; return RTL ? 1 - x / r.width : x / r.width; }
  var grab = 0;
  function onMove(e) { if (!S.drag) return; setManual(posToD(e.clientX) + grab); }
  function onUp() { S.drag = false; stage.classList.remove("is-drag"); window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); window.removeEventListener("pointercancel", onUp); }
  function down(e, jump) {
    if (S.closeMode || (e.pointerType === "mouse" && e.button !== 0)) return;
    S.drag = true; stage.classList.add("is-drag");
    grab = jump ? 0 : S.d - posToD(e.clientX);
    if (e.pointerType === "mouse") e.preventDefault();
    setManual(posToD(e.clientX) + grab);
    window.addEventListener("pointermove", onMove); window.addEventListener("pointerup", onUp); window.addEventListener("pointercancel", onUp);
  }
  tab.addEventListener("pointerdown", function (e) { down(e, false); });
  $(".cv-strip").addEventListener("pointerdown", function (e) { down(e, false); });
  $(".cv-hit").addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse") down(e, true); });
  tab.addEventListener("keydown", function (e) {
    var step = e.shiftKey ? 0.1 : 0.03, v = S.d, handled = true, sgn = RTL ? -1 : 1;
    if (e.key === "ArrowLeft") v -= sgn * step; else if (e.key === "ArrowRight") v += sgn * step;
    else if (e.key === "ArrowUp") v += step; else if (e.key === "ArrowDown") v -= step;
    else if (e.key === "PageUp") v += 0.1; else if (e.key === "PageDown") v -= 0.1;
    else if (e.key === "Home") v = 0.04; else if (e.key === "End") v = 0.96; else handled = false;
    if (handled) { e.preventDefault(); setManual(v); }
  });

  /* ------------------------------------------------------------ navigation == */
  function railTop() { return rail.getBoundingClientRect().top + scrollY; }
  function toY(y, cb) { scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" }); if (cb) setTimeout(cb, reduce ? 60 : 900); }
  function goTop() { toY(0); }
  function goEnd() {
    if (phoneMQ.matches) { var f = $("#close-m"); toY(f.getBoundingClientRect().top + scrollY - 8, function () { var h = $("#cv-cta-h"); if (h) h.focus({ preventScroll: true }); }); return; }
    toY(railTop() + rail.offsetHeight - innerHeight, function () { var h = $("#cv-cta-h"); if (h) h.focus({ preventScroll: true }); });
  }
  $$("[data-go='top']").forEach(function (b) { b.addEventListener("click", goTop); });
  $$("[data-go='end']").forEach(function (b) { b.addEventListener("click", function (e) { e.preventDefault(); goEnd(); }); });

  /* the close body lives in the stage on wide screens and in the page flow on phones */
  var body = $(".cv-cb"), closem = $("#close-m");
  function place() { var host = phoneMQ.matches ? closem : cta; if (body.parentNode !== host) host.appendChild(body); }

  /* the form is local only: nothing is sent */
  $$(".cv-form").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var r = $(".cv-reply", f), name = f.elements.name.value.trim(), mail = f.elements.email.value.trim();
      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { r.textContent = f.getAttribute("data-err"); (name ? f.elements.email : f.elements.name).focus(); return; }
      r.textContent = f.getAttribute("data-ok");
    });
  });

  /* ------------------------------------------------------------ boot == */
  place(); build();
  var rz = 0;
  addEventListener("resize", function () { cancelAnimationFrame(rz); rz = requestAnimationFrame(function () { place(); build(); }); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { G.tabW = tab.offsetWidth; G.lblOld = lblOld.offsetWidth; G.lblNew = lblNew.offsetWidth; });
  requestAnimationFrame(frame);
})();
