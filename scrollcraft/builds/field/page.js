/* Field: the season sweep. One vertical line travels the calendar (Jan to Dec is the scroll axis);
   each crop card changes stage (sow, grow, harvest) as the line crosses it and its still is graded to match.
   All page-local; the engine only supplies the pinned stages. Data comes from window.FIELD (the content file). */
(function () {
  "use strict";
  var D = window.FIELD, doc = document, root = doc.documentElement;
  var rtl = root.getAttribute("dir") === "rtl";
  var reduceMQ = matchMedia("(prefers-reduced-motion: reduce)");
  var $ = function (id) { return doc.getElementById(id); };
  var all = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  function clamp(x, a, b) { return Math.min(b, Math.max(a, x)); }
  var act = $("year"), stage = $("stage"), track = $("track"), sweep = $("sweep"), flag = $("flag"), win = $("win");
  var cards = all(".crop"), cols = all(".cols li"), mlinks = all(".months a"), mnav = doc.querySelector(".months"), prog = $("prog");
  var board = $("board"), bstage = $("bstage"), bcards = all(".card"), bsteps = all(".step li");
  var reduce = reduceMQ.matches;
  root.classList.add("js");

  function stageOf(c, u) {
    var s = c.f - 1, e = c.t, len = e - s;
    if (u < s) return "wait";
    if (u < s + Math.max(0.5, 0.25 * len)) return "sow";
    if (c.t === 12) return u >= 11 ? "stand" : "grow";
    if (u < e - Math.max(0.5, 0.18 * len)) return "grow";
    if (u < e) return "harvest";
    return "done";
  }

  /* ---------------- reduced motion: static list, month bar highlights the crops in the ground ---------------- */
  if (reduce) {
    cards.forEach(function (c) { c.setAttribute("data-stage", "static"); });
    mlinks.forEach(function (a, m) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        mlinks.forEach(function (x) { x.removeAttribute("aria-current"); });
        a.setAttribute("aria-current", "true");
        var first = null;
        cards.forEach(function (c, i) {
          var inG = D.crops[i].f - 1 <= m && m <= D.crops[i].t - 1;
          c.classList.toggle("ing", inG);
          if (inG && !first) first = c;
        });
        if (first) first.scrollIntoView({ block: "center" });
      });
    });
    stage.setAttribute("data-sc-verify-state", "static");
    bstage.setAttribute("data-sc-verify-state", "static");
  } else {
    /* ---------------- geometry ---------------- */
    var vw = 0, mw = 150, pad = 0, TW = 0, C = 0, top0 = 0, travel = 1, btop = 0, btravel = 1;
    var gut = 16, cwPx = 736;
    function measure() {
      vw = win.clientWidth;
      mw = clamp(vw * 0.11, 150, 190);
      pad = vw * 0.08; C = 12 * mw; TW = 2 * pad + C;
      stage.style.setProperty("--mw", mw + "px");
      stage.style.setProperty("--pad", pad + "px");
      stage.style.setProperty("--tw", TW + "px");
      cwPx = Math.min(736, innerWidth - 32);
      gut = parseFloat(getComputedStyle(doc.querySelector(".head")).paddingInlineStart) || 16;
      var y = window.scrollY || window.pageYOffset;
      top0 = act.getBoundingClientRect().top + y; travel = Math.max(act.offsetHeight - innerHeight, 1);
      btop = board.getBoundingClientRect().top + y; btravel = Math.max(board.offsetHeight - innerHeight, 1);
      last = null; lastB = -1;
    }
    var last = null, lastB = -1, lastM = -1, lastKey = "";
    function monthStart(m) { return (m / 12) * 0.9; } // scroll share of the year act at the start of month m (p)

    function frame() {
      var y = window.scrollY || window.pageYOffset;
      /* act 1 */
      var p = clamp((y - top0) / travel, 0, 1);
      var q = clamp(p / 0.9, 0, 1), u = 12 * q;
      var X = pad + u * mw, L = vw * (0.12 + 0.76 * q);
      var off = clamp(X - L, 0, TW - vw);
      var sx = X - off;
      track.style.transform = "translate3d(" + (rtl ? off : -off).toFixed(1) + "px,0,0)";
      sweep.style.transform = "translate3d(" + (rtl ? -sx : sx).toFixed(1) + "px,0,0)";
      sweep.classList.toggle("flip", sx > vw * 0.5);
      var m = Math.min(11, Math.floor(u));
      if (m !== lastM) {
        lastM = m;
        flag.textContent = D.mon[m];
        cols.forEach(function (c, i) { c.classList.toggle("on", i === m); });
        mlinks.forEach(function (a, i) { if (i === m) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
        if (mnav.scrollWidth > mnav.clientWidth + 2) {
          var ar = mlinks[m].getBoundingClientRect(), nr = mnav.getBoundingClientRect();
          mnav.scrollLeft += (ar.left + ar.width / 2) - (nr.left + nr.width / 2);
        }
      }
      prog.style.transform = "scaleX(" + q.toFixed(3) + ")";
      var key = [];
      cards.forEach(function (card, i) {
        var c = D.crops[i], st = stageOf(c, u);
        key.push(st.charAt(0));
        if (card._st !== st) {
          card._st = st;
          card.setAttribute("data-stage", st);
          card._chip.textContent = D.stage[st];
        }
        var cardStart = pad + (c.f - 1) * mw - off, bw = c.n * mw;
        var inner = card._in;
        var d0 = Math.max(0, gut - cardStart);
        var aw = Math.max(120, Math.round(vw - (cardStart + d0) - gut - 8));
        var iw = Math.min(cwPx, aw, bw);
        var d = clamp(d0, 0, Math.max(0, bw - iw - 6));
        if (card._aw === undefined || Math.abs(aw - card._aw) >= 2) {
          card._aw = aw; inner.style.setProperty("--aw", aw + "px");
          inner.classList.remove("tight"); inner.classList.toggle("tiny", aw < 200);
          var nt = card._nt; // hide the note when its column would be too narrow to read
          if ((innerWidth <= 700 ? aw < 330 : nt.offsetWidth < 150) && nt.offsetParent !== null) inner.classList.add("tight");
        }
        inner.style.transform = d > 0.5 ? "translate3d(" + (rtl ? -d : d).toFixed(1) + "px,0,0)" : "";
      });
      stage.setAttribute("data-sc-verify-state", m + ":" + key.join("") + ":" + Math.round(u * 10));

      /* act 2: the rotation board */
      var bp = clamp((y - btop) / btravel, 0, 1);
      var bi = Math.min(bcards.length - 1, Math.floor(bp * bcards.length));
      if (bi !== lastB) {
        lastB = bi;
        bcards.forEach(function (c, i) { c.classList.toggle("on", i === bi); });
        bsteps.forEach(function (s, i) { s.classList.toggle("on", i === bi); });
      }
      var lp = clamp(bp * bcards.length - bi, 0, 1);
      bsteps.forEach(function (s, i) { s._bar.style.transform = "scaleX(" + (i < bi ? 1 : i === bi ? lp.toFixed(3) : 0) + ")"; });
      bcards[bi]._img.style.transform = "scale(" + (1 + 0.05 * lp).toFixed(4) + ")";
      bstage.setAttribute("data-sc-verify-state", bi + ":" + Math.round(lp * 10));
    }
    cards.forEach(function (c) { c._in = c.querySelector(".in"); c._chip = c.querySelector(".chip"); c._nt = c.querySelector(".nt"); });
    bsteps.forEach(function (s) { s._bar = s.querySelector("i"); });
    bcards.forEach(function (c) { c._img = c.querySelector("img"); });

    var ticking = false;
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; frame(); }); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    var rz = 0;
    window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { measure(); frame(); }, 60); });
    measure(); frame();
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { measure(); frame(); });
    window.addEventListener("load", function () { measure(); frame(); });

    mlinks.forEach(function (a, m) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var p = ((m + 0.5) / 12) * 0.9;
        window.scrollTo({ top: top0 + p * travel, behavior: "smooth" });
      });
    });
  }

  /* ---------------- close: choosing a crop rewrites its calendar bar live ---------------- */
  var form = $("sow"), sel = $("f-crop"), mini = $("mini"), touched = false;
  var MAP = D.map; // crop option index -> calendar rows
  function renderMini() {
    var rows = MAP[sel.selectedIndex] || [];
    var h = "";
    if (!rows.length) h = '<p class="none">' + D.none + "</p>";
    rows.forEach(function (ri) {
      var c = D.crops[ri], cells = "";
      for (var m = 1; m <= 12; m++) cells += '<i class="' + (m >= c.f && m <= c.t ? "on" : "") + '"></i>';
      h += '<div class="mrow"><b>' + c.name + '</b><span class="rg">' + c.range + '</span><span class="mb" aria-hidden="true">' + cells + "</span></div>";
    });
    mini.innerHTML = h;
    if (touched) {
      all(".months a").forEach(function (a) {
        all(".tk i", a).forEach(function (t, ri) { t.classList.toggle("sel", rows.indexOf(ri) > -1); });
      });
    }
  }
  if (sel) {
    sel.addEventListener("change", function () { touched = true; renderMini(); });
    renderMini();
  }
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = $("f-name"), em = $("f-email"), rep = $("reply");
    var okN = n.value.trim().length > 0, okE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());
    n.classList.toggle("err", !okN); em.classList.toggle("err", !okE);
    if (!okN || !okE) { rep.textContent = D.err; (okN ? em : n).focus(); return; }
    rep.textContent = D.ok + " " + D.sample;
  });
})();
