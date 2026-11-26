import { icon, esc } from '../app.js';
import { MAJORS, MAJOR_GROUPS } from '../data/majors.js';

export function renderJurusan(ctx) {
  let group = 'Semua';
  let query = '';

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('book')} Jurusan</span>
      <h1>Kenali Jurusan & Prospeknya</h1>
      <p>Cari tahu apa yang dipelajari, mapel pendukung, prospek karier, dan kisaran gaji. Cocokkan dengan jurusan SMK-mu.</p>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="search-box" style="margin-bottom:12px">
        ${icon('search')}
        <input class="input" id="q" placeholder="Cari jurusan, prospek karier, atau jurusan SMK...">
      </div>
      <div class="chips" id="groups"></div>
    </div>

    <div class="small muted" style="margin-bottom:12px" id="count"></div>
    <div class="grid grid-auto" id="list"></div>
  `;

  const groups = wrap.querySelector('#groups');
  groups.innerHTML = MAJOR_GROUPS.map(g => `<button class="chip ${g === 'Semua' ? 'active' : ''}" data-g="${g}">${g}</button>`).join('');
  const list = wrap.querySelector('#list');
  const count = wrap.querySelector('#count');

  function renderList() {
    const q = query.toLowerCase().trim();
    const items = MAJORS.filter(m => {
      if (group !== 'Semua' && m.rumpun !== group) return false;
      if (!q) return true;
      return (m.nama + ' ' + m.prospek.join(' ') + ' ' + m.jurusanSMK.join(' ') + ' ' + m.deskripsi).toLowerCase().includes(q);
    });
    count.textContent = `${items.length} jurusan ditemukan`;

    if (!items.length) {
      list.innerHTML = `<div class="empty" style="grid-column:1/-1"><h4>Tidak ada jurusan cocok</h4><p class="small">Coba kata kunci lain atau pilih rumpun "Semua".</p></div>`;
      return;
    }

    const diffColor = d => d === 'Sangat Tinggi' ? 'badge-rose' : d === 'Tinggi' ? 'badge-amber' : d === 'Sedang' ? 'badge-vokasi' : 'badge-green';

    list.innerHTML = items.map(m => `
      <div class="card" style="display:flex;flex-direction:column;gap:10px">
        <div class="row-between" style="align-items:flex-start">
          <div style="min-width:0">
            <div style="font-weight:800;font-size:.94rem;line-height:1.3">${esc(m.nama)}</div>
            <div class="tiny muted" style="margin-top:2px">${esc(m.rumpun)}</div>
          </div>
          <span class="badge ${diffColor(m.tingkatKesulitan)}">${esc(m.tingkatKesulitan)}</span>
        </div>
        <p class="tiny muted" style="line-height:1.55">${esc(m.deskripsi)}</p>
        <div class="tag-list">${m.prospek.slice(0, 3).map(p => `<span class="tag">${esc(p)}</span>`).join('')}</div>
        <div class="row-between" style="margin-top:auto;padding-top:6px;border-top:1px solid var(--line-2)">
          <div>
            <div class="tiny muted" style="font-weight:700">Kisaran gaji</div>
            <div style="font-size:.8rem;font-weight:800;color:var(--primary-deep)">${esc(m.gaji)}</div>
          </div>
          <button class="btn btn-ghost btn-sm" data-m="${m.id}">Detail ${icon('chevronRight')}</button>
        </div>
      </div>`).join('');

    list.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => showDetail(b.dataset.m)));
  }

  function showDetail(id) {
    const m = MAJORS.find(x => x.id === id);
    ctx.openModal({
      title: m.nama,
      body: `
        <div class="row" style="gap:6px;margin-bottom:14px">
          <span class="badge">${esc(m.rumpun)}</span>
          <span class="badge badge-vokasi">Kesulitan: ${esc(m.tingkatKesulitan)}</span>
        </div>
        <p class="small" style="margin-bottom:16px">${esc(m.deskripsi)}</p>

        <h4 style="margin-bottom:8px">Mapel pendukung</h4>
        <div class="tag-list" style="margin-bottom:16px">${m.mapel.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>

        <h4 style="margin-bottom:8px">Prospek karier</h4>
        <ul class="list-check" style="margin-bottom:16px">
          ${m.prospek.map(p => `<li>${icon('check')}<span>${esc(p)}</span></li>`).join('')}
        </ul>

        <h4 style="margin-bottom:8px">Jurusan SMK yang paling nyambung</h4>
        <div class="tag-list" style="margin-bottom:16px">${m.jurusanSMK.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>

        <div class="kv-grid">
          <div class="kv"><div class="k">Kisaran gaji</div><div class="v">${esc(m.gaji)}</div></div>
          <div class="kv"><div class="k">Tingkat kesulitan</div><div class="v">${esc(m.tingkatKesulitan)}</div></div>
        </div>
      `,
      footer: `<button class="btn btn-ghost" data-close>Tutup</button>
               <button class="btn btn-primary" id="m-kuliah">${icon('building')} Cari kampusnya</button>`,
      onMount: (modal, close) => {
        modal.querySelector('#m-kuliah').addEventListener('click', () => { close(); ctx.navigate('kuliah'); });
      }
    });
  }

  groups.querySelectorAll('[data-g]').forEach(b => b.addEventListener('click', () => {
    group = b.dataset.g;
    groups.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderList();
  }));
  wrap.querySelector('#q').addEventListener('input', e => { query = e.target.value; renderList(); });

  renderList();
  return wrap;
}
