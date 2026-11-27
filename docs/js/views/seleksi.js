import { icon, store, esc } from '../app.js';
import { SELEKSI } from '../data/paths.js';
import { BANK_SOAL } from '../data/questions.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

// Subtes SKD untuk filter di dalam paket skd.
const SUBTES = ['Semua', 'TWK', 'TIU', 'TKP'];

function emptyProgress() {
  return { snbt: [], skd: [] };
}

// Gabungkan progres lama dengan kunci paket yang ada sekarang,
// supaya tidak ada riwayat yang hilang saat paket soal bertambah.
function padProgress(raw) {
  const base = emptyProgress();
  const src = raw && typeof raw === 'object' ? raw : {};
  Object.keys(BANK_SOAL).forEach(k => { base[k] = Array.isArray(src[k]) ? src[k] : []; });
  Object.keys(src).forEach(k => { if (Array.isArray(src[k]) && !Array.isArray(base[k])) base[k] = src[k]; });
  return base;
}

export function renderSeleksi(ctx) {
  let paket = 'snbt';
  let subtes = 'Semua';
  let index = 0;
  let picked = null; // index opsi yang dipilih untuk soal aktif
  let answered = padProgress(store.get('bankSoal', null));

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('target')} Jalur Kuliah &amp; ASN</span>
      <h1>Seleksi &amp; Bank Soal</h1>
      <p>Pahami tiga jalur masuk kuliah, lalu latih kemampuanmu dengan soal bergaya UTBK-SNBT dan SKD CPNS/kedinasan.</p>
    </div>

    <div class="sec-head">
      <div>
        <h2>Jalur Seleksi Kuliah</h2>
        <p>Tiga pintu masuk perguruan tinggi, masing-masing dengan strategi berbeda.</p>
      </div>
    </div>
    <div class="grid grid-3" id="seleksi-cards" style="margin-bottom:26px"></div>

    <div class="sec-head">
      <div>
        <h2>Latihan Bank Soal</h2>
        <p id="bank-desc">Pilih paket soal, jawab satu per satu, pembahasan muncul langsung.</p>
      </div>
    </div>

    <div class="card" style="margin-bottom:14px">
      <div class="row-between">
        <div class="chips" id="paket-chips"></div>
        <div class="row" style="gap:8px">
          <span class="badge badge-teal" id="progres-badge"></span>
          <button class="btn btn-ghost btn-sm" id="reset-bank">${icon('refresh')} Ulangi dari awal</button>
        </div>
      </div>
      <div class="chips" id="subtest-chips" style="margin-top:12px;display:none"></div>
    </div>

    <div class="question-card" id="quiz-area"></div>

    <div class="note teal" style="margin-top:16px">
      <strong>Soal SKD memakai sistem CAT.</strong> Ujian resmi SKD CPNS dan sekolah kedinasan diselenggarakan dengan <em>Computer Assisted Test</em> BKN: 110 butir soal (TWK 30, TIU 35, TKP 45) dalam 100 menit. Nilai ambang batas mengikuti keputusan resmi KemenPAN-RB, jadi pakai latihan ini sebagai pemanasan, lalu kerjakan simulasi CAT resmi.
    </div>
  `;

  /* ---------- Kartu jalur seleksi ---------- */
  const cards = wrap.querySelector('#seleksi-cards');
  cards.innerHTML = SELEKSI.map(s => `
    <div class="path-card">
      <div class="path-icon" style="background:var(--primary-soft);color:var(--primary-deep)">${icon('target')}</div>
      <h3>${esc(s.nama)}</h3>
      <p>${esc(s.singkat)}</p>
      <div class="path-meta"><span>${esc(s.komposisi.split(',')[0])}</span></div>
      <button class="btn btn-soft btn-sm" data-sel="${s.id}">Baca panduan</button>
    </div>`).join('');

  cards.querySelectorAll('[data-sel]').forEach(b => b.addEventListener('click', () => {
    const s = SELEKSI.find(x => x.id === b.dataset.sel);
    ctx.openModal({
      title: s.nama,
      body: `
        <p class="small" style="margin-bottom:14px">${esc(s.singkat)}</p>
        <div class="detail-list" style="margin-bottom:16px">
          <div class="detail-row"><span class="k">Dinilai dari</span><span class="v">${esc(s.komposisi)}</span></div>
          <div class="detail-row"><span class="k">Kunci lolos</span><span class="v">${esc(s.kunci)}</span></div>
        </div>
        <h4 style="margin-bottom:8px">Tips praktis</h4>
        <ul class="list-check">${s.tips.map(t => `<li>${icon('check')}<span>${esc(t)}</span></li>`).join('')}</ul>
      `,
      footer: `<button class="btn btn-ghost" data-close>Tutup</button>
               <button class="btn btn-primary" id="lat-now">${icon('target')} Latihan soal</button>`,
      onMount: (modal, close) => {
        modal.querySelector('#lat-now').addEventListener('click', () => {
          close();
          setPaket(s.id === 'mandiri' ? 'snbt' : s.id);
          wrap.querySelector('#quiz-area').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    });
  }));

  /* ---------- Chips paket ---------- */
  const chips = wrap.querySelector('#paket-chips');
  const subChips = wrap.querySelector('#subtest-chips');

  function paintChips() {
    chips.innerHTML = Object.keys(BANK_SOAL).map(k => `
      <button class="chip ${k === paket ? 'active' : ''}" data-p="${k}">${esc(BANK_SOAL[k].nama)}</button>`).join('');
    chips.querySelectorAll('[data-p]').forEach(b => b.addEventListener('click', () => setPaket(b.dataset.p)));

    subChips.style.display = paket === 'skd' ? 'flex' : 'none';
    subChips.innerHTML = SUBTES.map(s => `
      <button class="chip ${s === subtes ? 'active' : ''}" data-s="${s}">${s === 'Semua' ? 'Semua subtes' : s}</button>`).join('');
    subChips.querySelectorAll('[data-s]').forEach(b => b.addEventListener('click', () => setSubtes(b.dataset.s)));
  }

  function setPaket(k) {
    if (!BANK_SOAL[k]) return;
    paket = k;
    subtes = 'Semua';
    index = 0;
    picked = null;
    paintChips();
    paintQuiz();
  }

  function setSubtes(s) {
    if (subtes === s) return;
    subtes = s;
    index = 0;
    picked = null;
    paintChips();
    paintQuiz();
  }

  const area = wrap.querySelector('#quiz-area');

  function soalAktif() {
    const all = BANK_SOAL[paket].soal;
    if (paket !== 'skd' || subtes === 'Semua') return all;
    return all.filter(q => q.topik === subtes);
  }

  function jumlahDijawab(list) {
    const done = answered[paket] || [];
    return list.filter(q => done.includes(q.id)).length;
  }

  function sudahDijawab(qid) {
    return (answered[paket] || []).includes(qid);
  }

  function tandaiSelesai(qid) {
    const arr = answered[paket] || (answered[paket] = []);
    if (!arr.includes(qid)) arr.push(qid);
    store.set('bankSoal', answered);
  }

  function paintBadge() {
    const list = soalAktif();
    const total = list.length;
    const done = jumlahDijawab(list);
    const label = paket === 'skd' && subtes !== 'Semua' ? ` ${subtes}` : '';
    wrap.querySelector('#progres-badge').textContent = `${done}/${total} soal${label} dijawab`;
    wrap.querySelector('#bank-desc').textContent = BANK_SOAL[paket].deskripsi;
  }

  function paintQuiz() {
    paintBadge();
    const list = soalAktif();
    const total = list.length;
    const done = jumlahDijawab(list);

    if (!total) {
      area.innerHTML = `<div class="empty"><h4>Belum ada soal untuk filter ini</h4><p class="small">Pilih subtes lain atau tekan Semua subtes.</p></div>`;
      return;
    }

    if (index >= total) {
      paintResult();
      return;
    }

    const q = list[index];
    const pct = Math.round((done / total) * 100);

    area.innerHTML = `
      <div class="quiz-progress">
        <span class="tiny" style="font-weight:800;color:var(--ink-3);white-space:nowrap">Soal ${index + 1} / ${total}</span>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <span class="badge">${esc(q.topik)}</span>
      </div>
      <div class="quiz-q">${esc(q.soal)}</div>
      <div class="opt-list" id="opts"></div>
      <div id="feedback"></div>
      <div class="row-between" style="margin-top:18px">
        <button class="btn btn-ghost btn-sm" id="prev" ${index === 0 ? 'disabled' : ''}>${icon('chevronRight')} Sebelumnya</button>
        <button class="btn btn-primary btn-sm" id="next">${index === total - 1 ? 'Lihat hasil' : 'Soal berikutnya'} ${icon('chevronRight')}</button>
      </div>
    `;

    const opts = area.querySelector('#opts');
    const sudah = sudahDijawab(q.id);
    opts.innerHTML = q.opsi.map((o, i) => `
      <button class="opt" data-i="${i}" ${sudah ? 'disabled' : ''}>
        <span class="letter">${LETTERS[i]}</span>
        <span>${esc(o)}</span>
      </button>`).join('');

    if (sudah) {
      markAnswer(q, q.opsi.map((_, i) => opts.querySelector(`[data-i="${i}"]`)), null);
    }

    opts.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => {
      if (sudahDijawab(q.id)) return;
      const i = Number(b.dataset.i);
      picked = i;
      markAnswer(q, Array.from(opts.querySelectorAll('[data-i]')), i);
      tandaiSelesai(q.id);
      paintBadge();
      ctx.toast(i === q.jawaban ? 'Benar. Lanjut soal berikutnya.' : 'Belum tepat, baca pembahasannya.', i === q.jawaban ? 'ok' : 'warn');
    }));

    area.querySelector('#prev').addEventListener('click', () => { index = Math.max(0, index - 1); paintQuiz(); });
    area.querySelector('#next').addEventListener('click', () => {
      if (index === total - 1) { index = total; paintQuiz(); }
      else { index = index + 1; paintQuiz(); }
    });
  }

  function markAnswer(q, buttons, chosen) {
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.jawaban) b.classList.add('correct');
      if (chosen !== null && i === chosen && i !== q.jawaban) b.classList.add('wrong');
    });
    const fb = area.querySelector('#feedback');
    if (fb) {
      fb.innerHTML = `<div class="explain"><strong>Pembahasan:</strong> ${esc(q.pembahasan)}</div>`;
    }
  }

  function paintResult() {
    const list = soalAktif();
    const total = list.length;
    const dijawab = jumlahDijawab(list);
    const pct = Math.round((dijawab / total) * 100);
    const labelSub = paket === 'skd' && subtes !== 'Semua' ? ` subtes ${subtes}` : '';
    area.innerHTML = `
      <div class="result-hero" style="margin-bottom:18px">
        <h2>${dijawab === total ? 'Semua soal sudah kamu jawab' : 'Progres latihan'}</h2>
        <p style="color:rgba(255,255,255,.85);font-size:.88rem">${esc(BANK_SOAL[paket].nama)}${labelSub}: ${dijawab} dari ${total} soal</p>
        <div class="progress" style="margin-top:14px;background:rgba(255,255,255,.24)">
          <span style="width:${pct}%;background:#fff"></span>
        </div>
      </div>
      <div class="kv-grid">
        <div class="kv"><div class="k">Total soal</div><div class="v">${total}</div></div>
        <div class="kv"><div class="k">Sudah dijawab</div><div class="v">${dijawab}</div></div>
        <div class="kv"><div class="k">Belum dijawab</div><div class="v">${total - dijawab}</div></div>
      </div>
      <div class="row" style="margin-top:18px">
        <button class="btn btn-primary" id="mulai-lagi">${icon('refresh')} Mulai ulang paket ini</button>
        <button class="btn btn-ghost" id="ke-soal-1">Kembali ke soal 1</button>
      </div>
    `;
    area.querySelector('#mulai-lagi').addEventListener('click', resetPaket);
    area.querySelector('#ke-soal-1').addEventListener('click', () => { index = 0; paintQuiz(); });
  }

  function resetPaket() {
    const aktif = soalAktif();
    if (subtes === 'Semua' || paket !== 'skd') {
      answered[paket] = [];
    } else {
      const ids = new Set(aktif.map(q => q.id));
      answered[paket] = (answered[paket] || []).filter(id => !ids.has(id));
    }
    store.set('bankSoal', answered);
    index = 0;
    picked = null;
    paintQuiz();
    ctx.toast(subtes === 'Semua' || paket !== 'skd' ? 'Paket latihan direset' : `Latihan ${subtes} direset`);
  }

  wrap.querySelector('#reset-bank').addEventListener('click', () => {
    answered = emptyProgress();
    store.set('bankSoal', answered);
    index = 0;
    picked = null;
    paintQuiz();
    ctx.toast('Seluruh riwayat latihan dihapus');
  });

  paintChips();
  paintQuiz();
  return wrap;
}
