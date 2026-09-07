// ================================================================
// diskoperindag-data.js — Data Terpadu Diskoperindag Kota Sawahlunto
// Dinas Koperasi, Usaha Kecil Menengah, Perindustrian, dan Perdagangan
// ZERO EMOJIS — Clean civic government dataset
// ================================================================

const institutionalInfo = {
  name: 'Dinas Koperasi, Usaha Kecil Menengah, Perindustrian, dan Perdagangan',
  shortName: 'Diskoperindag Kota Sawahlunto',
  leader: {
    name: 'Tatang Sumarna, S.E.',
    title: 'Kepala Dinas Koperindag Kota Sawahlunto',
    nip: '19710815 199803 1 004',
    photo: 'assets/hero.jpg'
  },
  address: 'Jalan Ir. H. Amran Nur, Desa Kolok Mudik, Kecamatan Barangin, Kota Sawahlunto, Sumatera Barat 27424',
  phone: '(0754) 61062',
  email: 'koperindag@sawahluntokota.go.id',
  hours: 'Senin - Jumat: 07.30 - 16.00 WIB',
  vision: 'Sawahlunto Kota Wisata Yang Estetik, Futuristik, Hidup dan Menghidupi Berbasis Penguatan Ekonomi Kerakyatan',
  missions: [
    'Meningkatkan kapasitas kelembagaan, permodalan, dan akuntabilitas tata kelola koperasi daerah.',
    'Menumbuhkembangkan UMKM yang tangguh, mandiri, dan berdaya saing melalui digitalisasi dan fasilitasi legalitas usaha.',
    'Melestarikan dan memperkuat Sentra Industri Kecil Menengah (IKM) Tenun Songket Silungkang dan kerajinan kreatif unggulan.',
    'Mewujudkan stabilitas pasokan dan harga bahan pokok serta penataan sarana prasarana 4 pasar tradisional daerah.',
    'Mewujudkan perlindungan konsumen yang adil dan tertib niaga melalui pelayanan metrologi legal tera dan tera ulang UTTP.'
  ]
};

// Data Komoditas Bahan Pokok Harian (SPH Bapok)
const bapokPrices = [
  { commodity: 'Beras Kualitas I (Sokan)', unit: 'Kg', price: 'Rp 17.500', status: 'Stabil', change: '0%' },
  { commodity: 'Minyak Goreng Sawit Kemasan', unit: 'Liter', price: 'Rp 18.000', status: 'Stabil', change: '0%' },
  { commodity: 'Cabai Merah Keriting', unit: 'Kg', price: 'Rp 42.000', status: 'Turun', change: '-4.5%' },
  { commodity: 'Daging Sapi Segar', unit: 'Kg', price: 'Rp 140.000', status: 'Stabil', change: '0%' },
  { commodity: 'Telur Ayam Ras', unit: 'Tray', price: 'Rp 28.500', status: 'Stabil', change: '0%' },
  { commodity: 'Bawang Merah Lokal', unit: 'Kg', price: 'Rp 32.000', status: 'Stabil', change: '0%' },
  { commodity: 'Gula Pasir Kristal Putih', unit: 'Kg', price: 'Rp 17.500', status: 'Stabil', change: '0%' }
];

// Data 4 Pasar Tradisional Daerah Kota Sawahlunto
const traditionalMarkets = [
  {
    id: 'pasar-sapan',
    name: 'Pasar Sapan',
    days: 'Senin dan Kamis',
    location: 'Kecamatan Barangin, Kota Sawahlunto',
    description: 'Pusat perdagangan hasil bumi, sayuran segar perbukitan, palawija, sembako, dan aneka sandang warga.',
    highlight: 'Penyesuaian jadwal operasional 2 kali sepekan untuk pemerataan distribusi niaga daerah.'
  },
  {
    id: 'pasar-talawi',
    name: 'Pasar Talawi',
    days: 'Selasa dan Jumat',
    location: 'Kecamatan Talawi, Kota Sawahlunto',
    description: 'Pasar agraris yang terkenal dengan transaksi ternak, hasil kebun rakyat, rempah-rempah, dan aneka kuliner otentik.',
    highlight: 'Menghubungkan rantai pasok komoditas pertanian antar wilayah nagari di lembah Talawi.'
  },
  {
    id: 'pasar-sawahlunto',
    name: 'Pasar Sawahlunto',
    days: 'Rabu dan Sabtu',
    location: 'Kecamatan Lembah Segar, Pusat Kota Warisan Tambang',
    description: 'Pusat grosir dan ritel utama kota, perdagangan busana, tekstil songket, perhiasan, dan kebutuhan sehari-hari.',
    highlight: 'Kawasan pasar terintegrasi dengan cagar budaya kota warisan dunia UNESCO Ombilin.'
  },
  {
    id: 'pasar-silungkang',
    name: 'Pasar Silungkang',
    days: 'Minggu',
    location: 'Kecamatan Silungkang, Jalur Lintas Sumatera',
    description: 'Pintu gerbang kerajinan Tenun Songket Silungkang, pusat cenderamata khas, konveksi, dan pasar perlintasan strategis.',
    highlight: 'Pusat perdagangan sentra kerajinan songket yang terkenal hingga mancanegara.'
  }
];

