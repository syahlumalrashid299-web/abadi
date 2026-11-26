import { icon, store, esc } from '../app.js';
import { LOWONGAN, LOWONGAN_JENIS, SCAM_TIPS } from '../data/jobs.js';

const JENIS_BADGE = {
  'CPNS': 'badge-rose',
  'PPPK': 'badge-teal',
  'Sekolah Kedinasan': 'badge-teal',
  'Abdi Negara': 'badge-amber',
  'BUMN': 'badge-ptn'
};

export function renderLowongan(ctx) {
  let filterJenis = 'Semua';
  let query = '';
  const saved = store.get('savedJobs', []);

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('briefcase')} Jalur CPNS &amp; Abdi Negara</span>
      <h1>Lowongan untuk Lulusan SMK/SMA</h1>
      <p>Formasi CPNS, PPPK, sekolah kedinasan, TNI/Polri, dan BUMN yang terbuka untuk lulusan SLTA. Simpan yang menarik, cek syaratnya, lalu siapkan berkasnya.</p>
    </div>

    <div class="grid grid-4" id="stat-row" style="margin-bottom:20px"></div>

    <div class="card" style="margin-bottom:16px">
      <div class="search-box" style="margin-bottom:12px">
        ${icon('search')}
        <input class="input" id="q" placeholder="Cari instansi, posisi, atau kualifikasi...">
      </div>
      <div class="chips" id="jenis-chips"></div>
    </div>

    <div class="row-between" style="margin-bottom:12px">
      <span class="small muted" id="count"></span>
      <button class="chip" id="saved-toggle">${icon('heart')} Tersimpan (<span id="saved-n">${saved.length}</span>)</button>
    </div>

    <div class="grid grid-auto" id="list" style="margin-bottom:24px"></div>

    <div class="card pad-lg" style="border-left:4px solid var(--accent)">
      <div class="row" style="gap:9px;margin-bottom:10px">
        <span style="color:var(--accent)">${icon('alert')}</span>
        <h3>Waspada Lowongan Palsu</h3>
      </div>
      <p class="small muted" style="margin-bottom:12px">Rekrutmen ASN, TNI, Polri, dan BUMN resmi <strong>selalu gratis</strong>. Ini yang harus kamu waspadai:</p>
      <ul class="list-check list-warn">${SCAM_TIPS.map(t => `<li>${icon('alert')}<span>${esc(t)}</span></li>`).join('')}</ul>
    </div>
  `;

  /* ---------- Statistik ringkas ---------- */
  wrap.querySelector('#stat-row').innerHTML = `
    <div class="stat-card"><span class="stat-value">${LOWONGAN.length}</span><span class="stat-label">Info rekrutmen aktif</span></div>
    <div class="stat-card"><span class="stat-value">${LOWONGAN.reduce((s, j) => s + (j.formasi || 0), 0).toLocaleString('id-ID')}</span><span class="stat-label">Total formasi contoh</span></div>
    <div class="stat-card"><span class="stat-value">${LOWONGAN.filter(j => j.jenis === 'CPNS' || j.jenis === 'PPPK').length}</span><span class="stat-label">Jalur ASN</span></div>
    <div class="stat-card"><span class="stat-value">${LOWONGAN.filter(j => j.jenis === 'Abdi Negara').length}</span><span class="stat-label">Jalur TNI/Polri</span></div>
  `;

  /* ---------- Chips jenis ---------- */
  const chips = wrap.querySelector('#jenis-chips');
  chips.innerHTML = LOWONGAN_JENIS.map(j => `<button class="chip ${j === filterJenis ? 'active' : ''}" data-j="${esc(j)}">${esc(j)}</button>`).join('');
  chips.querySelectorAll('[data-j]').forEach(b => b.addEventListener('click', () => {
    filterJenis = b.dataset.j;
    chips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    b.classList.add('active');
    paintList();
  }));

  const list = wrap.querySelector('#list');
  const count = wrap.querySelector('#count');
  let onlySaved = false;

  function paintList() {
    const q = query.toLowerCase().trim();
    const items = LOWONGAN.filter(j => {
      if (filterJenis !== 'Semua' && j.jenis !== filterJenis) return false;
      if (onlySaved && !saved.includes(j.id)) return false;
      if (!q) return true;
      return (j.instansi + ' ' + j.posisi + ' ' + j.kualifikasi + ' ' + j.lokasi).toLowerCase().includes(q);
    });

    count.textContent = `${items.length} lowongan ditemukan`;

    if (!items.length) {
      list.innerHTML = `<div class="empty" style="grid-column:1/-1">
        <h4>Belum ada yang cocok</h4>
        <p class="small">Coba hapus filter atau ubah kata kunci pencarian.</p>
      </div>`;
      return;
    }

    list.innerHTML = items.map(j => `
      <div class="job-card">
        <div class="job-top">
          <div style="min-width:0">
            <div class="job-title">${esc(j.posisi)}</div>
            <div class="job-inst">${esc(j.instansi)}</div>
          </div>
          <button class="fav-btn ${saved.includes(j.id) ? 'on' : ''}" data-fav="${j.id}" aria-label="Simpan lowongan">${icon('heart')}</button>
        </div>
        <div class="row" style="gap:6px">
          <span class="badge ${JENIS_BADGE[j.jenis] || ''}">${esc(j.jenis)}</span>
          <span class="badge">${esc(j.status)}</span>
        </div>
        <div class="job-meta">
          <span>${icon('mapPin')}${esc(j.lokasi)}</span>
          <span>${icon('users')}${j.formasi.toLocaleString('id-ID')} formasi</span>
          <span>${icon('money')}${esc(j.gaji)}</span>
        </div>
        <div class="tiny muted">${esc(j.kualifikasi)}</div>
        <div class="row" style="gap:8px;margin-top:auto;padding-top:4px">
          <button class="btn btn-soft btn-sm" style="flex:1" data-detail="${j.id}">Lihat syarat</button>
          <a class="btn btn-ghost btn-sm" href="${esc(j.link)}" target="_blank" rel="noopener">${icon('external')} Situs</a>
        </div>
      </div>`).join('');

    list.querySelectorAll('[data-detail]').forEach(b => b.addEventListener('click', () => showDetail(b.dataset.detail)));
    list.querySelectorAll('[data-fav]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.fav;
      const i = saved.indexOf(id);
      if (i >= 0) saved.splice(i, 1); else saved.push(id);
      store.set('savedJobs', saved);
      wrap.querySelector('#saved-n').textContent = saved.length;
      paintList();
      ctx.toast(i >= 0 ? 'Dihapus dari simpanan' : 'Lowongan disimpan', 'ok');
    }));
  }

  function showDetail(id) {
    const j = LOWONGAN.find(x => x.id === id);
    ctx.openModal({
      title: j.posisi,
      body: `
        <div class="row" style="gap:6px;margin-bottom:14px">
          <span class="badge ${JENIS_BADGE[j.jenis] || ''}">${esc(j.jenis)}</span>
          <span class="badge">${esc(j.status)}</span>
          <span class="badge">${j.formasi.toLocaleString('id-ID')} formasi</span>
        </div>
        <div class="detail-list" style="margin-bottom:16px">
          <div class="detail-row"><span class="k">Instansi</span><span class="v">${esc(j.instansi)}</span></div>
          <div class="detail-row"><span class="k">Lokasi</span><span class="v">${esc(j.lokasi)}</span></div>
          <div class="detail-row"><span class="k">Kualifikasi</span><span class="v">${esc(j.kualifikasi)}</span></div>
          <div class="detail-row"><span class="k">Perkiraan gaji</span><span class="v">${esc(j.gaji)}</span></div>
          <div class="detail-row"><span class="k">Batas pendaftaran</span><span class="v">${esc(j.batas)}</span></div>
          <div class="detail-row"><span class="k">Situs resmi</span><span class="v"><a href="${esc(j.link)}" target="_blank" rel="noopener">${esc(j.link)}</a></span></div>
        </div>
        <div class="note">${esc(j.catatan)}</div>
      `,
      footer: `<button class="btn btn-ghost" data-close>Tutup</button>
               <button class="btn btn-soft" id="go-berkas">${icon('file')} Siapkan berkas</button>
               <a class="btn btn-primary" href="${esc(j.link)}" target="_blank" rel="noopener">${icon('external')} Buka pendaftaran</a>`,
      onMount: (modal, close) => {
        modal.querySelector('#go-berkas').addEventListener('click', () => { close(); ctx.navigate('berkas'); });
      }
    });
  }

  wrap.querySelector('#q').addEventListener('input', e => { query = e.target.value; paintList(); });
  wrap.querySelector('#saved-toggle').addEventListener('click', e => {
    onlySaved = !onlySaved;
    e.currentTarget.classList.toggle('active', onlySaved);
    paintList();
  });

  paintList();
  return wrap;
}
