import { icon, store, esc } from '../app.js';
import { SELEKSI } from '../data/paths.js';
import { BANK_SOAL } from '../data/questions.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function emptyProgress() {
  return { snbt: [], skd: [] };
}

export function renderSeleksi(ctx) {
  let paket = 'snbt';
  let index = 0;
  let picked = null; // index opsi yang dipilih untuk soal aktif
  let answered = store.get('bankSoal', emptyProgress());
  if (!answered || !Array.isArray(answered.snbt) || !Array.isArray(answered.skd)) answered = emptyProgress();

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
    </div>

    <div class="question-card" id="quiz-area"></div>

    <div class="note teal" style="margin-top:16px">
      <strong>Catatan:</strong> soal di sini adalah latihan mandiri, bukan soal resmi. Untuk UTBK-SNBT dan SKD, jumlah soal dan waktu sebenarnya jauh lebih panjang.
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
  function paintChips() {
    chips.innerHTML = Object.keys(BANK_SOAL).map(k => `
      <button class="chip ${k === paket ? 'active' : ''}" data-p="${k}">${esc(BANK_SOAL[k].nama)}</button>`).join('');
    chips.querySelectorAll('[data-p]').forEach(b => b.addEventListener('click', () => setPaket(b.dataset.p)));
  }

  function setPaket(k) {
    if (!BANK_SOAL[k]) return;
    paket = k;
    index = 0;
    picked = null;
    paintChips();
    paintQuiz();
  }

  const area = wrap.querySelector('#quiz-area');

  function soalAktif() {
    return BANK_SOAL[paket].soal;
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
    const total = soalAktif().length;
    const done = (answered[paket] || []).length;
    wrap.querySelector('#progres-badge').textContent = `${done}/${total} soal dijawab`;
    wrap.querySelector('#bank-desc').textContent = BANK_SOAL[paket].deskripsi;
  }

  function paintQuiz() {
    paintBadge();
    const list = soalAktif();
    const q = list[index];
    const total = list.length;
    const allDone = (answered[paket] || []).length >= total;

    if (allDone && index >= total) {
      paintResult();
      return;
    }

    const benar = (answered[paket] || []).length;
    const pct = Math.round((benar / total) * 100);

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
    const dijawab = (answered[paket] || []).length;
    const pct = Math.round((dijawab / total) * 100);
    area.innerHTML = `
      <div class="result-hero" style="margin-bottom:18px">
        <h2>${pct === 100 ? 'Semua soal sudah kamu jawab' : 'Progres latihan'}</h2>
        <p style="color:rgba(255,255,255,.85);font-size:.88rem">${esc(BANK_SOAL[paket].nama)}: ${dijawab} dari ${total} soal</p>
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
    answered[paket] = [];
    store.set('bankSoal', answered);
    index = 0;
    picked = null;
    paintQuiz();
    ctx.toast('Paket latihan direset');
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
