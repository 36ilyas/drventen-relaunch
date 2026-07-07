/* Entwurf 4 — Header-Scroll, Burger-Menü, Scroll-Reveal, Karten-Consent (DSGVO) */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var header = document.getElementById('siteHeader');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');

  /* Transparent → solid beim Scrollen */
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Burger-Menü */
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      if (header) header.classList.toggle('nav-solid', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        if (header) header.classList.remove('nav-solid');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Menü öffnen');
      });
    });
  }

  /* Scroll-Reveal (progressive enhancement) */
  var revealSel = '.sec-head, .service, .statement > *, .member, .hours-grid > div, .contact > *, .map';
  if ('IntersectionObserver' in window && !reduced) {
    var toReveal = Array.prototype.slice.call(document.querySelectorAll(revealSel));
    toReveal.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 4, 3) * 0.07) + 's';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    toReveal.forEach(function (el) { io.observe(el); });
  }

  /* Google Maps erst nach Klick laden (DSGVO) */
  var mapBtn = document.querySelector('[data-load-map]');
  if (mapBtn) {
    mapBtn.addEventListener('click', function () {
      var shell = document.querySelector('[data-map]');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.google.com/maps?q=Berliner+Platz+9,+41061+M%C3%B6nchengladbach&z=15&output=embed';
      iframe.title = 'Google Maps: Berliner Platz 9, 41061 Mönchengladbach';
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      shell.innerHTML = '';
      shell.appendChild(iframe);
    });
  }

  /* Jahr im Footer */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
