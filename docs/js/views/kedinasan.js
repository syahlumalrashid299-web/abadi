import { icon, store, esc } from '../app.js';
import { KEDINASAN, KEDINASAN_JENIS, KEDINASAN_PORTAL } from '../data/paths.js';

const BADGE = {
  Keuangan: 'badge-ptn',
  Pemerintahan: 'badge-teal',
  Statistika: 'badge-vokasi',
  Meteorologi: 'badge-amber',
  Siber: 'badge-teal',
  'Hukum & Imigrasi': 'badge-rose',
  Intelijen: 'badge-rose',
  Administrasi: 'badge-pts',
  Ketenagakerjaan: 'badge-amber',
  Sosial: 'badge-green',
  Pertanian: 'badge-green',
  Pariwisata: 'badge-amber',
  Penerbangan: 'badge-teal',
  Pelayaran: 'badge-pts',
  Kesehatan: 'badge-rose',
  Kepolisian: 'badge-ptn',
  Militer: 'badge-vokasi'
};

const jam = k => BADGE[k] || '';

export function renderKedinasan(ctx) {
  const favs = store.get('savedKedinasan', []);
  let filterJenis = 'Semua';
  let query = '';
  let showFavOnly = false;

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('shield')} Jalur Sekolah Kedinasan</span>
      <h1>Direktori Sekolah Kedinasan</h1>
      <p>Daftar sekolah kedinasan, militer, dan kepolisian dengan situs resminya. Ikatan dinas, lulus langsung jadi ASN, TNI, atau Polri.</p>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="filter-bar" style="margin-bottom:12px">
        <div class="search-box">
          ${icon('search')}
          <input class="input" id="q" placeholder="Cari sekolah, jurusan, atau kementerian...">
        </div>
      </div>
      <div class="chips" id="jenis-chips"></div>
    </div>

    <div class="row-between" style="margin-bottom:12px">
      <span class="small muted" id="count"></span>
      <button class="chip ${favs.length ? '' : 'active'}" id="fav-toggle">${icon('heart')} Favorit (${favs.length})</button>
    </div>

    <div class="grid grid-auto" id="list"></div>

    <section style="margin-top:26px">
      <div class="sec-head"><div><h2>Portal Pendaftaran Resmi</h2><p>Satu pintu untuk mendaftar kedinasan, TNI, dan Polri.</p></div></div>
      <div class="grid grid-3" id="portal-grid"></div>
      <div class="note teal" style="margin-top:16px">
        <strong>Tentang CAT:</strong> SKD sekolah kedinasan memakai sistem <strong>Computer Assisted Test</strong> BKN di titik lokasi resmi. Soal SKD resmi berjumlah 110 butir (TWK 30, TIU 35, TKP 45) dengan waktu 100 menit. Latihan di menu Seleksi &amp; Bank Soal belum menghitung nilai ambang batas, jadi gunakan sebagai pemanasan.
      </div>
    </section>
  `;

  const chips = wrap.querySelector('#jenis-chips');
  chips.innerHTML = KEDINASAN_JENIS.map(j => `<button class="chip ${j === 'Semua' ? 'active' : ''}" data-jenis="${esc(j)}">${esc(j)}</button>`).join('');

  const list = wrap.querySelector('#list');
  const count = wrap.querySelector('#count');

  function renderList() {
    const q = query.toLowerCase().trim();
    const items = KEDINASAN.filter(k => {
      if (filterJenis !== 'Semua' && k.jenis !== filterJenis) return false;
      if (showFavOnly && !favs.includes(k.id)) return false;
      if (!q) return true;
      return (k.nama + ' ' + k.kepanjangan + ' ' + k.kementerian + ' ' + k.jenis + ' ' + k.jurusan).toLowerCase().includes(q);
    });

    count.textContent = `${items.length} sekolah ditemukan`;
    if (!items.length) {
      list.innerHTML = `<div class="empty" style="grid-column:1/-1"><h4>Tidak ada sekolah cocok</h4><p class="small">Coba longgarkan filter atau kata kunci.</p></div>`;
      return;
    }

    list.innerHTML = items.map(k => `
      <div class="college-card" data-id="${k.id}">
        <div class="college-head">
          <div class="college-logo">${esc(k.nama.split(' ')[0].slice(0, 6))}</div>
          <div style="min-width:0;flex:1">
            <div class="college-name">${esc(k.nama)}</div>
            <div class="college-sub">${icon('building')}${esc(k.kementerian)}</div>
          </div>
        </div>
        <div class="row" style="gap:6px;flex-wrap:wrap">
          <span class="badge ${jam(k.jenis)}">${esc(k.jenis)}</span>
          <span class="badge">${esc(k.kuota)}</span>
        </div>
        <div class="tiny muted" style="font-weight:600">${esc(k.kepanjangan)}</div>
        <div class="tag-list">${k.jurusan.split(',').slice(0, 3).map(j => `<span class="tag">${esc(j.trim())}</span>`).join('')}</div>
        <div class="college-foot">
          <button class="btn btn-soft btn-sm" style="flex:1" data-detail="${k.id}">Lihat detail</button>
          <button class="fav-btn ${favs.includes(k.id) ? 'on' : ''}" data-fav="${k.id}" aria-label="Simpan favorit">${icon('heart')}</button>
        </div>
      </div>`).join('');

    list.querySelectorAll('[data-detail]').forEach(b => b.addEventListener('click', () => showDetail(b.dataset.detail)));
    list.querySelectorAll('[data-fav]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(b.dataset.fav);
    }));
  }

  function toggleFav(id) {
    const i = favs.indexOf(id);
    if (i >= 0) favs.splice(i, 1); else favs.push(id);
    store.set('savedKedinasan', favs);
    wrap.querySelector('#fav-toggle').innerHTML = `${icon('heart')} Favorit (${favs.length})`;
    renderList();
    ctx.toast(i >= 0 ? 'Dihapus dari favorit' : 'Disimpan ke favorit', 'ok');
  }

  function showDetail(id) {
    const k = KEDINASAN.find(x => x.id === id);
    if (!k) return;
    ctx.openModal({
      title: k.nama,
      body: `
        <p class="small" style="margin-bottom:8px">${esc(k.kepanjangan)}</p>
        <div class="row" style="gap:6px;margin-bottom:14px;flex-wrap:wrap">
          <span class="badge ${jam(k.jenis)}">${esc(k.jenis)}</span>
          <span class="badge">${esc(k.kementerian)}</span>
          <span class="badge">${esc(k.kuota)}</span>
        </div>
        <div class="detail-list" style="margin-bottom:16px">
          <div class="detail-row"><span class="k">Jurusan</span><span class="v">${esc(k.jurusan)}</span></div>
          <div class="detail-row"><span class="k">Pola seleksi</span><span class="v">${esc(k.seleksi)}</span></div>
          <div class="detail-row"><span class="k">Situs resmi</span><span class="v"><a href="${esc(k.web)}" target="_blank" rel="noopener">${esc(k.web)}</a></span></div>
        </div>
        <div class="note">${esc(k.catatan)}</div>
      `,
      footer: `<button class="btn btn-ghost" data-close>Tutup</button>
               <a class="btn btn-primary" href="${esc(k.web)}" target="_blank" rel="noopener">${icon('external')} Buka situs resmi</a>`,
      onMount: (modal) => {
        modal.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', e => e.stopPropagation()));
      }
    });
  }

  chips.querySelectorAll('[data-jenis]').forEach(b => b.addEventListener('click', () => {
    filterJenis = b.dataset.jenis;
    chips.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderList();
  }));

  wrap.querySelector('#q').addEventListener('input', e => { query = e.target.value; renderList(); });
  wrap.querySelector('#fav-toggle').addEventListener('click', () => {
    showFavOnly = !showFavOnly;
    wrap.querySelector('#fav-toggle').classList.toggle('active', showFavOnly);
    renderList();
  });

  wrap.querySelector('#portal-grid').innerHTML = KEDINASAN_PORTAL.map(p => `
    <a class="card" href="${esc(p.web)}" target="_blank" rel="noopener" style="text-decoration:none;display:flex;gap:12px;align-items:flex-start">
      <div class="path-icon" style="width:38px;height:38px;flex:0 0 38px;background:var(--primary-tint);color:var(--primary)">${icon('external')}</div>
      <div style="min-width:0">
        <div style="font-weight:800;font-size:.87rem">${esc(p.nama)}</div>
        <div class="tiny muted" style="margin-top:2px">${esc(p.ket)}</div>
        <div class="tiny" style="margin-top:6px;color:var(--primary);font-weight:700;word-break:break-all">${esc(p.web)}</div>
      </div>
    </a>`).join('');

  renderList();
  return wrap;
}
