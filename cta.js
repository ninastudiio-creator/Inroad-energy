(function () {
  const html = `
  <div id="cta">
    <div class="cta-inner">
      <div class="cta-left">
        <a href="contact.html" class="cta-headline-link">Let's talk <img class="cta-arrow-img" src="right-up.png" alt="" /></a>
      </div>
      <div class="cta-right">
        <div class="cta-contact">
          <a href="mailto:info@inroad.energy" class="cta-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            info@inroad.energy
          </a>
          <a href="https://www.linkedin.com/company/inroad-energy" target="_blank" class="cta-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            @inroad.energy
          </a>
        </div>
      </div>
    </div>
  </div>`;

  const placeholder = document.getElementById('site-cta');
  if (placeholder) {
    placeholder.outerHTML = html;
  }
})();
