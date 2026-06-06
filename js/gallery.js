/**
 * gallery.js
 * Reads GALLERY_CONFIG and renders a photo grid with lightbox.
 * Depends on: gallery-config.js (must be loaded first)
 */

let _lightboxImages = [];
let _lightboxIndex  = 0;

/* ─────────────────────────────────────────────
   PUBLIC — call this in each gallery page
   e.g.  renderGallery('nepal', 'gallery-grid')
───────────────────────────────────────────── */
function renderGallery(categoryKey, containerId) {
  const config    = GALLERY_CONFIG[categoryKey];
  const container = document.getElementById(containerId);
  if (!config || !container) return;

  const images = config.images || [];

  /* update the photo-count badge if present */
  const countEl = document.getElementById('gallery-count');
  if (countEl) {
    countEl.textContent = images.length
      ? `${images.length} Photo${images.length !== 1 ? 's' : ''}`
      : 'No photos yet';
  }

  if (images.length === 0) {
    container.innerHTML = `
      <div class="gallery-empty">
        <i class="fa-regular fa-images"></i>
        <p class="gallery-empty-title">Khaali Chha — Abhai Photos Chhaina</p>
        <p class="gallery-empty-sub">
          Drop your images into<br>
          <code>assets/images/gallery/${categoryKey}/</code><br>
          then add their filenames to <code>js/gallery-config.js</code>
        </p>
      </div>`;
    return;
  }

  _lightboxImages = images.map(img => ({
    src:     config.basePath + img.file,
    caption: img.caption || '',
  }));

  container.innerHTML = images.map((img, i) => {
    const src     = config.basePath + img.file;
    const caption = img.caption || '';
    const delay   = (i % 9) * 60;
    return `
      <div class="gal-grid-item" data-aos="fade-up" data-aos-delay="${delay}"
           onclick="openLightbox(${i})" role="button" tabindex="0"
           aria-label="${caption || 'Gallery photo ' + (i + 1)}"
           onkeydown="if(event.key==='Enter'||event.key===' ')openLightbox(${i})">
        <img src="${src}" alt="${caption}" loading="lazy" decoding="async" />
        ${caption ? `<div class="gal-grid-caption">${caption}</div>` : ''}
        <div class="gal-grid-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
      </div>`;
  }).join('');

  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
function openLightbox(index) {
  _lightboxIndex = index;
  _renderLightboxSlide();

  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function shiftLightbox(direction) {
  const total = _lightboxImages.length;
  if (!total) return;
  _lightboxIndex = (_lightboxIndex + direction + total) % total;
  _renderLightboxSlide();
}

function _renderLightboxSlide() {
  const img     = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  const current = _lightboxImages[_lightboxIndex];
  if (!current || !img) return;

  img.style.opacity = '0';
  img.src = current.src;
  img.onload = () => { img.style.opacity = '1'; };

  if (caption) caption.textContent = current.caption;
  if (counter) counter.textContent = `${_lightboxIndex + 1} / ${_lightboxImages.length}`;

  /* hide arrows when only one image */
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');
  const hide = _lightboxImages.length <= 1;
  if (prev) prev.style.display = hide ? 'none' : '';
  if (next) next.style.display = hide ? 'none' : '';
}

/* ─────────────────────────────────────────────
   KEYBOARD & OVERLAY-CLICK
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeLightbox();
    });
  }

  document.addEventListener('keydown', e => {
    const active = document.getElementById('lightbox-overlay')?.classList.contains('active');
    if (!active) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  shiftLightbox(1);
    if (e.key === 'ArrowLeft')   shiftLightbox(-1);
  });
});
