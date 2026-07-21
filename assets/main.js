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

  // Cosmetic language toggle (EN/DA). No translations are wired up yet —
  // this only swaps the pressed state of the two buttons.
  const langButtons = document.querySelectorAll('[role="group"][aria-label="Language"] button');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      langButtons.forEach((b) => {
        b.setAttribute('aria-pressed', 'false');
        b.classList.remove('bg-primary', 'text-primary-foreground');
        b.classList.add('text-muted-foreground');
      });
      btn.setAttribute('aria-pressed', 'true');
      btn.classList.add('bg-primary', 'text-primary-foreground');
      btn.classList.remove('text-muted-foreground');
    });
  });
});
