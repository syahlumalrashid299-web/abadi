// Empat jalur masa depan + data pendukung perbandingan & rekomendasi.

export const PATHS = [
  {
    id: 'kuliah',
    nama: 'Kuliah',
    tagline: 'Melanjutkan pendidikan ke perguruan tinggi',
    ikon: 'cap',
    warna: 'indigo',
    ringkas: 'Menempuh D3/S1 di PTN, PTS, atau vokasi untuk memperdalam keahlian dan membuka karier profesional.',
    durasi: '2 - 4 tahun (+ 1-2 tahun profesi untuk kedokteran, apoteker, dll)',
    biaya: 'Rp 0 (KIP-K) sampai Rp 30jt per semester',
    mulai: 'Lulus SMA/SMK, seleksi SNBP/SNBT/Mandiri',
    kelebihan: [
      'Gelar resmi membuka banyak lowongan yang mensyaratkan S1',
      'Jejaring alumni dan organisasi yang luas',
      'Waktu lebih banyak untuk mendalami bidang',
      'Akses beasiswa (KIP-K, bidikmisi, beasiswa daerah)'
    ],
    tantangan: [
      'Biaya dan waktu cukup besar',
      'Belum menghasilkan uang selama kuliah',
      'Persaingan kerja lulusan baru tetap ketat'
    ],
    cocokUntuk: 'Siswa yang ingin mendalami ilmu, bercita-cita jadi profesional (dokter, engineer, dosen, lawyer), atau butuh gelar untuk jenjang karier tertentu.',
    langkah: [
      'Kelas 11: tentukan rumpun jurusan dan cek mapel pendukung',
      'Kelas 12 semester 1: siapkan nilai rapor untuk SNBP (min. semester 1-5)',
      'Desember: cek daya tampung dan passing grade kampus target',
      'Januari: daftar SNBP (2 pilihan)',
      'Februari-April: ikuti UTBK-SNBT',
      'Juni-Juli: daftar mandiri sebagai cadangan'
    ],
    sumber: 'https://snpmb.bppp.kemdikbud.go.id'
  },
  {
    id: 'kedinasan',
    nama: 'Sekolah Kedinasan',
    tagline: 'Kuliah gratis dengan ikatan dinas',
    ikon: 'shield',
    warna: 'teal',
    ringkas: 'Sekolah tinggi milik kementerian/lembaga: lulus langsung jadi ASN dengan pangkat dan penempatan.',
    durasi: '3 - 4 tahun',
    biaya: 'Gratis / sangat ringan, banyak yang dapat uang saku',
    mulai: 'Lulus SMA/SMK, seleksi SSCASN Sekolah Kedinasan',
    kelebihan: [
      'Biaya pendidikan ditanggung negara',
      'Langsung menjadi ASN setelah lulus',
      'Kedisiplinan dan karakter terbentuk kuat',
      'Jaminan karier dan pensiun'
    ],
    tantangan: [
      'Seleksi sangat ketat dan berlapis (SKD, fisik, kesehatan, wawancara)',
      'Ikatan dinas: tidak bebas pindah kerja',
      'Penempatan bisa di luar daerah asal',
      'Aturan kedisiplinan ketat selama pendidikan'
    ],
    cocokUntuk: 'Siswa disiplin, sehat jasmani, siap ditempatkan di mana saja, dan menginginkan karier stabil sebagai abdi negara.',
    langkah: [
      'Kelas 11: latihan fisik rutin dan jaga kesehatan mata/ gigi',
      'Kelas 11-12: latihan soal SKD (TWK, TIU, TKP)',
      'April-Mei: pantau pengumuman SSCASN sekolah kedinasan',
      'Mei-Juni: daftar online dan unggah berkas',
      'Juni-Juli: SKD, lalu tes fisik, kesehatan, wawancara',
      'Agustus: pengumuman dan pemberkasan'
    ],
    sumber: 'https://sscasn.bkn.go.id'
  },
  {
    id: 'abdi-negara',
    nama: 'Abdi Negara (TNI/Polri)',
    tagline: 'Jalur pengabdian lewat institusi pertahanan & keamanan',
    ikon: 'star',
    warna: 'amber',
    ringkas: 'Masuk sebagai prajurit TNI atau anggota Polri, baik lewat akademi maupun bintara/tamtama.',
    durasi: '4 bulan (bintara/tamtama) sampai 4 tahun (akademi)',
    biaya: 'Gratis, digaji selama pendidikan',
    mulai: 'Usia 17-22 tahun, seleksi penerimaan TNI/Polri',
    kelebihan: [
      'Penghasilan dan tunjangan sejak pendidikan',
      'Karier berjenjang dengan kepastian pangkat',
      'Fasilitas kesehatan, perumahan, dan pensiun',
      'Rasa pengabdian dan kebanggaan'
    ],
    tantangan: [
      'Tes fisik sangat berat dan seleksi ketat',
      'Harus bebas dari catatan kriminal dan narkoba',
      'Penempatan di daerah rawan/terpencil',
      'Kedisiplinan mutlak, ruang gerak terbatas'
    ],
    cocokUntuk: 'Siswa dengan kondisi fisik prima, tinggi/berat sesuai syarat, disiplin tinggi, dan ingin berkarier di institusi negara.',
    langkah: [
      'Kelas 10-12: rutin lari, pull-up, sit-up, renang',
      'Jaga berat badan dan kesehatan gigi/mata',
      'Cek syarat tinggi minimal (TNI AD 163cm, AU 165cm, AL 165cm; Polri bervariasi)',
      'Pantau pengumuman di penerimaan.tni.mil.id atau penerimaan.polri.go.id',
      'Daftar, ikuti tes administrasi, kesehatan, jasmani, psikologi',
      'Lulus: pendidikan dasar dan dilantik'
    ],
    sumber: 'https://penerimaan.polri.go.id'
  },
  {
    id: 'cpns',
    nama: 'CPNS',
    tagline: 'Langsung kerja sebagai ASN di instansi pemerintah',
    ikon: 'briefcase',
    warna: 'rose',
    ringkas: 'Seleksi Calon Pegawai Negeri Sipil untuk lulusan SMA/SMK (umumnya formasi SLTA) di kementerian dan pemda.',
    durasi: '1 tahun masa percobaan, lalu PNS',
    biaya: 'Gratis (hati-hati penipuan berkedok biaya)',
    mulai: 'Lulus SMA/SMK, seleksi nasional SSCASN tahunan',
    kelebihan: [
      'Langsung bekerja dan digaji tanpa kuliah dulu',
      'Jaminan karier, pensiun, dan tunjangan',
      'Bisa lanjut kuliah sambil bekerja',
      'Formasi tersebar di seluruh Indonesia'
    ],
    tantangan: [
      'Formasi untuk lulusan SMA/SMK terbatas dan peminat sangat banyak',
      'Seleksi SKD + SKB sangat kompetitif',
      'Penempatan bisa jauh dari rumah',
      'Gaji awal relatif kecil dibanding swasta'
    ],
    cocokUntuk: 'Siswa yang ingin segera bekerja, butuh penghasilan cepat, dan bersedia belajar giat untuk SKD/SKB.',
    langkah: [
      'Kelas 12: mulai latihan soal TWK, TIU, TKP',
      'Pantau jadwal seleksi di sscasn.bkn.go.id (biasanya Agustus-Oktober)',
      'Siapkan KTP, ijazah, transkrip, SKCK',
      'Daftar 1 formasi saja, pilih yang sesuai kualifikasi',
      'Ikuti SKD (110 soal, 100 menit)',
      'Lolos: SKB dan pemberkasan'
    ],
    sumber: 'https://sscasn.bkn.go.id'
  }
];

