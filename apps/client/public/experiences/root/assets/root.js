/* Root, split stage. Shared by the English page and its Arabic twin.
   Four short pins (one question each) and a flow close. Everything painted is derived from
   scroll position (typing, answers, the collapse) plus one user action: a typed question,
   matched by keyword against the cohorts and mentors in the page's own data. No scores,
   no dates computed, no numbers that are not in the content. */
(function () {
  "use strict";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var phoneMQ = matchMedia("(max-width: 860px)");
  var RTL = document.documentElement.dir === "rtl", DIR = RTL ? -1 : 1;
  var LANG = document.documentElement.lang || "en";
  document.documentElement.style.setProperty("--dir", String(DIR));
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };
  var ramp = function (p, a, b) { return b <= a ? (p >= a ? 1 : 0) : clamp((p - a) / (b - a), 0, 1); };
  var sm = function (t) { return t * t * (3 - 2 * t); };
  var ease = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var D = JSON.parse($("#rt-data").textContent);

  /* ---------------------------------------------------------------- typing */
  var seg = (typeof Intl !== "undefined" && Intl.Segmenter) ? new Intl.Segmenter(LANG, { granularity: "grapheme" }) : null;
  function graphemes(s) { return seg ? Array.from(seg.segment(s), function (x) { return x.segment; }) : Array.from(s); }

  var chrome = $(".rt-chrome");
  var closeEl = $("#close");
  var stages = $$(".rt-act").map(function (sec) {
    var tD = $(".t-d", sec), tR = $(".t-r", sec), caret = $(".rt-caret", sec);
    var chars = graphemes(tR.textContent);
    return {
      sec: sec, stage: $(".rt-stage", sec), tD: tD, tR: tR, caret: caret, chars: chars, n: -1,
      fx: $$("[data-e]", sec).map(function (el) {
        var w = el.getAttribute("data-e").split(/\s+/).map(parseFloat);
        return { el: el, a: w[0], b: w[1], o: -1 };
      })
    };
  });

  var t0 = performance.now() + 450;
  var timeE = function (now) { var t = (now - t0) / 1000; return ramp(t, 0, 2.3) * 0.47 + ramp(t, 2.7, 4.3) * 0.5; };

  function uOf(el) { var r = el.getBoundingClientRect(); return (innerHeight - r.top) / (r.height + innerHeight); }

  function renderStage(S, i, now) {
    var u = uOf(S.sec), e;
    if (reduce) e = 1;
    else if (i === 0) e = Math.max(timeE(now), ramp(u, 0.357, 0.62) * 0.97);
    else e = ramp(u, 0.12, 0.62);
    var n = reduce ? S.chars.length : Math.round(ramp(e, 0.02, 0.46) * S.chars.length);
    if (n !== S.n) {
      S.n = n;
      S.tD.textContent = S.chars.slice(0, n).join("");
      S.tR.textContent = S.chars.slice(n).join("");
    }
    S.caret.hidden = reduce || e >= 0.52;
    var sig = [n];
    S.fx.forEach(function (f) {
      var o = reduce ? 1 : sm(ramp(e, f.a, f.b));
      var oq = Math.round(o * 40);
      if (oq !== f.o) {
        f.o = oq;
        f.el.style.opacity = o.toFixed(3);
        f.el.style.visibility = o < 0.01 ? "hidden" : "visible";
        f.el.style.transform = reduce || o >= 1 ? "none" : "translateX(" + (DIR * (1 - o) * 18).toFixed(1) + "px)";
      }
      sig.push(oq);
    });
    S.stage.setAttribute("data-sc-verify-state", sig.join("|"));
  }

  /* ------------------------------------------------------------ the close */
  var cFx = $$("[data-c]", closeEl).map(function (el) {
    var w = el.getAttribute("data-c").split(/\s+/).map(parseFloat);
    return { el: el, a: w[0], b: w[1], o: -1 };
  });
  var paper = $(".rt-cpaper"), seam = $(".rt-cseam");
  function renderClose() {
    var p = uOf(closeEl), d, sig = [];
    var coll = ease(ramp(p, 0.02, 0.28));
    var unit = phoneMQ.matches ? "svh" : "%";
    if (reduce) { d = 50; var po = 1 - sm(ramp(p, 0.06, 0.2)); paper.style.opacity = po.toFixed(3); paper.style.visibility = po < 0.01 ? "hidden" : "visible"; seam.style.opacity = po.toFixed(3); sig.push(Math.round(po * 20)); }
    else { d = 50 * (1 - coll); paper.style.opacity = "1"; seam.style.opacity = d < 0.4 ? "0" : "1"; sig.push(Math.round(d)); }
    closeEl.style.setProperty("--d", d.toFixed(2) + unit);
    var co = 1 - sm(ramp(p, 0.02, 0.14));
    chrome.style.opacity = co.toFixed(3);
    chrome.style.visibility = co < 0.02 ? "hidden" : "visible";
    cFx.forEach(function (f) {
      var o = reduce ? (p >= f.a ? 1 : 0) : sm(ramp(p, f.a, f.b));
      if (reduce) o = sm(ramp(p, f.a, f.a + 0.04));
      var oq = Math.round(o * 40);
      if (oq !== f.o) {
        f.o = oq;
        f.el.style.opacity = o.toFixed(3);
        f.el.style.visibility = o < 0.01 ? "hidden" : "visible";
        f.el.style.transform = reduce || o >= 1 ? "none" : "translateY(" + ((1 - o) * 14).toFixed(1) + "px)";
      }
      sig.push(oq);
    });
    if (p >= 0.6) closeEl.setAttribute("data-sc-verify-hold", "true"); else closeEl.removeAttribute("data-sc-verify-hold");
    closeEl.setAttribute("data-sc-verify-state", sig.join("|"));
  }

  function frame(now) {
    stages.forEach(function (S, i) { renderStage(S, i, now); });
    renderClose();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------------------------------------------------------------- match */
  var STOP = D.stop.split(" ");
  function norm(s) {
    s = String(s).toLowerCase();
    if (LANG === "ar") {
      s = s.replace(/[ً-ٰٟـ]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
    }
    return s.replace(/[^\p{L}\p{N}\s]/gu, " ");
  }
  function words(s) {
    return norm(s).split(/\s+/).filter(Boolean).map(function (w) {
      if (LANG === "ar") {
        w = w.replace(/^(و|ب|ل|ف|ك)?(ال)/, "");
        if (w.length > 4) w = w.replace(/(ات|ون|ين)$/, "");
      }
      return w;
    }).filter(function (w) { return w && STOP.indexOf(w) < 0 && w.length > 1; });
  }
  var MINP = LANG === "ar" ? 3 : 4, MINLEN = LANG === "ar" ? 3 : 4;
  function same(a, b) {
    if (a === b) return true;
    var m = Math.min(a.length, b.length);
    if (m < MINLEN) return false;
    var c = 0; while (c < m && a.charAt(c) === b.charAt(c)) c++;
    return c >= MINP && c >= 0.8 * m;
  }
  function index() {
    return D.cohorts.map(function (c, i) {
      var m = D.mentors[i];
      return {
        fields: [
          { w: 4, t: words(c.tags.join(" ")) }, { w: 3, t: words(c.t) }, { w: 2, t: words(c.note) },
          { w: 3, t: words(m.t) }, { w: 2, t: words(m.meta) }, { w: 2, t: words(m.note) }
        ]
      };
    });
  }
  var IDX = index();
  function match(text) {
    var q = [], best = -1, bestS = 0, hits = [];
    text.split(/\s+/).forEach(function (raw) {
      var w = words(raw)[0];
      if (w) q.push({ raw: raw.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ""), w: w });
    });
    IDX.forEach(function (doc, i) {
      var s = 0, h = [];
      q.forEach(function (x) {
        var top = 0;
        doc.fields.forEach(function (f) { if (f.w > top && f.t.some(function (t) { return same(x.w, t); })) top = f.w; });
        if (top) { s += top; h.push(x.raw); }
      });
      if (s > bestS) { bestS = s; best = i; hits = h; }   /* content order is chronological: ties keep the earlier start */
    });
    return { i: best, hits: hits, q: q };
  }

  /* ----------------------------------------------------------------- show */
  var out = $("#rt-out"), closeIn = $("#rt-q2"), chromeIn = $("#rt-q1");
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }
  function hit(kind, title, meta, note) {
    var d = el("div", "rt-hit");
    d.appendChild(el("p", "rt-hit-k", kind));
    d.appendChild(el("h3", "rt-hit-t", title));
    d.appendChild(el("p", "rt-hit-m", meta));
    d.appendChild(el("p", "rt-hit-n", note));
    return d;
  }
  function tagList() {
    var seen = [], list = [];
    D.cohorts.forEach(function (c) { var t = c.tags[0]; if (seen.indexOf(t) < 0) { seen.push(t); list.push(t); } });
    return list.join(D.ui.sep);
  }
  function show(text) {
    out.textContent = "";
    var r = match(text), box = out;
    if (r.i < 0) {
      var m = el("p", "rt-msg"); m.textContent = D.ui.nomatch + " " + tagList() + ".";
      box.appendChild(m); r.i = 0;
    } else {
      var mm = el("p", "rt-msg"); mm.textContent = D.ui.matched + D.ui.colon + r.hits.join(D.ui.sep); box.appendChild(mm);
    }
    var c = D.cohorts[r.i], me = D.mentors[r.i];
    box.appendChild(hit(r.hits.length ? D.ui.near : D.ui.next, c.t, c.meta, c.note));
    box.appendChild(hit(D.ui.mentor, me.t, me.meta, me.note));
    box.appendChild(el("p", "rt-sample", D.ui.success + " " + D.ui.sample));
    out.classList.remove("is-new"); void out.offsetWidth; out.classList.add("is-new");
  }
  function empty() { out.textContent = ""; var m = el("p", "rt-msg", D.ui.empty); out.appendChild(m); }

  function ask(from) {
    var inp = from === "chrome" ? chromeIn : closeIn, text = inp.value.trim();
    if (from === "chrome") closeIn.value = inp.value;
    if (!text) { if (from === "chrome") { inp.focus(); return; } empty(); inp.focus(); return; }
    show(text);
    if (from === "chrome") {
      closeEl.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      setTimeout(function () { closeIn.focus({ preventScroll: true }); }, reduce ? 0 : 700);
    }
  }
  $("#rt-f1").addEventListener("submit", function (e) { e.preventDefault(); ask("chrome"); });
  $("#rt-f2").addEventListener("submit", function (e) { e.preventDefault(); ask("close"); });
  [chromeIn, closeIn].forEach(function (inp) {
    inp.addEventListener("keydown", function (e) { if (e.key === "Escape") { inp.value = ""; if (inp === closeIn) out.textContent = ""; } });
  });
  /* test hook for the verification pass: pure function, no side effects on the page */
  window.__rootMatch = function (t) { var r = match(t); return { cohort: r.i < 0 ? null : D.cohorts[r.i].t, hits: r.hits }; };
})();
