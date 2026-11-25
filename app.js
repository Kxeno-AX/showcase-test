/* =========================================================
   APP.JS — routing, placeholder toasts, page rendering
   ========================================================= */

/* ---------------------------------------------------------
   NAVIGATION
   --------------------------------------------------------- */
let currentPage = 'home';

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-btn[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === page);
  });

  currentPage = page;
  document.getElementById('mainNav').classList.remove('open'); // close mobile menu
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Mobile nav toggle */
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});

/* ---------------------------------------------------------
   TOASTS / PLACEHOLDERS
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
   PLACEHOLDER DATA
   (Swap these arrays with real data later — non-placeholder.)
   --------------------------------------------------------- */
const DISCIPLINES = [
  { icon: 'fa-palette',       title: 'Art & Illustration', page: 'art',    desc: 'Concept art, 2D/3D, visual dev.' },
  { icon: 'fa-waveform',      title: 'Sound Design',       page: 'audio',  desc: 'Composition, SFX, interactive audio.' },
  { icon: 'fa-film',          title: 'Video & Motion',     page: 'video',  desc: 'Editing, motion graphics, short form.' },
  { icon: 'fa-gamepad',       title: 'Game Development',   page: 'games',  desc: 'Prototypes, jam builds, systems.' },
  { icon: 'fa-pen-ruler',     title: 'Design',             page: 'design', desc: 'UI/UX, branding, graphic systems.' },
  { icon: 'fa-camera',        title: 'Photography',        page: 'photo',  desc: 'Editorial, product, experimental.' }
];

const FEATURED = [
  { tag: 'Featured', title: 'Placeholder Project Alpha', desc: 'A showcase slot for a standout project.' },
  { tag: 'Featured', title: 'Placeholder Project Beta',  desc: 'A showcase slot for a standout project.' },
  { tag: 'Featured', title: 'Placeholder Project Gamma', desc: 'A showcase slot for a standout project.' }
];

/* Generic placeholder tile generator */
function placeholderTiles(count, label) {
  return Array.from({ length: count }, (_, i) => ({
    icon: 'fa-cube',
    title: `${label} Placeholder ${i + 1}`,
    meta: 'Placeholder · Replace later'
  }));
}

/* ---------------------------------------------------------
   RENDER: HOME
   --------------------------------------------------------- */
function renderHome() {
  const dg = document.getElementById('disciplineGrid');
  dg.innerHTML = DISCIPLINES.map(d => `
    <button class="discipline-card" onclick="navigate('${d.page}')">
      <i class="fas ${d.icon}"></i>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </button>
  `).join('');

  const fg = document.getElementById('featureGrid');
  fg.innerHTML = FEATURED.map(f => `
    <button class="feature-card" onclick="comingSoon('${f.title}')">
      <span class="tag">${f.tag}</span>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </button>
  `).join('');
}

/* ---------------------------------------------------------
   RENDER: GALLERY PAGES (art, video, design, photo)
   --------------------------------------------------------- */
function renderGallery(gridId, label, count = 8) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = placeholderTiles(count, label).map(t => `
    <button class="tile" onclick="comingSoon('${t.title}')">
      <span class="tile-icon"><i class="fas ${t.icon}"></i></span>
      <span class="tile-title">${t.title}</span>
      <span class="tile-meta">${t.meta}</span>
    </button>
  `).join('');
}

/* ---------------------------------------------------------
   RENDER: LIST PAGES (audio, games)
   --------------------------------------------------------- */
function renderList(listId, label, count = 6) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.innerHTML = placeholderTiles(count, label).map(t => `
    <button class="list-row" onclick="comingSoon('${t.title}')">
      <div>
        <h3>${t.title}</h3>
        <p>${t.meta}</p>
      </div>
      <span class="badge">Placeholder</span>
    </button>
  `).join('');
}

/* ---------------------------------------------------------
   CONTACT SUBMIT (placeholder)
   --------------------------------------------------------- */
function submitContact() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMsg').value.trim();
  if (!name || !email || !msg) { showToast('Please fill in all required fields.'); return; }
  showToast('Message captured — placeholder submit (no backend yet).');
  document.querySelector('.contact-form').reset();
}

/* ---------------------------------------------------------
   BACK TO TOP
   --------------------------------------------------------- */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
function init() {
  renderHome();
  renderGallery('artGallery', 'Art');
  renderGallery('videoGallery', 'Video');
  renderGallery('designGallery', 'Design');
  renderGallery('photoGallery', 'Photo');
  renderList('audioList', 'Audio');
  renderList('gamesList', 'Game');
  navigate('home');
}

document.addEventListener('DOMContentLoaded', init);