/* =========================================================
   HOME.JS — renders home page cards
   ========================================================= */
const DISCIPLINES = [
  { icon: 'fa-palette',   title: 'Art & Illustration', page: 'art.html',    desc: 'Concept art, 2D/3D, visual dev.' },
  { icon: 'fa-volume-high', title: 'Sound Design',     page: 'audio.html',  desc: 'Composition, SFX, interactive audio.' },
  { icon: 'fa-film',      title: 'Video & Motion',     page: 'video.html',  desc: 'Editing, motion graphics, short form.' },
  { icon: 'fa-gamepad',   title: 'Game Development',   page: 'games.html',  desc: 'Prototypes, jam builds, systems.' },
  { icon: 'fa-pen-ruler', title: 'Design',             page: 'design.html', desc: 'UI/UX, branding, graphic systems.' },
  { icon: 'fa-camera',    title: 'Photography',        page: 'photo.html',  desc: 'Editorial, product, experimental.' }
];

const FEATURED = [
  { tag: 'Featured', title: 'Placeholder Project Alpha', desc: 'A showcase slot for a standout project.' },
  { tag: 'Featured', title: 'Placeholder Project Beta',  desc: 'A showcase slot for a standout project.' },
  { tag: 'Featured', title: 'Placeholder Project Gamma', desc: 'A showcase slot for a standout project.' }
];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('disciplineGrid').innerHTML = DISCIPLINES.map(d => `
    <button class="discipline-card" onclick="location.href='${d.page}'">
      <i class="fas ${d.icon}"></i>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </button>
  `).join('');

  document.getElementById('featureGrid').innerHTML = FEATURED.map(f => `
    <button class="feature-card" onclick="comingSoon('${f.title}')">
      <span class="tag">${f.tag}</span>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </button>
  `).join('');
});