// Sekolah kedinasan populer
export const KEDINASAN = [
  { nama: 'PKN STAN', kepanjangan: 'Politeknik Keuangan Negara STAN', kementerian: 'Kementerian Keuangan', jurusan: 'Akuntansi, Pajak, Bea Cukai, Manajemen Keuangan', kuota: '± 1.500 / tahun', seleksi: 'SKD + TPA + wawancara', catatan: 'Paling diminati lulusan SMA/SMK IPS/Akuntansi. Lulus langsung CPNS di Kemenkeu.' },
  { nama: 'IPDN', kepanjangan: 'Institut Pemerintahan Dalam Negeri', kementerian: 'Kementerian Dalam Negeri', jurusan: 'Pamong Praja, Manajemen Pemerintahan', kuota: '± 1.000 / tahun', seleksi: 'SKD + fisik + kesehatan + wawancara', catatan: 'Calon camat/ASN pemda. Seleksi fisik ketat dan ada tes psikologi.' },
  { nama: 'STIS', kepanjangan: 'Politeknik Statistika STIS', kementerian: 'BPS', jurusan: 'Statistika, Komputasi Statistik', kuota: '± 500 / tahun', seleksi: 'SKD + matematika + wawancara', catatan: 'Cocok untuk yang kuat matematika. Lulus jadi statistisi ASN di BPS.' },
  { nama: 'STMKG', kepanjangan: 'Sekolah Tinggi Meteorologi Klimatologi dan Geofisika', kementerian: 'BMKG', jurusan: 'Meteorologi, Klimatologi, Geofisika', kuota: '± 200 / tahun', seleksi: 'SKD + fisik + kesehatan', catatan: 'Niche tetapi pesaing sedikit. Banyak penempatan di stasiun BMKG daerah.' },
  { nama: 'Poltek SSN', kepanjangan: 'Politeknik Siber dan Sandi Negara', kementerian: 'BSSN', jurusan: 'Kriptografi, Keamanan Siber, Rekayasa Keamanan Siber', kuota: '± 200 / tahun', seleksi: 'SKD + psikotes + wawancara', catatan: 'Untuk yang tertarik keamanan siber. Sangat kompetitif tetapi prospek bagus.' },
  { nama: 'Poltekim & Poltekip', kepanjangan: 'Politeknik Ilmu Pemasyarakatan & Imigrasi', kementerian: 'Kemenkumham', jurusan: 'Manajemen Pemasyarakatan, Manajemen Keimigrasian', kuota: '± 400 / tahun', seleksi: 'SKD + fisik + kesehatan', catatan: 'Lulus jadi ASN di lapas atau kantor imigrasi.' },
  { nama: 'Akpol', kepanjangan: 'Akademi Kepolisian', kementerian: 'Polri', jurusan: 'Ilmu Kepolisian', kuota: '± 300 / tahun', seleksi: 'Administrasi + fisik + psikologi + kesehatan', catatan: 'Perwira Polri. Butuh persiapan fisik dan mental 1-2 tahun sebelumnya.' },
  { nama: 'Akmil', kepanjangan: 'Akademi Militer', kementerian: 'TNI AD', jurusan: 'Teknik Sipil, Mesin, Elektro, Manajemen Pertahanan', kuota: '± 400 / tahun', seleksi: 'Administrasi + fisik + psikologi + kesehatan', catatan: 'Perwira TNI AD. Syarat tinggi badan dan kesehatan sangat ketat.' }
];

