/**
 * site-utils.js
 * Shared utilities used by all pages (header scroll, dark mode, mobile menu).
 * main.js handles these for index.html — this file is for sub-pages.
 */
document.addEventListener('DOMContentLoaded', () => {
  _initHeader();
  _initDarkMode();
  _initMobileMenu();
});

function _initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function _initDarkMode() {
  const toggle = document.getElementById('theme-toggle');
  const icon   = document.getElementById('theme-icon');
  const label  = toggle?.querySelector('.toggle-label');
  if (!toggle || !icon) return;

  const apply = (dark) => {
    document.body.classList.toggle('dark', dark);
    icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    if (label) label.textContent = dark ? 'Light' : 'Dark';
  };

  apply(localStorage.getItem('theme') === 'dark');

  toggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    apply(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

function _initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('mobile-menu-open',   open);
    menu.classList.toggle('mobile-menu-closed', !open);
    btn.setAttribute('aria-expanded', open);
  });

  menu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.replace('mobile-menu-open', 'mobile-menu-closed');
      btn.setAttribute('aria-expanded', 'false');
    })
  );
}
