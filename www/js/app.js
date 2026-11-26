// ABADI: inti aplikasi: router, navigasi, toast, modal, dan utilitas UI.
import { icon } from './icons.js';
import { store, readiness } from './store.js';

import { renderBeranda } from './views/beranda.js';
import { renderRekomendasi } from './views/rekomendasi.js';
import { renderBandingkan } from './views/bandingkan.js';
import { renderKuliah } from './views/kuliah.js';
import { renderJurusan } from './views/jurusan.js';
import { renderSeleksi } from './views/seleksi.js';
import { renderLowongan } from './views/lowongan.js';
import { renderBerkas } from './views/berkas.js';

export const NAV = [
  { group: 'Jelajahi', items: [
    { view: 'beranda', label: 'Beranda', icon: 'compass' },
    { view: 'rekomendasi', label: 'Rekomendasi Jalur', icon: 'sparkles' },
    { view: 'bandingkan', label: 'Bandingkan Pilihan', icon: 'scale' }
  ]},
  { group: 'Empat Jalur', items: [
    { view: 'kuliah', label: 'Kuliah & Kampus', icon: 'cap' },
    { view: 'jurusan', label: 'Jurusan & Prospek', icon: 'book' },
    { view: 'seleksi', label: 'Seleksi & Bank Soal', icon: 'target' },
    { view: 'lowongan', label: 'Lowongan CPNS', icon: 'briefcase' }
  ]},
  { group: 'Persiapan', items: [
    { view: 'berkas', label: 'Berkas Pendaftaran', icon: 'file' }
  ]}
];

const BOTTOM = [
  { view: 'beranda', label: 'Beranda', icon: 'compass' },
  { view: 'rekomendasi', label: 'Rekomendasi', icon: 'sparkles' },
  { view: 'kuliah', label: 'Kuliah', icon: 'cap' },
  { view: 'berkas', label: 'Berkas', icon: 'file' }
];

const ROUTES = {
  beranda: renderBeranda,
  rekomendasi: renderRekomendasi,
  bandingkan: renderBandingkan,
  kuliah: renderKuliah,
  jurusan: renderJurusan,
  seleksi: renderSeleksi,
  lowongan: renderLowongan,
  berkas: renderBerkas
};

export const state = { view: 'beranda', params: {} };

const root = document.getElementById('view-root');
const sidebar = document.getElementById('sidebar');
const bottomNav = document.getElementById('bottom-nav');

/* ---------------- Toast ---------------- */
export function toast(msg, kind = '') {
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast ' + kind;
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2400);
  setTimeout(() => el.remove(), 2800);
}

/* ---------------- Modal ---------------- */
export function openModal({ title, body, footer, onMount, size }) {
  const rootEl = document.getElementById('modal-root');
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  bg.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" style="${size ? `max-width:${size}px` : ''}">
      <div class="modal-head">
        <div style="flex:1"><h3>${title}</h3></div>
        <button class="icon-btn" data-close aria-label="Tutup">${icon('close')}</button>
      </div>
      <div class="modal-body">${body}</div>
      ${footer ? `<div class="modal-foot">${footer}</div>` : ''}
    </div>`;
  rootEl.appendChild(bg);
  const close = () => { bg.remove(); document.body.style.overflow = ''; };
  document.body.style.overflow = 'hidden';
  bg.addEventListener('click', e => { if (e.target === bg || e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });
  if (onMount) onMount(bg.querySelector('.modal'), close);
  return { close, el: bg };
}

/* ---------------- Navigasi ---------------- */
function buildNav() {
  sidebar.innerHTML = `
    <div class="brand">
      <div class="brand-mark">${icon('cap')}</div>
      <div class="brand-text">
        <span class="brand-name">ABADI</span>
        <span class="brand-tag">Masa Depan Terencana</span>
      </div>
    </div>
    ${NAV.map(g => `
      <div class="nav-group">
        <div class="nav-label">${g.group}</div>
        ${g.items.map(it => `
          <button class="nav-item" data-nav="${it.view}">
            ${icon(it.icon)}<span>${it.label}</span>
          </button>`).join('')}
      </div>`).join('')}
    <div class="sidebar-foot">
      <strong>Progres kesiapan</strong>
      <div id="side-progress-text" class="tiny">Memuat...</div>
      <div class="progress" style="margin-top:7px"><span id="side-progress-bar" style="width:0%"></span></div>
    </div>
  `;
  sidebar.querySelectorAll('[data-nav]').forEach(b => {
    b.addEventListener('click', () => navigate(b.dataset.nav));
  });

  bottomNav.innerHTML = `<div class="bottom-nav-inner">
    ${BOTTOM.map(it => `
      <button class="bn-item" data-nav="${it.view}">${icon(it.icon)}<span>${it.label}</span></button>`).join('')}
    <button class="bn-item" id="bn-more">${icon('menu')}<span>Lainnya</span></button>
  </div>`;

  bottomNav.querySelectorAll('[data-nav]').forEach(b => {
    b.addEventListener('click', () => navigate(b.dataset.nav));
  });
  bottomNav.querySelector('#bn-more').addEventListener('click', openMoreSheet);
  document.getElementById('btn-topbar-more').addEventListener('click', openMoreSheet);
}

function openMoreSheet() {
  const bg = document.createElement('div');
  bg.className = 'more-sheet';
  bg.innerHTML = `
    <div class="more-panel">
      ${NAV.map(g => `
        <h4>${g.group}</h4>
        ${g.items.map(it => `
          <button class="nav-item ${state.view === it.view ? 'active' : ''}" data-nav="${it.view}">
            ${icon(it.icon)}<span>${it.label}</span>
          </button>`).join('')}
      `).join('')}
    </div>`;
  document.body.appendChild(bg);
  const close = () => bg.remove();
  bg.addEventListener('click', e => {
    if (e.target === bg) return close();
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) { close(); navigate(navBtn.dataset.nav); }
  });
}

function syncNav() {
  document.querySelectorAll('[data-nav]').forEach(b => {
    b.classList.toggle('active', b.dataset.nav === state.view);
  });
  const ready = readiness();
  const txt = document.getElementById('side-progress-text');
  const bar = document.getElementById('side-progress-bar');
  if (txt) txt.textContent = `${ready.percent}% lengkap (${ready.done}/${ready.total} langkah)`;
  if (bar) bar.style.width = ready.percent + '%';
}

export function navigate(view, params = {}) {
  if (!ROUTES[view]) view = 'beranda';
  state.view = view;
  state.params = params;
  history.replaceState({ view, params }, '', '#' + view);
  render();
  syncNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
  const fn = ROUTES[state.view] || ROUTES.beranda;
  root.innerHTML = '';
  const node = fn({ navigate, toast, openModal, state, refresh: render });
  if (typeof node === 'string') root.innerHTML = node;
  else if (node instanceof Node) root.appendChild(node);
  root.focus({ preventScroll: true });
}

/* ---------------- Utilitas ekspor ---------- */
export { icon, store, readiness };

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ---------------- Boot ---------------- */
function boot() {
  buildNav();
  const hash = location.hash.replace('#', '');
  if (ROUTES[hash]) state.view = hash;
  render();
  syncNav();
  root.focus({ preventScroll: true });
}

boot();
