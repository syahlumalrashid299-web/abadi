// Service worker ABADI: cache app shell agar bisa dipakai offline.
const CACHE = 'abadi-v2';

const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/fonts.css',
  './css/styles.css',
  './css/views.css',
  './js/app.js',
  './js/icons.js',
  './js/store.js',
  './js/data/colleges.js',
  './js/data/jobs.js',
  './js/data/majors.js',
  './js/data/paths.js',
  './js/data/questions.js',
  './js/views/beranda.js',
  './js/views/rekomendasi.js',
  './js/views/bandingkan.js',
  './js/views/kuliah.js',
  './js/views/jurusan.js',
  './js/views/seleksi.js',
  './js/views/lowongan.js',
  './js/views/berkas.js',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/fonts/pjs-400-latin.woff2',
  './assets/fonts/pjs-500-latin.woff2',
  './assets/fonts/pjs-600-latin.woff2',
  './assets/fonts/pjs-700-latin.woff2',
  './assets/fonts/pjs-800-latin.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Navigasi: selalu sajikan shell agar deep link tetap jalan offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html').then((hit) => hit || fetch(req))
    );
    return;
  }

  // Aset: pakai cache bila ada, perbarui di latar belakang.
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
