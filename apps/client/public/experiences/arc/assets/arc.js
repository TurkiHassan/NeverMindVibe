/* Arc: one lateral spine of five objects. Scroll maps to a walk along the wall
   with a dwell at every object (Court of the Seven Stairs holds longest), and a
   section drawing under each object draws itself as the object reaches the
   reading line: line first, dimension callouts after. All page-local; the
   engine only supplies the pinned stage. */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  root.classList.add("js");
  var rtl = root.getAttribute("dir") === "rtl";
  var reduceMQ = matchMedia("(prefers-reduced-motion: reduce)");
  var phoneMQ = matchMedia("(max-width: 860px)");
  var $ = function (id) { return doc.getElementById(id); };
  var act = $("spine"), stage = $("stage"), track = $("track"), rail = $("rail");
  var objs = Array.prototype.slice.call(doc.querySelectorAll(".obj"));
  var links = Array.prototype.slice.call(doc.querySelectorAll(".idx-list a"));
  var N = objs.length;
  function clamp(x, a, b) { return Math.min(b, Math.max(a, x)); }
  function ease(t) { return (1 - Math.cos(Math.PI * t)) / 2; }

  // Scroll shares of the spine. Court (index 1) owns 27%: the peak.
  var SEG = [
    { k: "d", i: 0, w: 0.08 }, { k: "t", i: 0, w: 0.16 },
    { k: "d", i: 1, w: 0.27 }, { k: "t", i: 1, w: 0.09 },
    { k: "d", i: 2, w: 0.08 }, { k: "t", i: 2, w: 0.08 },
    { k: "d", i: 3, w: 0.08 }, { k: "t", i: 3, w: 0.08 },
    { k: "d", i: 4, w: 0.08 }
  ];
  var acc = 0;
  SEG.forEach(function (s) { s.s = acc; acc += s.w; s.e = acc; });
  var CREEP = [0.10, 0.14, 0.10, 0.10, 0.10]; // slow drift inside a dwell, fraction of panel width
  var E = [], W = [], reduce = reduceMQ.matches, phone = phoneMQ.matches, trackW = 0, R = 0;
  var win = []; // drawing windows per object, in spine progress

  function measure() {
    reduce = reduceMQ.matches; phone = phoneMQ.matches;
    if (reduce) { return; }
    var prev = rail.style.transform; rail.style.transform = "none";
    var sr = rail.getBoundingClientRect();
    trackW = track.getBoundingClientRect().width;
    R = trackW * (phone ? 0.5 : 0.5);
    objs.forEach(function (o, i) {
      var r = o.getBoundingClientRect();
      W[i] = r.width;
      E[i] = rtl ? sr.right - (r.left + r.width / 2) : (r.left + r.width / 2) - sr.left;
    });
    rail.style.transform = prev;
    // svg stroke scale: keep line weight constant whatever the drawing size
    doc.querySelectorAll(".sec").forEach(function (s) {
      var svg = s.querySelector("svg"), vb = svg.viewBox.baseVal, w = s.clientWidth || 1;
      s.style.setProperty("--k", (vb.width / w).toFixed(4));
    });
    for (var i = 0; i < N; i++) {
      var dw = null, tw = null;
      SEG.forEach(function (s) { if (s.i === i) { if (s.k === "d") dw = s; else tw = s; } });
      var prevT = null; SEG.forEach(function (s) { if (s.k === "t" && s.i === i - 1) prevT = s; });
      var b = i === 0 ? 0 : prevT.s + 0.45 * (prevT.e - prevT.s);
      var f = i === 1 ? dw.e - 0.03 : dw.s + 0.6 * (dw.e - dw.s);
      win[i] = [b, f];
    }
  }
  function dwellRange(i) {
    var c = CREEP[i] * W[i];
    return i === 0 ? [E[0], E[0] + c] : [E[i] - c / 2, E[i] + c / 2];
  }
  function pos(p) {
    for (var n = 0; n < SEG.length; n++) {
      var s = SEG[n];
      if (p <= s.e || n === SEG.length - 1) {
        var t = clamp((p - s.s) / (s.e - s.s), 0, 1);
        if (s.k === "d") { var d = dwellRange(s.i); return d[0] + (d[1] - d[0]) * t; }
        var a = dwellRange(s.i)[1], b = dwellRange(s.i + 1)[0];
        return a + (b - a) * ease(t);
      }
    }
    return E[0];
  }

  // ---- drawings ----
  var draws = objs.map(function (o) {
    var svg = o.querySelector(".sec svg");
    return {
      lines: Array.prototype.map.call(svg.querySelectorAll(".d"), function (el) {
        return { el: el, a: parseFloat(el.getAttribute("data-a")), b: parseFloat(el.getAttribute("data-b")), v: -1 };
      }),
      fades: Array.prototype.map.call(svg.querySelectorAll(".fd,.dk"), function (el) {
        return { el: el, a: parseFloat(el.getAttribute("data-a")), b: parseFloat(el.getAttribute("data-b")), ph: el.getAttribute("data-ph") || "line", v: -1 };
      }),
      dims: Array.prototype.map.call(svg.querySelectorAll(".dm"), function (el) {
        return { el: el, a: parseFloat(el.getAttribute("data-a")), b: parseFloat(el.getAttribute("data-b")), v: -1 };
      }),
      cos: Array.prototype.map.call(o.querySelectorAll(".co"), function (el) {
        return { el: el, a: parseFloat(el.getAttribute("data-a")), b: parseFloat(el.getAttribute("data-b")), v: -1 };
      })
    };
  });
  var uShown = [];
  function seg01(x, a, b) { return clamp((x - a) / Math.max(b - a, 0.0001), 0, 1); }
  function drawOne(i, u) {
    var D = draws[i], sl = clamp(u / 0.7, 0, 1), sd = clamp((u - 0.66) / 0.34, 0, 1);
    D.lines.forEach(function (L) {
      var v = 1 - seg01(sl, L.a, L.b), q = Math.round(v * 200) / 200;
      if (q !== L.v) { L.v = q; L.el.style.strokeDashoffset = q; L.el.style.visibility = q >= 1 ? "hidden" : "visible"; }
    });
    D.fades.forEach(function (F) {
      var v = seg01(F.ph === "dim" ? sd : sl, F.a, F.b), q = Math.round(v * 100) / 100;
      if (q !== F.v) { F.v = q; F.el.style.opacity = q; }
    });
    D.dims.forEach(function (M) {
      var v = 1 - seg01(sd, M.a, M.b), q = Math.round(v * 200) / 200;
      if (q !== M.v) { M.v = q; M.el.style.strokeDashoffset = q; M.el.style.visibility = q >= 1 ? "hidden" : "visible"; }
    });
    D.cos.forEach(function (C) {
      var v = seg01(sd, C.a, C.b), q = Math.round(v * 100) / 100;
      if (q !== C.v) { C.v = q; C.el.style.opacity = q; C.el.style.transform = "translateY(calc(-50% + " + ((1 - q) * 4).toFixed(1) + "px))"; }
    });
  }
  // intro: object one draws itself once on arrival, so the first screen shows the move
  var intro = 0, introT0 = null;
  function introStep(now) {
    if (introT0 === null) introT0 = now;
    intro = clamp((now - introT0) / 1700, 0, 1);
    if (intro < 1) requestAnimationFrame(introStep);
  }

  var shownKey = "", active = -1, scrollTop0 = 0, travel = 1;
  function layoutAct() {
    var r = act.getBoundingClientRect();
    scrollTop0 = r.top + (window.scrollY || window.pageYOffset);
    travel = Math.max(act.offsetHeight - innerHeight, 1);
  }
  function setActive(i) {
    if (i === active) return; active = i;
    links.forEach(function (a, k) { if (k === i) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
  }
  function frame() {
    if (reduce) return;
    var y = window.scrollY || window.pageYOffset;
    var p = clamp((y - scrollTop0) / travel, 0, 1);
    var e = pos(p), T = R - e;
    rail.style.transform = "translate3d(" + (rtl ? -T : T).toFixed(1) + "px,0,0)";
    var best = 0, bd = 1e9, parts = [];
    for (var i = 0; i < N; i++) {
      var d = Math.abs(E[i] - e); if (d < bd) { bd = d; best = i; }
      var u = seg01(p, win[i][0], win[i][1]);
      if (i === 0) u = Math.max(u, intro);
      if (u !== uShown[i]) { uShown[i] = u; drawOne(i, u); }
      parts.push(Math.round(u * 10));
      // picture wipe as the object enters from the far side
      var lead = R + (E[i] - e) - W[i] / 2;
      var inn = i === 0 ? 1 : clamp((trackW - lead) / (trackW * 0.28), 0, 1);
      inn = Math.round(ease(inn) * 100) / 100;
      if (objs[i]._in !== inn) { objs[i]._in = inn; objs[i].querySelector(".pic").style.setProperty("--in", inn); }
    }
    setActive(best);
    var key = Math.round(T / 6) + "|" + parts.join("");
    if (key !== shownKey) { shownKey = key; stage.setAttribute("data-sc-verify-state", key); }
  }
  function loop() { frame(); requestAnimationFrame(loop); }

  function showAll() {
    for (var i = 0; i < N; i++) drawOne(i, 1);
    rail.style.transform = "";
    objs.forEach(function (o) { o.querySelector(".pic").style.removeProperty("--in"); });
    stage.setAttribute("data-sc-verify-state", "reduced");
  }
  var started = false;
  function init() {
    measure(); layoutAct();
    if (reduce) { showAll(); trackActiveByScroll(); return; }
    stage.removeAttribute("data-sc-verify-state");
    if (!started) { started = true; uShown = []; requestAnimationFrame(loop); }
  }
  // reduced motion: the walk is vertical, so the current object is whichever sits at mid screen
  function trackActiveByScroll() {
    function f() {
      if (!reduceMQ.matches) return;
      var mid = innerHeight / 2, best = 0, bd = 1e9;
      objs.forEach(function (o, i) { var r = o.getBoundingClientRect(), d = Math.abs((r.top + r.bottom) / 2 - mid); if (d < bd) { bd = d; best = i; } });
      setActive(best);
    }
    if (!trackActiveByScroll.on) { trackActiveByScroll.on = true; addEventListener("scroll", f, { passive: true }); }
    f();
  }

  // ---- index: jump to the object ----
  function goTo(i) {
    var s = SEG.filter(function (q) { return q.k === "d" && q.i === i; })[0];
    var p = s.s + 0.5 * (s.w);
    scrollTo({ top: scrollTop0 + p * travel, behavior: reduce ? "auto" : "smooth" });
  }
  links.forEach(function (a, i) {
    a.addEventListener("click", function (e) {
      if (reduce) return; // plain anchors work in the vertical layout
      e.preventDefault(); goTo(i);
    });
  });
  var cta = doc.querySelector("[data-to-plate]");

  // ---- the hero film: object one builds in view. Fetched only when it will play. ----
  var vid = $("film");
  function startFilm() {
    if (!vid || reduce || phone) { if (vid && vid.parentNode) vid.parentNode.removeChild(vid); return; }
    var c = navigator.connection; if (c && c.saveData) { vid.parentNode.removeChild(vid); return; }
    vid.addEventListener("playing", function () { var im = $("filmPoster"); if (im) im.style.visibility = "hidden"; });
    vid.src = vid.getAttribute("data-src");
    var pr = vid.play(); if (pr && pr.catch) pr.catch(function () {});
  }

  // ---- the plate ----
  var form = $("inq");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = $("f-name"), m = $("f-email"), rep = $("reply");
    var okN = n.value.trim().length > 0, okM = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim());
    n.setAttribute("aria-invalid", okN ? "false" : "true"); m.setAttribute("aria-invalid", okM ? "false" : "true");
    if (!okN || !okM) { rep.textContent = form.getAttribute("data-err"); (okN ? m : n).focus(); return; }
    rep.textContent = form.getAttribute("data-ok") + " " + form.getAttribute("data-sample");
  });

  var rz; addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { init(); uShown = []; }, 120); });
  reduceMQ.addEventListener && reduceMQ.addEventListener("change", function () { location.reload(); });
  function go() {
    init();
    if (!reduce) { requestAnimationFrame(introStep); setTimeout(startFilm, 500); }
    else startFilm();
    var h = location.hash.match(/^#obj-(\d)$/);
    if (h && !reduce) goTo(parseInt(h[1], 10) - 1);
  }
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(go); else addEventListener("load", go);
  addEventListener("load", function () { layoutAct(); measure(); });
})();
