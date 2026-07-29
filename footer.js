(function () {
  const html = `
  <footer>
    <img src="logo.png" alt="Inroad Energy" class="footer-logo" />
    <span class="footer-copy">© 2026 Inroad Energy &nbsp;&nbsp;|&nbsp;&nbsp; <a href="privacy-policy.html" style="color:inherit;text-decoration:none;">Privacy Policy</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="terms-of-use.html" style="color:inherit;text-decoration:none;">Terms of Use</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="accessibility.html" style="color:inherit;text-decoration:none;">Accessibility</a> &nbsp;&nbsp;|&nbsp;&nbsp; Created by Nina Studio</span>
  </footer>`;

  const placeholder = document.getElementById('site-footer');
  if (placeholder) {
    placeholder.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }
})();
