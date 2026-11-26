// Bank soal: latihan UTBK-SNBT dan SKD CPNS/Sekolah Kedinasan.

export const BANK_SOAL = {
  snbt: {
    nama: 'Latihan UTBK-SNBT',
    deskripsi: 'Penalaran umum, kuantitatif, dan literasi. Format mendekati UTBK asli.',
    soal: [
      {
        id: 'snbt-1', topik: 'Penalaran Umum',
        soal: 'Semua siswa SMK wajib mengikuti PKL. Sebagian siswa yang mengikuti PKL juga mengikuti lomba kompetensi. Kesimpulan yang tepat adalah...',
        opsi: [
          'Semua siswa yang ikut lomba adalah peserta PKL',
          'Sebagian peserta PKL mengikuti lomba kompetensi',
          'Tidak ada peserta PKL yang ikut lomba',
          'Semua siswa SMK mengikuti lomba kompetensi',
          'Sebagian siswa yang tidak PKL mengikuti lomba'
        ],
        jawaban: 1,
        pembahasan: 'Premis kedua menyatakan "sebagian siswa yang mengikuti PKL juga mengikuti lomba", jadi sebagian peserta PKL memang ikut lomba. Pilihan lain melampaui informasi.'
      },
      {
        id: 'snbt-2', topik: 'Penalaran Kuantitatif',
        soal: 'Harga 3 buku dan 2 pulpen Rp 46.000. Harga 2 buku dan 3 pulpen Rp 44.000. Berapa harga 1 buku + 1 pulpen?',
        opsi: ['Rp 16.000', 'Rp 17.000', 'Rp 18.000', 'Rp 19.000', 'Rp 20.000'],
        jawaban: 2,
        pembahasan: '3b+2p=46000 dan 2b+3p=44000. Jumlahkan: 5b+5p=90000, maka b+p=18000.'
      },
      {
        id: 'snbt-3', topik: 'Penalaran Kuantitatif',
        soal: 'Sebuah pekerjaan selesai dalam 12 hari oleh 8 orang. Jika ingin selesai dalam 6 hari, berapa orang diperlukan?',
        opsi: ['12 orang', '14 orang', '16 orang', '18 orang', '20 orang'],
        jawaban: 2,
        pembahasan: 'Perbandingan berbalik nilai: 8 x 12 = n x 6, sehingga n = 16 orang.'
      },
      {
        id: 'snbt-4', topik: 'Penalaran Kuantitatif',
        soal: 'Jika 40% dari suatu bilangan adalah 96, berapa 25% dari bilangan tersebut?',
        opsi: ['48', '54', '60', '64', '72'],
        jawaban: 2,
        pembahasan: 'Bilangan = 96 / 0,4 = 240. Maka 25% x 240 = 60.'
      },
      {
        id: 'snbt-5', topik: 'Pengetahuan & Pemahaman Umum',
        soal: 'Lembaga yang bertugas menyelenggarakan Seleksi Nasional Penerimaan Mahasiswa Baru adalah...',
        opsi: ['Kemendikbudristek', 'SNPMB BPPP', 'BKN', 'Lembaga Tes Masuk Perguruan Tinggi', 'Majelis Rektor'],
        jawaban: 1,
        pembahasan: 'Sejak 2023 seleksi nasional dikelola oleh SNPMB BPPP (Balai Pengelolaan Pengujian Pendidikan).'
      },
      {
        id: 'snbt-6', topik: 'Literasi Bahasa Indonesia',
        soal: 'Kalimat berikut yang paling efektif adalah...',
        opsi: [
          'Para siswa-siswa diharapkan agar supaya dapat hadir tepat waktu.',
          'Para siswa diharapkan dapat hadir tepat waktu.',
          'Para siswa-siswa diharapkan dapat hadir tepat pada waktunya.',
          'Siswa-siswa diharapkan agar bisa hadir di waktu tepat.',
          'Para siswa diharapkan supaya bisa hadir di waktu yang tepat.'
        ],
        jawaban: 1,
        pembahasan: '"Para" sudah bermakna jamak sehingga tidak perlu diulang dengan "siswa-siswa". "Agar supaya" juga berlebihan.'
      },
      {
        id: 'snbt-7', topik: 'Literasi Bahasa Inggris',
        soal: 'Choose the sentence with correct grammar.',
        opsi: [
          'She have been studying for three hours.',
          'She has been studying since three hours.',
          'She has been studying for three hours.',
          'She is studying since three hours ago.',
          'She studied since three hours.'
        ],
        jawaban: 2,
        pembahasan: 'Present perfect continuous dengan durasi memakai "for" + periode waktu, dan subjek "she" memakai "has".'
      },
      {
        id: 'snbt-8', topik: 'Penalaran Umum',
        soal: 'Jika hari ini Rabu, 100 hari lagi jatuh pada hari...',
        opsi: ['Kamis', 'Jumat', 'Sabtu', 'Minggu', 'Senin'],
        jawaban: 1,
        pembahasan: '100 mod 7 = 2. Rabu + 2 hari = Jumat.'
      },
      {
        id: 'snbt-9', topik: 'Penalaran Kuantitatif',
        soal: 'Rata-rata 5 bilangan adalah 24. Jika satu bilangan dibuang, rata-rata menjadi 26. Bilangan yang dibuang adalah...',
        opsi: ['14', '16', '18', '20', '22'],
        jawaban: 1,
        pembahasan: 'Total awal 5 x 24 = 120. Total 4 bilangan 4 x 26 = 104. Bilangan dibuang = 120 - 104 = 16.'
      },
      {
        id: 'snbt-10', topik: 'Penalaran Umum',
        soal: 'Semua lulusan SMK yang memiliki sertifikat kompetensi lebih mudah diterima kerja. Budi lulusan SMK dan mudah diterima kerja. Kesimpulan yang valid...',
        opsi: [
          'Budi pasti punya sertifikat kompetensi',
          'Budi mungkin punya sertifikat kompetensi',
          'Budi tidak punya sertifikat kompetensi',
          'Semua yang mudah diterima kerja punya sertifikat',
          'Tidak dapat disimpulkan sama sekali'
        ],
        jawaban: 1,
        pembahasan: 'Premis hanya berlaku satu arah (punya sertifikat -> mudah diterima). Arah sebaliknya tidak dapat dipastikan, jadi hanya "mungkin".'
      }
    ]
  },
  skd: {
    nama: 'Latihan SKD (CPNS & Kedinasan)',
    deskripsi: 'Tes Wawasan Kebangsaan, Intelegensia Umum, dan Karakteristik Pribadi.',
    soal: [
      {
        id: 'skd-1', topik: 'TWK',
        soal: 'Pancasila sebagai dasar negara disahkan pada tanggal...',
        opsi: ['1 Juni 1945', '17 Agustus 1945', '18 Agustus 1945', '22 Juni 1945', '29 Mei 1945'],
        jawaban: 2,
        pembahasan: 'Pengesahan Pancasila sebagai dasar negara terjadi bersama UUD 1945 pada sidang PPKI 18 Agustus 1945. Tanggal 1 Juni adalah hari lahir Pancasila.'
      },
      {
        id: 'skd-2', topik: 'TWK',
        soal: 'Lembaga yang berwenang menguji undang-undang terhadap UUD 1945 adalah...',
        opsi: ['Mahkamah Agung', 'Mahkamah Konstitusi', 'Komisi Yudisial', 'DPR', 'MPR'],
        jawaban: 1,
        pembahasan: 'Mahkamah Konstitusi berwenang menguji UU terhadap UUD (judicial review). MA menguji peraturan di bawah UU.'
      },
      {
        id: 'skd-3', topik: 'TIU',
        soal: 'Lanjutkan pola: 2, 6, 12, 20, 30, ...',
        opsi: ['36', '40', '42', '44', '48'],
        jawaban: 2,
        pembahasan: 'Selisih bertambah 2: +4, +6, +8, +10, +12. 30 + 12 = 42.'
      },
      {
        id: 'skd-4', topik: 'TIU',
        soal: 'Jika P > Q dan Q > R, maka...',
        opsi: ['P < R', 'P = R', 'P > R', 'R > P', 'Tidak dapat ditentukan'],
        jawaban: 2,
        pembahasan: 'Sifat transitif: P > Q > R, sehingga P > R.'
      },
      {
        id: 'skd-5', topik: 'TIU',
        soal: 'Sebuah mobil menempuh 240 km dalam 4 jam. Berapa kecepatan rata-ratanya?',
        opsi: ['50 km/jam', '55 km/jam', '60 km/jam', '65 km/jam', '70 km/jam'],
        jawaban: 2,
        pembahasan: 'Kecepatan = jarak / waktu = 240 / 4 = 60 km/jam.'
      },
      {
        id: 'skd-6', topik: 'TIU',
        soal: 'Semua pegawai memakai seragam. Sebagian pegawai memakai dasi. Kesimpulan yang benar...',
        opsi: [
          'Semua yang memakai dasi adalah pegawai',
          'Sebagian yang memakai seragam memakai dasi',
          'Semua pegawai memakai dasi',
          'Tidak ada pegawai yang memakai dasi',
          'Semua yang memakai seragam bukan pegawai'
        ],
        jawaban: 1,
        pembahasan: 'Karena semua pegawai berseragam, dan sebagian pegawai berdasi, maka sebagian pemakai seragam juga berdasi.'
      },
      {
        id: 'skd-7', topik: 'TKP',
        soal: 'Atasan memberi tugas tambahan saat Anda sedang menyelesaikan pekerjaan lain yang mendesak. Sikap Anda...',
        opsi: [
          'Menolak karena pekerjaan saya sudah banyak',
          'Mengerjakan tugas baru dulu, pekerjaan lama ditinggal',
          'Menyusun prioritas dan berdiskusi dengan atasan tentang tenggat',
          'Meminta rekan mengerjakan tugas baru tersebut',
          'Mengerjakan sebisanya tanpa memberi tahu atasan'
        ],
        jawaban: 2,
        pembahasan: 'Sikap terbaik adalah mengelola prioritas secara terbuka dengan atasan agar keduanya tertangani dan tenggat jelas.'
      },
      {
        id: 'skd-8', topik: 'TKP',
        soal: 'Rekan kerja melakukan kesalahan yang berdampak pada tim. Anda...',
        opsi: [
          'Melaporkan langsung ke atasan tanpa bicara dulu',
          'Diam saja agar tidak dianggap ikut campur',
          'Menegur di depan seluruh tim agar jera',
          'Membicarakannya secara pribadi dan membantu memperbaiki',
          'Membiarkan karena bukan tanggung jawab saya'
        ],
        jawaban: 3,
        pembahasan: 'Pendekatan personal dan solutif menunjukkan kolaborasi serta tanggung jawab tanpa mempermalukan rekan.'
      },
      {
        id: 'skd-9', topik: 'TWK',
        soal: 'Semboyan Bhinneka Tunggal Ika berasal dari kitab...',
        opsi: ['Negarakertagama', 'Sutasoma', 'Arjunawiwaha', 'Bharatayuddha', 'Pararaton'],
        jawaban: 1,
        pembahasan: 'Semboyan ini diambil dari kitab Sutasoma karya Mpu Tantular pada masa Majapahit.'
      },
      {
        id: 'skd-10', topik: 'TIU',
        soal: 'Nilai 15% dari 200 ditambah 20% dari 150 adalah...',
        opsi: ['55', '58', '60', '62', '65'],
        jawaban: 2,
        pembahasan: '15% x 200 = 30. 20% x 150 = 30. Total 60.'
      }
    ]
  }
};
