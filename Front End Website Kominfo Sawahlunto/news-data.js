// Data Berita Terpadu Diskominfo Kota Sawahlunto
// Zero emojis, full journalistic articles with captions and tags
const newsArticles = [
  {
    id: 1,
    title: 'Pemko Sawahlunto Berikan Dukungan Penuh Untuk Persiapan Kontingen Porprov 2026',
    category: 'Olahraga',
    date: 'Selasa, 25 Agustus 2026',
    dateIso: '2026-08-25',
    author: 'Tim Liputan Diskominfo Sawahlunto',
    readTime: '4 menit baca',
    featured: true,
    image: 'assets/hero.jpg',
    imageCaption: 'Pemerintah Kota Sawahlunto berkomitmen memberikan fasilitas pemusatan latihan dan sarana olahraga terbaik bagi para atlet.',
    lead: 'Pemerintah Kota Sawahlunto memastikan komitmen penuh dalam menyokong kebutuhan seluruh atlet dan pelatih kontingen Kota Sawahlunto menjelang perhelatan akbar Pekan Olahraga Provinsi (Porprov) Sumatera Barat 2026.',
    tags: ['Sawahlunto', 'Porprov 2026', 'KONI', 'Olahraga Daerah', 'Prestasi Atlet'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Pemerintah Kota Sawahlunto memastikan komitmen penuh dalam menyokong kebutuhan seluruh atlet dan pelatih kontingen Kota Sawahlunto menjelang perhelatan akbar Pekan Olahraga Provinsi (Porprov) Sumatera Barat 2026.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Dukungan Anggaran dan Jaminan Kebugaran Atlet
      </h3>
      <p>
        Dukungan yang dialokasikan pemerintah daerah tidak hanya terbatas pada anggaran pembinaan dan perlengkapan tanding, melainkan menyentuh aspek vital seperti asupan gizi atlet, tes kebugaran fisik berkala dari tim medis, serta jaminan perlindungan BPJS Ketenagakerjaan selama masa pemusatan latihan daerah (Pelatda).
      </p>
      <p>
        Langkah ini dipandang penting guna memberikan rasa aman dan ketenangan bagi para atlet agar dapat mengerahkan seluruh kemampuan terbaiknya dalam sesi latihan harian.
      </p>

      <blockquote class="border-l-4 border-[#181f4d] bg-black/5 rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Kami menaruh harapan besar dan kepercayaan utuh kepada putra-putri terbaik Sawahlunto. Pemerintah kota berdiri kokoh di belakang kalian, memberikan segenap dukungan moral dan material demi mengibarkan panji kejayaan Sawahlunto di kancah Porprov 2026."
        <span class="block not-italic font-semibold text-sm text-[#181f4d] mt-3">- Pernyataan Resmi Pemerintah Kota Sawahlunto</span>
      </blockquote>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Fokus pada Cabang Olahraga Unggulan
      </h3>
      <p>
        Berdasarkan hasil pemetaan Komite Olahraga Nasional Indonesia (KONI) Kota Sawahlunto, terdapat sejumlah cabang olahraga unggulan yang menjadi lumbung medali potensial. Di antaranya adalah cabang atletik, bulutangkis, panjat tebing, senam, dan pencak silat.
      </p>
      <p>
        Ketua KONI Sawahlunto menyampaikan apresiasi tinggi atas kolaborasi intensif bersama Diskominfo dan Dinas Pariwisata, Pemuda, dan Olahraga dalam mempublikasikan perkembangan latihan atlet ke masyarakat luas guna memantik gelombang dukungan publik.
      </p>
      <p>
        Pemerintah Kota mengajak seluruh elemen warga Sawahlunto, baik yang berada di ranah maupun di perantauan, untuk senantiasa menyatukan doa dan semangat agar kontingen kebanggaan daerah mampu mengukir sejarah prestasi gemilang pada Porprov 2026 mendatang.
      </p>
    `
  },
  {
    id: 2,
    title: 'PS Gas Sawahlunto Raih Kemenangan Perdana di Piala Soeratin U-15 Sumatera Barat 2026',
    category: 'Olahraga',
    date: 'Senin, 24 Agustus 2026',
    dateIso: '2026-08-24',
    author: 'Redaksi Kominfo Sawahlunto',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-sawahlunto.jpg',
    imageCaption: 'Stadion Ombilin menjadi saksi perjuangan keras punggawa muda PS Gas Sawahlunto menundukkan lawan di partai pembuka.',
    lead: 'Kesebelasan muda PS Gas Sawahlunto mengawali kiprah pada putaran grup Piala Soeratin U-15 tingkat Sumatera Barat 2026 dengan hasil memuaskan setelah menundukkan tamunya dengan skor meyakinkan 2-0 di Stadion Ombilin.',
    tags: ['PS Gas', 'Piala Soeratin', 'Sepak Bola', 'Sawahlunto', 'Stadion Ombilin'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Kesebelasan muda PS Gas Sawahlunto mengawali kiprah pada putaran grup Piala Soeratin U-15 tingkat Sumatera Barat 2026 dengan hasil memuaskan setelah menundukkan tamunya dengan skor meyakinkan 2-0 di Stadion Ombilin.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Dominasi Permainan dan Skema Gol Taktis
      </h3>
      <p>
        Bermain di hadapan ratusan suporter yang memadati tribun Stadion Ombilin, tim asuhan pelatih lokal tersebut langsung mengambil inisiatif serangan sejak sepak mula. Gol pertama tercipta pada menit ke-22 melalui skema serangan balik cepat yang diselesaikan dengan sontekan dingin ke sudut tiang jauh.
      </p>
      <p>
        Memasuki paruh kedua, PS Gas tidak menurunkan tempo permainan. Keunggulan digandakan pada menit ke-68 lewat sundulan terarah memanfaatkan umpan silang akurat dari sektor sayap kiri.
      </p>

      <blockquote class="border-l-4 border-[#181f4d] bg-black/5 rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Kemenangan ini adalah buah dari kerja keras, disiplin latihan, dan mental pantang menyerah anak-anak di lapangan. Kami tidak boleh lekas puas karena laga berikutnya menuntut konsentrasi yang lebih tinggi."
        <span class="block not-italic font-semibold text-sm text-[#181f4d] mt-3">- Pelatih Kepala PS Gas Sawahlunto U-15</span>
      </blockquote>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Dukungan Penuh Pemda dan Masyarakat
      </h3>
      <p>
        Jajaran Pemerintah Kota Sawahlunto yang turut menyaksikan pertandingan memberikan apresiasi atas sportivitas dan daya juang tim muda ini. Pembinaan usia dini sepak bola di Sawahlunto kini menunjukkan tren kebangkitan positif dengan hadirnya kompetisi kelompok umur yang konsisten.
      </p>
      <p>
        Dengan raihan tiga poin perdana ini, PS Gas Sawahlunto memuncaki klasemen sementara dan siap melakoni laga tandang pada akhir pekan depan.
      </p>
    `
  },
  {
    id: 3,
    title: 'PGRI Kecamatan Silungkang Gelar Berbagai Lomba Dalam Rangka HUT ke 81 Kemerdekaan RI',
    category: 'Pendidikan & Budaya',
    date: 'Senin, 24 Agustus 2026',
    dateIso: '2026-08-24',
    author: 'Koresponden Silungkang',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero.jpg',
    imageCaption: 'Semarak perayaan HUT Kemerdekaan RI ke-81 di Kecamatan Silungkang diwarnai beragam festival seni dan edukasi kebangsaan.',
    lead: 'Ratusan guru dan pelajar dari jenjang pendidikan usia dini hingga menengah atas memadati area pusat kebudayaan Silungkang dalam rangka memeriahkan rangkaian festival HUT ke-81 Kemerdekaan RI yang digelar PGRI Silungkang.',
    tags: ['Silungkang', 'PGRI', 'HUT RI 81', 'Pendidikan', 'Kebudayaan', 'Tenun Songket'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Ratusan guru dan pelajar dari jenjang pendidikan usia dini hingga menengah atas memadati area pusat kebudayaan Silungkang dalam rangka memeriahkan rangkaian festival HUT ke-81 Kemerdekaan RI yang digelar PGRI Silungkang.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Lomba Inovasi Pembelajaran dan Seni Budaya Tradisional
      </h3>
      <p>
        Rangkaian perhelatan tahun ini dirancang variatif. Tidak hanya menggelar permainan ketangkasan tradisional, PGRI Cabang Silungkang juga memprakarsai lomba pembuatan media pembelajaran interaktif digital antarguru guna mendorong digitalisasi kurikulum di sekolah.
      </p>
      <p>
        Bagi peserta didik, diadakan festival paduan suara lagu nasional, lomba pidato kebangsaan, serta peragaan busana tenun songket khas Silungkang yang menjadi warisan kebanggaan budaya Minangkabau di mata dunia.
      </p>

      <blockquote class="border-l-4 border-[#181f4d] bg-black/5 rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Semangat kemerdekaan harus diterjemahkan ke dalam peningkatan mutu pendidikan dan kecintaan pada identitas budaya lokal. Kita ingin anak-anak Sawahlunto berwawasan global namun tetap berakar kuat pada nilai tradisi."
        <span class="block not-italic font-semibold text-sm text-[#181f4d] mt-3">- Ketua PGRI Cabang Silungkang</span>
      </blockquote>

      <p>
        Acara perayaan dipuncaki dengan pawai obor dan karnaval budaya yang berlangsung meriah di sepanjang jalan protokol Silungkang dengan pengawalan tertib dari aparat kepolisian dan perhubungan daerah.
      </p>
    `
  },
  {
    id: 4,
    title: 'Diskominfo Sawahlunto Perkuat Penerapan SPBE Menuju Ekosistem Smart City Terintegrasi',
    category: 'Teknologi & SPBE',
    date: 'Jumat, 21 Agustus 2026',
    dateIso: '2026-08-21',
    author: 'Bidang E-Government Diskominfo',
    readTime: '4 menit baca',
    featured: true,
    image: 'assets/hero-sawahlunto.jpg',
    imageCaption: 'Rapat koordinasi teknis percepatan integrasi aplikasi layanan publik SPBE di lingkungan Pemerintah Kota Sawahlunto.',
    lead: 'Dinas Komunikasi dan Informatika Kota Sawahlunto memimpin percepatan transformasi tata kelola pemerintahan digital melalui penguatan Sistem Pemerintahan Berbasis Elektronik (SPBE) terpadu.',
    tags: ['SPBE', 'Smart City', 'E-Government', 'Diskominfo', 'Sawahlunto Digital'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Dinas Komunikasi dan Informatika Kota Sawahlunto memimpin percepatan transformasi tata kelola pemerintahan digital melalui penguatan Sistem Pemerintahan Berbasis Elektronik (SPBE) terpadu.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Konsolidasi Pusat Data dan Aplikasi Layanan Satu Pintu
      </h3>
      <p>
        Melalui bimbingan teknis berkala yang diikuti oleh seluruh Organisasi Perangkat Daerah (OPD), Diskominfo menetapkan arsitektur data tunggal guna mengeliminasi tumpang tindih aplikasi sektoral yang selama ini tersebar.
      </p>
      <p>
        Dengan integrasi ini, masyarakat Kota Sawahlunto dapat mengakses perizinan usaha, layanan kependudukan, pendaftaran rumah sakit, hingga pelaporan aduan warga hanya melalui satu portal layanan terpadu (Single Sign-On).
      </p>

      <blockquote class="border-l-4 border-[#181f4d] bg-black/5 rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Digitalisasi bukan sekadar memindahkan dokumen kertas ke komputer, melainkan menyederhanakan proses bisnis agar pelayanan kepada rakyat menjadi jauh lebih cepat, hemat, dan transparan."
        <span class="block not-italic font-semibold text-sm text-[#181f4d] mt-3">- Kepala Diskominfo Kota Sawahlunto</span>
      </blockquote>

      <p>
        Evaluasi indeks SPBE Kota Sawahlunto pada tahun 2026 terus menunjukkan peningkatan signifikan dan berhasil mempertahankan predikat 'Sangat Baik' dalam skala evaluasi nasional.
      </p>
    `
  },
  {
    id: 5,
    title: 'Akselerasi Pengentasan Wilayah Blankspot Internet di Desa & Kawasan Perbukitan Sawahlunto',
    category: 'Layanan Publik',
    date: 'Rabu, 19 Agustus 2026',
    dateIso: '2026-08-19',
    author: 'Bidang Infrastruktur TIK Diskominfo',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero.jpg',
    imageCaption: 'Pemasangan pemancar telekomunikasi kompak di desa perbukitan demi memastikan kesetaraan akses digital.',
    lead: 'Diskominfo Kota Sawahlunto berkolaborasi dengan operator seluler nasional memperluas jangkauan sinyal internet ke titik-titik pemukiman pelosok nagari.',
    tags: ['Blankspot', 'Infrastruktur TIK', 'Internet Desa', 'Layanan Publik', 'Telekomunikasi'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Diskominfo Kota Sawahlunto berkolaborasi dengan operator seluler nasional memperluas jangkauan sinyal internet ke titik-titik pemukiman pelosok nagari.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Pemerataan Hak Akses Informasi bagi Seluruh Warga
      </h3>
      <p>
        Kondisi geografis Kota Sawahlunto yang didominasi bentang perbukitan dan lembah selama ini menyisakan kantong-kantong blankspot di beberapa jorong. Melalui program pemerataan infrastruktur telekomunikasi tahun 2026, sejumlah menara pemancar kompak dan kabel serat optik telah berhasil dioperasikan.
      </p>
      <p>
        Selain pemancar sinyal seluler, kantor-kantor kelurahan dan balai desa kini dipasangi fasilitas Wi-Fi publik berkecepatan tinggi yang dapat dimanfaatkan pelajar dan pelaku UMKM secara gratis.
      </p>
    `
  },
  {
    id: 6,
    title: 'Pemerintah Kota Sawahlunto Luncurkan Pembaruan Portal Satu Data & PPID Berbasis AI',
    category: 'Pemerintahan',
    date: 'Senin, 17 Agustus 2026',
    dateIso: '2026-08-17',
    author: 'Bidang Statistik & Informasi Publik',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-sawahlunto.jpg',
    imageCaption: 'Peluncuran versi mutakhir portal keterbukaan informasi dan basis data sektoral Kota Sawahlunto.',
    lead: 'Portal Satu Data Sawahlunto kini hadir dengan mesin pencarian pintar untuk mempermudah masyarakat mengakses data statistik daerah secara akurat.',
    tags: ['Satu Data', 'PPID', 'Transparansi', 'Keterbukaan Informasi', 'Kecerdasan Buatan'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Portal Satu Data Sawahlunto kini hadir dengan mesin pencarian pintar untuk mempermudah masyarakat mengakses data statistik daerah secara akurat.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Transparansi dan Keterbukaan Informasi Publik
      </h3>
      <p>
        Sebagai wujud kepatuhan terhadap Undang-Undang Keterbukaan Informasi Publik, Diskominfo Sawahlunto memodernisasi portal PPID dengan menambahkan asisten pencarian dokumen berbasis kecerdasan buatan. Mahasiswa, peneliti, dan warga kini dapat mengunduh dokumen regulasi daerah dan laporan keuangan dengan cepat.
      </p>
    `
  },
  {
    id: 7,
    title: 'Digitalisasi Arsip Warisan Dunia Ombilin UNESCO Sawahlunto Masuki Tahap Virtual Reality 3D',
    category: 'Pendidikan & Budaya',
    date: 'Kamis, 13 Agustus 2026',
    dateIso: '2026-08-13',
    author: 'Tim Budaya & IT Sawahlunto',
    readTime: '4 menit baca',
    featured: false,
    image: 'assets/hero.jpg',
    imageCaption: 'Dokumentasi fotogrametri 3D situs cagar budaya pertambangan Ombilin UNESCO Kota Sawahlunto.',
    lead: 'Pengalaman menjelajah warisan tambang batubara Ombilin kini dapat dinikmati masyarakat dunia melalui teknologi tur virtual tiga dimensi interaktif.',
    tags: ['UNESCO', 'Warisan Dunia', 'WTBOS', 'Virtual Reality', 'Pariwisata Heritage'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Pengalaman menjelajah warisan tambang batubara Ombilin kini dapat dinikmati masyarakat dunia melalui teknologi tur virtual tiga dimensi interaktif.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Pelestarian Sejarah Berbasis Teknologi Modern
      </h3>
      <p>
        Situs-situs utama seperti Lubang Tambang Mbah Soero, Museum Kereta Api, dan Kawasan Silo Batubara telah dipetakan menggunakan teknologi fotogrametri digital resolusi tinggi. Proyek inovatif ini menjadi sarana diplomasi budaya dan edukasi sejarah maritim perkeretaapian batubara Indonesia di forum global.
      </p>
    `
  },
  {
    id: 8,
    title: 'Diskominfo Bentuk Tim Tanggap Insiden Siber (CSIRT) Sawahlunto Untuk Keamanan Informasi',
    category: 'Teknologi & SPBE',
    date: 'Senin, 10 Agustus 2026',
    dateIso: '2026-08-10',
    author: 'Sawahlunto-CSIRT',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-sawahlunto.jpg',
    imageCaption: 'Pengukuhan tim tanggap darurat siber Sawahlunto-CSIRT bekerjasama dengan BSSN RI.',
    lead: 'Pemerintah Kota Sawahlunto resmi meluncurkan Sawahlunto-CSIRT untuk menjaga kedaulatan data dan keamanan sistem informasi publik.',
    tags: ['CSIRT', 'Keamanan Siber', 'BSSN', 'Diskominfo', 'Ketahanan Digital'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Pemerintah Kota Sawahlunto resmi meluncurkan Sawahlunto-CSIRT untuk menjaga kedaulatan data dan keamanan sistem informasi publik.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-black mt-10 mb-4">
        Perlindungan Data Publik 24 Jam Nonstop
      </h3>
      <p>
        Bekerjasama erat dengan Badan Siber dan Sandi Negara (BSSN), tim Sawahlunto-CSIRT mengemban tugas mendeteksi, mencegah, dan menanggulangi insiden peretasan maupun kebocoran data di seluruh server pemerintah kota.
      </p>
    `
  }
];

// Kategori Berita
const newsCategories = [
  'Semua',
  'Pemerintahan',
  'Teknologi & SPBE',
  'Olahraga',
  'Pendidikan & Budaya',
  'Layanan Publik'
];

// Dokumen Unduhan Publik Diskominfo Sawahlunto
const unduhFilesData = [
  { name: 'Rencana Strategis (Renstra) Diskominfo Sawahlunto 2021-2026', size: '2.4 MB', type: 'PDF' },
  { name: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) 2025', size: '3.1 MB', type: 'PDF' },
  { name: 'Buku Saku Masterplan Sawahlunto Smart City Terintegrasi', size: '5.8 MB', type: 'PDF' },
  { name: 'Daftar Informasi Publik (DIP) PPID Kota Sawahlunto 2026', size: '1.2 MB', type: 'PDF' },
  { name: 'Peraturan Walikota Tentang Tata Kelola SPBE Kota Sawahlunto', size: '1.9 MB', type: 'PDF' },
  { name: 'Standar Operasional Prosedur (SOP) Layanan Jaringan Internet & TIK', size: '850 KB', type: 'PDF' },
  { name: 'Formulir Permohonan Informasi Publik Resmi PPID Sawahlunto', size: '420 KB', type: 'PDF' }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { newsArticles, newsCategories, unduhFilesData };
}
