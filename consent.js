/* Cookie consent. Google Analytics is not loaded until the visitor accepts,
   so declining — or ignoring the bar — means no cookies are set at all. */
(function () {
  var KEY = 'inroad-cookie-consent';
  var GA_ID = 'G-QV29KQRMJC';

  function loadAnalytics() {
    if (window.__inroadAnalytics) return;
    window.__inroadAnalytics = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  var choice = read();
  if (choice === 'accepted') { loadAnalytics(); return; }
  if (choice === 'declined') return;

  var CSS =
    '.cookie-bar{position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
    'background:#FAF7F1;border-top:1px solid #E8E5E0;' +
    'padding:14px 100px;display:flex;align-items:center;gap:24px;' +
    'flex-wrap:wrap;justify-content:space-between;' +
    'font-family:Archivo,sans-serif;color:#1B2A4A;' +
    'transform:translateY(100%);transition:transform .35s ease}' +
    '.cookie-bar.is-in{transform:translateY(0)}' +
    '.cookie-bar p{font-size:14px;font-weight:300;line-height:1.5;margin:0;' +
    'color:rgba(27,42,74,.8);max-width:620px}' +
    '.cookie-bar a{color:#1B2A4A;text-decoration:underline;text-underline-offset:3px}' +
    '.cookie-bar a:hover{color:#2B6ED4}' +
    '.cookie-acts{display:flex;align-items:center;gap:10px;flex-shrink:0}' +
    '.cookie-bar button{font:inherit;font-size:12px;font-weight:600;' +
    'letter-spacing:.1em;text-transform:uppercase;cursor:pointer;' +
    'padding:9px 20px;border-radius:100px;transition:transform .2s ease,background .2s ease}' +
    '.cookie-bar button:hover{transform:scale(1.03)}' +
    '.cookie-bar button:focus-visible{outline:2px solid #2B6ED4;outline-offset:3px}' +
    '.cookie-yes{background:#1B2A4A;color:#fff;border:none}' +
    '.cookie-no{background:transparent;color:#1B2A4A;border:1px solid rgba(27,42,74,.35)}' +
    '.cookie-no:hover{border-color:#1B2A4A}' +
    '@media(max-width:768px){.cookie-bar{padding:16px 24px;gap:14px;' +
    'flex-direction:column;align-items:flex-start}' +
    '.cookie-bar p{font-size:13px}.cookie-acts{width:100%}' +
    '.cookie-bar button{flex:1;padding:11px 16px}}' +
    '@media(prefers-reduced-motion:reduce){.cookie-bar{transition:none}}';

  function build() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML =
      '<p>We use cookies to measure and improve how this site works. ' +
      '<a href="/privacy-policy/">Privacy Policy</a></p>' +
      '<div class="cookie-acts">' +
      '<button type="button" class="cookie-yes">Accept</button>' +
      '<button type="button" class="cookie-no">Decline</button>' +
      '</div>';

    /* First in the body, so keyboard users reach it early rather than last. */
    document.body.insertBefore(bar, document.body.firstChild);
    requestAnimationFrame(function () { bar.classList.add('is-in'); });

    function close(decision) {
      write(decision);
      if (decision === 'accepted') loadAnalytics();
      bar.classList.remove('is-in');
      setTimeout(function () { bar.remove(); }, 350);
    }

    bar.querySelector('.cookie-yes').addEventListener('click', function () { close('accepted'); });
    bar.querySelector('.cookie-no').addEventListener('click', function () { close('declined'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
