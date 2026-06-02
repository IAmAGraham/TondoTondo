// scripts.js — Tondo Tondo

// --- Smooth scroll for all anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.getElementById('main-nav')?.offsetHeight || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    // Close mobile nav if open
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// --- Nav background on scroll ---
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40
      ? 'rgba(122, 158, 106, 0.25)'
      : 'rgba(122, 158, 106, 0.15)';
  }, { passive: true });
}