// 4 Pilar Layanan Publik Utama
const publicServices = [
  {
    id: 'klinik-umkm',
    title: 'Klinik Konsultasi Koperasi & UMKM',
    subtitle: 'Layanan Pendampingan Usaha Mikro & Koperasi',
    desc: 'Bimbingan terpadu pembuatan Nomor Induk Berusaha (NIB OSS RBA), sertifikasi Halal gratis (Sehati), fasilitasi permodalan KUR, dan tata kelola Rapat Anggota Tahunan (RAT) koperasi.',
    badge: 'Koperasi & UMKM'
  },
  {
    id: 'sentra-ikm',
    title: 'Sentra IKM Tenun Songket Silungkang',
    subtitle: 'Fasilitasi Kerajinan & Industri Kreatif',
    desc: 'Pelatihan inovasi tenun alat tenun bukan mesin (ATBM), fasilitasi pewarnaan ramah lingkungan, pendaftaran HKI merek, dan promosi Sawahlunto International Songket Silungkang Carnival (SISSCa).',
    badge: 'Perindustrian'
  },
  {
    id: 'tata-pasar',
    title: 'Penataan Pasar & Pemantauan Harga',
    subtitle: 'Pengelolaan 4 Pasar & Stabilisasi Pangan',
    desc: 'Pengaturan operasional dan kenyamanan Pasar Sapan, Talawi, Sawahlunto, Silungkang, operasi pasar murah berkala, dan pemantauan sistem harga bahan kebutuhan pokok harian.',
    badge: 'Perdagangan'
  },
  {
    id: 'metrologi-legal',
    title: 'Layanan Metrologi Legal (Tera & Tera Ulang)',
    subtitle: 'Perlindungan Konsumen & Tertib Ukur',
    desc: 'Pengujian dan penerbitan cap tanda tera sah untuk timbangan pedagang pasar, jembatan timbang perusahaan, meteran arus minyak, dan pompa ukur BBM SPBU di seluruh Kota Sawahlunto.',
    badge: 'Metrologi Legal'
  }
];

