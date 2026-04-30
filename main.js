/* ─── main.js ─── */

// ── Theme Toggle ──────────────────────────
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── Mobile Burger Menu ────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll Reveal ─────────────────────────
const revealEls = document.querySelectorAll(
  '.about-card, .skill-group, .timeline-item, .edu-card, .project-card, .about-text, .contact-item, .contact-form, .contact-info .lead'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => observer.observe(el));

// ── Sticky Nav Shadow ─────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,0.3)'
    : 'none';
});

// ── Active Nav Link ───────────────────────
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

const linkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => linkObserver.observe(s));

// ── Contact Form Feedback ─────────────────
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    // Formspree handles the actual submission
    // If you want AJAX submission instead of page redirect, uncomment below:
    /*
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: 'POST', body: data, headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.innerHTML = '<p style="text-align:center;color:var(--green);font-size:1.1rem;padding:40px 0">✓ Message sent! I\'ll get back to you soon.</p>';
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
    */
  });
}
