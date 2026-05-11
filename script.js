const nav = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

// 1. Scroll Effect pour la Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('bg-[#1A0A00]', 'py-4', 'shadow-2xl');
        nav.classList.remove('py-6');
    } else {
        nav.classList.remove('bg-[#1A0A00]', 'py-4', 'shadow-2xl');
        nav.classList.add('py-6');
    }
});

// 2. Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
});

const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
};

closeBtn.addEventListener('click', closeMenu);

// Fermer le menu si on clique sur un lien (très important pour le responsive)
document.querySelectorAll('.m-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// 3. Animation d'apparition au scroll (Optionnel mais recommandé)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-item, .product-card').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});