// Aspek perbandingan 4 jalur
export const COMPARE_ASPECTS = [
  { aspek: 'Waktu sampai bisa bekerja', kuliah: '4-5 tahun', kedinasan: '3-4 tahun (langsung ASN)', 'abdi-negara': '4 bulan - 4 tahun', cpns: '0 tahun (langsung kerja)' },
  { aspek: 'Biaya yang dikeluarkan', kuliah: 'Rp 0 - 120jt total', kedinasan: 'Gratis', 'abdi-negara': 'Gratis + digaji', cpns: 'Gratis' },
  { aspek: 'Penghasilan awal', kuliah: 'Rp 4-8jt (fresh graduate)', kedinasan: 'Rp 4-6jt + tunjangan', 'abdi-negara': 'Rp 2,5-5jt + tunjangan', cpns: 'Rp 2,5-4jt + tunjangan' },
  { aspek: 'Kepastian kerja', kuliah: 'Perlu melamar sendiri', kedinasan: 'Dijamin (ikatan dinas)', 'abdi-negara': 'Dijamin setelah lulus', cpns: 'Dijamin setelah lulus CPNS' },
  { aspek: 'Tingkat kesulitan masuk', kuliah: 'Sedang-Tinggi', kedinasan: 'Sangat Tinggi', 'abdi-negara': 'Tinggi (fisik berat)', cpns: 'Sangat Tinggi' },
  { aspek: 'Kebebasan pilih tempat', kuliah: 'Bebas pilih kampus', kedinasan: 'Ditentukan negara', 'abdi-negara': 'Ditentukan negara', cpns: 'Ditentukan negara' },
  { aspek: 'Pengembangan keahlian', kuliah: 'Sangat tinggi', kedinasan: 'Tinggi (spesifik)', 'abdi-negara': 'Tinggi (kedisiplinan)', cpns: 'Sedang (administratif)' },
  { aspek: 'Fleksibilitas karier', kuliah: 'Tinggi (bisa pindah industri)', kedinasan: 'Rendah (terikat dinas)', 'abdi-negara': 'Rendah', cpns: 'Sedang (mutasi internal)' },
  { aspek: 'Kesesuaian fisik', kuliah: 'Tidak ada syarat khusus', kedinasan: 'Syarat fisik & kesehatan', 'abdi-negara': 'Syarat fisik sangat ketat', cpns: 'Sehat jasmani rohani' },
  { aspek: 'Peluang lanjut kuliah', kuliah: 'Ya (memang kuliah)', kedinasan: 'Bisa tugas belajar', 'abdi-negara': 'Bisa tugas belajar', cpns: 'Bisa izin belajar' }
];

