import { icon, esc } from '../app.js';
import { loadDocs, saveDocs, bytesOf, MAX_FILE_BYTES } from '../store.js';

const KATEGORI = [
  'Ijazah', 'Transkrip/Rapor', 'SKCK', 'KTP', 'Kartu Keluarga',
  'Sertifikat', 'Pas Foto', 'Surat Lamaran', 'Lainnya'
];

// Berkas wajib per jalur pendaftaran
const CHECKLIST = [
  {
    id: 'kuliah', nama: 'Kuliah (SNBP/SNBT/Mandiri)', tone: 'indigo',
    wajib: ['Ijazah', 'Transkrip/Rapor', 'KTP', 'Kartu Keluarga', 'Pas Foto', 'Sertifikat']
  },
  {
    id: 'kedinasan', nama: 'Sekolah Kedinasan', tone: 'teal',
    wajib: ['Ijazah', 'Transkrip/Rapor', 'KTP', 'Kartu Keluarga', 'SKCK', 'Pas Foto', 'Surat Lamaran']
  },
  {
    id: 'cpns', nama: 'CPNS / PPPK', tone: 'rose',
    wajib: ['Ijazah', 'Transkrip/Rapor', 'KTP', 'Kartu Keluarga', 'SKCK', 'Pas Foto', 'Surat Lamaran']
  },
  {
    id: 'abdi', nama: 'Abdi Negara (TNI/Polri)', tone: 'amber',
    wajib: ['Ijazah', 'Transkrip/Rapor', 'KTP', 'Kartu Keluarga', 'SKCK', 'Pas Foto']
  }
];

function extOf(name) {
  const m = /\.([a-z0-9]+)$/i.exec(name || '');
  return m ? m[1].toLowerCase() : 'file';
}

