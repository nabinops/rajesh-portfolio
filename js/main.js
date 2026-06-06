/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 70 });

  spawnParticles();
  initHeader();
  initDarkMode();
  initMobileMenu();
  initScrollSpy();
  initTimelineTabs();
  initSmoothScroll();
  initTiltCards();
  initContactForm();
});

/* ═══════════════════════════════════════════════
   FLOATING PARTICLES — sky diya effect
═══════════════════════════════════════════════ */
function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = window.innerWidth < 640 ? 12 : 22;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size  = Math.random() * 5 + 2;
    const left  = Math.random() * 100;
    const delay = Math.random() * 12;
    const dur   = Math.random() * 10 + 8;

    const colors = [
      'rgba(3, 105, 161, 0.7)',
      'rgba(2, 132, 199, 0.7)',
      'rgba(14, 165, 233, 0.6)',
      'rgba(125, 211, 252, 0.5)',
      'rgba(255, 255, 255, 0.4)',
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    Object.assign(p.style, {
      width:              `${size}px`,
      height:             `${size}px`,
      left:               `${left}%`,
      bottom:             `${Math.random() * 20}%`,
      background:         color,
      boxShadow:          `0 0 ${size * 2}px ${color}`,
      animationDuration:  `${dur}s`,
      animationDelay:     `${delay}s`,
    });

    container.appendChild(p);
  }
}

/* ═══════════════════════════════════════════════
   HEADER — scroll shadow
═══════════════════════════════════════════════ */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const update = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ═══════════════════════════════════════════════
   DARK MODE — toggle with localStorage persistence
═══════════════════════════════════════════════ */
function initDarkMode() {
  const toggle = document.getElementById('theme-toggle');
  const icon   = document.getElementById('theme-icon');
  const label  = toggle ? toggle.querySelector('.toggle-label') : null;
  if (!toggle || !icon) return;

  const applyTheme = (dark) => {
    document.body.classList.toggle('dark', dark);
    icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    if (label) label.textContent = dark ? 'Light' : 'Dark';
  };

  const saved = localStorage.getItem('theme');
  applyTheme(saved === 'dark');

  toggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* ═══════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════ */
function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('mobile-menu-open',   open);
    menu.classList.toggle('mobile-menu-closed', !open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('mobile-menu-open');
      menu.classList.add('mobile-menu-closed');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ═══════════════════════════════════════════════
   SCROLL SPY — active nav link
═══════════════════════════════════════════════ */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}

/* ═══════════════════════════════════════════════
   TIMELINE TABS
═══════════════════════════════════════════════ */
function initTimelineTabs() {
  const btnEdu  = document.getElementById('tab-education');
  const btnWork = document.getElementById('tab-work');
  const paneEdu  = document.getElementById('education-content');
  const paneWork = document.getElementById('work-content');
  if (!btnEdu || !btnWork) return;

  function activate(activeBtn, inactiveBtn, showPane, hidePane) {
    activeBtn.classList.add('tab-active');
    inactiveBtn.classList.remove('tab-active');
    showPane.classList.remove('hidden');
    hidePane.classList.add('hidden');
    AOS.refreshHard();
  }

  btnEdu.addEventListener('click',  () => activate(btnEdu,  btnWork, paneEdu,  paneWork));
  btnWork.addEventListener('click', () => activate(btnWork, btnEdu,  paneWork, paneEdu));
}

/* ═══════════════════════════════════════════════
   SMOOTH SCROLL
═══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ═══════════════════════════════════════════════
   3D TILT EFFECT on .tilt-card elements
═══════════════════════════════════════════════ */
function initTiltCards() {
  // Skip on touch devices — tilt hurts mobile UX
  if ('ontouchstart' in window) return;

  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * 7;
      const rotY =  dx * 7;

      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      card.style.transform  = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.15s ease';
    });
  });
}

/* ═══════════════════════════════════════════════
   CONTACT FORM — WhatsApp submission
═══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = document.getElementById('c-name').value.trim()  || 'Unknown';
    const email = document.getElementById('c-email').value.trim() || 'N/A';
    const msg   = document.getElementById('c-msg').value.trim()   || '(No message provided)';

    const now = new Date().toLocaleDateString('en-NP', { year: 'numeric', month: 'long', day: 'numeric' });

    const text = encodeURIComponent(
      `*Namaste Rajesh dai!* 🙏\n\n` +
      `Mero naam *${name}* ho.\n` +
      `Email: ${email}\n\n` +
      `*Message:*\n${msg}\n\n` +
      `_Sent via rajeshtiwari.com · ${now}_`
    );

    window.open(`https://wa.me/9779813456789?text=${text}`, '_blank');
  });
}