// Pertanyaan kuis rekomendasi jalur
export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    pertanyaan: 'Apa yang paling kamu inginkan 2 tahun setelah lulus?',
    opsi: [
      { teks: 'Sudah punya gelar sarjana dan keahlian spesifik', skor: { kuliah: 3 } },
      { teks: 'Sudah jadi ASN dengan seragam dan pangkat', skor: { kedinasan: 3, 'abdi-negara': 2 } },
      { teks: 'Sudah punya penghasilan tetap tiap bulan', skor: { cpns: 2, 'abdi-negara': 2 } },
      { teks: 'Sedang kuliah sambil sudah bekerja', skor: { kuliah: 1, cpns: 2 } }
    ]
  },
  {
    id: 'q2',
    pertanyaan: 'Bagaimana kondisi biaya keluarga kamu?',
    opsi: [
      { teks: 'Cukup longgar, bisa bayar kuliah swasta', skor: { kuliah: 3 } },
      { teks: 'Pas-pasan, butuh beasiswa atau biaya gratis', skor: { kedinasan: 3, cpns: 2 } },
      { teks: 'Harus segera membantu ekonomi keluarga', skor: { cpns: 3, 'abdi-negara': 2 } },
      { teks: 'Tidak masalah selama ada jalur jelas', skor: { kuliah: 1, kedinasan: 2 } }
    ]
  },
  {
    id: 'q3',
    pertanyaan: 'Seberapa siap fisik kamu untuk latihan berat setiap hari?',
    opsi: [
      { teks: 'Sangat siap, saya rutin olahraga', skor: { 'abdi-negara': 3, kedinasan: 2 } },
      { teks: 'Cukup siap kalau latihan bertahap', skor: { kedinasan: 2, 'abdi-negara': 1 } },
      { teks: 'Kurang siap, lebih suka belajar', skor: { kuliah: 3, cpns: 1 } },
      { teks: 'Tidak siap sama sekali', skor: { kuliah: 2, cpns: 1 } }
    ]
  },
  {
    id: 'q4',
    pertanyaan: 'Bagaimana kamu menghadapi ujian tertulis dan soal logika?',
    opsi: [
      { teks: 'Saya suka dan sering menang lomba', skor: { kuliah: 2, kedinasan: 2, cpns: 3 } },
      { teks: 'Bisa kalau rajin latihan soal', skor: { cpns: 2, kuliah: 2 } },
      { teks: 'Lebih kuat di praktik daripada teori', skor: { 'abdi-negara': 2, kedinasan: 1 } },
      { teks: 'Sulit, butuh waktu panjang untuk siap', skor: { kuliah: 1 } }
    ]
  },
  {
    id: 'q5',
    pertanyaan: 'Kalau harus ditempatkan di luar pulau Jawa selama 5 tahun, kamu...',
    opsi: [
      { teks: 'Siap, itu tantangan menarik', skor: { kedinasan: 3, 'abdi-negara': 3, cpns: 2 } },
      { teks: 'Bisa menerima setelah mikir panjang', skor: { cpns: 2, kedinasan: 1 } },
      { teks: 'Berat, ingin dekat keluarga', skor: { kuliah: 2 } },
      { teks: 'Tidak mau, harus bisa pilih lokasi sendiri', skor: { kuliah: 3 } }
    ]
  },
  {
    id: 'q6',
    pertanyaan: 'Bidang apa yang paling membuat kamu bersemangat?',
    opsi: [
      { teks: 'Teknologi, sains, atau kesehatan', skor: { kuliah: 3 } },
      { teks: 'Keuangan, pajak, atau administrasi negara', skor: { kedinasan: 3, cpns: 2 } },
      { teks: 'Ketertiban, keamanan, dan pengabdian', skor: { 'abdi-negara': 3 } },
      { teks: 'Bisnis dan wirausaha', skor: { kuliah: 2, cpns: 1 } }
    ]
  },
  {
    id: 'q7',
    pertanyaan: 'Berapa lama kamu bersedia menunggu sebelum benar-benar bekerja?',
    opsi: [
      { teks: 'Tidak masalah, 4 tahun untuk gelar', skor: { kuliah: 3 } },
      { teks: 'Maksimal 3-4 tahun asal dijamin kerja', skor: { kedinasan: 3 } },
      { teks: 'Maksimal 1 tahun, harus cepat', skor: { cpns: 2, 'abdi-negara': 1 } },
      { teks: 'Sesegera mungkin, bulan ini kalau bisa', skor: { cpns: 3 } }
    ]
  },
  {
    id: 'q8',
    pertanyaan: 'Nilai rapor kamu di sekolah lebih banyak...',
    opsi: [
      { teks: 'Di atas 85, konsisten', skor: { kuliah: 2, kedinasan: 2, cpns: 1 } },
      { teks: '75-85, stabil', skor: { kuliah: 1, cpns: 2, kedinasan: 1 } },
      { teks: 'Naik turun, tergantung mapel', skor: { cpns: 1, 'abdi-negara': 1 } },
      { teks: 'Lebih kuat di nilai praktik/kejuruan', skor: { 'abdi-negara': 2, kedinasan: 1 } }
    ]
  }
];

