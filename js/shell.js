/* =========================================================
   SHELL.JS — header/footer injector + shared utils
   Injects the nav into every page so pages stay DRY.
   Highlights the current page based on <body data-page="...">.
   ========================================================= */

const NAV_ITEMS = [
  { id: 'home',    href: 'index.html',   icon: 'fa-house',        label: 'Home' },
  { id: 'art',     href: 'art.html',     icon: 'fa-palette',      label: 'Art' },
  { id: 'audio',   href: 'audio.html',   icon: 'fa-volume-high',  label: 'Sound' },
  { id: 'video',   href: 'video.html',   icon: 'fa-film',         label: 'Video' },
  { id: 'games',   href: 'games.html',   icon: 'fa-gamepad',      label: 'Games' },
  { id: 'design',  href: 'design.html',  icon: 'fa-pen-ruler',    label: 'Design' },
  { id: 'photo',   href: 'photo.html',   icon: 'fa-camera',       label: 'Photo' },
  { id: 'contact', href: 'contact.html', icon: 'fa-envelope',     label: 'Contact' }
];

function injectHeader() {
  const current = document.body.dataset.page || 'home';
  const nav = NAV_ITEMS.map(n => `
    <a class="nav-btn ${n.id === current ? 'active' : ''}" href="${n.href}">
      <i class="fas ${n.icon}"></i> ${n.label}
    </a>
  `).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html">
        <span class="brand-mark"><i class="fas fa-meteor"></i></span>
        <span class="brand-text"><strong>NEXUS</strong><small>Creative Portfolio</small></span>
      </a>
      <nav class="main-nav" id="mainNav">${nav}</nav>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>
    </div>
  `;
  document.body.prepend(header);

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });
}

function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div>
      <button onclick="location.href='index.html'">Home</button>
      <button onclick="location.href='contact.html'">Contact</button>
      <button onclick="comingSoon('Privacy')">Privacy</button>
    </div>
    <div>© 2025 NEXUS Portfolio · Placeholder build</div>
  `;
  document.body.appendChild(footer);
}

function injectBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.id = 'backToTop';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function injectToastContainer() {
  const c = document.createElement('div');
  c.className = 'toast-container';
  c.id = 'toastContainer';
  document.body.appendChild(c);
}

/* ---------------------------------------------------------
   TOASTS / PLACEHOLDERS (shared across pages)
   --------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-circle-info"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function comingSoon(feature) {
  showToast(`${feature} — placeholder, coming soon.`);
}

/* ---------------------------------------------------------
   SHARED RENDER HELPERS
   --------------------------------------------------------- */
const PLACEHOLDER_IMG = 'assets/img/placeholder.svg';

/* Gallery tile (image + caption) for art / video / design / photo */
function galleryTile({ title, meta }) {
  return `
    <button class="tile" onclick="comingSoon('${title}')">
      <img class="thumb" src="${PLACEHOLDER_IMG}" alt="Placeholder thumbnail" />
      <div class="tile-body">
        <span class="tile-title">${title}</span>
        <span class="tile-meta">${meta}</span>
      </div>
    </button>
  `;
}

/* List row for audio / games */
function listRow({ title, meta }) {
  return `
    <button class="list-row" onclick="comingSoon('${title}')">
      <div>
        <h3>${title}</h3>
        <p>${meta}</p>
      </div>
      <span class="badge">Placeholder</span>
    </button>
  `;
}

/* Generic placeholder generators */
function placeholderItems(count, label) {
  return Array.from({ length: count }, (_, i) => ({
    title: `${label} Placeholder ${i + 1}`,
    meta: 'Placeholder · Replace later'
  }));
}

/* ---------------------------------------------------------
   BOOT
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectToastContainer();
  injectFooter();
  injectBackToTop();
});