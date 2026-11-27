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

// Sekolah kedinasan populer: ikatan dinas, lulus langsung jadi ASN/TNI/Polri.
// Field "web" hanya berisi domain resmi yang sudah dicek aktif.
export const KEDINASAN = [
  { id: 'pkn-stan', nama: 'PKN STAN', kepanjangan: 'Politeknik Keuangan Negara STAN', jenis: 'Keuangan', kementerian: 'Kementerian Keuangan', web: 'https://pknstan.ac.id', jurusan: 'Akuntansi, Pajak, Bea Cukai, Manajemen Keuangan', kuota: '± 1.500 / tahun', seleksi: 'SKD + TPA + wawancara', catatan: 'Paling diminati lulusan SMA/SMK IPS dan Akuntansi. Lulus langsung CPNS di Kemenkeu.' },
  { id: 'ipdn', nama: 'IPDN', kepanjangan: 'Institut Pemerintahan Dalam Negeri', jenis: 'Pemerintahan', kementerian: 'Kementerian Dalam Negeri', web: 'https://ipdn.ac.id', jurusan: 'Pamong Praja, Manajemen Pemerintahan', kuota: '± 1.000 / tahun', seleksi: 'SKD + fisik + kesehatan + wawancara', catatan: 'Calon camat dan ASN pemda. Seleksi fisik ketat dan ada tes psikologi.' },
  { id: 'stis', nama: 'STIS', kepanjangan: 'Politeknik Statistika STIS', jenis: 'Statistika', kementerian: 'Badan Pusat Statistik', web: 'https://stis.ac.id', jurusan: 'Statistika, Komputasi Statistik', kuota: '± 500 / tahun', seleksi: 'SKD + matematika + wawancara', catatan: 'Cocok untuk yang kuat matematika. Lulus jadi statistisi ASN di BPS.' },
  { id: 'stmkg', nama: 'STMKG', kepanjangan: 'Sekolah Tinggi Meteorologi Klimatologi dan Geofisika', jenis: 'Meteorologi', kementerian: 'BMKG', web: 'https://stmkg.ac.id', jurusan: 'Meteorologi, Klimatologi, Geofisika', kuota: '± 200 / tahun', seleksi: 'SKD + fisik + kesehatan', catatan: 'Niche tetapi pesaing sedikit. Banyak penempatan di stasiun BMKG daerah.' },
  { id: 'poltek-ssn', nama: 'Poltek SSN', kepanjangan: 'Politeknik Siber dan Sandi Negara', jenis: 'Siber', kementerian: 'BSSN', web: 'https://poltekssn.ac.id', jurusan: 'Kriptografi, Keamanan Siber, Rekayasa Keamanan Siber', kuota: '± 200 / tahun', seleksi: 'SKD + psikotes + wawancara', catatan: 'Untuk yang tertarik keamanan siber. Sangat kompetitif tetapi prospek bagus.' },
  { id: 'poltekim', nama: 'Poltekim', kepanjangan: 'Politeknik Ilmu Pemasyarakatan', jenis: 'Hukum & Imigrasi', kementerian: 'Kementerian Hukum dan HAM', web: 'https://poltekim.ac.id', jurusan: 'Manajemen Pemasyarakatan', kuota: '± 200 / tahun', seleksi: 'SKD + fisik + kesehatan', catatan: 'Lulus jadi ASN di lapas dan rutan. Ada tes fisik dan kesehatan.' },
  { id: 'poltekip', nama: 'Poltekip', kepanjangan: 'Politeknik Ilmu Keimigrasian', jenis: 'Hukum & Imigrasi', kementerian: 'Kementerian Hukum dan HAM', web: 'https://poltekip.ac.id', jurusan: 'Manajemen Keimigrasian', kuota: '± 200 / tahun', seleksi: 'SKD + fisik + kesehatan', catatan: 'Lulus jadi ASN imigrasi. Banyak penempatan di kantor imigrasi dan perbatasan.' },
  { id: 'stin', nama: 'STIN', kepanjangan: 'Sekolah Tinggi Intelijen Negara', jenis: 'Intelijen', kementerian: 'Badan Intelijen Negara', web: 'https://stin.ac.id', jurusan: 'Intelijen Negara', kuota: '± 100 / tahun', seleksi: 'Administrasi + psikotes + fisik + wawancara', catatan: 'Khusus untuk calon personel BIN. Seleksi tertutup dan sangat ketat.' },
  { id: 'stia-lan', nama: 'Poltek STIA LAN', kepanjangan: 'Politeknik STIA LAN Jakarta', jenis: 'Administrasi', kementerian: 'Lembaga Administrasi Negara', web: 'https://stialan.ac.id', jurusan: 'Administrasi Publik, Administrasi Bisnis, Administrasi Pembangunan', kuota: '± 300 / tahun', seleksi: 'SKD + wawancara', catatan: 'Program D4 dan S2 untuk calon ASN dan analis kebijakan.' },
  { id: 'polteknaker', nama: 'Polteknaker', kepanjangan: 'Politeknik Ketenagakerjaan', jenis: 'Ketenagakerjaan', kementerian: 'Kementerian Ketenagakerjaan', web: 'https://polteknaker.ac.id', jurusan: 'Manajemen Ketenagakerjaan, Keselamatan dan Kesehatan Kerja', kuota: '± 200 / tahun', seleksi: 'SKD + wawancara', catatan: 'Lulus jadi pengawas ketenagakerjaan atau analis K3 di Kemnaker.' },
  { id: 'poltekesos', nama: 'Poltekesos', kepanjangan: 'Politeknik Kesejahteraan Sosial', jenis: 'Sosial', kementerian: 'Kementerian Sosial', web: 'https://poltekesos.ac.id', jurusan: 'Pekerjaan Sosial, Rehabilitasi Sosial', kuota: '± 200 / tahun', seleksi: 'SKD + psikotes + wawancara', catatan: 'Lulus jadi pekerja sosial ASN di Kemensos dan dinas sosial daerah.' },
  { id: 'polbangtan-bogor', nama: 'Polbangtan Bogor', kepanjangan: 'Politeknik Pembangunan Pertanian Bogor', jenis: 'Pertanian', kementerian: 'Kementerian Pertanian', web: 'https://polbangtan-bogor.ac.id', jurusan: 'Penyuluhan Pertanian, Peternakan', kuota: '± 300 / tahun', seleksi: 'SKD + wawancara', catatan: 'Lulus jadi penyuluh pertanian ASN. Cocok untuk lulusan SMK Pertanian.' },
  { id: 'pepi', nama: 'PEPI', kepanjangan: 'Politeknik Enjiniring Pertanian Indonesia', jenis: 'Pertanian', kementerian: 'Kementerian Pertanian', web: 'https://pepi.ac.id', jurusan: 'Teknologi Mekanisasi Pertanian, Teknologi Pengolahan Hasil Pertanian', kuota: '± 200 / tahun', seleksi: 'SKD + wawancara', catatan: 'Fokus rekayasa alat mesin pertanian. Banyak praktik di laboratorium dan lahan.' },
  { id: 'poltekpar-bali', nama: 'Poltekpar Bali', kepanjangan: 'Politeknik Pariwisata Bali', jenis: 'Pariwisata', kementerian: 'Kementerian Pariwisata', web: 'https://ppb.ac.id', jurusan: 'Perhotelan, Tata Boga, Tata Hidang, Manajemen Konvensi', kuota: '± 500 / tahun', seleksi: 'SKD + wawancara + tes minat', catatan: 'Kampus pariwisata paling dikenal. Lulus jadi ASN atau profesional industri.' },
  { id: 'poltekpar-makassar', nama: 'Poltekpar Makassar', kepanjangan: 'Politeknik Pariwisata Makassar', jenis: 'Pariwisata', kementerian: 'Kementerian Pariwisata', web: 'https://poltekparmakassar.ac.id', jurusan: 'Perhotelan, Tata Boga, Manajemen Perjalanan Wisata', kuota: '± 400 / tahun', seleksi: 'SKD + wawancara + tes minat', catatan: 'Rujukan pariwisata Indonesia timur. Banyak kerja sama industri hotel dan travel.' },
  { id: 'ppicurug', nama: 'PPI Curug', kepanjangan: 'Politeknik Penerbangan Indonesia Curug', jenis: 'Penerbangan', kementerian: 'Kementerian Perhubungan', web: 'https://ppicurug.ac.id', jurusan: 'Teknik Pesawat Udara, Penerbangan, Keselamatan Penerbangan', kuota: '± 300 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Kampus penerbangan tertua di Indonesia. Butuh kesehatan prima dan tidak buta warna.' },
  { id: 'poltekbang-makassar', nama: 'Poltekbang Makassar', kepanjangan: 'Politeknik Penerbangan Makassar', jenis: 'Penerbangan', kementerian: 'Kementerian Perhubungan', web: 'https://poltekbangmakassar.ac.id', jurusan: 'Teknik Pesawat Udara, Manajemen Bandar Udara, Telekomunikasi Penerbangan', kuota: '± 250 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Penempatan di bandara dan unit navigasi penerbangan di Indonesia timur.' },
  { id: 'poltekbang-surabaya', nama: 'Poltekbang Surabaya', kepanjangan: 'Politeknik Penerbangan Surabaya', jenis: 'Penerbangan', kementerian: 'Kementerian Perhubungan', web: 'https://poltekbangsby.ac.id', jurusan: 'Teknik Pesawat Udara, Manajemen Bandar Udara', kuota: '± 250 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Punya hanggar praktik sendiri. Lulus jadi ASN Kemenhub atau teknisi maskapai.' },
  { id: 'poltekbang-jayapura', nama: 'Poltekbang Jayapura', kepanjangan: 'Politeknik Penerbangan Jayapura', jenis: 'Penerbangan', kementerian: 'Kementerian Perhubungan', web: 'https://poltekbangjayapura.ac.id', jurusan: 'Manajemen Bandar Udara, Teknik Pesawat Udara', kuota: '± 150 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Kebutuhan tinggi untuk bandara perintis di Papua. Pesaing relatif sedikit.' },
  { id: 'poltekpel-surabaya', nama: 'Pelaut Surabaya', kepanjangan: 'Politeknik Pelayaran Surabaya', jenis: 'Pelayaran', kementerian: 'Kementerian Perhubungan', web: 'https://poltekpel-sby.ac.id', jurusan: 'Nautika, Teknika, Manajemen Transportasi Laut', kuota: '± 400 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Lulus jadi perwira kapal. Wajib lolos tes mata dan kesehatan pelaut.' },
  { id: 'pip-makassar', nama: 'PIP Makassar', kepanjangan: 'Politeknik Ilmu Pelayaran Makassar', jenis: 'Pelayaran', kementerian: 'Kementerian Perhubungan', web: 'https://pipmakassar.ac.id', jurusan: 'Nautika, Teknika, Ketatalaksanaan Pelayaran', kuota: '± 400 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Rujukan pelayaran Indonesia timur. Terdapat latihan laut dan simulator kapal.' },
  { id: 'pip-semarang', nama: 'PIP Semarang', kepanjangan: 'Politeknik Ilmu Pelayaran Semarang', jenis: 'Pelayaran', kementerian: 'Kementerian Perhubungan', web: 'https://pip-semarang.ac.id', jurusan: 'Nautika, Teknika, Ketatalaksanaan Pelayaran Niaga', kuota: '± 400 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Salah satu kampus pelayaran terbaik. Lulus berpangkat perwira di kapal niaga.' },
  { id: 'poltekkes-surabaya', nama: 'Poltekkes Surabaya', kepanjangan: 'Politeknik Kesehatan Kemenkes Surabaya', jenis: 'Kesehatan', kementerian: 'Kementerian Kesehatan', web: 'https://poltekkes-surabaya.ac.id', jurusan: 'Keperawatan, Kebidanan, Gizi, Teknologi Laboratorium Medis', kuota: '± 500 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Lulus jadi tenaga kesehatan ASN. Peminat sangat banyak, nilai SKD harus tinggi.' },
  { id: 'poltekkes-semarang', nama: 'Poltekkes Semarang', kepanjangan: 'Politeknik Kesehatan Kemenkes Semarang', jenis: 'Kesehatan', kementerian: 'Kementerian Kesehatan', web: 'https://poltekkes-smg.ac.id', jurusan: 'Keperawatan, Kebidanan, Gizi, Kesehatan Lingkungan', kuota: '± 500 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Banyak program studi dan lahan praktik di rumah sakit pendidikan.' },
  { id: 'poltekkes-jogja', nama: 'Poltekkes Jogja', kepanjangan: 'Politeknik Kesehatan Kemenkes Yogyakarta', jenis: 'Kesehatan', kementerian: 'Kementerian Kesehatan', web: 'https://poltekkesjogja.ac.id', jurusan: 'Keperawatan, Kebidanan, Gizi, Teknik Radiodiagnostik', kuota: '± 500 / tahun', seleksi: 'SKD + kesehatan + wawancara', catatan: 'Fasilitas praktik lengkap. Banyak lulusan langsung jadi ASN di puskesmas.' },
  { id: 'akpol', nama: 'Akpol', kepanjangan: 'Akademi Kepolisian', jenis: 'Kepolisian', kementerian: 'Polri', web: 'https://akpol.ac.id', jurusan: 'Ilmu Kepolisian', kuota: '± 300 / tahun', seleksi: 'Administrasi + fisik + psikologi + kesehatan', catatan: 'Perwira Polri. Butuh persiapan fisik dan mental 1-2 tahun sebelumnya.' },
  { id: 'aau', nama: 'AAU', kepanjangan: 'Akademi Angkatan Udara', jenis: 'Militer', kementerian: 'TNI Angkatan Udara', web: 'https://aau.ac.id', jurusan: 'Teknik Penerbangan, Teknik Elektro, Manajemen Pertahanan', kuota: '± 200 / tahun', seleksi: 'Administrasi + fisik + psikologi + kesehatan', catatan: 'Perwira TNI AU. Calon penerbang wajib lolos tes kesehatan mata dan tinggi badan.' }
];

// Daftar jenis untuk filter di halaman kedinasan.
export const KEDINASAN_JENIS = ['Semua', ...Array.from(new Set(KEDINASAN.map(k => k.jenis)))];

// Portal pendaftaran bersama untuk jalur kedinasan, TNI, dan Polri.
export const KEDINASAN_PORTAL = [
  { nama: 'SSCASN BKN', ket: 'Pendaftaran resmi sekolah kedinasan dan CPNS, sekaligus tempat SKD berbasis CAT.', web: 'https://sscasn.bkn.go.id' },
  { nama: 'Penerimaan Polri', ket: 'Pendaftaran Akpol, Bintara, dan Tamtama Polri.', web: 'https://penerimaan.polri.go.id' },
  { nama: 'Penerimaan TNI', ket: 'Pendaftaran Akmil, AAU, AAL, serta bintara dan tamtama TNI.', web: 'https://penerimaan.tni.mil.id' }
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