// Alat persiapan seleksi (SNBP/SNBT/Mandiri)
export const SELEKSI = [
  {
    id: 'snbp', nama: 'SNBP (Seleksi Nasional Berdasarkan Prestasi)',
    singkat: 'Jalur prestasi, tanpa tes. Dinilai dari rapor + prestasi + indeks sekolah.',
    komposisi: 'Nilai rapor semester 1-5, prestasi akademik/non-akademik, akreditasi sekolah',
    kunci: 'Nilai rapor konsisten tinggi sejak kelas 10, kurva nilai sekolah, pemilihan 2 kampus yang realistis',
    tips: [
      'Jaga nilai dari semester 1, bukan hanya semester akhir',
      'Ikuti lomba minimal tingkat kabupaten untuk poin tambahan',
      'Pilih 1 kampus ambisius + 1 kampus aman',
      'Cek rekam jejak sekolah: berapa yang lolos SNBP tahun lalu'
    ]
  },
  {
    id: 'snbt', nama: 'SNBT (Seleksi Nasional Berbasis Tes)',
    singkat: 'Jalur tes UTBK. Mengukur penalaran, bukan hafalan.',
    komposisi: 'Tes Potensi Skolastik (penalaran umum, kuantitatif, pengetahuan & pemahaman umum, membaca) + literasi Bahasa Indonesia & Inggris',
    kunci: 'Latihan soal penalaran dan kecepatan membaca. Tidak ada soal mata pelajaran.',
    tips: [
      'Biasakan membaca cepat artikel panjang',
      'Latih penalaran kuantitatif tanpa kalkulator',
      'Kerjakan simulasi dengan timer 100 soal / 195 menit',
      'Fokus pada akurasi, bukan hanya mengejar jumlah soal'
    ]
  },
  {
    id: 'mandiri', nama: 'Jalur Mandiri',
    singkat: 'Seleksi buatan masing-masing kampus. Biaya pendaftaran bervariasi.',
    komposisi: 'Tes tulis (bisa campuran mapel), kadang wawancara, nilai rapor, atau portofolio',
    kunci: 'Baca panduan resmi tiap kampus karena aturannya berbeda-beda.',
    tips: [
      'Siapkan dana pendaftaran Rp 200rb - 1jt per kampus',
      'Daftar 2-3 kampus mandiri sebagai cadangan',
      'Beberapa kampus memberi potongan UKT untuk prestasi',
      'Cek jadwal: mandiri biasanya Juni-September'
    ]
  }
];
