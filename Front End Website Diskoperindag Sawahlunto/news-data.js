// Data Terpadu Berita, Komoditas Pangan, dan Dokumen Resmi
// Dinas Koperasi, Usaha Kecil Menengah, Perindustrian Dan Perdagangan Kota Sawahlunto
// Zero emojis, formal government terminology

const newsArticles = [
  {
    id: 1,
    title: 'Sawahlunto Tuntaskan Penilaian Adipura Tahap II 2025 di Tengah Guyuran Hujan',
    category: 'Kebersihan & Pasar',
    date: 'Jumat, 21 Februari 2025',
    dateIso: '2025-02-21',
    author: 'Tim Publikasi Diskoperindag',
    readTime: '4 menit baca',
    featured: true,
    image: 'assets/hero-koperindag.jpg',
    imageCaption: 'Penataan kebersihan dan ketertiban los pasar tradisional menjadi salah satu titik pantau utama Adipura di Kota Sawahlunto.',
    lead: 'Kota Sawahlunto telah menuntaskan seluruh rangkaian penilaian Adipura Tahap II tahun 2025 secara komprehensif. Penilaian yang mencakup kawasan pasar rakyat dan sentra perdagangan berjalan tertib dan lancar.',
    tags: ['Sawahlunto', 'Adipura', 'Pasar Tradisional', 'Kebersihan Lingkungan', 'Diskoperindag'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Kota Sawahlunto telah menuntaskan seluruh rangkaian penilaian Adipura Tahap II tahun 2025 secara komprehensif. Penilaian yang mencakup kawasan pasar rakyat dan sentra perdagangan berjalan tertib dan lancar.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Titik Pantau Pasar Sawahlunto dan Terminal
      </h3>
      <p>
        Tim penilai independen dari Kementerian Lingkungan Hidup dan Kehutanan bersama Dinas Lingkungan Hidup Provinsi Sumatera Barat melakukan peninjauan intensif di beberapa titik krusial binaan Diskoperindag, khususnya Pasar Remaja Sawahlunto, Pasar Silungkang, dan area pertokoan heritage.
      </p>
      <p>
        Fokus utama penilaian meliputi pengelolaan sampah organik pasar, ketersediaan saluran drainase tertutup, higienitas los basah daging dan ikan, serta keterlibatan aktif asosiasi pedagang dalam memelihara kebersihan lingkungan perniagaan.
      </p>

      <blockquote class="border-l-4 border-[#181f4d] bg-black/5 rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Pasar yang bersih, sehat, dan tertib tidak hanya modal utama dalam penilaian Adipura, namun merupakan hak dasar para pedagang dan masyarakat konsumen agar nyaman bertransaksi setiap hari."
        <span class="block not-italic font-semibold text-sm text-[#181f4d] mt-3">- Kepala Dinas Koperindag Kota Sawahlunto</span>
      </blockquote>

      <p>
        Meski sempat diguyur hujan dengan intensitas cukup tinggi, koordinasi antardinas terkait berhasil menjaga kondisi pasar tetap bersih dan bebas genangan air, mencerminkan ketangguhan tata kelola perkotaan Sawahlunto.
      </p>
    `
  },
  {
    id: 2,
    title: 'Dinas Koperindag Menerima Kunjungan Edukasi Kewirausahaan Siswa SMA Negeri 3 Sawahlunto',
    category: 'Edukasi & IKM',
    date: 'Jumat, 27 September 2024',
    dateIso: '2024-09-27',
    author: 'Bidang Perindustrian Diskoperindag',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-koperindag.jpg',
    imageCaption: 'Siswa-siswi SMA Negeri 3 Sawahlunto berdiskusi mengenai rantai pasok industri tenun songket dan legalitas usaha muda.',
    lead: 'Dinas Koperindag Kota Sawahlunto menerima rombongan peserta didik dan guru pembimbing dari SMA Negeri 3 Sawahlunto dalam implementasi Projek Penguatan Profil Pelajar Pancasila (P5) bertema kewirausahaan lokal.',
    tags: ['SMAN 3 Sawahlunto', 'P5', 'Kewirausahaan', 'Tenun Songket', 'Generasi Muda'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Dinas Koperindag Kota Sawahlunto menerima rombongan peserta didik dan guru pembimbing dari SMA Negeri 3 Sawahlunto dalam implementasi Projek Penguatan Profil Pelajar Pancasila (P5) bertema kewirausahaan lokal.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Pengenalan Potensi Tenun Silungkang dan IKM Kreatif
      </h3>
      <p>
        Dalam sesi pemaparan di aula kantor dinas, para siswa dibekali materi seputar rantai pasok tenun songket Silungkang, pemanfaatan limbah batubara untuk batik arang, serta tahapan memperoleh Nomor Induk Berusaha (NIB) bagi pelaku usaha rintisan.
      </p>
      <p>
        Para siswa juga diajak menyaksikan proses pengujian mutu bahan baku tenun serta strategi pemasaran digital produk lokal di era e-commerce modern.
      </p>

      <blockquote class="border-l-4 border-[#181f4d] bg-black/5 rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Kami ingin memantik kesadaran generasi muda bahwa kekayaan tradisi Sawahlunto memiliki nilai ekonomi tinggi bila dipadukan dengan kreativitas dan teknologi."
        <span class="block not-italic font-semibold text-sm text-[#181f4d] mt-3">- Kepala Bidang Perindustrian Diskoperindag</span>
      </blockquote>
    `
  },
  {
    id: 3,
    title: 'Monitoring BPSMB Dinas Perindag Provinsi Sumatera Barat dan Uji Standar Mutu Komoditas',
    category: 'Standardisasi & Mutu',
    date: 'Rabu, 11 September 2024',
    dateIso: '2024-09-11',
    author: 'Seksi Pengawasan Mutu Barang',
    readTime: '4 menit baca',
    featured: false,
    image: 'assets/hero-ombilin.jpg',
    imageCaption: 'Pengambilan sampel komoditas pangan olahan lokal oleh tim BPSMB Provinsi Sumatera Barat di sentra IKM Sawahlunto.',
    lead: 'Kepala Dinas Koperindag bersama Kabid Perindustrian dan Perdagangan Kota Sawahlunto mendampingi tim dari Badan Pengujian dan Sertifikasi Mutu Barang (BPSMB) Dinas Perindag Provinsi Sumatera Barat melakukan sampling berkala.',
    tags: ['BPSMB', 'Standar Mutu', 'SNI', 'Perlindungan Konsumen', 'IKM Sawahlunto'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Kepala Dinas Koperindag bersama Kabid Perindustrian dan Perdagangan Kota Sawahlunto mendampingi tim dari Badan Pengujian dan Sertifikasi Mutu Barang (BPSMB) Dinas Perindag Provinsi Sumatera Barat melakukan sampling berkala.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Jaminan Keamanan Pangan dan Daya Saing Produk
      </h3>
      <p>
        Kegiatan ini meliputi inspeksi teknis sarana produksi industri kecil menengah (IKM) pangan olahan, pengujian kalibrasi timbangan tera pedagang pasar, dan pengambilan sampel produk guna verifikasi kesesuaian Standar Nasional Indonesia (SNI).
      </p>
      <p>
        Hasil uji laboratorium BPSMB memberikan kepastian hukum bagi konsumen sekaligus membuka peluang bagi produk olahan khas Sawahlunto untuk menembus jaringan ritel modern lintas provinsi.
      </p>
    `
  },
  {
    id: 4,
    title: 'Kepala Dinas Koperindag dan OPD Terkait Survey Lokasi Relokasi Sementara Pedagang Kawasan KONI',
    category: 'Perdagangan & Pasar',
    date: 'Senin, 26 Agustus 2024',
    dateIso: '2024-08-26',
    author: 'Bidang Pengelolaan Pasar',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-koperindag.jpg',
    imageCaption: 'Peninjauan lapangan bersama instansi teknis untuk memastikan kelayakan fasilitas relokasi sementara para pelaku usaha mikro.',
    lead: 'Kepala Dinas Koperindag bersama OPD teknis terkait melakukan survei lapangan mendalam untuk memetakan penempatan sementara para pedagang di sekitar kawasan sekretariat KONI Sawahlunto.',
    tags: ['Pasar Tradisional', 'Relokasi Pedagang', 'Penataan Kota', 'KONI', 'UMKM'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Kepala Dinas Koperindag bersama OPD teknis terkait melakukan survei lapangan mendalam untuk memetakan penempatan sementara para pedagang di sekitar kawasan sekretariat KONI Sawahlunto.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Penyediaan Fasilitas Usaha yang Layak dan Nyaman
      </h3>
      <p>
        Penataan ini dilaksanakan sehubungan dengan persiapan renovasi infrastruktur olahraga daerah. Pemerintah kota menjamin bahwa titik penampungan sementara memiliki akses listrik yang memadai, sanitasi air bersih, serta mudah dijangkau oleh pelanggan setia pedagang.
      </p>
      <p>
        Dialog terbuka antara jajaran dinas dan perwakilan pedagang digelar secara musyawarah guna meminimalisasi potensi gangguan omzet harian selama proses revitalisasi fisik berlangsung.
      </p>
    `
  },
  {
    id: 5,
    title: 'Kunjungan Pj. Walikota Sawahlunto Bersama Kadis Koperindag Tinjau Penataan Pedagang Terminal',
    category: 'Perdagangan & Pasar',
    date: 'Rabu, 12 Juni 2024',
    dateIso: '2024-06-12',
    author: 'Tim Liputan Daerah Sawahlunto',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-koperindag.jpg',
    imageCaption: 'Pj. Walikota Sawahlunto berdialog hangat dengan pedagang kuliner dan UMKM di koridor terminal.',
    lead: 'Penjabat Walikota Sawahlunto bersama Kepala Dinas Koperindag meninjau langsung kesiapan area sentra kuliner dan tata letak pedagang kaki lima (PKL) di kawasan Terminal Sawahlunto.',
    tags: ['Pj Walikota', 'Terminal Sawahlunto', 'PKL', 'Ekonomi Kerakyatan', 'Koperindag'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Penjabat Walikota Sawahlunto bersama Kepala Dinas Koperindag meninjau langsung kesiapan area sentra kuliner dan tata letak pedagang kaki lima (PKL) di kawasan Terminal Sawahlunto.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Mendorong Ketertiban Tanpa Mengorbankan Nafkah Warga
      </h3>
      <p>
        Pemerintah Kota Sawahlunto mengedepankan pendekatan humanis dalam merapikan tata ruang pusat transportasi. Kawasan terminal ditata ulang menjadi zona sentra kuliner malam yang representatif, bersih, dan terang benderang.
      </p>
      <p>
        Pj. Walikota menekankan pentingnya sinergi antarpedagang dalam menjaga kebersihan lingkungan bersama agar wisatawan yang berkunjung ke kota cagar budaya Sawahlunto merasa betah menikmati ragam kuliner khas lokal.
      </p>
    `
  },
  {
    id: 6,
    title: 'Fasilitasi Sertifikasi Halal Gratis bagi Ratusan Pelaku Usaha Mikro dan Kuliner Sawahlunto',
    category: 'Koperasi & UMKM',
    date: 'Selasa, 15 Juli 2025',
    dateIso: '2025-07-15',
    author: 'Bidang Koperasi dan UKM',
    readTime: '4 menit baca',
    featured: false,
    image: 'assets/hero-koperindag.jpg',
    imageCaption: 'Penyerahan sertifikat halal resmi BPJPH kepada para pemilik usaha mikro olahan pangan Sawahlunto.',
    lead: 'Guna meningkatkan kepercayaan konsumen dan daya saing pasar, Diskoperindag Sawahlunto memfasilitasi sertifikasi halal skema self-declare secara gratis bagi ratusan pelaku UMKM.',
    tags: ['Sertifikasi Halal', 'UMKM', 'BPJPH', 'Kuliner Sawahlunto', 'Ekonomi Syariah'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Guna meningkatkan kepercayaan konsumen dan daya saing pasar, Diskoperindag Sawahlunto memfasilitasi sertifikasi halal skema self-declare secara gratis bagi ratusan pelaku UMKM.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Pendampingan Administrasi dan Pelatihan Penyelia Halal
      </h3>
      <p>
        Program akselerasi ini melibatkan Pendamping Proses Produk Halal (P3H) yang terjun langsung ke dapur produksi para pelaku usaha kecil. Komoditas yang difasilitasi meliputi aneka keripik ubi, olahan dendeng batokok, kue tradisional, serta aneka minuman herbal racikan lokal.
      </p>
      <p>
        Dengan label halal resmi, produk UMKM Sawahlunto semakin mudah dipasarkan ke toko oleh-oleh cagar budaya dan jaringan supermarket regional Sumatera Barat.
      </p>
    `
  },
  {
    id: 7,
    title: 'Pengembangan Sentra Tenun Songket Silungkang Melalui Perlindungan Indikasi Geografis',
    category: 'Perindustrian & IKM',
    date: 'Senin, 02 Juni 2025',
    dateIso: '2025-06-02',
    author: 'Bidang Perindustrian',
    readTime: '4 menit baca',
    featured: true,
    image: 'assets/hero-koperindag.jpg',
    imageCaption: 'Keindahan motif tenun songket Silungkang yang dipertahankan turun temurun oleh para pengrajin wanita Sawahlunto.',
    lead: 'Diskoperindag Sawahlunto terus mengawal perlindungan hak kekayaan intelektual Indikasi Geografis (IG) bagi Tenun Songket Silungkang demi melindungi orisinalitas motif dan marwah pengrajin daerah.',
    tags: ['Tenun Songket', 'Silungkang', 'Indikasi Geografis', 'Kemenkumham', 'Warisan Budaya'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Diskoperindag Sawahlunto terus mengawal perlindungan hak kekayaan intelektual Indikasi Geografis (IG) bagi Tenun Songket Silungkang demi melindungi orisinalitas motif dan marwah pengrajin daerah.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Warisan Bernilai Ekonomi Tinggi Berkelas Internasional
      </h3>
      <p>
        Tenun Silungkang memiliki rekam jejak historis panjang sejak era pra-kemerdekaan dan pernah tampil di pameran dunia di Brussel pada tahun 1910. Diskoperindag secara konsisten memberikan bantuan Alat Tenun Bukan Mesin (ATBM), pewarna ramah lingkungan, serta pelatihan regenerasi penenun muda.
      </p>
      <p>
        Sertifikasi Indikasi Geografis menjadi benteng pelindung dari klaim tiruan produk pabrikan, sekaligus mendongkrak nilai jual kain tenun asli karya ibu-ibu pengrajin di nagari Silungkang.
      </p>
    `
  },
  {
    id: 8,
    title: 'Pantauan Harga Komoditas Pokok Pasar Sawahlunto dan Operasi Pasar Pengendalian Inflasi',
    category: 'Perdagangan & Pasar',
    date: 'Kamis, 15 Mei 2025',
    dateIso: '2025-05-15',
    author: 'Tim Pengendali Inflasi Daerah (TPID)',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-ombilin.jpg',
    imageCaption: 'Petugas melakukan pencatatan harian harga sembako langsung di Pasar Remaja Sawahlunto.',
    lead: 'Laporan harian sistem pemantauan pasar SP2KP menunjukkan stabilitas harga kebutuhan pangan di Kota Sawahlunto terpantau aman dan pasokan terjamin lancar.',
    tags: ['Harga Pasar', 'Inflasi Daerah', 'Sembako', 'Pasar Sawahlunto', 'SP2KP'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Laporan harian sistem pemantauan pasar SP2KP menunjukkan stabilitas harga kebutuhan pangan di Kota Sawahlunto terpantau aman dan pasokan terjamin lancar.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Transparansi Informasi Pasar bagi Warga
      </h3>
      <p>
        Melalui publikasi harga harian yang dapat diakses publik, masyarakat dapat memantau pergerakan harga beras kualitas premium, cabai merah keriting, minyak goreng curah, dan telur ayam ras. Jika terjadi lonjakan harga ekstrem di atas batas toleransi, TPID bersama Diskoperindag segera menggelar Operasi Pasar Murah bekerjasama dengan Perum Bulog.
      </p>
    `
  }
];

// Kategori Berita Diskoperindag
const newsCategories = [
  'Semua',
  'Perdagangan & Pasar',
  'Koperasi & UMKM',
  'Perindustrian & IKM',
  'Standardisasi & Mutu',
  'Edukasi & IKM',
  'Kebersihan & Pasar'
];

// Data Pemantauan Harga Pangan Pasar Sawahlunto (Realistis & Resmi)
const marketPrices = [
  { item: 'Beras Solok Premium', price: 'Rp 16.500', unit: '/ kg', change: 'stabil' },
  { item: 'Cabai Merah Keriting', price: 'Rp 36.000', unit: '/ kg', change: 'turun' },
  { item: 'Bawang Merah Lokal', price: 'Rp 32.000', unit: '/ kg', change: 'stabil' },
  { item: 'Minyak Goreng Minyakita', price: 'Rp 16.000', unit: '/ liter', change: 'stabil' },
  { item: 'Daging Sapi Murni', price: 'Rp 140.000', unit: '/ kg', change: 'stabil' },
  { item: 'Telur Ayam Ras', price: 'Rp 28.000', unit: '/ kg', change: 'stabil' },
  { item: 'Gula Pasir Kristal', price: 'Rp 17.500', unit: '/ kg', change: 'stabil' },
  { item: 'Tepung Terigu Segitiga', price: 'Rp 12.000', unit: '/ kg', change: 'stabil' }
];

// Dokumen Unduhan Publik Diskoperindag Sawahlunto
const unduhFilesData = [
  { name: 'Rencana Strategis (Renstra) Diskoperindag Sawahlunto 2021-2026', size: '2.8 MB', type: 'PDF' },
  { name: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) 2025', size: '3.4 MB', type: 'PDF' },
  { name: 'Panduan Pendaftaran NIB dan Sertifikasi Halal Gratis bagi UMKM', size: '1.6 MB', type: 'PDF' },
  { name: 'Daftar Koperasi Sehat dan Aktif Kota Sawahlunto 2026', size: '1.1 MB', type: 'PDF' },
  { name: 'Standar Pelayanan Pelaksanaan Tera dan Tera Ulang Metrologi Legal', size: '890 KB', type: 'PDF' },
  { name: 'Formulir Permohonan Rekomendasi Surat Keterangan Usaha IKM/UMKM', size: '410 KB', type: 'PDF' }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { newsArticles, newsCategories, marketPrices, unduhFilesData };
}
