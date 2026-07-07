/* Entwurf 1 — Slideshow, Navigation, Scroll-Reveal, Karten-Consent */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero-Slideshow (Crossfade) ---------- */
  var bgImgs = Array.prototype.slice.call(document.querySelectorAll(".hero-bg img"));
  var frameImgs = Array.prototype.slice.call(document.querySelectorAll(".hero-frame img"));
  var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dots button"));
  var current = 0;
  var timer = null;
  var INTERVAL = 5500; // ~5,5 s pro Bild, Crossfade 1,5 s via CSS

  function show(i) {
    current = (i + bgImgs.length) % bgImgs.length;
    bgImgs.forEach(function (img, n) { img.classList.toggle("is-active", n === current); });
    frameImgs.forEach(function (img, n) { img.classList.toggle("is-active", n === current); });
    dots.forEach(function (d, n) { d.setAttribute("aria-current", n === current ? "true" : "false"); });
  }

  function startAuto() {
    if (reducedMotion || bgImgs.length < 2) return; // kein Auto-Wechsel bei reduced motion
    stopAuto();
    timer = window.setInterval(function () { show(current + 1); }, INTERVAL);
  }
  function stopAuto() { if (timer) { window.clearInterval(timer); timer = null; } }

  dots.forEach(function (dot, n) {
    dot.addEventListener("click", function () { show(n); startAuto(); });
  });

  if (bgImgs.length) { show(0); startAuto(); }

  /* ---------- Mobile Navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll-Reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Google Maps erst nach Klick laden (DSGVO) ---------- */
  var mapBtn = document.querySelector("[data-load-map]");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var shell = document.querySelector(".map-shell");
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps?q=Berliner+Platz+9,+41061+M%C3%B6nchengladbach&output=embed";
      iframe.title = "Google Maps: Berliner Platz 9, 41061 Mönchengladbach";
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      shell.innerHTML = "";
      shell.appendChild(iframe);
    });
  }

  /* ---------- Jahr im Footer ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
