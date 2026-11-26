// Data perguruan tinggi: PTN, PTS, dan Vokasi.
// Catatan: estimasi biaya bersifat ilustrasi kisaran UKT/SPP per semester (jalur reguler).
export const COLLEGES = [
  // ================= PTN =================
  {
    id: 'ui', nama: 'Universitas Indonesia', singkat: 'UI', jenis: 'PTN',
    lokasi: 'Depok / Jakarta', provinsi: 'DKI Jakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Ilmu Komputer', 'Hukum', 'Psikologi', 'Akuntansi'],
    biaya: 'Rp 500rb - 12jt / semester (UKT berjenjang)', web: 'https://www.ui.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus tertua Indonesia dengan 14 fakultas. Kekuatan pada riset, jejaring nasional, dan reputasi di mata dunia kerja. Fasilitas perpustakaan dan laboratorium sangat lengkap.'
  },
  {
    id: 'itb', nama: 'Institut Teknologi Bandung', singkat: 'ITB', jenis: 'PTN',
    lokasi: 'Bandung', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Informatika', 'Teknik Sipil', 'Teknik Mesin', 'Arsitektur', 'Farmasi'],
    biaya: 'Rp 500rb - 14jt / semester (UKT berjenjang)', web: 'https://www.itb.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus teknik paling bergengsi di Indonesia. Budaya akademiknya berat tetapi lulusannya sangat dicari di sektor energi, konstruksi, dan teknologi.'
  },
  {
    id: 'ugm', nama: 'Universitas Gadjah Mada', singkat: 'UGM', jenis: 'PTN',
    lokasi: 'Yogyakarta', provinsi: 'DI Yogyakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Farmasi', 'Teknik Geologi', 'Ilmu Hukum', 'Sosial Ekonomi Pertanian'],
    biaya: 'Rp 500rb - 12jt / semester (UKT berjenjang)', web: 'https://www.ugm.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Universitas pertama Indonesia, lengkap dari rumpun sains sampai budaya. Suasana Yogyakarta menekan biaya hidup dan kaya organisasi mahasiswa.'
  },
  {
    id: 'ipb', nama: 'IPB University', singkat: 'IPB', jenis: 'PTN',
    lokasi: 'Bogor', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknologi Pangan', 'Agribisnis', 'Ilmu Komputer', 'Biologi', 'Kedokteran Hewan'],
    biaya: 'Rp 500rb - 10jt / semester (UKT berjenjang)', web: 'https://www.ipb.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Spesialis pertanian, pangan, dan lingkungan. Kampus hijau dengan program kewirausahaan agribisnis yang kuat.'
  },
  {
    id: 'its', nama: 'Institut Teknologi Sepuluh Nopember', singkat: 'ITS', jenis: 'PTN',
    lokasi: 'Surabaya', provinsi: 'Jawa Timur', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Informatika', 'Teknik Elektro', 'Teknik Perkapalan', 'Desain Produk', 'Statistika'],
    biaya: 'Rp 500rb - 10jt / semester (UKT berjenjang)', web: 'https://www.its.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Pusat rekayasa kelautan dan teknologi di Indonesia Timur. Banyak kerja sama industri dan tim robotika yang berprestasi internasional.'
  },
  {
    id: 'unpad', nama: 'Universitas Padjadjaran', singkat: 'Unpad', jenis: 'PTN',
    lokasi: 'Bandung / Sumedang', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Ilmu Komunikasi', 'Farmasi', 'Akuntansi', 'Peternakan'],
    biaya: 'Rp 500rb - 10jt / semester (UKT berjenjang)', web: 'https://www.unpad.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kekuatan pada kesehatan, komunikasi, dan ilmu sosial. Kampus Jatinangor luas dengan lingkungan belajar yang tenang.'
  },
  {
    id: 'undip', nama: 'Universitas Diponegoro', singkat: 'Undip', jenis: 'PTN',
    lokasi: 'Semarang', provinsi: 'Jawa Tengah', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Teknik Mesin', 'Ilmu Kelautan', 'Manajemen', 'Teknik Komputer'],
    biaya: 'Rp 500rb - 9jt / semester (UKT berjenjang)', web: 'https://www.undip.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus riset dengan keunggulan kelautan dan energi terbarukan. Biaya hidup Semarang relatif ramah kantong.'
  },
  {
    id: 'ub', nama: 'Universitas Brawijaya', singkat: 'UB', jenis: 'PTN',
    lokasi: 'Malang', provinsi: 'Jawa Timur', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Teknik Informatika', 'Administrasi Bisnis', 'Teknologi Pangan', 'Hukum'],
    biaya: 'Rp 500rb - 9jt / semester (UKT berjenjang)', web: 'https://www.ub.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Universitas besar dengan budaya kompetisi sehat dan banyak unit kegiatan mahasiswa. Malang terkenal sebagai kota pelajar dengan biaya hidup rendah.'
  },
  {
    id: 'uny', nama: 'Universitas Negeri Yogyakarta', singkat: 'UNY', jenis: 'PTN',
    lokasi: 'Yogyakarta', provinsi: 'DI Yogyakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Pendidikan Teknik Elektro', 'PGSD', 'Pendidikan Jasmani', 'Teknik Mesin', 'Desain Komunikasi Visual'],
    biaya: 'Rp 400rb - 7jt / semester (UKT berjenjang)', web: 'https://www.uny.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus kependidikan terbaik untuk calon guru dan tenaga pelatihan. Lulusan banyak terserap sekolah negeri dan swasta.'
  },
  {
    id: 'unnes', nama: 'Universitas Negeri Semarang', singkat: 'Unnes', jenis: 'PTN',
    lokasi: 'Semarang', provinsi: 'Jawa Tengah', akreditasi: 'Unggul',
    jurusanUnggulan: ['Pendidikan Matematika', 'Teknik Sipil', 'Ilmu Hukum', 'Manajemen', 'Pendidikan Bahasa Inggris'],
    biaya: 'Rp 400rb - 8jt / semester (UKT berjenjang)', web: 'https://www.unnes.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus konservasi dengan program pendidikan yang kuat. Banyak pilihan jurusan non-kependidikan yang berkembang pesat.'
  },
  {
    id: 'upi', nama: 'Universitas Pendidikan Indonesia', singkat: 'UPI', jenis: 'PTN',
    lokasi: 'Bandung', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Pendidikan Bahasa Indonesia', 'PGSD', 'Pendidikan Matematika', 'Pendidikan Seni', 'Ilmu Komputer'],
    biaya: 'Rp 400rb - 7jt / semester (UKT berjenjang)', web: 'https://www.upi.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Rujukan nasional untuk ilmu pendidikan. Cocok bagi yang ingin menjadi guru, dosen, atau pengembang kurikulum.'
  },
  {
    id: 'unand', nama: 'Universitas Andalas', singkat: 'Unand', jenis: 'PTN',
    lokasi: 'Padang / Payakumbuh', provinsi: 'Sumatera Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Teknik Sipil', 'Farmasi', 'Peternakan', 'Ilmu Komputer'],
    biaya: 'Rp 400rb - 8jt / semester (UKT berjenjang)', web: 'https://www.unand.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Universitas tertua di Sumatera dengan keunggulan kesehatan dan pertanian tropis.'
  },
  {
    id: 'unhas', nama: 'Universitas Hasanuddin', singkat: 'Unhas', jenis: 'PTN',
    lokasi: 'Makassar', provinsi: 'Sulawesi Selatan', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Teknik Sipil', 'Ilmu Hukum', 'Kelautan', 'Teknik Informatika'],
    biaya: 'Rp 400rb - 8jt / semester (UKT berjenjang)', web: 'https://www.unhas.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus terbesar di Indonesia Timur. Kuat pada kesehatan, kelautan, dan pembangunan infrastruktur.'
  },
  {
    id: 'uns', nama: 'Universitas Sebelas Maret', singkat: 'UNS', jenis: 'PTN',
    lokasi: 'Surakarta', provinsi: 'Jawa Tengah', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Teknik Informatika', 'Ilmu Komunikasi', 'Manajemen', 'Pendidikan Guru Sekolah Dasar'],
    biaya: 'Rp 400rb - 8jt / semester (UKT berjenjang)', web: 'https://www.uns.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus dengan suasana kota budaya Solo. Program kewirausahaan dan beasiswa cukup banyak.'
  },
  {
    id: 'unud', nama: 'Universitas Udayana', singkat: 'Unud', jenis: 'PTN',
    lokasi: 'Denpasar / Jimbaran', provinsi: 'Bali', akreditasi: 'A',
    jurusanUnggulan: ['Kedokteran', 'Pariwisata', 'Akuntansi', 'Teknik Sipil', 'Sastra Inggris'],
    biaya: 'Rp 400rb - 8jt / semester (UKT berjenjang)', web: 'https://www.unud.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kekuatan pada pariwisata, budaya, dan kesehatan. Lokasi strategis untuk karier industri perhotelan.'
  },
  {
    id: 'unej', nama: 'Universitas Jember', singkat: 'Unej', jenis: 'PTN',
    lokasi: 'Jember', provinsi: 'Jawa Timur', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran Gigi', 'Pertanian', 'Teknologi Hasil Pertanian', 'Ilmu Komputer', 'Akuntansi'],
    biaya: 'Rp 400rb - 7jt / semester (UKT berjenjang)', web: 'https://www.unej.ac.id',
    jalur: ['SNBP', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus agroindustri dengan biaya hidup rendah dan suasana belajar yang fokus.'
  },

  // ================= PTS =================
  {
    id: 'telkom', nama: 'Telkom University', singkat: 'Tel-U', jenis: 'PTS',
    lokasi: 'Bandung', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Informatika', 'Sistem Informasi', 'Desain Komunikasi Visual', 'Teknik Telekomunikasi', 'Bisnis Digital'],
    biaya: 'Rp 6jt - 15jt / semester', web: 'https://telkomuniversity.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'PTS teknologi dengan koneksi industri telekomunikasi dan digital yang sangat kuat. Banyak program magang bersertifikat.'
  },
  {
    id: 'binus', nama: 'BINUS University', singkat: 'BINUS', jenis: 'PTS',
    lokasi: 'Jakarta / Tangerang', provinsi: 'DKI Jakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Computer Science', 'Sistem Informasi', 'Desain Komunikasi Visual', 'Manajemen', 'Animasi'],
    biaya: 'Rp 12jt - 30jt / semester', web: 'https://binus.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'Kurikulum berstandar industri dengan banyak jalur internasional dan program enrichment. Biaya tinggi, fasilitas lengkap.'
  },
  {
    id: 'uii', nama: 'Universitas Islam Indonesia', singkat: 'UII', jenis: 'PTS',
    lokasi: 'Yogyakarta', provinsi: 'DI Yogyakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Informatika', 'Kedokteran', 'Ilmu Hukum', 'Teknik Sipil', 'Psikologi'],
    biaya: 'Rp 6jt - 18jt / semester', web: 'https://www.uii.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'PTS tertua di Indonesia dengan reputasi akademik kuat dan jaringan alumni luas.'
  },
  {
    id: 'umy', nama: 'Universitas Muhammadiyah Yogyakarta', singkat: 'UMY', jenis: 'PTS',
    lokasi: 'Yogyakarta', provinsi: 'DI Yogyakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Ilmu Komunikasi', 'Manajemen', 'Teknik Sipil', 'Hubungan Internasional'],
    biaya: 'Rp 5jt - 16jt / semester', web: 'https://www.umy.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'Kampus dengan program internasional dan suasana multikultural. Kuat pada kesehatan dan ilmu sosial.'
  },
  {
    id: 'petra', nama: 'Universitas Kristen Petra', singkat: 'UK Petra', jenis: 'PTS',
    lokasi: 'Surabaya', provinsi: 'Jawa Timur', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Informatika', 'Desain Komunikasi Visual', 'Teknik Sipil', 'Manajemen Perhotelan', 'Akuntansi'],
    biaya: 'Rp 6jt - 16jt / semester', web: 'https://www.petra.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'PTS dengan fasilitas desain dan teknik yang rapi. Banyak kolaborasi proyek dengan industri kreatif Surabaya.'
  },
  {
    id: 'atmajaya', nama: 'Universitas Katolik Indonesia Atma Jaya', singkat: 'UAJ', jenis: 'PTS',
    lokasi: 'Jakarta', provinsi: 'DKI Jakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Kedokteran', 'Psikologi', 'Akuntansi', 'Hukum', 'Teknik Elektro'],
    biaya: 'Rp 8jt - 22jt / semester', web: 'https://www.atmajaya.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'Kampus urban Jakarta dengan keunggulan kesehatan dan psikologi. Dekat dengan dunia kerja ibukota.'
  },
  {
    id: 'trisakti', nama: 'Universitas Trisakti', singkat: 'Usakti', jenis: 'PTS',
    lokasi: 'Jakarta', provinsi: 'DKI Jakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Perminyakan', 'Kedokteran Gigi', 'Teknik Sipil', 'Manajemen', 'Arsitektur'],
    biaya: 'Rp 8jt - 20jt / semester', web: 'https://www.trisakti.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'Terkenal dengan teknik perminyakan dan arsitektur. Jaringan alumni industri energi sangat kuat.'
  },
  {
    id: 'unisba', nama: 'Universitas Islam Bandung', singkat: 'Unisba', jenis: 'PTS',
    lokasi: 'Bandung', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Ilmu Hukum', 'Kedokteran', 'Ilmu Komunikasi', 'Psikologi', 'Statistika'],
    biaya: 'Rp 5jt - 14jt / semester', web: 'https://unisba.ac.id',
    jalur: ['Mandiri', 'Beasiswa'],
    deskripsi: 'Kampus Islam terkemuka di Bandung dengan Fakultas Hukum dan Kedokteran yang mapan.'
  },

  // ================= VOKASI =================
  {
    id: 'pnj', nama: 'Politeknik Negeri Jakarta', singkat: 'PNJ', jenis: 'Vokasi',
    lokasi: 'Depok', provinsi: 'DKI Jakarta', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Informatika', 'Akuntansi', 'Teknik Sipil', 'Teknik Mesin', 'Administrasi Bisnis'],
    biaya: 'Rp 500rb - 7jt / semester', web: 'https://pnj.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Politeknik negeri terdekat dengan industri Jabodetabek. Kurikulum 60-70% praktik dengan program magang wajib.'
  },
  {
    id: 'polman', nama: 'Politeknik Manufaktur Bandung', singkat: 'Polman', jenis: 'Vokasi',
    lokasi: 'Bandung', provinsi: 'Jawa Barat', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Manufaktur', 'Teknik Perancangan Mekanik', 'Teknik Otomasi Manufaktur', 'Teknik Pengecoran Logam'],
    biaya: 'Rp 500rb - 5jt / semester', web: 'https://polman-bandung.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus vokasi teknik paling diminati industri manufaktur. Lulusan sering direkrut sebelum wisuda.'
  },
  {
    id: 'pens', nama: 'Politeknik Elektronika Negeri Surabaya', singkat: 'PENS', jenis: 'Vokasi',
    lokasi: 'Surabaya', provinsi: 'Jawa Timur', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Elektronika', 'Teknik Informatika', 'Teknik Telekomunikasi', 'Teknik Mekatronika'],
    biaya: 'Rp 500rb - 6jt / semester', web: 'https://www.pens.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Spesialis elektronika dan otomasi. Banyak proyek riset terapan dan tim robotik berprestasi.'
  },
  {
    id: 'polines', nama: 'Politeknik Negeri Semarang', singkat: 'Polines', jenis: 'Vokasi',
    lokasi: 'Semarang', provinsi: 'Jawa Tengah', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Elektro', 'Teknik Mesin', 'Akuntansi', 'Teknik Sipil', 'Administrasi Bisnis'],
    biaya: 'Rp 500rb - 5jt / semester', web: 'https://polines.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Politeknik dengan program D3 dan D4 lengkap serta kerja sama industri di Jawa Tengah.'
  },
  {
    id: 'pnup', nama: 'Politeknik Negeri Ujung Pandang', singkat: 'PNUP', jenis: 'Vokasi',
    lokasi: 'Makassar', provinsi: 'Sulawesi Selatan', akreditasi: 'Unggul',
    jurusanUnggulan: ['Teknik Mesin', 'Teknik Elektro', 'Akuntansi', 'Teknik Kimia', 'Teknik Sipil'],
    biaya: 'Rp 400rb - 5jt / semester', web: 'https://www.pnup.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Rujukan vokasi Indonesia Timur, kuat pada teknik dan akuntansi sektor publik.'
  },
  {
    id: 'poltekkes', nama: 'Politeknik Kesehatan Kemenkes', singkat: 'Poltekkes', jenis: 'Vokasi',
    lokasi: 'Tersebar di 34 provinsi', provinsi: 'Nasional', akreditasi: 'Unggul',
    jurusanUnggulan: ['Keperawatan', 'Kebidanan', 'Analis Kesehatan', 'Farmasi', 'Gizi'],
    biaya: 'Rp 300rb - 4jt / semester', web: 'https://poltekkes.kemkes.go.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Jalur cepat menjadi tenaga kesehatan dengan ikatan dinas di banyak unit. Praktik langsung di rumah sakit pendidikan.'
  },
  {
    id: 'poliupg', nama: 'Politeknik Negeri Balikpapan', singkat: 'Poltekba', jenis: 'Vokasi',
    lokasi: 'Balikpapan', provinsi: 'Kalimantan Timur', akreditasi: 'B',
    jurusanUnggulan: ['Teknik Mesin', 'Teknik Sipil', 'Teknik Elektronika', 'Akuntansi', 'Teknik Informatika'],
    biaya: 'Rp 400rb - 5jt / semester', web: 'https://poltekba.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Berada di pusat industri migas dan IKN. Peluang magang di perusahaan energi sangat besar.'
  },
  {
    id: 'pnb', nama: 'Politeknik Negeri Bali', singkat: 'PNB', jenis: 'Vokasi',
    lokasi: 'Badung', provinsi: 'Bali', akreditasi: 'Unggul',
    jurusanUnggulan: ['Perhotelan', 'Tata Boga', 'Akuntansi', 'Teknik Mesin', 'Administrasi Bisnis'],
    biaya: 'Rp 400rb - 5jt / semester', web: 'https://pnb.ac.id',
    jalur: ['SNBP Vokasi', 'SNBT', 'Mandiri'],
    deskripsi: 'Kampus vokasi pariwisata terbaik dengan praktik langsung di industri hotel dan restoran internasional.'
  }
];

export const COLLEGE_TYPES = ['Semua', 'PTN', 'PTS', 'Vokasi'];
