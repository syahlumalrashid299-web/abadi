// Data jurusan kuliah + prospek karier.
export const MAJORS = [
  {
    id: 'informatika', nama: 'Teknik Informatika', rumpun: 'Teknologi',
    deskripsi: 'Belajar algoritma, pemrograman, basis data, jaringan, dan kecerdasan buatan. Paling banyak praktik coding dan proyek perangkat lunak.',
    mapel: ['Matematika', 'Logika', 'Fisika (dasar)'],
    prospek: ['Software Engineer', 'Data Analyst', 'Mobile Developer', 'DevOps Engineer'],
    gaji: 'Rp 6jt - 25jt / bulan',
    jurusanSMK: ['RPL', 'TKJ', 'Multimedia'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'sistem-informasi', nama: 'Sistem Informasi', rumpun: 'Teknologi',
    deskripsi: 'Jembatan antara teknologi dan bisnis: analisis kebutuhan, perancangan sistem, manajemen proyek TI, dan ERP.',
    mapel: ['Matematika', 'Ekonomi', 'Logika'],
    prospek: ['System Analyst', 'Business Analyst', 'IT Project Manager', 'ERP Consultant'],
    gaji: 'Rp 6jt - 22jt / bulan',
    jurusanSMK: ['RPL', 'TKJ', 'Akuntansi'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'dkv', nama: 'Desain Komunikasi Visual', rumpun: 'Seni & Desain',
    deskripsi: 'Merancang komunikasi visual: branding, tipografi, ilustrasi, fotografi, dan desain digital. Butuh portofolio sejak awal.',
    mapel: ['Seni Budaya', 'Bahasa Indonesia'],
    prospek: ['Graphic Designer', 'UI/UX Designer', 'Art Director', 'Content Creator'],
    gaji: 'Rp 4jt - 18jt / bulan',
    jurusanSMK: ['Multimedia', 'DKV', 'Animasi'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'kedokteran', nama: 'Pendidikan Dokter', rumpun: 'Kesehatan',
    deskripsi: '5,5 tahun termasuk koas. Belajar anatomi, fisiologi, patologi, dan praktik klinik di rumah sakit pendidikan.',
    mapel: ['Biologi', 'Kimia', 'Fisika', 'Matematika'],
    prospek: ['Dokter Umum', 'Dokter Spesialis', 'Peneliti Medis', 'Dokter Klinik'],
    gaji: 'Rp 8jt - 40jt / bulan',
    jurusanSMK: ['Umum (IPA)'],
    tingkatKesulitan: 'Sangat Tinggi'
  },
  {
    id: 'keperawatan', nama: 'Ilmu Keperawatan', rumpun: 'Kesehatan',
    deskripsi: 'Asuhan keperawatan, anatomi, farmakologi dasar, dan praktik klinik. Jalur cepat kerja di RS dalam dan luar negeri.',
    mapel: ['Biologi', 'Kimia'],
    prospek: ['Perawat RS', 'Perawat Komunitas', 'Perawat Luar Negeri', 'Educator Kesehatan'],
    gaji: 'Rp 4jt - 15jt / bulan',
    jurusanSMK: ['Keperawatan', 'Farmasi'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'farmasi', nama: 'Farmasi', rumpun: 'Kesehatan',
    deskripsi: 'Ilmu obat-obatan: kimia farmasi, formulasi, farmakologi, dan pelayanan kefarmasian. Ada jalur apoteker setelah S1.',
    mapel: ['Kimia', 'Biologi', 'Matematika'],
    prospek: ['Apoteker', 'QA Industri Farmasi', 'Regulatory Affairs', 'Peneliti Obat'],
    gaji: 'Rp 5jt - 20jt / bulan',
    jurusanSMK: ['Farmasi'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'akuntansi', nama: 'Akuntansi', rumpun: 'Ekonomi & Bisnis',
    deskripsi: 'Siklus akuntansi, perpajakan, audit, dan analisis laporan keuangan. Sangat dibutuhkan di semua sektor.',
    mapel: ['Matematika', 'Ekonomi'],
    prospek: ['Akuntan', 'Auditor', 'Tax Consultant', 'Finance Analyst'],
    gaji: 'Rp 4jt - 18jt / bulan',
    jurusanSMK: ['Akuntansi', 'Perbankan'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'manajemen', nama: 'Manajemen', rumpun: 'Ekonomi & Bisnis',
    deskripsi: 'Belajar mengelola organisasi: strategi, pemasaran, sumber daya manusia, dan operasi.',
    mapel: ['Ekonomi', 'Matematika'],
    prospek: ['Management Trainee', 'Marketing Executive', 'HR Officer', 'Business Owner'],
    gaji: 'Rp 4jt - 15jt / bulan',
    jurusanSMK: ['Pemasaran', 'Administrasi Perkantoran', 'Akuntansi'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'hukum', nama: 'Ilmu Hukum', rumpun: 'Sosial & Humaniora',
    deskripsi: 'Studi peraturan, kontrak, pidana, perdata, dan praktik peradilan. Banyak membaca dan berargumen.',
    mapel: ['Bahasa Indonesia', 'PPKn', 'Sejarah'],
    prospek: ['Advokat', 'Notaris', 'Legal Officer', 'Hakim / Jaksa'],
    gaji: 'Rp 4jt - 25jt / bulan',
    jurusanSMK: ['Semua jurusan'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'psikologi', nama: 'Psikologi', rumpun: 'Sosial & Humaniora',
    deskripsi: 'Ilmu perilaku manusia: psikologi perkembangan, industri, klinis, dan asesmen. Kuat di statistika dasar.',
    mapel: ['Matematika', 'Biologi', 'Sosiologi'],
    prospek: ['HR Specialist', 'Psikolog Klinis', 'Recruiter', 'Peneliti Perilaku'],
    gaji: 'Rp 4jt - 18jt / bulan',
    jurusanSMK: ['Semua jurusan'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'komunikasi', nama: 'Ilmu Komunikasi', rumpun: 'Sosial & Humaniora',
    deskripsi: 'Strategi komunikasi, jurnalistik, public relations, periklanan, dan media digital.',
    mapel: ['Bahasa Indonesia', 'Sosiologi'],
    prospek: ['PR Officer', 'Content Strategist', 'Jurnalis', 'Social Media Manager'],
    gaji: 'Rp 4jt - 16jt / bulan',
    jurusanSMK: ['Multimedia', 'Pemasaran', 'Semua jurusan'],
    tingkatKesulitan: 'Rendah'
  },
  {
    id: 'teknik-sipil', nama: 'Teknik Sipil', rumpun: 'Teknik',
    deskripsi: 'Merancang dan membangun infrastruktur: struktur, jalan, jembatan, dan manajemen konstruksi.',
    mapel: ['Matematika', 'Fisika'],
    prospek: ['Site Engineer', 'Structural Engineer', 'Quantity Surveyor', 'Konsultan Konstruksi'],
    gaji: 'Rp 5jt - 20jt / bulan',
    jurusanSMK: ['Teknik Konstruksi', 'DPIB', 'Teknik Sipil'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'teknik-mesin', nama: 'Teknik Mesin', rumpun: 'Teknik',
    deskripsi: 'Perancangan mesin, termodinamika, material, dan manufaktur. Banyak praktik di laboratorium.',
    mapel: ['Matematika', 'Fisika'],
    prospek: ['Mechanical Engineer', 'Maintenance Engineer', 'Production Engineer', 'QC Engineer'],
    gaji: 'Rp 5jt - 18jt / bulan',
    jurusanSMK: ['TPM', 'TKR', 'Teknik Mesin'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'teknik-elektro', nama: 'Teknik Elektro', rumpun: 'Teknik',
    deskripsi: 'Sistem tenaga, elektronika, kontrol, dan otomasi industri. Inti dari instalasi dan energi.',
    mapel: ['Matematika', 'Fisika'],
    prospek: ['Electrical Engineer', 'Automation Engineer', 'PLN Engineer', 'Instrument Engineer'],
    gaji: 'Rp 5jt - 20jt / bulan',
    jurusanSMK: ['TITL', 'Teknik Audio Video', 'Elektronika Industri'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'arsitektur', nama: 'Arsitektur', rumpun: 'Teknik',
    deskripsi: 'Merancang bangunan dan ruang: studio desain, struktur, sejarah arsitektur, dan perencanaan kota.',
    mapel: ['Matematika', 'Fisika', 'Seni Budaya'],
    prospek: ['Architect', 'Drafter', 'Urban Planner', 'Interior Designer'],
    gaji: 'Rp 4jt - 20jt / bulan',
    jurusanSMK: ['DPIB', 'Teknik Konstruksi'],
    tingkatKesulitan: 'Tinggi'
  },
  {
    id: 'pgsd', nama: 'Pendidikan Guru Sekolah Dasar', rumpun: 'Pendidikan',
    deskripsi: 'Ilmu mendidik anak usia sekolah dasar: pedagogi, psikologi anak, dan mata pelajaran dasar.',
    mapel: ['Bahasa Indonesia', 'Matematika'],
    prospek: ['Guru SD', 'Guru Privat', 'Penulis Bahan Ajar', 'ASN Kependidikan'],
    gaji: 'Rp 3jt - 12jt / bulan',
    jurusanSMK: ['Semua jurusan'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'pendidikan-teknik', nama: 'Pendidikan Teknik (Elektro/Mesin/Informatika)', rumpun: 'Pendidikan',
    deskripsi: 'Menyiapkan guru produktif SMK. Kombinasi keahlian teknik dan ilmu kependidikan.',
    mapel: ['Matematika', 'Fisika'],
    prospek: ['Guru SMK', 'Instruktur Pelatihan', 'ASN Kependidikan', 'Trainer Industri'],
    gaji: 'Rp 3jt - 12jt / bulan',
    jurusanSMK: ['Semua jurusan teknik'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'pertanian', nama: 'Agribisnis / Agroteknologi', rumpun: 'Pertanian',
    deskripsi: 'Bisnis dan teknologi pertanian modern: budidaya, pascapanen, dan rantai pasok pangan.',
    mapel: ['Biologi', 'Kimia', 'Ekonomi'],
    prospek: ['Agronomist', 'Supply Chain Agri', 'Entrepreneur Agri', 'Penyuluh Pertanian'],
    gaji: 'Rp 4jt - 15jt / bulan',
    jurusanSMK: ['Agribisnis', 'ATP', 'Agriteknologi'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'pariwisata', nama: 'Manajemen Pariwisata / Perhotelan', rumpun: 'Pariwisata',
    deskripsi: 'Operasional hotel, food & beverage, event, dan manajemen destinasi wisata.',
    mapel: ['Bahasa Inggris', 'Ekonomi'],
    prospek: ['Hotel Supervisor', 'Event Manager', 'Tour Operator', 'F&B Manager'],
    gaji: 'Rp 3jt - 15jt / bulan',
    jurusanSMK: ['Perhotelan', 'Tata Boga', 'Usaha Perjalanan Wisata'],
    tingkatKesulitan: 'Rendah'
  },
  {
    id: 'kelautan', nama: 'Ilmu Kelautan / Teknologi Perikanan', rumpun: 'Kelautan',
    deskripsi: 'Ekologi laut, budidaya, dan teknologi hasil perikanan. Indonesia punya potensi sangat besar di sini.',
    mapel: ['Biologi', 'Kimia'],
    prospek: ['Marine Biologist', 'Budidaya Perikanan', 'QA Produk Laut', 'Konsultan Lingkungan'],
    gaji: 'Rp 4jt - 14jt / bulan',
    jurusanSMK: ['Perikanan', 'Nautika'],
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 'statistika', nama: 'Statistika / Sains Data', rumpun: 'Sains',
    deskripsi: 'Analisis data, probabilitas, pemodelan, dan machine learning. Fondasi matematika kuat.',
    mapel: ['Matematika'],
    prospek: ['Data Scientist', 'Statistician', 'Risk Analyst', 'BPS / ASN Statistik'],
    gaji: 'Rp 6jt - 25jt / bulan',
    jurusanSMK: ['Semua jurusan (kuat matematika)'],
    tingkatKesulitan: 'Tinggi'
  }
];

export const MAJOR_GROUPS = [
  'Semua', 'Teknologi', 'Teknik', 'Kesehatan', 'Ekonomi & Bisnis',
  'Sosial & Humaniora', 'Seni & Desain', 'Pendidikan', 'Pertanian',
  'Pariwisata', 'Kelautan', 'Sains'
];
