import { icon, store, esc } from '../app.js';
import { COLLEGES, COLLEGE_TYPES } from '../data/colleges.js';

export function renderKuliah(ctx) {
  const favs = store.get('savedCollege', []);
  let filterType = 'Semua';
  let query = '';
  let maxBiaya = 0; // 0 = semua

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('cap')} Jalur Kuliah</span>
      <h1>Informasi Perguruan Tinggi</h1>
      <p>PTN, PTS, dan vokasi. Simpan kampus favoritmu, lihat jurusan unggulan, estimasi biaya, dan jalur masuknya.</p>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="filter-bar" style="margin-bottom:12px">
        <div class="search-box">
          ${icon('search')}
          <input class="input" id="q" placeholder="Cari kampus, jurusan, atau provinsi...">
        </div>
      </div>
      <div class="chips" id="type-chips" style="margin-bottom:10px"></div>
      <div class="row" style="gap:8px">
        <label class="tiny" style="font-weight:700;color:var(--ink-2)">Biaya maksimal per semester:</label>
        <select class="select" id="biaya" style="width:auto;min-width:180px">
          <option value="0">Semua kisaran</option>
          <option value="5">Di bawah Rp 5 juta</option>
          <option value="10">Di bawah Rp 10 juta</option>
          <option value="15">Di bawah Rp 15 juta</option>
        </select>
      </div>
    </div>

    <div class="row-between" style="margin-bottom:12px">
      <span class="small muted" id="count"></span>
      <button class="chip ${favs.length ? '' : 'active'}" id="fav-toggle">${icon('heart')} Favorit (${favs.length})</button>
    </div>

    <div class="grid grid-auto" id="list"></div>
  `;

  const chips = wrap.querySelector('#type-chips');
  chips.innerHTML = COLLEGE_TYPES.map(t => `<button class="chip ${t === 'Semua' ? 'active' : ''}" data-type="${t}">${t}</button>`).join('');
  let showFavOnly = false;

  const list = wrap.querySelector('#list');
  const count = wrap.querySelector('#count');

  const biayaNum = c => {
    // Ambil angka juta tertinggi dari string biaya
    const m = c.match(/(\d+)\s?jt/gi) || [];
    const nums = m.map(x => parseInt(x));
    return nums.length ? Math.max(...nums) : 999;
  };

  function renderList() {
    const q = query.toLowerCase().trim();
    let items = COLLEGES.filter(c => {
      if (filterType !== 'Semua' && c.jenis !== filterType) return false;
      if (maxBiaya > 0 && biayaNum(c.biaya) > maxBiaya) return false;
      if (showFavOnly && !favs.includes(c.id)) return false;
      if (!q) return true;
      return (c.nama + ' ' + c.singkat + ' ' + c.provinsi + ' ' + c.jurusanUnggulan.join(' ')).toLowerCase().includes(q);
    });

    count.textContent = `${items.length} kampus ditemukan`;
    if (!items.length) {
      list.innerHTML = `<div class="empty" style="grid-column:1/-1"><h4>Tidak ada kampus cocok</h4><p class="small">Coba longgarkan filter atau kata kunci.</p></div>`;
      return;
    }

    list.innerHTML = items.map(c => `
      <div class="college-card" data-id="${c.id}">
        <div class="college-head">
          <div class="college-logo">${esc(c.singkat.slice(0, 6))}</div>
          <div style="min-width:0;flex:1">
            <div class="college-name">${esc(c.nama)}</div>
            <div class="college-sub">${icon('mapPin')}${esc(c.lokasi)}</div>
          </div>
        </div>
        <div class="row" style="gap:6px">
          <span class="badge badge-${c.jenis === 'PTN' ? 'ptn' : c.jenis === 'PTS' ? 'pts' : 'vokasi'}">${c.jenis}</span>
          <span class="badge">Akreditasi ${esc(c.akreditasi)}</span>
        </div>
        <div class="tag-list">${c.jurusanUnggulan.slice(0, 3).map(j => `<span class="tag">${esc(j)}</span>`).join('')}</div>
        <div class="tiny muted" style="font-weight:600">${esc(c.biaya)}</div>
        <div class="college-foot">
          <button class="btn btn-soft btn-sm" style="flex:1" data-detail="${c.id}">Lihat detail</button>
          <button class="fav-btn ${favs.includes(c.id) ? 'on' : ''}" data-fav="${c.id}" aria-label="Simpan favorit">${icon('heart')}</button>
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
    store.set('savedCollege', favs);
    wrap.querySelector('#fav-toggle').innerHTML = `${icon('heart')} Favorit (${favs.length})`;
    renderList();
    ctx.toast(i >= 0 ? 'Dihapus dari favorit' : 'Disimpan ke favorit', 'ok');
  }

  function showDetail(id) {
    const c = COLLEGES.find(x => x.id === id);
    ctx.openModal({
      title: c.nama,
      body: `
        <div class="row" style="gap:6px;margin-bottom:14px">
          <span class="badge badge-${c.jenis === 'PTN' ? 'ptn' : c.jenis === 'PTS' ? 'pts' : 'vokasi'}">${c.jenis}</span>
          <span class="badge">Akreditasi ${esc(c.akreditasi)}</span>
          <span class="badge">${esc(c.provinsi)}</span>
        </div>
        <p class="small" style="margin-bottom:16px">${esc(c.deskripsi)}</p>
        <div class="detail-list" style="margin-bottom:16px">
          <div class="detail-row"><span class="k">Lokasi</span><span class="v">${esc(c.lokasi)}</span></div>
          <div class="detail-row"><span class="k">Estimasi biaya</span><span class="v">${esc(c.biaya)}</span></div>
          <div class="detail-row"><span class="k">Jalur masuk</span><span class="v">${c.jalur.map(j => `<span class="tag">${esc(j)}</span>`).join(' ')}</span></div>
          <div class="detail-row"><span class="k">Website resmi</span><span class="v"><a href="${c.web}" target="_blank" rel="noopener">${esc(c.web)}</a></span></div>
        </div>
        <h4 style="margin-bottom:8px">Jurusan unggulan</h4>
        <div class="tag-list" style="margin-bottom:16px">${c.jurusanUnggulan.map(j => `<span class="tag">${esc(j)}</span>`).join('')}</div>
        <div class="note">Biaya adalah estimasi UKT/SPP jalur reguler. Cek laman resmi kampus untuk angka pasti dan skema KIP-Kuliah.</div>
      `,
      footer: `<button class="btn btn-ghost" data-close>Tutup</button>
               <button class="btn btn-primary" id="fav-modal">${icon('heart')} ${favs.includes(c.id) ? 'Hapus favorit' : 'Simpan favorit'}</button>`,
      onMount: (modal, close) => {
        modal.querySelector('#fav-modal').addEventListener('click', () => { toggleFav(c.id); close(); });
      }
    });
  }

  chips.querySelectorAll('[data-type]').forEach(b => b.addEventListener('click', () => {
    filterType = b.dataset.type;
    chips.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderList();
  }));

  wrap.querySelector('#q').addEventListener('input', e => { query = e.target.value; renderList(); });
  wrap.querySelector('#biaya').addEventListener('change', e => { maxBiaya = Number(e.target.value); renderList(); });
  wrap.querySelector('#fav-toggle').addEventListener('click', () => {
    showFavOnly = !showFavOnly;
    wrap.querySelector('#fav-toggle').classList.toggle('active', showFavOnly);
    renderList();
  });

  renderList();
  return wrap;
}
