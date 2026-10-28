/* Drift. The route line is computed from the page: stops sit on the chapters, the fill is
   interpolated between chapter tops, the day counter sums the days written on each journey
   chapter by how far you have read it. One render() drives the line, the counter, the stops,
   the peak plate and data-sc-verify-state, so they cannot disagree. */
(function () {
  "use strict";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (x) { return x < 0 ? 0 : x > 1 ? 1 : x; };

  var route = $("#route"), lineEl = $("#routeLine"), fillEl = $("#routeFill"), pinEl = $("#routePin");
  var stops = $$(".route__stop"), daysEl = $("#routeDays");
  var chs = $$("[data-ch]"), plan = $("#plan");
  var year = $("#year"), yList = $("#yearList"), yRows = $$(".yr", yList), ySum = $("#yearSum");
  var grounds = $$("[data-ground]");
  var N = chs.length;
  var AT = chs.map(function (_, k) { return 0.04 + k * (0.88 / (N - 1)); });
  stops.forEach(function (s, k) { s.style.setProperty("--at", AT[k].toFixed(4)); });

  var vh = innerHeight, lineH = 1, ys = [], fs = [], reads = [], gr = [], yTop = 0, yH = 1, rowAt = [];
  var last = { sig: "", k: -2, dark: null, flash: null };
  var flashT = 0;

  function absTop(el) { return el.getBoundingClientRect().top + scrollY; }

  function measure() {
    vh = innerHeight;
    var maxY = Math.max(document.documentElement.scrollHeight - vh, 1);
    lineH = lineEl.offsetHeight;
    ys = [0]; fs = [0];
    chs.forEach(function (c, k) {
      var y = Math.max(absTop(c) - 0.55 * vh, ys[ys.length - 1] + 1);
      ys.push(y); fs.push(AT[k]);
    });
    ys.push(Math.max(maxY, ys[ys.length - 1] + 1)); fs.push(1);
    reads = chs.map(function (c) {
      var d = parseFloat(c.getAttribute("data-days")) || 0;
      var sp = $(".spread", c) || c;
      var a = absTop(c) - 0.6 * vh, b = absTop(sp) + sp.offsetHeight - 0.6 * vh;
      return { d: d, a: a, b: Math.max(b, a + 40) };
    });
    gr = grounds.map(function (g) {
      var t = absTop(g);
      return { t: t, b: t + g.offsetHeight, dark: g.getAttribute("data-ground") === "dark" };
    });
    yTop = absTop(yList); yH = yList.offsetHeight || 1;
    rowAt = yRows.map(function (r) { return (absTop(r) + 0.95 * 16 - yTop) / yH; });
    last.sig = "";
    render();
  }

  function fillAt(y) {
    for (var i = 0; i < ys.length - 1; i++) {
      if (y < ys[i + 1]) { return fs[i] + (fs[i + 1] - fs[i]) * clamp((y - ys[i]) / (ys[i + 1] - ys[i])); }
    }
    return 1;
  }

  function render() {
    var y = scrollY;
    var f = fillAt(y);
    var k = -1;
    for (var i = 1; i < ys.length - 1; i++) { if (y >= ys[i]) k = i - 1; }
    var days = 0;
    for (var j = 0; j < reads.length; j++) {
      if (reads[j].d) days += reads[j].d * clamp((y - reads[j].a) / (reads[j].b - reads[j].a));
    }
    days = Math.round(days);
    var mid = y + vh * 0.5, dark = false;
    for (var g = 0; g < gr.length; g++) { if (mid >= gr[g].t && mid < gr[g].b) { dark = gr[g].dark; break; } }

    var t = reduce ? 1 : clamp((y + 0.78 * vh - yTop) / yH);
    var sig = k + ":" + Math.round(f * 500) + ":" + days + ":" + (dark ? 1 : 0) + ":" + Math.round(t * 200);
    if (sig === last.sig) return;
    last.sig = sig;

    route.style.setProperty("--f", f.toFixed(4));
    route.style.setProperty("--fy", (f * lineH).toFixed(1) + "px");
    if (dark !== last.dark) { last.dark = dark; route.classList.toggle("is-dark", dark); }
    daysEl.textContent = days;
    stops.forEach(function (s, i) { s.classList.toggle("is-seen", AT[i] <= f + 0.002); });
    if (k !== last.k) {
      last.k = k;
      stops.forEach(function (s, i) {
        if (i === k) s.setAttribute("aria-current", "location"); else s.removeAttribute("aria-current");
        s.classList.remove("flash");
      });
      if (k >= 0) {
        stops[k].classList.add("flash");
        clearTimeout(flashT);
        flashT = setTimeout(function () { stops[k] && stops[k].classList.remove("flash"); }, 1800);
      }
    }
    yList.style.setProperty("--t", t.toFixed(4));
    yRows.forEach(function (r, i) { r.classList.toggle("is-on", reduce || t >= rowAt[i] - 0.02); });
    ySum.classList.toggle("is-on", reduce || t >= 0.97);
    route.setAttribute("data-sc-verify-state", k + ":" + Math.round(f * 100) + ":" + days + ":" + Math.round(t * 100));
  }

  var queued = false;
  addEventListener("scroll", function () {
    if (queued) return; queued = true;
    requestAnimationFrame(function () { queued = false; render(); });
  }, { passive: true });
  addEventListener("resize", function () { requestAnimationFrame(measure); }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  addEventListener("load", measure);
  if ("ResizeObserver" in window) {
    var rt = 0;
    new ResizeObserver(function () { cancelAnimationFrame(rt); rt = requestAnimationFrame(measure); }).observe(document.body);
  }
  measure();

  /* anchors scroll smoothly by script, so automated scrollTo and reduced motion stay instant */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var t = document.getElementById(a.getAttribute("href").slice(1));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", "#" + t.id);
    });
  });

  /* the sentence is the form: it validates, sends nothing, shows the success string */
  var form = $("#form");
  if (form) {
    var ok = $("#ok"), err = $("#err");
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var nameEl = $("#f-name"), mailEl = $("#f-email");
    var bad = function (el, b) { el.setAttribute("aria-invalid", b ? "true" : "false"); };
    [nameEl, mailEl].forEach(function (el) {
      el.addEventListener("input", function () {
        if (el.getAttribute("aria-invalid") === "true") {
          bad(el, el === nameEl ? !el.value.trim() : !email.test(el.value.trim()));
          if (nameEl.getAttribute("aria-invalid") !== "true" && mailEl.getAttribute("aria-invalid") !== "true") err.textContent = "";
        }
      });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nb = !nameEl.value.trim(), mb = !email.test(mailEl.value.trim());
      bad(nameEl, nb); bad(mailEl, mb);
      if (nb || mb) { err.textContent = form.getAttribute("data-err"); (nb ? nameEl : mailEl).focus(); return; }
      err.textContent = "";
      form.hidden = true; ok.hidden = false; ok.focus();
    });
  }
})();