// Data Berita Terpadu Diskoperindag Kota Sawahlunto
const newsArticles = [
  {
    id: 1,
    title: 'Semarak SISSCa 2026 dan Sawahlunto Ekraf Expo: Diskoperindag Fasilitasi Lebih Dari 150 Pelaku UMKM Lokal',
    category: 'UMKM & IKM',
    date: 'Minggu, 6 September 2026',
    author: 'Tim Redaksi Diskoperindag Sawahlunto',
    readTime: '4 menit baca',
    image: 'assets/sissca-expo.jpg',
    excerpt: 'Dinas Koperasi, Usaha Kecil Menengah, Perindustrian, dan Perdagangan Kota Sawahlunto memfasilitasi lebih dari 150 pelaku UMKM kuliner dan kriya songket di ajang bergengsi SISSCa 2026.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Pemerintah Kota Sawahlunto melalui Dinas Koperasi, Usaha Kecil Menengah, Perindustrian, dan Perdagangan (Diskoperindag) memberikan dukungan penuh bagi akselerasi pertumbuhan ekonomi masyarakat lokal pada penyelenggaraan Sawahlunto International Songket Silungkang Carnival (SISSCa) 2026. Sebanyak lebih dari 150 pelaku UMKM di sektor ekonomi kreatif, kriya tenun, dan aneka kuliner difasilitasi dalam ajang Sawahlunto Ekraf Expo yang dipusatkan di sekitar kawasan Lapangan Ombilin.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Kepala Diskoperindag Kota Sawahlunto, Tatang Sumarna, S.E., menyampaikan bahwa perhelatan akbar pariwisata dan kebudayaan warisan songket harus mampu memberikan dampak riil bagi perputaran uang di tengah masyarakat kecil. "Kami memastikan setiap UMKM yang hadir mendapatkan tempat strategis, akses daya listrik yang memadai, serta pendampingan sistem pembayaran non-tunai QRIS agar transaksi pengunjung nyaman," jelas Tatang.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Selama tiga hari pelaksanaan expo, transaksi penjualan yang dicatatkan para perajin songket dan pedagang kuliner khas Sawahlunto meningkat signifikan hingga tiga kali lipat dibanding hari biasa. Pengunjung yang datang dari berbagai daerah di Sumatera Barat maupun wisatawan nusantara menunjukkan minat luar biasa terhadap produk turunan songket seperti tas tenun modern, selendang sutra, hingga suvenir khas Sawahlunto.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Wali Kota Sawahlunto turut mengapresiasi kesiapan panitia Diskoperindag yang sigap mengkoordinasikan ketertiban stan bazar. Langkah ini sejalan dengan visi pembangunan daerah agar kegiatan berskala internasional di Kota Warisan Tambang Ombilin ini tidak hanya menghibur, tetapi senantiasa "hidup dan menghidupi" denyut perekonomian warga.
      </p>
    `
  },
  {
    id: 2,
    title: 'Optimalisasi Pemerataan Arus Niaga: Diskoperindag Sawahlunto Berlakukan Jadwal Operasional Baru Pasar Sapan',
    category: 'Pasar & Perdagangan',
    date: 'Kamis, 27 Agustus 2026',
    author: 'Bidang Perdagangan Diskoperindag',
    readTime: '3 menit baca',
    image: 'assets/pasar-sawahlunto.jpg',
    excerpt: 'Penyesuaian jadwal operasional Pasar Sapan menjadi hari Senin dan Kamis resmi diberlakukan guna memperkuat konektivitas rantai pasok bahan pangan warga Kecamatan Barangin.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Dalam rangka meningkatkan efisiensi rantai distribusi komoditas pangan dan memperluas peluang pendapatan bagi para pedagang lokal, Diskoperindag Kota Sawahlunto menetapkan jadwal operasional resmi Pasar Sapan yang kini aktif dua kali sepekan, yakni pada setiap hari Senin dan Kamis.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Kebijakan ini diambil setelah melalui serangkaian musyawarah bersama para perwakilan asosiasi pedagang, perangkat nagari, dan tokoh masyarakat Kecamatan Barangin. Jadwal ini melengkapi siklus hari pasar di Sawahlunto, di mana Pasar Talawi beroperasi pada hari Selasa dan Jumat, Pasar Sawahlunto pada hari Rabu dan Sabtu, serta Pasar Silungkang pada hari Minggu.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Dengan penataan jadwal pasar yang teratur di setiap kecamatan, pedagang tidak saling berebut waktu, dan masyarakat memiliki akses terhadap bahan makanan segar tanpa harus menempuh perjalanan jauh setiap harinya," ujar Kepala Diskoperindag.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Diskoperindag juga menyiagakan petugas pengawas pasar untuk menjaga kebersihan lingkungan, menata zona parkir bongkar muat komoditas pertanian, serta memastikan sarana air bersih dan sanitasi di Pasar Sapan berfungsi optimal.
      </p>
    `
  },
  {
    id: 3,
    title: 'Dukung Pelestarian Tenun Songket Silungkang, Diskoperindag Gelar Pelatihan Inovasi Desain dan Pewarnaan Alami',
    category: 'Songket Silungkang',
    date: 'Senin, 17 Agustus 2026',
    author: 'Bidang Perindustrian Diskoperindag',
    readTime: '4 menit baca',
    image: 'assets/hero-koperindag.jpg',
    excerpt: 'Sebanyak 35 perajin tenun muda di Kecamatan Silungkang mengikuti lokakarya intensif penggunaan ekstrak pewarna alami dedaunan dan pengembangan motif songket kontemporer.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Tenun Songket Silungkang yang telah ditetapkan sebagai Warisan Budaya Takbenda Indonesia terus diperkuat daya saingnya di kancah global. Diskoperindag Kota Sawahlunto menyelenggarakan Pelatihan Teknis Inovasi Desain Motif dan Aplikasi Zat Warna Alami bagi generasi penerus perajin tenun di Nagari Silungkang.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Pelatihan yang berlangsung selama empat hari ini menghadirkan instruktur ahli tekstil wastra nusantara. Peserta diajarkan teknik ekstraksi daun jengkol, kulit kayu mahoni, daun mangga, serta serbuk gambir khas Sumatera Barat untuk menghasilkan gradasi warna lembut yang ramah lingkungan dan diminati pasar ekspor ramah lingkungan (eco-fashion).
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Pasar fesyen internasional kini sangat mengapresiasi konsep keberlanjutan. Melalui pemanfaatan pewarna alami, nilai jual sehelai kain songket Silungkang dapat meningkat hingga dua kali lipat, sekaligus meminimalisir limbah kimia di lingkungan sentra perajin," papar instruktur lokakarya.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Diskoperindag berkomitmen terus memfasilitasi sertifikasi indikasi geografis serta penyediaan bibit tanaman pewarna di kebun kolektif kelompok perajin demi menjamin ketersediaan bahan baku secara berkelanjutan.
      </p>
    `
  },
  {
    id: 4,
    title: 'Jamin Hak Konsumen dan Kepastian Takaran, Unit Metrologi Legal Uji Tera Ulang UTTP di Seluruh SPBU Sawahlunto',
    category: 'Metrologi Legal',
    date: 'Rabu, 12 Agustus 2026',
    author: 'Unit Pelaksana Teknis Metrologi Legal',
    readTime: '3 menit baca',
    image: 'assets/pasar-sawahlunto.jpg',
    excerpt: 'Pengujian tera ulang pompa ukur bahan bakar minyak di seluruh SPBU Kota Sawahlunto memastikan batas toleransi kesalahan memenuhi standar nasional perlindungan konsumen.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Unit Pelaksana Teknis Metrologi Legal Diskoperindag Kota Sawahlunto menuntaskan agenda pengawasan dan uji tera ulang tahunan terhadap seluruh alat ukur pompa bahan bakar minyak (BBM) di SPBU yang beroperasi di wilayah Kecamatan Barangin, Talawi, Lembah Segar, dan Silungkang.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Pengujian dilakukan dengan menggunakan bejana ukur standar 20 liter yang telah terkalibrasi secara resmi oleh Balai Standardisasi Metrologi Legal Regional. Setiap nosel pompa yang lulus uji langsung dipasangi cap tanda tera sah tahun 2026 serta segel kawat khusus untuk mencegah manipulasi volume cairan.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Pengawasan berkala ini merupakan mandat Undang-Undang Nomor 2 Tahun 1981 tentang Metrologi Legal. Kami memastikan hak masyarakat sebagai konsumen terlindungi secara presisi. Setiap rupiah yang dikeluarkan masyarakat harus sebanding dengan liter bahan bakar yang diterima," tegas tim penguji Metrologi Diskoperindag.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Selain SPBU, agenda metrologi legal selanjutnya akan menyasar timbangan duduk, timbangan pegas, dan jembatan timbang perusahaan angkutan barang di seluruh pelosok Sawahlunto.
      </p>
    `
  },
  {
    id: 5,
    title: 'Jaga Daya Beli Masyarakat dan Stabilitas Pasokan, Diskoperindag Pantau Harga Komoditas Pokok di Pasar Utama',
    category: 'Pasar & Perdagangan',
    date: 'Jumat, 7 Agustus 2026',
    author: 'Seksi Pengendalian Barang Pokok Diskoperindag',
    readTime: '3 menit baca',
    image: 'assets/pasar-sawahlunto.jpg',
    excerpt: 'Hasil monitoring harian menunjukkan pasokan beras, minyak goreng, gula pasir, dan cabai merah keriting dalam kondisi aman dan fluktuasi harga terkendali.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Dinas Koperindag Kota Sawahlunto secara konsisten merilis data Sistem Pemantauan Harga Bahan Pokok (SPH Bapok) berdasarkan pencatatan langsung tim surveyor di Pasar Sawahlunto dan Pasar Sapan. Data terkini menunjukkan ketersediaan pasokan komoditas pangan pokok berada pada level aman dan stabil.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Komoditas cabai merah keriting tercatat mengalami penurunan harga yang menggembirakan dari Rp 44.000 menjadi Rp 42.000 per kilogram seiring masuknya masa panen raya petani lokal dari dataran Talawi dan Alahan Panjang. Sementara itu, komoditas beras kualitas sokan stabil di angka Rp 17.500 per kilogram dan minyak goreng curah kemasan Rp 18.000 per liter.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Pemerintah Kota Sawahlunto bersama Tim Pengendali Inflasi Daerah (TPID) terus berkoordinasi dengan para distributor besar bahan pangan di Sumatera Barat. Jika terjadi lonjakan harga yang melebihi batas kewajaran, Diskoperindag siap menggelar Gerakan Operasi Pasar Murah," tutur Kepala Seksi Pengendalian Barang Pokok.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Masyarakat dapat memantau pembaruan grafik harga sembako secara transparan setiap hari kerja melalui papan pengumuman resmi dinas dan portal daring resmi Diskoperindag Sawahlunto.
      </p>
    `
  },
  {
    id: 6,
    title: 'Tingkatkan Akuntabilitas Lembaga Ekonomi Rakyat, Diskoperindag Dampingi Pelaksanaan RAT Koperasi se-Sawahlunto',
    category: 'Koperasi',
    date: 'Selasa, 28 Juli 2026',
    author: 'Bidang Koperasi Diskoperindag',
    readTime: '4 menit baca',
    image: 'assets/hero.jpg',
    excerpt: 'Pendampingan kepatuhan pelaksanaan Rapat Anggota Tahunan (RAT) bertujuan memperkuat kepercayaan anggota serta transparansi keuangan koperasi aktif di 4 kecamatan.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Rapat Anggota Tahunan (RAT) merupakan pemegang kekuasaan tertinggi dalam struktur lembaga koperasi. Menyadari hal tersebut, Bidang Koperasi Diskoperindag Kota Sawahlunto mengintensifkan program pendampingan tata kelola dan evaluasi laporan keuangan bagi seluruh koperasi aktif di Kota Sawahlunto.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Hingga pertengahan triwulan ketiga 2026, lebih dari 85 persen koperasi di Sawahlunto telah tertib melaksanakan RAT tepat waktu. Pemeriksaan meliputi rasio kecukupan modal, tingkat likuiditas simpan pinjam, solvabilitas, serta kepatuhan penyaluran Sisa Hasil Usaha (SHU) kepada anggota secara adil.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Koperasi yang sehat adalah koperasi yang terbuka dan demokratis. Melalui audit pendampingan ini, kami ingin memastikan koperasi benar-benar menjadi sokoguru perekonomian rakyat yang mensejahterakan anggotanya, bukan sekadar badan hukum formalitas," terang Kepala Bidang Koperasi.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Diskoperindag juga menyalurkan penghargaan bagi koperasi berprestasi kategori Koperasi Konsumen dan Koperasi Simpan Pinjam dengan tata kelola berbasis aplikasi pelaporan daring.
      </p>
    `
  },
  {
    id: 7,
    title: 'Fasilitasi Akses Pasar Modern, 45 Produk Unggulan IKM Sawahlunto Resmi Mengantongi Sertifikat Halal dan NIB',
    category: 'UMKM & IKM',
    date: 'Jumat, 17 Juli 2026',
    author: 'Klinik Layanan UMKM Diskoperindag',
    readTime: '3 menit baca',
    image: 'assets/sissca-expo.jpg',
    excerpt: 'Penyerahan simbolis sertifikat Halal BPJPH dan dokumen NIB bagi pelaku usaha olahan pangan khas Sawahlunto membuka jalan kemitraan ritel dan minimarket modern.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Sebagai wujud komitmen penguatan legalitas dan standardisasi produk lokal, Diskoperindag Kota Sawahlunto menyerahkan sertifikat Halal resmi dari Badan Penyelenggara Jaminan Produk Halal (BPJPH) Kementerian Agama beserta dokumen Nomor Induk Berusaha (NIB) kepada 45 pelaku IKM olahan pangan daerah.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Produk yang tersertifikasi meliputi aneka keripik ubi, olahan rendang belut sawah, dendeng pucuk ubi, kopi robusta lokal Sawahlunto, hingga kue kering tradisional. Seluruh biaya pendampingan auditor halal dan proses administrasi digital difasilitasi gratis melalui Klinik UMKM Diskoperindag.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Dengan mengantongi sertifikat Halal dan NIB, produk-produk lokal Sawahlunto kini memiliki kredibilitas tinggi untuk menembus jaringan ritel modern, toko oleh-oleh bandara, dan etalase e-commerce nasional," jelas petugas pendamping Klinik UMKM.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Para pelaku usaha menyambut gembira kemudahan perizinan ini dan optimistis omzet usaha mereka akan meningkat berkat kepercayaan konsumen yang semakin mantap.
      </p>
    `
  },
  {
    id: 8,
    title: 'Wali Kota Sawahlunto Apresiasi Peran Diskoperindag Dorong Transformasi Digital dan Pemasaran Berkelanjutan UMKM',
    category: 'UMKM & IKM',
    date: 'Rabu, 1 Juli 2026',
    author: 'Humas Pemko & Diskoperindag',
    readTime: '4 menit baca',
    image: 'assets/hero-koperindag.jpg',
    excerpt: 'Pemanfaatan platform pemasaran digital terintegrasi dan onboarding e-katalog lokal diapresiasi sebagai terobosan nyata dalam memperluas pasar kriya dan kuliner Sawahlunto.',
    content: `
      <p class="lead font-medium text-slate-800 leading-relaxed mb-4">
        Wali Kota Sawahlunto, Bapak Riyanda Putra, menyampaikan apresiasi setinggi-tingginya kepada jajaran Dinas Koperasi, Usaha Kecil Menengah, Perindustrian, dan Perdagangan Kota Sawahlunto atas dedikasinya dalam mendampingi pelaku usaha bertransformasi ke era digital.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Dalam kunjungan kerja ke Galeri Sentra Songket Silungkang, Wali Kota meninjau langsung pelatihan fotografi produk kriya dan optimalisasi etalase belanja digital (e-katalog lokal Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah). Terobosan ini memungkinkan instansi pemerintah daerah membeli suvenir, seragam kerja songket, dan konsumsi rapat langsung dari UMKM binaan Diskoperindag.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        "Ekonomi Sawahlunto harus ditopang oleh masyarakatnya sendiri. Dengan belanja produk lokal melalui sistem yang transparan dan akuntabel, perputaran uang tetap berada di kota kita dan menghidupi para perajin serta petani Sawahlunto," tutur Wali Kota.
      </p>
      <p class="text-slate-700 leading-relaxed">
        Diskoperindag terus membuka pintu konsultasi setiap hari kerja di kantor dinas Kolok Mudik bagi setiap warga Kota Sawahlunto yang ingin merintis atau mengembangkan skala usahanya.
      </p>
    `
  }
];

// Dokumen Publik Unduhan Resmi
const publicDocuments = [
  {
    id: 'renstra-2025-2030',
    title: 'Rencana Strategis (Renstra) Diskoperindag Kota Sawahlunto 2025 - 2030',
    category: 'Rencana Strategis',
    size: '3.8 MB',
    date: 'Januari 2026',
    fileType: 'PDF'
  },
  {
    id: 'lakip-2025',
    title: 'Laporan Kinerja Instansi Pemerintah (LAKIP) Diskoperindag Tahun 2025',
    category: 'Akuntabilitas Kinerja',
    size: '2.4 MB',
    date: 'Maret 2026',
    fileType: 'PDF'
  },
  {
    id: 'form-permohonan-tera',
    title: 'Formulir Pendaftaran Uji Tera dan Tera Ulang Alat UTTP',
    category: 'Formulir Layanan',
    size: '480 KB',
    date: 'Mei 2026',
    fileType: 'PDF'
  },
  {
    id: 'panduan-halal-nib',
    title: 'Buku Panduan Pengurusan NIB OSS RBA dan Sertifikasi Halal UMKM',
    category: 'Panduan Pelaku Usaha',
    size: '1.9 MB',
    date: 'Juni 2026',
    fileType: 'PDF'
  },
  {
    id: 'sop-operasional-pasar',
    title: 'Standar Operasional Prosedur (SOP) Ketertiban dan Jadwal 4 Pasar Tradisional',
    category: 'Regulasi Pasar',
    size: '1.2 MB',
    date: 'Juli 2026',
    fileType: 'PDF'
  },
  {
    id: 'petunjuk-rat-koperasi',
    title: 'Pedoman Penyelenggaraan dan Standar Pelaporan RAT Koperasi Daerah',
    category: 'Pedoman Koperasi',
    size: '1.5 MB',
    date: 'Agustus 2026',
    fileType: 'PDF'
  }
];

// Export / Attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    institutionalInfo,
    bapokPrices,
    traditionalMarkets,
    publicServices,
    newsArticles,
    publicDocuments
  };
} else {
  window.DiskoperindagData = {
    institutionalInfo,
    bapokPrices,
    traditionalMarkets,
    publicServices,
    newsArticles,
    publicDocuments
  };
}
