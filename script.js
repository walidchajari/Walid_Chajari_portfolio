const langBtns = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-en]');
let currentLang = 'fr';

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        currentLang = selectedLang;

        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        translatableElements.forEach(el => {
            const text = el.getAttribute(`data-${selectedLang}`);
            if (!text) return;

            if (el.tagName === 'A') {
                const textTarget = el.querySelector('[data-translate-text]') || el.querySelector('span:not(.btn-icon)');
                if (textTarget) {
                    textTarget.textContent = text;
                } else {
                    el.textContent = text;
                }
            } else {
                el.textContent = text;
            }
        });

        if (selectedLang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.style.direction = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
            document.body.style.direction = 'ltr';
        }

        localStorage.setItem('selectedLang', selectedLang);
    });
});

const savedLang = localStorage.getItem('selectedLang') || 'fr';
const savedBtn = document.querySelector(`[data-lang="${savedLang}"]`);
if (savedBtn && savedLang !== 'fr') {
    savedBtn.click();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav'); // Get the nav element

if (mobileMenu && navLinks && nav) {
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-open'); // Toggle class on nav
        mobileMenu.classList.toggle('open'); // For burger animation
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                mobileMenu.classList.remove('open');
            }
        });
    });
}

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-light)';
        }
    });
});

window.addEventListener('load', () => {
    console.log('✓ Portfolio Walid Chajari - Version Finale avec Photo');
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '🌙';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const newTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
}

// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-scroll]').forEach(elem => {
        observer.observe(elem);
    });
});

// Typed.js Effect
if (document.getElementById('typed-title')) {
    const typed = new Typed('#typed-title', {
        strings: ['Walid Chajari', 'Finance & Data Science'],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 2500,
        startDelay: 500,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true
    });
}

// Email Obfuscation
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email-contact');
    if (emailLink) {
        const encodedEmail = emailLink.getAttribute('data-email');
        const email = encodedEmail; // No complex decoding needed for simple string
        emailLink.textContent = email;
        emailLink.href = `mailto:${email}`;
    }

    // Dynamic Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Project Carousel
    const carousels = document.querySelectorAll('.project-carousel');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});
