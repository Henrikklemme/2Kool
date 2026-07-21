// Contact form: this is a static site with no backend, so we build a
// mailto: link from the fields on submit. If you want real form
// submissions (saved, emailed, spam-filtered), wire this up to a service
// like Formspree, Getform, or a small serverless function instead.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const website = form.website.value.trim();
      const subject = encodeURIComponent(`Website enquiry from ${name || 'a visitor'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCurrent website: ${website || '—'}`
      );
      window.location.href = `mailto:hello@2kool.dk?subject=${subject}&body=${body}`;
    });
  }

  // Language toggle (EN/DA) — swaps all [data-i18n] content via assets/i18n.js
  // and remembers the choice in localStorage for next visit.
  applyLanguage(getInitialLanguage());

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang-btn'));
    });
  });
});
