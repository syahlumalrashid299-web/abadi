import { icon, store, esc } from '../app.js';
import { PATHS, COMPARE_ASPECTS } from '../data/paths.js';

const IDS = ['kuliah', 'kedinasan', 'abdi-negara', 'cpns'];
const TONE = { kuliah: 'indigo', kedinasan: 'teal', 'abdi-negara': 'amber', cpns: 'rose' };

const WEIGHT_ITEMS = [
  { key: 'biaya', label: 'Prioritas biaya ringan' },
  { key: 'kepastian', label: 'Prioritas kepastian kerja' },
  { key: 'keahlian', label: 'Prioritas pengembangan keahlian' },
  { key: 'kebebasan', label: 'Prioritas kebebasan memilih tempat' },
  { key: 'cepat', label: 'Prioritas cepat dapat penghasilan' }
];

// Skor 0-5 untuk tiap jalur per kriteria bobot
const PATH_SCORES = {
  kuliah:        { biaya: 2, kepastian: 1, keahlian: 5, kebebasan: 5, cepat: 1 },
  kedinasan:     { biaya: 5, kepastian: 5, keahlian: 3, kebebasan: 1, cepat: 3 },
  'abdi-negara': { biaya: 5, kepastian: 4, keahlian: 3, kebebasan: 1, cepat: 5 },
  cpns:          { biaya: 5, kepastian: 5, keahlian: 2, kebebasan: 2, cepat: 5 }
};

export function renderBandingkan(ctx) {
  const weights = store.get('compareWeights', { biaya: 3, kepastian: 3, keahlian: 3, kebebasan: 3, cepat: 3 });
  const wrap = document.createElement('div');

  wrap.innerHTML = `
    <div class="page-head">
      <span class="eyebrow">${icon('scale')} Perbandingan</span>
      <h1>Bandingkan Empat Jalur</h1>
      <p>Sepuluh aspek objektif, plus kalkulator bobot yang menghitung jalur paling sesuai dengan prioritasmu.</p>
    </div>

    <div class="card flush" style="margin-bottom:16px">
      <div style="padding:16px 18px 0"><h3>Perbandingan 10 Aspek</h3></div>
      <div class="table-scroll" style="margin-top:12px">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Aspek</th>
              <th>Kuliah</th>
              <th>Kedinasan</th>
              <th>Abdi Negara</th>
              <th>CPNS</th>
            </tr>
          </thead>
          <tbody id="cmp-body"></tbody>
        </table>
      </div>
    </div>

    <div class="two-col">
      <div class="card pad-lg">
        <h3 style="margin-bottom:5px">Kalkulator Prioritas</h3>
        <p class="tiny muted" style="margin-bottom:16px">Geser bobot sesuai seberapa penting aspek itu bagimu. 1 = tidak penting, 5 = sangat penting.</p>
        <div class="weights" id="weight-list"></div>
        <button class="btn btn-soft" style="margin-top:16px" id="reset-weight">${icon('refresh')} Reset bobot</button>
      </div>

      <div class="card pad-lg">
        <h3 style="margin-bottom:6px">Hasil Hitungan</h3>
        <p class="tiny muted" style="margin-bottom:14px">Skor tertinggi = paling sesuai bobotmu.</p>
        <div class="stack-sm" id="score-list"></div>
        <div class="note teal" style="margin-top:16px" id="score-note"></div>
      </div>
    </div>
  `;

  // Tabel
  const tb = wrap.querySelector('#cmp-body');
  tb.innerHTML = COMPARE_ASPECTS.map(a => `
    <tr>
      <td>${esc(a.aspek)}</td>
      <td>${esc(a.kuliah)}</td>
      <td>${esc(a.kedinasan)}</td>
      <td>${esc(a['abdi-negara'])}</td>
      <td>${esc(a.cpns)}</td>
    </tr>`).join('');

  // Bobot
  const wl = wrap.querySelector('#weight-list');
  function paintWeights() {
    wl.innerHTML = WEIGHT_ITEMS.map(w => `
      <div class="weight-row">
        <div class="weight-head"><span>${esc(w.label)}</span><span class="mono" id="wv-${w.key}">${weights[w.key]}</span></div>
        <input type="range" min="1" max="5" step="1" value="${weights[w.key]}" data-w="${w.key}">
      </div>`).join('');
    wl.querySelectorAll('[data-w]').forEach(inp => {
      inp.addEventListener('input', () => {
        weights[inp.dataset.w] = Number(inp.value);
        wl.querySelector(`#wv-${inp.dataset.w}`).textContent = inp.value;
        paintScores();
        store.set('compareWeights', weights);
      });
    });
  }

  function paintScores() {
    const sl = wrap.querySelector('#score-list');
    const results = IDS.map(id => {
      let total = 0, maxTotal = 0;
      WEIGHT_ITEMS.forEach(w => {
        total += (PATH_SCORES[id][w.key] || 0) * weights[w.key];
        maxTotal += 5 * weights[w.key];
      });
      return { id, pct: maxTotal ? Math.round((total / maxTotal) * 100) : 0, total, maxTotal };
    }).sort((a, b) => b.pct - a.pct);

    sl.innerHTML = results.map((r, i) => {
      const p = PATHS.find(x => x.id === r.id);
      return `
        <div class="rank-card ${i === 0 ? 'top' : ''}">
          <div class="rank-num">${i + 1}</div>
          <div class="rank-body">
            <div class="row-between" style="margin-bottom:5px">
              <strong style="font-size:.85rem">${esc(p.nama)}</strong>
              <span class="tiny mono muted">${r.total}/${r.maxTotal}</span>
            </div>
            <div class="progress" style="height:6px"><span style="width:${r.pct}%"></span></div>
          </div>
        </div>`;
    }).join('');

    const top = PATHS.find(x => x.id === results[0].id);
    wrap.querySelector('#score-note').innerHTML =
      `Dengan bobot saat ini, <strong>${esc(top.nama)}</strong> paling sesuai (${results[0].pct}%). Buka <a href="#" id="go-top">detail jalur</a> untuk langkah konkretnya.`;
    wrap.querySelector('#go-top').addEventListener('click', e => { e.preventDefault(); ctx.navigate(results[0].id === 'kuliah' ? 'kuliah' : 'lowongan'); });
  }

  wrap.querySelector('#reset-weight').addEventListener('click', () => {
    WEIGHT_ITEMS.forEach(w => weights[w.key] = 3);
    store.set('compareWeights', weights);
    paintWeights();
    paintScores();
    ctx.toast('Bobot dikembalikan ke netral');
  });

  paintWeights();
  paintScores();
  return wrap;
}
