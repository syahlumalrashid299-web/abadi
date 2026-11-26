# ABADI

Platform persiapan masa depan untuk siswa SMK/SMA. Membantu memilih dan menyiapkan salah satu dari **empat jalur** setelah lulus: **Kuliah**, **Sekolah Kedinasan**, **Abdi Negara (TNI/Polri)**, dan **CPNS**.

Aplikasi berjalan sepenuhnya di perangkat: tanpa server, tanpa login, tanpa pelacakan. Semua data (jawaban kuis, favorit, berkas) tersimpan di `localStorage` perangkat.

## Fitur

| Fitur | Isi |
| --- | --- |
| Beranda | Ringkasan 4 jalur, progres kesiapan, pintasan cepat |
| Rekomendasi Jalur | Kuis 8 pertanyaan, skoring berbobot, peringkat 4 jalur + langkah mulai |
| Bandingkan Pilihan | Tabel 10 aspek, 5 bobot prioritas yang bisa diatur, skor langsung |
| Kuliah & Kampus | 34 PTN/PTS/vokasi, filter tipe + biaya, pencarian, favorit, detail |
| Jurusan & Prospek | 20 jurusan dalam 12 rumpun, mapel pendukung, prospek kerja, estimasi gaji |
| Seleksi & Bank Soal | Panduan SNBP/SNBT/Mandiri + bank soal SNBT & SKD dengan pembahasan |
| Lowongan CPNS | 8 contoh lowongan untuk lulusan SMK/SMA, filter jenis, favorit, tips anti-penipuan |
| Berkas Pendaftaran | Unggah berkas (PDF/gambar) per kategori, checklist 4 jalur, progres, unduh, hapus |

Semua fitur saling terhubung: hasil rekomendasi menuju halaman kampus/lowongan, detail lowongan menuju Berkas, checklist Berkas mengikuti jalur yang direkomendasikan.

## Struktur

```
docs/                   aplikasi (tanpa build step, ES modules)
  index.html
  manifest.json
  css/  styles.css, views.css, fonts.css
  js/   app.js (router, nav, toast, modal), store.js, icons.js
        data/    colleges, majors, paths, jobs, questions
        views/   beranda, rekomendasi, bandingkan, kuliah,
                 jurusan, seleksi, lowongan, berkas
  assets/ icon.svg, icon-192.png, icon-512.png, fonts/*.woff2
capacitor.config.json   konfigurasi pembungkus Android
.github/workflows/      build APK otomatis
```

Font Plus Jakarta Sans di-host sendiri di `docs/assets/fonts/`, jadi aplikasi tampil benar tanpa internet.

## Jalankan lokal

```bash
npx serve docs -l 4173
```

Buka `http://localhost:4173`. Harus lewat server, bukan klik `index.html` langsung, karena memakai ES modules.

## Build APK

APK dibangun otomatis di GitHub Actions (runner Ubuntu + Android SDK), bukan di komputer lokal.

1. Push ke branch `main` atau jalankan workflow manual dari tab **Actions**.
2. Tunggu sekitar 4 sampai 8 menit.
3. Di halaman run, unduh artifact **ABADI-apk**, atau buat tag untuk mendapat file rilis langsung:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Tag `v*` memicu job yang mengunggah APK ke **Releases**, dan tautan itu bisa diunduh tanpa login GitHub.

### Install di HP

1. Unduh `ABADI-v1.0.0.apk`.
2. Buka file dari browser atau file manager.
3. Saat diminta, izinkan **Install unknown apps** untuk aplikasi pembuka tersebut.
4. Tap **Install**. Ikon ABADI muncul di layar utama.

APK ini bertanda *debug* (cocok untuk uji coba dan distribusi internal). Untuk Play Store perlu APK/AAB bertanda rilis dengan keystore sendiri.

## Catatan teknis

- Tanpa dependensi runtime di sisi web: hanya `@capacitor/*` untuk membungkus Android.
- Batas ukuran berkas per item 1,4 MB karena kuota `localStorage` sekitar 5 MB per origin.
- Batas tersebut dan semua data lain bisa diubah di `docs/js/store.js`.
- Desain responsif: sidebar tetap di layar lebar, bottom navigation di layar sempit (<= 860 px).
