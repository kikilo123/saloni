document.addEventListener("DOMContentLoaded", () => {
    // ScrollReveal Animation
    ScrollReveal().reveal('.reveal', {
      distance: '40px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
      reset: false
    });
  
    // Toggle Menu
    const nav = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-nav');
      });
    }
  
    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav) nav.classList.remove('show-nav');
      });
    });
  
    // Change Active Link
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
    // Scroll Header shadow effect
    const header = document.getElementById('header');
    const navList = document.querySelectorAll('.nav-list .nav-link'); 
    window.addEventListener('scroll', () => {
      if (header) {
        if (window.scrollY >= 200) {
          header.classList.add('scroll-header');
          navList.forEach(l => l.classList.add('scroll-nav'));
        } else {
          header.classList.remove('scroll-header');
          navList.forEach(l => l.classList.remove('scroll-nav'));
        }
      }
    });
  });

  let currentLang = localStorage.getItem('lang') || 'ka';
const langToggle = document.getElementById('lang-toggle');
const translatableElements = document.querySelectorAll('[data-key]');

function loadTranslations(lang) {
  fetch('translations.json')
    .then(response => response.json())
    .then(data => {
      const translations = data[lang];

      translatableElements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });

      langToggle.textContent = lang.toUpperCase();
    })
    .catch(err => console.error("Translation load error:", err));
}

langToggle.addEventListener('click', function (e) {
  e.preventDefault();
  currentLang = currentLang === 'ka' ? 'en' : 'ka';
  localStorage.setItem('lang', currentLang);
  loadTranslations(currentLang);
});

// ჩატვირთე ენა თავიდან
loadTranslations(currentLang);
  