// Penyimpanan lokal: semua data pengguna tersimpan di perangkat (localStorage).
const PREFIX = 'abadi.';

export const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(PREFIX + key);
  },
  keys() {
    return Object.keys(localStorage).filter(k => k.startsWith(PREFIX)).map(k => k.slice(PREFIX.length));
  }
};

// Berkas disimpan terpisah agar tidak memenuhi kuota localStorage.
export const DOC_KEY = 'berkas';
export const MAX_FILE_BYTES = 1.4 * 1024 * 1024; // ~1.4 MB per berkas

export function loadDocs() {
  return store.get(DOC_KEY, []);
}

export function saveDocs(docs) {
  try {
    localStorage.setItem(PREFIX + DOC_KEY, JSON.stringify(docs));
    return { ok: true };
  } catch (e) {
    return { ok: false, error: 'Penyimpanan penuh. Hapus beberapa berkas lama dulu.' };
  }
}

export function bytesOf(totalBytes) {
  if (totalBytes < 1024) return totalBytes + ' B';
  if (totalBytes < 1024 * 1024) return (totalBytes / 1024).toFixed(0) + ' KB';
  return (totalBytes / 1024 / 1024).toFixed(2) + ' MB';
}

// Progres kesiapan: cek beberapa tanda aktivitas.
export function readiness() {
  const quiz = store.get('quizResult', null);
  const docs = loadDocs();
  const bankSoal = store.get('bankSoal', { snbt: [], skd: [] });
  const compare = store.get('compareWeights', null);
  const saved = store.get('savedCollege', []);
  const checks = [
    { label: 'Ikuti kuis rekomendasi jalur', done: !!quiz, view: 'rekomendasi' },
    { label: 'Simpan minimal 1 kampus favorit', done: saved.length > 0, view: 'kuliah' },
    { label: 'Selesaikan latihan bank soal', done: Object.values(bankSoal || {}).some(a => Array.isArray(a) && a.length > 0), view: 'seleksi' },
    { label: 'Atur perbandingan jalur', done: !!compare, view: 'bandingkan' },
    { label: 'Unggah minimal 3 berkas', done: docs.length >= 3, view: 'berkas' }
  ];
  const done = checks.filter(c => c.done).length;
  return { checks, done, total: checks.length, percent: Math.round((done / checks.length) * 100) };
}
