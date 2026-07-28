/* Shared nav behaviour for the legal / statement pages. */
(function () {
  var nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  var burger = document.getElementById('nav-hamburger');
  var menu = document.getElementById('mobile-menu');
  if (!nav || !burger || !menu) return;

  function close() {
    menu.classList.remove('open');
    nav.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    nav.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  var closeBtn = document.getElementById('mobile-menu-close');
  if (closeBtn) closeBtn.addEventListener('click', close);

  document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', close);
  });
})();
