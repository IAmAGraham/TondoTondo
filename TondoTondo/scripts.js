// scripts.js for Tondo Tondo Website

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Mobile nav toggle (if you add a mobile menu)
// const navToggle = document.getElementById('nav-toggle');
// navToggle.addEventListener('click', () => {
//   document.querySelector('nav ul').classList.toggle('open');
// });