export function renderBerkas(ctx) {
  let docs = loadDocs();
  if (!Array.isArray(docs)) docs = [];

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('file')} Persiapan Karier</span>
      <h1>Berkas Pendaftaran</h1>
      <p>Simpan semua dokumen pendaftaran di satu tempat: PTN, PTS, sekolah kedinasan, CPNS, dan abdi negara. Berkas tersimpan di perangkatmu, tidak diunggah ke server mana pun.</p>
    </div>

    <div class="two-col" style="margin-bottom:20px">
      <div>
        <div class="card pad-lg">
          <h3 style="margin-bottom:4px">Unggah Berkas</h3>
          <p class="tiny muted" style="margin-bottom:14px">Format PDF, JPG, atau PNG. Maksimal ${bytesOf(Math.round(MAX_FILE_BYTES))} per berkas.</p>

          <div class="field" style="margin-bottom:12px">
            <label for="kategori">Kategori berkas</label>
            <select class="select" id="kategori">
              ${KATEGORI.map(k => `<option value="${esc(k)}">${esc(k)}</option>`).join('')}
            </select>
          </div>

          <div class="dropzone" id="drop">
            ${icon('upload')}
            <div style="font-weight:700;font-size:.9rem">Tarik berkas ke sini</div>
            <div class="tiny muted" style="margin-bottom:12px">atau pilih dari perangkat</div>
            <button class="btn btn-primary btn-sm" id="pick">${icon('upload')} Pilih berkas</button>
            <input type="file" id="file" multiple accept=".pdf,.jpg,.jpeg,.png" hidden>
          </div>

          <div class="row-between" style="margin-top:14px">
            <span class="tiny muted" id="usage"></span>
            <button class="btn btn-ghost btn-sm" id="clear-all">${icon('trash')} Hapus semua</button>
          </div>
        </div>
      </div>

      <div>
        <div class="card pad-lg">
          <h3 style="margin-bottom:6px">Kesiapan Berkas</h3>
          <p class="tiny muted" style="margin-bottom:12px">Persentase kategori yang sudah kamu punya.</p>
          <div class="progress" style="margin-bottom:8px"><span id="req-bar" style="width:0%"></span></div>
          <div class="tiny muted" id="req-text" style="margin-bottom:14px"></div>
          <div id="req-list"></div>
        </div>
      </div>
    </div>

    <div class="sec-head">
      <div>
        <h2>Berkas Tersimpan</h2>
        <p id="docs-count">Belum ada berkas.</p>
      </div>
      <div class="search-box" style="max-width:260px">
        ${icon('search')}
        <input class="input" id="q" placeholder="Cari nama berkas...">
      </div>
    </div>

    <div class="stack-sm" id="doc-list"></div>
  `;

  const input = wrap.querySelector('#file');
  const drop = wrap.querySelector('#drop');
  const kategoriSel = wrap.querySelector('#kategori');
  const list = wrap.querySelector('#doc-list');

  /* ---------- Unggah ---------- */
  function handleFiles(fileList, kategori) {
    const files = Array.from(fileList || []);
    if (!files.length) return;

    const before = docs.slice();
    let ok = 0, skipped = 0, pending = files.length;

    const finish = () => {
      const res = saveDocs(docs);
      if (!res.ok) {
        docs = before;
        ctx.toast(res.error, 'warn');
      } else if (ok > 0) {
        ctx.toast(`${ok} berkas disimpan${skipped ? `, ${skipped} dilewati` : ''}`, 'ok');
      }
      paintAll();
    };

    files.forEach(f => {
      if (f.size > MAX_FILE_BYTES) {
        skipped++;
        ctx.toast(`${f.name} terlalu besar (maks ${bytesOf(Math.round(MAX_FILE_BYTES))})`, 'warn');
        if (--pending === 0) finish();
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        docs.push({
          id: 'f' + Date.now() + Math.random().toString(36).slice(2, 7),
          nama: f.name,
          tipe: f.type || '',
          ext: extOf(f.name),
          ukuran: f.size,
          kategori: kategori,
          data: reader.result,
          waktu: new Date().toISOString()
        });
        ok++;
        if (--pending === 0) finish();
      };
      reader.onerror = () => {
        skipped++;
        ctx.toast('Gagal membaca ' + f.name, 'warn');
        if (--pending === 0) finish();
      };
      reader.readAsDataURL(f);
    });
  }

  wrap.querySelector('#pick').addEventListener('click', () => input.click());
  input.addEventListener('change', e => {
    handleFiles(e.target.files, kategoriSel.value);
    input.value = '';
  });

  ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => {
    e.preventDefault(); drop.classList.add('hover');
  }));
  ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => {
    e.preventDefault(); drop.classList.remove('hover');
  }));
  drop.addEventListener('drop', e => handleFiles(e.dataTransfer.files, kategoriSel.value));

  /* ---------- Daftar berkas ---------- */
  const docList = wrap.querySelector('#doc-list');
  let query = '';

  function paintDocs() {
    const q = query.toLowerCase().trim();
    const items = docs.filter(d => !q || (d.nama + ' ' + d.kategori).toLowerCase().includes(q));

    wrap.querySelector('#docs-count').textContent = docs.length
      ? `${items.length} dari ${docs.length} berkas ditampilkan`
      : 'Belum ada berkas. Unggah berkas pertamamu di atas.';

    if (!items.length) {
      docList.innerHTML = `<div class="empty card">
        <h4>${docs.length ? 'Tidak ada berkas cocok' : 'Belum ada berkas tersimpan'}</h4>
        <p class="small">${docs.length ? 'Coba kata kunci lain.' : 'Simpan ijazah dan KTP dulu, itu paling sering diminta.'}</p>
      </div>`;
      return;
    }

    docList.innerHTML = items.map(d => `
      <div class="file-item">
        <div class="file-icon ${esc(d.ext)}">${esc(d.ext.slice(0, 4).toUpperCase())}</div>
        <div style="flex:1;min-width:0">
          <div class="file-name">${esc(d.nama)}</div>
          <div class="file-meta">
            <span class="chip-cat">${esc(d.kategori)}</span>
            ${bytesOf(d.ukuran)} &middot; ${new Date(d.waktu).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
          </div>
        </div>
        <a class="icon-btn" href="${d.data}" download="${esc(d.nama)}" aria-label="Unduh berkas" title="Unduh">${icon('download')}</a>
        <button class="icon-btn" data-del="${d.id}" aria-label="Hapus berkas" title="Hapus" style="color:#b91c1c">${icon('trash')}</button>
      </div>`).join('');

    docList.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.del;
      const item = docs.find(x => x.id === id);
      if (!item) return;
      if (!confirm(`Hapus berkas "${item.nama}"?`)) return;
      docs = docs.filter(x => x.id !== id);
      saveDocs(docs);
      paintAll();
      ctx.toast('Berkas dihapus');
    }));
  }

  /* ---------- Checklist per jalur ---------- */
  function paintReq() {
    const have = new Set(docs.map(d => d.kategori));
    const host = wrap.querySelector('#req-list');
    host.innerHTML = CHECKLIST.map(c => {
      const done = c.wajib.filter(k => have.has(k)).length;
      const pct = Math.round((done / c.wajib.length) * 100);
      return `
        <div style="margin-bottom:14px">
          <div class="row-between" style="margin-bottom:6px">
            <strong style="font-size:.82rem">${esc(c.nama)}</strong>
            <span class="tiny mono muted">${done}/${c.wajib.length}</span>
          </div>
          <div class="progress" style="height:5px;margin-bottom:8px"><span style="width:${pct}%"></span></div>
          ${c.wajib.map(k => {
            const ok = have.has(k);
            return `<div class="req-item ${ok ? 'done' : ''}">
              <span class="req-mark">${icon(ok ? 'check' : 'close')}</span>
              <span class="req-label">${esc(k)}</span>
            </div>`;
          }).join('')}
        </div>`;
    }).join('');

    // Ringkasan global: unik kategori wajib dari semua jalur
    const allReq = Array.from(new Set(CHECKLIST.flatMap(c => c.wajib)));
    const done = allReq.filter(k => have.has(k)).length;
    const pct = Math.round((done / allReq.length) * 100);
    wrap.querySelector('#req-bar').style.width = pct + '%';
    wrap.querySelector('#req-text').textContent = `${done} dari ${allReq.length} kategori wajib sudah tersedia (${pct}%)`;
  }

  function paintUsage() {
    const total = docs.reduce((s, d) => s + (d.ukuran || 0), 0);
    wrap.querySelector('#usage').textContent = `${docs.length} berkas, ${bytesOf(total)} terpakai`;
  }

  function paintAll() {
    paintDocs();
    paintReq();
    paintUsage();
  }

  wrap.querySelector('#q').addEventListener('input', e => { query = e.target.value; paintDocs(); });

  wrap.querySelector('#clear-all').addEventListener('click', () => {
    if (!docs.length) return ctx.toast('Belum ada berkas untuk dihapus');
    if (!confirm('Hapus semua berkas tersimpan? Tindakan ini tidak bisa dibatalkan.')) return;
    docs = [];
    saveDocs(docs);
    paintAll();
    ctx.toast('Semua berkas dihapus');
  });

  paintAll();
  return wrap;
}
