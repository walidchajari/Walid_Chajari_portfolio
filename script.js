/* ══════════════════════════════════════════════════
   Walid Chajari — Portfolio Script
   ══════════════════════════════════════════════════ */

// ─── Language Switcher ────────────────────────────
const langBtns = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-en]');
let currentLang = localStorage.getItem('selectedLang') || 'fr';

function applyLang(lang) {
  currentLang = lang;

  langBtns.forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  translatableElements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (!text) return;

    const textTarget = el.querySelector('[data-translate-text]') || el.querySelector('span:not(.btn-icon):not(.ticker-dot)');
    if (textTarget) {
      textTarget.textContent = text;
    } else {
      el.textContent = text;
    }
  });

  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.dir = 'ltr';
    document.body.removeAttribute('dir');
  }

  localStorage.setItem('selectedLang', lang);
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

// Apply saved lang on load
applyLang(currentLang);

// ─── Smooth Scroll ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav if open
      document.getElementById('navbar').classList.remove('nav-open');
    }
  });
});

// ─── Mobile Menu ──────────────────────────────────
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.getElementById('navbar');

if (mobileMenu && nav) {
  mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
}

// ─── Active Nav Link on Scroll ───────────────────
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
  });
});

// ─── Theme Toggle ─────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
  body.classList.add('light-mode');
  if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ─── Scroll Animation ─────────────────────────────
const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('[data-scroll]').forEach(el => scrollObserver.observe(el));

// ─── Typed.js Effect ──────────────────────────────
if (document.getElementById('typed-title')) {
  new Typed('#typed-title', {
    strings: ['Walid Chajari', 'Finance & Data Science'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2500,
    startDelay: 500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '_',
  });
}

// ─── Email Obfuscation & Dynamic Year ────────────
document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.getElementById('email-contact');
  if (emailLink) {
    const email = emailLink.getAttribute('data-email');
    emailLink.textContent = email;
    emailLink.href = `mailto:${email}`;
  }

  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ─── Carousels ─────────────────────────────────
  document.querySelectorAll('.project-carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Create dots
    if (dotsContainer) {
      images.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
      });
    }

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
      if (dotsContainer) {
        dotsContainer.querySelectorAll('span').forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
      currentIndex = index;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showImage((currentIndex - 1 + images.length) % images.length);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showImage((currentIndex + 1) % images.length);
      });
    }

    showImage(0);
  });
});

// ─── Mouse Parallax on Profile Image ──────────────
(function initParallax() {
  const hero = document.querySelector('.hero');
  const profile = document.querySelector('.profile-frame');
  if (!hero || !profile) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    profile.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });

  hero.addEventListener('mouseleave', () => {
    profile.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    profile.style.transition = 'transform 0.6s ease';
    setTimeout(() => { profile.style.transition = ''; }, 600);
  });
})();

// ─── Ripple Effect on Buttons ─────────────────────
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
