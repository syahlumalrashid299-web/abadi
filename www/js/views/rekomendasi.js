import { icon, store, esc } from '../app.js';
import { PATHS, QUIZ_QUESTIONS } from '../data/paths.js';

const TONE = { kuliah: 'indigo', kedinasan: 'teal', 'abdi-negara': 'amber', cpns: 'rose' };
const IDS = ['kuliah', 'kedinasan', 'abdi-negara', 'cpns'];

export function renderRekomendasi(ctx) {
  const saved = store.get('quizResult', null);
  const wrap = document.createElement('div');

  if (saved) return renderResult(ctx, saved);

  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('sparkles')} Rekomendasi Jalur</span>
      <h1>Kuis Kecocokan Jalur</h1>
      <p>Delapan pertanyaan tentang kondisi, minat, dan kesiapanmu. Hasilnya peringkat empat jalur, bukan vonis. Semua jawaban tersimpan di perangkat.</p>
    </div>

    <div class="card pad-lg" style="max-width:760px">
      <div class="quiz-progress">
        <span class="tiny" style="font-weight:800;color:var(--primary)" id="q-step">1/8</span>
        <div class="progress"><span id="q-bar" style="width:12.5%"></span></div>
      </div>
      <div id="quiz-body"></div>
    </div>
  `;

  const answers = {};
  let idx = 0;
  const body = wrap.querySelector('#quiz-body');
  const bar = wrap.querySelector('#q-bar');
  const stepLabel = wrap.querySelector('#q-step');

  function paint() {
    const q = QUIZ_QUESTIONS[idx];
    stepLabel.textContent = `${idx + 1}/${QUIZ_QUESTIONS.length}`;
    bar.style.width = `${((idx + 1) / QUIZ_QUESTIONS.length) * 100}%`;
    body.innerHTML = `
      <div class="quiz-q">${esc(q.pertanyaan)}</div>
      <div class="quiz-options" id="opts">
        ${q.opsi.map((o, i) => `
          <button class="quiz-opt ${answers[q.id] === i ? 'sel' : ''}" data-i="${i}">
            <span class="num">${String.fromCharCode(65 + i)}</span>
            <span>${esc(o.teks)}</span>
          </button>`).join('')}
      </div>
      <div class="row-between" style="margin-top:18px">
        <button class="btn btn-ghost btn-sm" id="q-prev" ${idx === 0 ? 'disabled' : ''}>${icon('chevronRight')} Kembali</button>
        <button class="btn btn-primary" id="q-next" ${answers[q.id] === undefined ? 'disabled' : ''}>
          ${idx === QUIZ_QUESTIONS.length - 1 ? 'Lihat hasil' : 'Lanjut'} ${icon('chevronRight')}
        </button>
      </div>
    `;
    body.querySelectorAll('[data-i]').forEach(b => {
      b.addEventListener('click', () => {
        answers[q.id] = Number(b.dataset.i);
        paint();
      });
    });
    body.querySelector('#q-prev').addEventListener('click', () => { if (idx > 0) { idx--; paint(); } });
    body.querySelector('#q-next').addEventListener('click', () => {
      if (answers[q.id] === undefined) return;
      if (idx === QUIZ_QUESTIONS.length - 1) finish();
      else { idx++; paint(); }
    });
  }

  function finish() {
    const score = { kuliah: 0, kedinasan: 0, 'abdi-negara': 0, cpns: 0 };
    QUIZ_QUESTIONS.forEach(q => {
      const pick = answers[q.id];
      if (pick === undefined) return;
      const s = q.opsi[pick].skor || {};
      Object.keys(s).forEach(k => { score[k] = (score[k] || 0) + s[k]; });
    });
    const ranked = IDS.map(id => ({ id, score: score[id] || 0 }))
      .sort((a, b) => b.score - a.score);
    const result = {
      at: Date.now(),
      scores: score,
      ranked,
      topId: ranked[0].id,
      topName: PATHS.find(p => p.id === ranked[0].id).nama,
      answers
    };
    store.set('quizResult', result);
    ctx.toast('Rekomendasi tersimpan', 'ok');
    ctx.navigate('rekomendasi');
  }

  paint();
  return wrap;
}

function renderResult(ctx, res) {
  const wrap = document.createElement('div');
  const top = PATHS.find(p => p.id === res.topId);
  const max = Math.max(...IDS.map(id => res.scores[id] || 0), 1);

  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('sparkles')} Hasil Rekomendasi</span>
      <h1>Jalur Paling Cocok Untukmu</h1>
      <p>Berdasarkan ${QUIZ_QUESTIONS.length} jawaban yang kamu isi. Ini titik awal diskusi, bukan keputusan final.</p>
    </div>

    <div class="result-hero" style="margin-bottom:16px">
      <div class="row" style="gap:10px;margin-bottom:8px">
        <div class="path-icon" style="background:rgba(255,255,255,.16);color:#fff">${icon(top.ikon)}</div>
        <div>
          <div class="tiny" style="opacity:.75;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Rekomendasi utama</div>
          <h2>${esc(top.nama)}</h2>
        </div>
      </div>
      <p style="color:rgba(255,255,255,.9);font-size:.9rem">${esc(top.ringkas)}</p>
    </div>

    <div class="two-col">
      <div class="card pad-lg">
        <h3 style="margin-bottom:14px">Peringkat Lengkap</h3>
        <div class="stack-sm" id="rank-list"></div>
        <div class="note" style="margin-top:16px">Skor mengukur kecocokan dengan jawabanmu, bukan kualitas jalur. Jalur dengan skor rendah tetap bisa jadi pilihan yang tepat jika kondisimu berubah.</div>
      </div>

      <div class="card pad-lg">
        <h3 style="margin-bottom:6px">Langkah Mulai</h3>
        <p class="tiny muted" style="margin-bottom:12px">Tiga hal yang bisa dilakukan minggu ini.</p>
        <div class="steps" style="margin-bottom:16px">
          ${top.langkah.slice(0, 4).map((s, i) => `<div class="step"><div class="step-dot">${i + 1}</div><div class="step-text">${esc(s)}</div></div>`).join('')}
        </div>
        <div class="stack-sm">
          <button class="btn btn-primary btn-block" data-go="${top.id === 'kuliah' ? 'kuliah' : 'lowongan'}">
            ${icon('chevronRight')} Jelajahi info ${top.id === 'kuliah' ? 'kampus' : 'lowongan'}
          </button>
          <button class="btn btn-soft btn-block" data-go="bandingkan">${icon('scale')} Bandingkan dengan jalur lain</button>
          <button class="btn btn-ghost btn-block" id="redo">${icon('refresh')} Ulangi kuis</button>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:16px">
      <h4 style="margin-bottom:6px">Catatan penting</h4>
      <p class="small muted">${esc(top.cocokUntuk)}</p>
    </div>
  `;

  const rl = wrap.querySelector('#rank-list');
  rl.innerHTML = res.ranked.map((r, i) => {
    const p = PATHS.find(x => x.id === r.id);
    const pct = Math.round((r.score / max) * 100);
    return `
      <div class="rank-card ${i === 0 ? 'top' : ''}">
        <div class="rank-num">${i + 1}</div>
        <div class="rank-body">
          <div class="row-between" style="margin-bottom:5px">
            <strong style="font-size:.87rem">${esc(p.nama)}</strong>
            <span class="tiny mono muted">${r.score} poin</span>
          </div>
          <div class="progress" style="height:6px"><span style="width:${pct}%"></span></div>
        </div>
      </div>`;
  }).join('');

  wrap.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => ctx.navigate(b.dataset.go)));
  wrap.querySelector('#redo').addEventListener('click', () => {
    store.remove('quizResult');
    ctx.navigate('rekomendasi');
    ctx.toast('Kuis direset, silakan mulai lagi');
  });

  return wrap;
}
