/* ===== Mobile menu ===== */
(function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (!burger || !nav) return;

  function close() {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });
})();

/* ===== Accordion: only one open at a time ===== */
(function () {
  const items = document.querySelectorAll('.process .acc');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();

/* ===== Testimonials slider ===== */
(function () {
  const track = document.getElementById('tstTrack');
  const prev = document.getElementById('tstPrev');
  const next = document.getElementById('tstNext');
  const dotsWrap = document.getElementById('tstDots');
  if (!track) return;

  const slides = track.children.length;
  let index = 1; // start on the middle-ish card, like the design

  // build dots
  for (let i = 0; i < slides; i++) {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    b.addEventListener('click', function () { go(i); });
    dotsWrap.appendChild(b);
  }

  function go(i) {
    index = (i + slides) % slides;
    track.style.transform = 'translateX(' + (-index * 100) + '%)';
    Array.from(dotsWrap.children).forEach(function (d, di) {
      d.classList.toggle('is-active', di === index);
    });
  }

  prev.addEventListener('click', function () { go(index - 1); });
  next.addEventListener('click', function () { go(index + 1); });
  go(index);

  // basic swipe support
  let startX = null;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();
