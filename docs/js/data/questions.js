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
    nama: 'SKD: TWK, TIU, TKP (CAT)',
    deskripsi: 'Latihan Computer Assisted Test: TWK, TIU, dan TKP. Filter subtes untuk fokus satu bagian dulu.',
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
      },
      {
        id: 'skd-11', topik: 'TWK',
        soal: 'Sikap yang paling mencerminkan pengamalan sila keempat Pancasila di lingkungan sekolah adalah...',
        opsi: [
          'Mengikuti pemilihan ketua kelas dengan musyawarah dan menghormati hasilnya',
          'Menolak semua keputusan yang tidak sesuai keinginan pribadi',
          'Membiarkan teman berdebat tanpa mencoba menengahi',
          'Memaksa teman satu kelompok menyetujui pendapat sendiri',
          'Menghindari kegiatan kelas agar tidak terlibat perbedaan pendapat'
        ],
        jawaban: 0,
        pembahasan: 'Sila keempat menekankan musyawarah mufakat dan menghormati keputusan bersama. Pilihan lain justru memaksakan kehendak atau menghindari musyawarah.'
      },
      {
        id: 'skd-12', topik: 'TWK',
        soal: 'Pasal 1 ayat (1) UUD 1945 menyatakan bahwa Negara Indonesia adalah negara...',
        opsi: ['serikat', 'kesatuan yang berbentuk republik', 'federal', 'monarki konstitusional', 'persemakmuran'],
        jawaban: 1,
        pembahasan: 'Pasal 1 ayat (1) UUD NRI 1945 berbunyi: "Negara Indonesia adalah negara kesatuan yang berbentuk republik."'
      },
      {
        id: 'skd-13', topik: 'TWK',
        soal: 'Bahasa negara diatur dalam UUD 1945 dan ditetapkan sebagai bahasa resmi kenegaraan, yaitu...',
        opsi: ['Bahasa Jawa', 'Bahasa Melayu', 'Bahasa Indonesia', 'Bahasa Sansakerta', 'Bahasa Belanda'],
        jawaban: 2,
        pembahasan: 'Pasal 36 UUD 1945 menetapkan Bahasa Indonesia sebagai bahasa negara. Bahasa daerah tetap dihormati sebagai bagian kebudayaan.'
      },
      {
        id: 'skd-14', topik: 'TWK',
        soal: 'Lembaga negara yang berwenang mengubah dan menetapkan Undang-Undang Dasar adalah...',
        opsi: ['Presiden', 'DPR', 'MPR', 'Mahkamah Konstitusi', 'DPD'],
        jawaban: 2,
        pembahasan: 'Pasal 3 ayat (1) UUD 1945 menyebut MPR berwenang mengubah dan menetapkan Undang-Undang Dasar.'
      },
      {
        id: 'skd-15', topik: 'TWK',
        soal: 'Hak dan kewajiban warga negara untuk ikut serta dalam upaya pembelaan negara diatur dalam UUD 1945...',
        opsi: ['Pasal 27 ayat (3)', 'Pasal 28 ayat (1)', 'Pasal 31 ayat (1)', 'Pasal 33 ayat (1)', 'Pasal 34 ayat (1)'],
        jawaban: 0,
        pembahasan: 'Pasal 27 ayat (3) UUD 1945: "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara." Pasal 30 mengatur pertahanan keamanan negara.'
      },
      {
        id: 'skd-16', topik: 'TWK',
        soal: 'Tujuan negara Indonesia yang tercantum dalam Pembukaan UUD 1945 alinea keempat antara lain...',
        opsi: [
          'Menguasai perdagangan negara lain',
          'Melindungi segenap bangsa dan seluruh tumpah darah Indonesia',
          'Membentuk negara serikat di Asia Tenggara',
          'Menjadikan Indonesia negara industri militer',
          'Menyatukan seluruh negara Asia di bawah satu pemerintahan'
        ],
        jawaban: 1,
        pembahasan: 'Alinea keempat menyebut empat tujuan: melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, serta ikut melaksanakan ketertiban dunia.'
      },
      {
        id: 'skd-17', topik: 'TWK',
        soal: 'Seorang pegawai negeri menerima hadiah dari pihak yang berkepentingan dengan pekerjaannya. Sikap yang menunjukkan integritas adalah...',
        opsi: [
          'Menerima karena tidak diminta secara langsung',
          'Menerima lalu membagikannya kepada rekan kerja',
          'Menolak dan melaporkannya melalui saluran pengaduan resmi',
          'Menerima tetapi menyembunyikannya dari atasan',
          'Menunda keputusan sampai ada pegawai lain yang menerima'
        ],
        jawaban: 2,
        pembahasan: 'Gratifikasi wajib ditolak dan dilaporkan ke KPK atau unit pengendalian gratifikasi instansi sesuai UU No. 20 Tahun 2001. Menerima atau menyembunyikan berarti melanggar integritas.'
      },
      {
        id: 'skd-18', topik: 'TWK',
        soal: 'Wawasan nusantara memandang wilayah Indonesia sebagai satu kesatuan...',
        opsi: [
          'politik, ekonomi, sosial budaya, serta pertahanan dan keamanan',
          'hanya wilayah laut dan udara',
          'pemerintahan pusat tanpa peran daerah',
          'budaya tanpa mempertimbangkan keberagaman',
          'ekonomi bebas tanpa batas negara'
        ],
        jawaban: 0,
        pembahasan: 'Wawasan nusantara mencakup kesatuan politik, ekonomi, sosial budaya, serta pertahanan dan keamanan sebagai satu kesatuan wilayah nasional.'
      },
      {
        id: 'skd-19', topik: 'TIU',
        soal: 'Lanjutkan pola berikut: 3, 6, 11, 18, 27, ...',
        opsi: ['34', '36', '38', '40', '42'],
        jawaban: 2,
        pembahasan: 'Selisih bertambah 2 tiap langkah: +3, +5, +7, +9, jadi berikutnya +11. Maka 27 + 11 = 38.'
      },
      {
        id: 'skd-20', topik: 'TIU',
        soal: 'Jika x = 3, nilai dari 2x² - 5x + 1 adalah...',
        opsi: ['2', '3', '4', '5', '6'],
        jawaban: 2,
        pembahasan: '2(3)² - 5(3) + 1 = 2(9) - 15 + 1 = 18 - 15 + 1 = 4.'
      },
      {
        id: 'skd-21', topik: 'TIU',
        soal: 'Perbandingan uang Ani dan Budi adalah 3 : 5. Jika selisih uang mereka Rp 20.000, jumlah uang keduanya adalah...',
        opsi: ['Rp 60.000', 'Rp 70.000', 'Rp 80.000', 'Rp 90.000', 'Rp 100.000'],
        jawaban: 2,
        pembahasan: 'Selisih perbandingan 5 - 3 = 2 bagian = Rp 20.000, jadi 1 bagian = Rp 10.000. Jumlah 8 bagian = Rp 80.000.'
      },
      {
        id: 'skd-22', topik: 'TIU',
        soal: 'Semua pelamar wajib mengikuti SKD. Tidak ada peserta yang lulus SKD tanpa berlatih soal. Kesimpulan yang tepat...',
        opsi: [
          'Semua pelamar pasti lulus SKD',
          'Semua yang lulus SKD pernah berlatih soal',
          'Tidak ada pelamar yang berlatih soal',
          'Semua yang berlatih soal pasti lulus SKD',
          'Pelamar yang tidak ikut SKD tetap lulus'
        ],
        jawaban: 1,
        pembahasan: 'Pernyataan "tidak ada yang lulus tanpa berlatih" setara dengan lulus berarti berlatih. Arah sebaliknya (berlatih berarti pasti lulus) tidak dijamin.'
      },
      {
        id: 'skd-23', topik: 'TIU',
        soal: 'Dua kendaraan berangkat bersamaan dari titik yang sama menuju arah berlawanan dengan kecepatan 60 km/jam dan 80 km/jam. Jarak keduanya setelah 2 jam adalah...',
        opsi: ['240 km', '260 km', '280 km', '300 km', '320 km'],
        jawaban: 2,
        pembahasan: 'Karena berlawanan arah, kecepatan relatif dijumlahkan: 60 + 80 = 140 km/jam. Jarak = 140 x 2 = 280 km.'
      },
      {
        id: 'skd-24', topik: 'TIU',
        soal: 'Dua dadu dilempar bersamaan. Peluang munculnya jumlah mata dadu 7 adalah...',
        opsi: ['1/12', '1/9', '1/6', '5/36', '1/4'],
        jawaban: 2,
        pembahasan: 'Pasangan berjumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 dari 36 kemungkinan, jadi 6/36 = 1/6.'
      },
      {
        id: 'skd-25', topik: 'TKP',
        soal: 'Seorang warga menyampaikan keluhan karena prosedur layanan dianggap terlalu rumit. Sikap Anda...',
        opsi: [
          'Menyampaikan bahwa prosedur sudah ditetapkan dan tidak bisa diubah',
          'Mendengarkan keluhan, menjelaskan alurnya, dan membantu melengkapi berkas sesuai aturan',
          'Meminta warga menunggu sampai ada pegawai lain yang menangani',
          'Mengarahkan warga ke instansi lain agar tidak menambah beban kerja',
          'Mencatat keluhan lalu menyimpannya tanpa tindak lanjut'
        ],
        jawaban: 1,
        pembahasan: 'Orientasi pelayanan publik menuntut sikap responsif: mendengarkan, menjelaskan, dan membantu penyelesaian tanpa melanggar aturan.'
      },
      {
        id: 'skd-26', topik: 'TKP',
        soal: 'Anda baru dipindahkan ke unit kerja yang seluruh anggotanya sudah lama bekerja bersama. Sikap Anda...',
        opsi: [
          'Menunggu rekan lain mendekati lebih dulu',
          'Bekerja sendiri agar tidak mengganggu kelompok yang sudah solid',
          'Berkenalan aktif, mempelajari alur kerja, dan meminta arahan bila perlu',
          'Mengikuti cara kerja lama Anda tanpa menyesuaikan',
          'Mengeluh kepada atasan karena sulit masuk ke kelompok baru'
        ],
        jawaban: 2,
        pembahasan: 'Kemampuan membangun jejaring kerja ditunjukkan dengan inisiatif berkenalan dan mempelajari alur kerja baru, bukan menunggu atau menyendiri.'
      },
      {
        id: 'skd-27', topik: 'TKP',
        soal: 'Rekan kerja Anda berasal dari daerah dengan kebiasaan komunikasi yang berbeda dan sering dianggap kurang sopan oleh tim. Sikap Anda...',
        opsi: [
          'Menghindari berkomunikasi dengan rekan tersebut',
          'Mengikuti penilaian tim bahwa rekan itu tidak sopan',
          'Memahami latar budayanya dan menyampaikan norma komunikasi tim secara baik',
          'Melaporkan rekan tersebut ke atasan tanpa membicarakannya dulu',
          'Meminta rekan tersebut dipindahkan ke unit lain'
        ],
        jawaban: 2,
        pembahasan: 'Sensitivitas sosial budaya berarti memahami perbedaan latar belakang lalu menjembatani dengan komunikasi yang jelas, bukan menghakimi atau menghindar.'
      },
      {
        id: 'skd-28', topik: 'TKP',
        soal: 'Instansi Anda menerapkan aplikasi kerja baru yang belum Anda kuasai, sementara pekerjaan harus tetap selesai. Sikap Anda...',
        opsi: [
          'Tetap memakai cara lama sampai ada pelatihan resmi',
          'Meminta rekan mengerjakan bagian yang memakai aplikasi baru',
          'Mempelajari panduan, mencoba sendiri, dan bertanya pada rekan yang lebih paham',
          'Menunggu sampai atasan memerintahkan secara tertulis',
          'Menyampaikan bahwa aplikasi baru menghambat pekerjaan'
        ],
        jawaban: 2,
        pembahasan: 'Adaptasi teknologi informasi terbaik adalah belajar mandiri lewat panduan sambil memanfaatkan pengetahuan rekan, sehingga pekerjaan tetap berjalan.'
      },
      {
        id: 'skd-29', topik: 'TKP',
        soal: 'Anda menyadari laporan yang sudah dikirim ke pimpinan memuat data yang salah. Sikap Anda...',
        opsi: [
          'Diam saja karena laporan sudah diterima',
          'Menunggu sampai ada yang menanyakan kesalahan tersebut',
          'Menyalahkan rekan yang memberi data',
          'Segera melapor dan mengirimkan perbaikan disertai penjelasan',
          'Memperbaiki data tanpa memberi tahu siapa pun'
        ],
        jawaban: 3,
        pembahasan: 'Profesionalisme dan integritas menuntut keterbukaan: segera melapor dan memperbaiki, bukan menyembunyikan atau melempar kesalahan.'
      },
      {
        id: 'skd-30', topik: 'TKP',
        soal: 'Anda menerima pesan grup yang mengajak menolak ideologi negara dan menggantinya dengan paham lain. Sikap Anda...',
        opsi: [
          'Membiarkan karena bukan urusan Anda',
          'Meneruskan pesan ke grup lain untuk mencari pendapat',
          'Menolak dengan sopan, keluar dari grup, dan melaporkan ke pihak berwenang',
          'Membalas dengan makian agar anggota grup lain takut',
          'Mengikuti diskusi untuk mengetahui isi paham tersebut lebih jauh'
        ],
        jawaban: 2,
        pembahasan: 'Sikap antiradikalisme: menolak ajakan secara tegas namun sopan, tidak menyebarluaskan, dan melaporkan ke aparat berwenang.'
      },
      {
        id: 'skd-31', topik: 'TKP',
        soal: 'Atasan meminta Anda memprioritaskan berkas milik kerabatnya sehingga melewati antrean. Sikap Anda...',
        opsi: [
          'Memenuhi permintaan karena atasan berwenang',
          'Menolak dengan sopan dan menjelaskan prosedur antrean yang berlaku',
          'Memproses tetapi meminta imbalan sebagai kompensasi',
          'Memproses diam-diam tanpa mencatat dalam sistem',
          'Menyampaikan ke rekan lain agar mereka yang memutuskan'
        ],
        jawaban: 1,
        pembahasan: 'Profesionalisme berarti menegakkan prosedur tanpa memandang kedekatan hubungan, disampaikan dengan cara sopan dan berbasis aturan.'
      },
      {
        id: 'skd-32', topik: 'TKP',
        soal: 'Target kerja bulan ini belum tercapai padahal waktu tersisa satu minggu. Sikap Anda...',
        opsi: [
          'Menunggu instruksi atasan sebelum bertindak',
          'Mengubah laporan agar target terlihat tercapai',
          'Mengevaluasi hambatan, menyusun rencana percepatan, dan berkoordinasi dengan tim',
          'Meminta perpanjangan tenggat tanpa rencana perbaikan',
          'Menyalahkan kondisi di luar kendali Anda'
        ],
        jawaban: 2,
        pembahasan: 'Orientasi hasil ditunjukkan dengan evaluasi hambatan dan penyusunan langkah percepatan yang konkret, bukan memanipulasi data atau menunggu.'
      },
      {
        id: 'skd-33', topik: 'TKP',
        soal: 'Kebijakan kerja di kantor berubah menjadi kombinasi kerja di kantor dan di rumah secara bergilir. Sikap Anda...',
        opsi: [
          'Menolak karena merasa cara kerja lama lebih nyaman',
          'Bekerja di rumah dengan santai karena tidak diawasi langsung',
          'Menyesuaikan jadwal, menjaga komunikasi tim, dan memastikan pekerjaan tetap selesai',
          'Meminta pengecualian agar selalu bekerja di kantor',
          'Menunggu rekan lain lebih dulu menyesuaikan diri'
        ],
        jawaban: 2,
        pembahasan: 'Kemampuan adaptasi ditunjukkan dengan menyesuaikan cara kerja baru sambil menjaga koordinasi dan hasil kerja tetap terjaga.'
      }
    ]
  }
};
