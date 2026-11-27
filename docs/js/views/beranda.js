import { icon, store, readiness, esc } from '../app.js';
import { PATHS, KEDINASAN } from '../data/paths.js';
import { COLLEGES } from '../data/colleges.js';
import { MAJORS } from '../data/majors.js';
import { LOWONGAN } from '../data/jobs.js';
import { BANK_SOAL } from '../data/questions.js';

const TONE = { kuliah: 'indigo', kedinasan: 'teal', 'abdi-negara': 'amber', cpns: 'rose' };

export function renderBeranda(ctx) {
  const ready = readiness();
  const quiz = store.get('quizResult', null);
  const favs = store.get('savedCollege', []);
  const banks = store.get('bankSoal', { snbt: [], skd: [] });
  const soalDijawab = Object.values(banks || {}).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0);
  const totalSoal = Object.values(BANK_SOAL).reduce((sum, p) => sum + p.soal.length, 0);
  const docs = store.get('berkas', []);

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <span class="pill">${icon('sparkles')} Platform Masa Depan Siswa</span>
        <h1>Tentukan Langkah Setelah Lulus,<br>dengan Data dan Rencana.</h1>
        <p>ABADI memetakan empat jalur yang setara: <strong>kuliah</strong>, <strong>sekolah kedinasan</strong>, <strong>abdi negara</strong>, dan <strong>CPNS</strong>. Bandingkan, kenali dirimu, lalu siapkan berkasnya di satu tempat.</p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" data-go="rekomendasi">${icon('target')} Cari jalur yang cocok</button>
          <button class="btn btn-ghost btn-lg" data-go="bandingkan">${icon('scale')} Bandingkan 4 jalur</button>
        </div>
      </div>
    </section>

    <div class="grid grid-4" style="margin-top:16px">
      <div class="stat-card"><span class="stat-value mono">${COLLEGES.length}</span><span class="stat-label">Kampus terdata</span></div>
      <div class="stat-card"><span class="stat-value mono">${MAJORS.length}</span><span class="stat-label">Jurusan & prospek</span></div>
      <div class="stat-card"><span class="stat-value mono">${totalSoal}</span><span class="stat-label">Soal latihan</span></div>
      <div class="stat-card"><span class="stat-value mono">${LOWONGAN.length}</span><span class="stat-label">Jalur lowongan</span></div>
    </div>

    <section style="margin-top:26px">
      <div class="sec-head">
        <div><h2>Empat Jalur, Satu Tujuan</h2><p>Tidak ada yang lebih tinggi. Yang ada adalah yang paling cocok dengan kondisimu.</p></div>
      </div>
      <div class="grid grid-4" id="path-grid"></div>
    </section>

    <section style="margin-top:26px" class="two-col">
      <div class="card pad-lg">
        <div class="row-between" style="margin-bottom:12px">
          <h3>Progres Kesiapanmu</h3>
          <span class="badge ${ready.percent === 100 ? 'badge-green' : ''}">${ready.percent}%</span>
        </div>
        <div class="progress" style="margin-bottom:16px"><span style="width:${ready.percent}%"></span></div>
        <div class="stack-sm" id="ready-list"></div>
      </div>

      <div class="card pad-lg">
        <h3 style="margin-bottom:4px">Ringkasan Kamu</h3>
        <p class="tiny muted" style="margin-bottom:14px">Semua data tersimpan di perangkat ini.</p>
        <div class="stack-sm">
          <div class="row-between" style="font-size:.85rem">
            <span class="muted">Rekomendasi jalur</span>
            <strong>${quiz ? esc(quiz.topName) : 'Belum diisi'}</strong>
          </div>
          <div class="row-between" style="font-size:.85rem">
            <span class="muted">Kampus disimpan</span>
            <strong>${favs.length} kampus</strong>
          </div>
          <div class="row-between" style="font-size:.85rem">
            <span class="muted">Soal dikerjakan</span>
            <strong>${soalDijawab} soal</strong>
          </div>
          <div class="row-between" style="font-size:.85rem">
            <span class="muted">Berkas tersimpan</span>
            <strong>${docs.length} berkas</strong>
          </div>
        </div>
        <button class="btn btn-soft btn-block" style="margin-top:16px" data-go="${quiz ? 'rekomendasi' : 'rekomendasi'}">
          ${icon(quiz ? 'refresh' : 'target')} ${quiz ? 'Lihat hasil rekomendasi' : 'Mulai kuis 8 pertanyaan'}
        </button>
      </div>
    </section>

    <section style="margin-top:26px">
      <div class="sec-head"><div><h2>Akses Cepat</h2><p>Alat yang paling sering dipakai siswa kelas 12.</p></div></div>
      <div class="grid grid-3" id="quick-grid"></div>
    </section>

    <section style="margin-top:26px" id="install-section">
      <div class="card pad-lg" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
        <div class="path-icon" style="width:46px;height:46px;flex:0 0 46px;background:var(--primary-tint);color:var(--primary)">${icon('download')}</div>
        <div style="flex:1;min-width:220px">
          <div style="font-weight:800">Pasang ABADI di HP</div>
          <div class="tiny muted" style="margin-top:2px">Versi Android 1.0.0, 4,2 MB. Bisa dipakai tanpa internet setelah dipasang.</div>
        </div>
        <a class="btn btn-primary" href="https://github.com/syahlumalrashid299-web/abadi/releases/download/v1.0.0/ABADI-v1.0.0.apk" rel="noopener">${icon('download')} Unduh APK</a>
      </div>
    </section>
  `;

  // Kartu jalur
  const pg = wrap.querySelector('#path-grid');
  pg.innerHTML = PATHS.map(p => `
    <button class="path-card tone-${TONE[p.id]}" data-path="${p.id}">
      <div class="path-icon">${icon(p.ikon)}</div>
      <h3>${esc(p.nama)}</h3>
      <p>${esc(p.ringkas)}</p>
      <div class="path-meta"><span>${esc(p.durasi.split('(')[0].trim())}</span></div>
    </button>`).join('');

  pg.querySelectorAll('[data-path]').forEach(b => {
    b.addEventListener('click', () => showPathDetail(b.dataset.path, ctx));
  });

  // Checklist progres
  const rl = wrap.querySelector('#ready-list');
  rl.innerHTML = ready.checks.map(c => `
    <div class="req-item ${c.done ? 'done' : ''}">
      <span class="req-mark">${c.done ? icon('check') : ''}</span>
      <span class="req-label">${esc(c.label)}</span>
    </div>`).join('');

  // Akses cepat
  const quick = [
    { view: 'seleksi', icon: 'target', t: 'Bank Soal UTBK & SKD', d: 'TWK, TIU, TKP, dan pembahasan langsung.' },
    { view: 'kedinasan', icon: 'shield', t: 'Sekolah Kedinasan', d: `${KEDINASAN.length} sekolah + situs resmi.` },
    { view: 'kuliah', icon: 'building', t: 'Cari Kampus', d: 'Filter PTN, PTS, vokasi, dan biaya.' },
    { view: 'berkas', icon: 'file', t: 'Berkas Pendaftaran', d: 'Simpan ijazah, SKCK, sertifikat di satu tempat.' },
    { view: 'lowongan', icon: 'briefcase', t: 'Lowongan CPNS', d: 'Formasi SLTA dan jadwal seleksi.' },
    { view: 'jurusan', icon: 'book', t: 'Kenali Jurusan', d: 'Prospek karier dan kisaran gaji.' },
    { view: 'bandingkan', icon: 'scale', t: 'Perbandingan Jalur', d: '10 aspek, dibobot sesuai prioritasmu.' }
  ];
  const qg = wrap.querySelector('#quick-grid');
  qg.innerHTML = quick.map(q => `
    <button class="card" style="text-align:left;display:flex;gap:12px;align-items:flex-start" data-go="${q.view}">
      <div class="path-icon" style="width:38px;height:38px;flex:0 0 38px;background:var(--primary-tint);color:var(--primary)">${icon(q.icon)}</div>
      <div style="min-width:0">
        <div style="font-weight:800;font-size:.87rem">${esc(q.t)}</div>
        <div class="tiny muted" style="margin-top:2px">${esc(q.d)}</div>
      </div>
    </button>`).join('');

  wrap.querySelectorAll('[data-go]').forEach(b => {
    b.addEventListener('click', () => ctx.navigate(b.dataset.go));
  });

  return wrap;
}

function showPathDetail(id, ctx) {
  const p = PATHS.find(x => x.id === id);
  if (!p) return;
  const tujuan = id === 'kuliah' ? 'kuliah' : id === 'cpns' ? 'lowongan' : 'lowongan';
  ctx.openModal({
    title: p.nama,
    body: `
      <p class="small muted" style="margin-bottom:14px">${esc(p.tagline)}</p>
      <div class="kv-grid" style="margin-bottom:16px">
        <div class="kv"><div class="k">Durasi</div><div class="v">${esc(p.durasi)}</div></div>
        <div class="kv"><div class="k">Biaya</div><div class="v">${esc(p.biaya)}</div></div>
        <div class="kv"><div class="k">Titik mulai</div><div class="v">${esc(p.mulai)}</div></div>
      </div>
      <h4 style="margin-bottom:8px">Kelebihan</h4>
      <ul class="list-check" style="margin-bottom:16px">
        ${p.kelebihan.map(k => `<li>${icon('check')}<span>${esc(k)}</span></li>`).join('')}
      </ul>
      <h4 style="margin-bottom:8px">Tantangan</h4>
      <ul class="list-check list-warn" style="margin-bottom:16px">
        ${p.tantangan.map(k => `<li>${icon('alert')}<span>${esc(k)}</span></li>`).join('')}
      </ul>
      <h4 style="margin-bottom:8px">Cocok untuk</h4>
      <p class="small" style="margin-bottom:16px">${esc(p.cocokUntuk)}</p>
      <h4 style="margin-bottom:10px">Langkah nyata</h4>
      <div class="steps">
        ${p.langkah.map((s, i) => `<div class="step"><div class="step-dot">${i + 1}</div><div class="step-text">${esc(s)}</div></div>`).join('')}
      </div>
      <div class="note teal" style="margin-top:16px">Sumber resmi: <a href="${p.sumber}" target="_blank" rel="noopener">${esc(p.sumber)}</a></div>
    `,
    footer: `<button class="btn btn-ghost" data-close>Tutup</button>
             <button class="btn btn-primary" id="path-go">${icon('chevronRight')} Lihat info ${id === 'kuliah' ? 'kampus' : 'lowongan'}</button>`,
    onMount: (modal, close) => {
      modal.querySelector('#path-go').addEventListener('click', () => { close(); ctx.navigate(tujuan); });
    }
  });
}
