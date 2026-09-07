/**
 * DPK Kota Sawahlunto — Dataset Resmi & Khazanah Warta
 * Dinas Perpustakaan dan Kearsipan Kota Sawahlunto
 * STRICT ZERO EMOJIS COMPLIANT
 */

const telemetryData = [
  {
    label: "Indeks Literasi (IPLM)",
    value: "84,62",
    subtext: "Kategori Tinggi (Perpusnas RI)",
    status: "active"
  },
  {
    label: "Koleksi Pustaka Adinegoro",
    value: "38.450+",
    subtext: "Buku Fisik & e-Book Terkatalog",
    status: "active"
  },
  {
    label: "Arsip Statis Ombilin",
    value: "12.800+",
    subtext: "Peta Tambang & Naskah Kuno",
    status: "active"
  },
  {
    label: "Integrasi SRIKANDI",
    value: "100%",
    subtext: "Seluruh OPD Pemko Sawahlunto",
    status: "active"
  }
];

const coreSectors = [
  {
    id: "pustaka-tpbis",
    code: "Pilar 01",
    badge: "Layanan Pustaka",
    title: "Perpustakaan Umum Adinegoro & TPBIS",
    description: "Pusat rujukan literasi dan transformasi perpustakaan berbasis inklusi sosial (TPBIS), menghadirkan pelatihan keterampilan hidup, kelas literasi digital, dan pojok baca anak.",
    metricLabel: "Fasilitas Utama:",
    metricValue: "Gedung Pustaka Adinegoro & Pustaka Keliling"
  },
  {
    id: "kearsipan-srikandi",
    code: "Pilar 02",
    badge: "Kearsipan Dinamis",
    title: "Tata Kelola Kearsipan & Aplikasi SRIKANDI",
    description: "Penerapan Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI) di seluruh OPD, audit kearsipan internal, penataan depo arsip inaktif, dan kepastian arsip terjaga.",
    metricLabel: "Implementasi Sistem:",
    metricValue: "100% OPD Terkoneksi SRIKANDI Nasional"
  },
  {
    id: "preservasi-ombilin",
    code: "Pilar 03",
    badge: "Warisan Budaya",
    title: "Preservasi Arsip Warisan Tambang Ombilin",
    description: "Penyelamatan dan alih media digital peta tambang abad ke-19, naskah kuno Minangkabau, daftar buruh tambang (orang rantai), dan khazanah warisan dunia UNESCO.",
    metricLabel: "Koleksi Khusus:",
    metricValue: "12.800+ Berkas Sejarah Ombilin Terdata"
  },
  {
    id: "pembinaan-nagari",
    code: "Pilar 04",
    badge: "Literasi Komunitas",
    title: "Pembinaan Perpustakaan Nagari & POCADI",
    description: "Pengembangan Pojok Baca Digital (POCADI), pendampingan akreditasi perpustakaan sekolah dan desa nagari, serta pemilihan Duta Baca Kota Sawahlunto.",
    metricLabel: "Cakupan Wilayah:",
    metricValue: "Seluruh Nagari & Sekolah se-Sawahlunto"
  }
];

const newsCategories = [
  "Semua",
  "Perpustakaan Adinegoro",
  "Kearsipan & SRIKANDI",
  "Warisan Ombilin",
  "Literasi Nagari"
];

const newsArticles = [
  {
    id: 1,
    featured: true,
    title: "Perpustakaan Umum Adinegoro Perkuat Transformasi Inklusi Sosial: Hadirkan Pusat Kreativitas dan Keterampilan Warga Sawahlunto",
    category: "Perpustakaan Adinegoro",
    date: "Jumat, 04 September 2026",
    dateIso: "2026-09-04",
    author: "Tim Humas DPK Sawahlunto",
    readTime: "4 menit baca",
    image: "assets/pustaka-adinegoro.jpg",
    imageCaption: "Aktivitas masyarakat dan pelajar mengikuti kelas literasi inklusi sosial di ruang baca Perpustakaan Umum Adinegoro Sawahlunto.",
    excerpt: "Perpustakaan Umum Adinegoro membuktikan bahwa perpustakaan masa kini bukan sekadar gudang buku, melainkan pusat pemberdayaan masyarakat berbasis kecakapan hidup dan literasi terapan.",
    tags: ["PerpustakaanAdinegoro", "InklusiSosial", "LiterasiMasyarakat", "Sawahlunto", "DPK"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Perpustakaan Umum Adinegoro yang bernaung di bawah Dinas Perpustakaan dan Kearsipan (DPK) Kota Sawahlunto terus bertransformasi menjadi pusat peradaban dan pemberdayaan masyarakat. Mengadopsi program Transformasi Perpustakaan Berbasis Inklusi Sosial (TPBIS), perpustakaan ini kini memadukan layanan sirkulasi bahan bacaan dengan pelatihan kecakapan hidup secara gratis bagi warga.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Ruang Terbuka Pengembangan Keterampilan Warga</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Dalam kunjungan pemantauan program pekan ini, Kepala Dinas Perpustakaan dan Kearsipan Kota Sawahlunto menegaskan bahwa literasi memiliki dimensi yang luas, tidak hanya kemampuan membaca teks melainkan kemampuan mengolah pengetahuan menjadi keahlian praktis yang meningkatkan kesejahteraan keluarga.
      </p>
      
      <div class="p-6 rounded-2xl bg-[#EFECE2] border border-[#0D1B2A]/15 my-6">
        <blockquote class="italic text-[#0D1B2A] text-lg font-medium leading-relaxed">
          "Nama besar Djamaluddin Adinegoro sebagai pelopor jurnalistik dan penulis ulung asal Talawi Sawahlunto menjadi pemantik semangat kita. Perpustakaan Umum Adinegoro harus menjadi wadah lahirnya ide, kreasi wirausaha, dan kecakapan generasi muda menghadapi era digital."
        </blockquote>
        <span class="block text-xs font-semibold text-[#C59B27] mt-3 uppercase tracking-wider">— Kepala Dinas Perpustakaan dan Kearsipan Kota Sawahlunto</span>
      </div>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Ragam Kelas Pelatihan dan Layanan Ramah Anak</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Sepanjang tahun 2026, Perpustakaan Umum Adinegoro telah menyelenggarakan lebih dari 24 sesi lokakarya komunitas, mulai dari bimbingan literasi komputer dasar, kelas bahasa Inggris untuk pemandu wisata sejarah, pelatihan pembuatan kerajinan tangan lokal, hingga pelatihan pembuatan konten digital positif bagi pelajar sekolah menengah.
      </p>

      <p class="mb-5 leading-relaxed text-gray-800">
        Selain area membaca dewasa dan referensi, perpustakaan ini menyediakan Pojok Baca Anak yang ramah dan interaktif, fasilitas akses internet berkecepatan tinggi, serta sarana ramah disabilitas demi menjamin kesetaraan hak akses literasi bagi seluruh lapisan warga Kota Sawahlunto.
      </p>
    `
  },
  {
    id: 2,
    featured: false,
    title: "Digitalisasi 12.800 Arsip Tambang Ombilin Abad Ke-19: DPK Sawahlunto Amankan Memori Kolektif Warisan Dunia UNESCO",
    category: "Warisan Ombilin",
    date: "Selasa, 01 September 2026",
    dateIso: "2026-09-01",
    author: "Seksi Pengelolaan Arsip Statis",
    readTime: "4 menit baca",
    image: "assets/arsip-ombilin.jpg",
    imageCaption: "Arsiparis DPK Sawahlunto melakukan pemindaian presisi tinggi dan restorasi peta tambang batubara Ombilin tahun 1890-an.",
    excerpt: "Sebanyak 12.800 berkas arsip statis, cetak biru terowongan tambang, dan dokumen ketenagakerjaan Ombilin era kolonial telah berhasil dialihmediakan ke format digital berkualitas tinggi.",
    tags: ["ArsipOmbilin", "WarisanDunia", "UNESCO", "DigitalisasiArsip", "DPK"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Dinas Perpustakaan dan Kearsipan Kota Sawahlunto menuntaskan fase krusial program pelestarian memori kolektif bangsa dengan menyelesaikan proses digitalisasi lebih dari 12.800 berkas arsip statis tambang batubara Ombilin. Dokumen bersejarah ini mencakup periode 1888 hingga pertengahan abad ke-20.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Penyelamatan Peta Geologi dan Buku Register Buruh Tambang</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Berkas yang dialihmediakan meliputi peta topografi dan denah jaringan lubang tambang bawah tanah, rancangan teknis pembangkit listrik Salak, serta buku register ketenagakerjaan buruh tambang (orang rantai). Dokumen fisik asli disimpan dalam kotak arsip bebas asam (*acid-free boxes*) di ruangan bersuhu dan berkelembapan terkontrol.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Mendukung Riset Akademik dan Status Warisan Dunia UNESCO</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Sebagai situs yang telah dinobatkan sebagai Warisan Tambang Batubara Ombilin Sawahlunto (WTBOS) oleh UNESCO, keberadaan arsip otentik ini menjadi landasan ilmiah vital bagi para peneliti sejarah, arsitektur pusaka, dan akademisi internasional yang mengkaji evolusi industri pertambangan di Asia Tenggara.
      </p>
    `
  },
  {
    id: 3,
    featured: false,
    title: "Implementasi 100% Aplikasi SRIKANDI: Tata Kelola Administrasi Kearsipan Pemko Sawahlunto Raih Predikat Sangat Memuaskan",
    category: "Kearsipan & SRIKANDI",
    date: "Kamis, 27 Agustus 2026",
    dateIso: "2026-08-27",
    author: "Bidang Pembinaan Kearsipan",
    readTime: "3 menit baca",
    image: "assets/hero-dpk.jpg",
    imageCaption: "Pemberian bimbingan teknis integrasi aplikasi SRIKANDI bagi para pengelola arsip di lingkungan Pemerintah Kota Sawahlunto.",
    excerpt: "Seluruh Organisasi Perangkat Daerah (OPD) di Sawahlunto kini resmi menggunakan aplikasi SRIKANDI, mewujudkan tata kelola persuratan dan kearsipan berbasis elektronik yang efisien dan akuntabel.",
    tags: ["SRIKANDI", "KearsipanDinamis", "SPBE", "TataKelola", "Sawahlunto"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Komitmen Pemerintah Kota Sawahlunto dalam modernisasi birokrasi kearsipan membuahkan hasil membanggakan. Melalui koordinasi intensif DPK Sawahlunto, 100 persen Organisasi Perangkat Daerah, kecamatan, dan kelurahan telah sepenuhnya mengimplementasikan aplikasi SRIKANDI (Sistem Informasi Kearsipan Dinamis Terintegrasi).
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Birokrasi Cepat Tanpa Kertas</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Dengan implementasi SRIKANDI, naskah dinas, disposisi, dan pemberkasan surat menyurat kini dilakukan secara digital dengan tanda tangan elektronik bersertifikasi. Hal ini memangkas waktu pemrosesan dokumen dari hitungan hari menjadi hanya hitungan menit.
      </p>
    `
  },
  {
    id: 4,
    featured: false,
    title: "Pojok Baca Digital (POCADI) Hadir di Titik Publik: DPK Sawahlunto Perluas Akses Bahan Pustaka dan Literasi Generasi Muda",
    category: "Literasi Nagari",
    date: "Senin, 24 Agustus 2026",
    dateIso: "2026-08-24",
    author: "Seksi Pembinaan Perpustakaan",
    readTime: "3 menit baca",
    image: "assets/pustaka-adinegoro.jpg",
    imageCaption: "Pelajar memanfaatkan fasilitas layar sentuh dan ribuan judul e-book di Pojok Baca Digital kawasan publik Sawahlunto.",
    excerpt: "Menjangkau generasi digital, DPK Kota Sawahlunto mengoperasikan Pojok Baca Digital (POCADI) di pusat keramaian dan ruang tunggu layanan publik untuk mempermudah akses bacaan berkualitas.",
    tags: ["POCADI", "LiterasiDigital", "PojokBaca", "Pelajar", "Sawahlunto"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Dinas Perpustakaan dan Kearsipan Kota Sawahlunto terus berinovasi mendekatkan bahan pustaka kepada masyarakat. Melalui pengadaan Pojok Baca Digital (POCADI), warga kini dapat menikmati ribuan judul buku digital secara interaktif dan gratis saat berada di ruang publik.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Layanan Literasi Tanpa Batas Ruang</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Fasilitas POCADI dilengkapi perangkat komputer layar sentuh, tablet baca khusus anak, serta jaringan internet nirkabel. Pengunjung dapat membaca buku elektronik terbitan nasional maupun mengakses katalog digital koleksi naskah sejarah lokal Kota Sawahlunto.
      </p>
    `
  },
  {
    id: 5,
    featured: false,
    title: "Preservasi Manuskrip Kuno Minangkabau: Tim Kurator Kearsipan DPK Lakukan Konservasi Fisik dan Restorasi Kertas Kuno",
    category: "Warisan Ombilin",
    date: "Kamis, 20 Agustus 2026",
    dateIso: "2026-08-20",
    author: "Tim Kurasi Kearsipan",
    readTime: "4 menit baca",
    image: "assets/arsip-ombilin.jpg",
    imageCaption: "Proses laminasi dan deasidifikasi naskah kuno beraksara Arab-Melayu oleh tim konservator DPK Sawahlunto.",
    excerpt: "Untuk mencegah kerusakan akibat keasaman dan usia, naskah kuno berbahasa Melayu dan beraksara Arab-Gundul peninggalan abad ke-18 dan ke-19 menjalani proses perbaikan kimia dan laminasi ramah arsip.",
    tags: ["ManuskripKuno", "Filologi", "Preservasi", "Minangkabau", "DPK"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Tim pelestari arsip DPK Kota Sawahlunto menggelar program konservasi fisik naskah kuno koleksi daerah. Kegiatan ini berfokus pada pembersihan jamur, deasidifikasi dengan larutan kalsium hidroksida, serta enkapsulasi menggunakan film poliester inert.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Menyelamatkan Jejak Intelektual Ranah Minang</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Naskah yang dikonservasi memuat catatan hukum adat, silsilah nagari, serta korespondensi tokoh masyarakat pada era awal pembukaan tambang batubara Ombilin. Preservasi fisik ini memastikan lembaran kertas bersejarah dapat bertahan hingga ratusan tahun ke depan.
      </p>
    `
  },
  {
    id: 6,
    featured: false,
    title: "Layanan Pustaka Keliling (Puskel) Sambangi Pelosok Nagari: Antusiasme Pelajar Tingkatkan Minat Baca di Daerah Pinggiran",
    category: "Literasi Nagari",
    date: "Senin, 17 Agustus 2026",
    dateIso: "2026-08-17",
    author: "Tim Layanan Pustaka Bergerak",
    readTime: "3 menit baca",
    image: "assets/hero-dpk.jpg",
    imageCaption: "Armada mobil Pustaka Keliling DPK Sawahlunto melayani peminjaman buku bagi anak-anak di Nagari Lumindai.",
    excerpt: "Armada mobil Pustaka Keliling DPK Sawahlunto secara terjadwal melintasi nagari perbukitan di Silungkang, Talawi, dan Barangin, memfasilitasi ratusan siswa sekolah dasar dengan buku cerita dan ensiklopedia sains.",
    tags: ["PustakaKeliling", "MinatBaca", "Pelajar", "Nagari", "Sawahlunto"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Kondisi geografis perbukitan Kota Sawahlunto tidak menyurutkan langkah armada mobil Pustaka Keliling DPK. Setiap pekan, tim pustakawan menjangkau sekolah-sekolah yang berada jauh dari pusat kota guna memastikan buku-buku baru dapat dinikmati oleh seluruh anak nagari.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Sesi Mendongeng dan Kuis Edukatif</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Selain peminjaman buku, petugas perpustakaan keliling menggelar sesi mendongeng (*storytelling*) cerita rakyat Minangkabau dan kuis sains sederhana yang disambut gembira oleh para siswa dan guru.
      </p>
    `
  },
  {
    id: 7,
    featured: false,
    title: "Bimtek Pengelolaan Perpustakaan Sekolah dan Desa: Standarisasi Manajemen Arsip dan Tata Kelola Bahan Bacaan",
    category: "Perpustakaan Adinegoro",
    date: "Rabu, 12 Agustus 2026",
    dateIso: "2026-08-12",
    author: "Bidang Perpustakaan",
    readTime: "3 menit baca",
    image: "assets/pustaka-adinegoro.jpg",
    imageCaption: "Peserta bimbingan teknis mempraktikkan klasifikasi desimal Dewey (DDC) dan otomasi katalog perpustakaan.",
    excerpt: "Sebanyak 45 pengelola perpustakaan SD, SMP, dan pojok baca nagari se-Kota Sawahlunto mengikuti pelatihan manajemen perpustakaan modern berbasis standar nasional perpustakaan (SNP).",
    tags: ["BimtekPerpustakaan", "StandarisasiSNP", "Pustakawan", "Sawahlunto"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        DPK Kota Sawahlunto menyelenggarakan Bimbingan Teknis Standarisasi Pengelolaan Perpustakaan Sekolah dan Nagari. Kegiatan ini bertujuan memperkuat kapasitas tenaga pengelola perpustakaan dalam katalogisasi dan layanan pemustaka.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Penerapan Aplikasi Otomasi INLISLite</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Pelatihan mencakup pengoperasian perangkat lunak otomasi perpustakaan INLISLite versi terbaru, penyusunan nomor panggil buku, pengolahan bahan pustaka, serta pelaporan statistik pengunjung secara periodik.
      </p>
    `
  },
  {
    id: 8,
    featured: false,
    title: "Pemilihan Duta Baca Kota Sawahlunto 2026: Menginspirasi Generasi Emas Melalui Gemar Membaca dan Menulis",
    category: "Literasi Nagari",
    date: "Sabtu, 08 Agustus 2026",
    dateIso: "2026-08-08",
    author: "Panitia Festival Literasi",
    readTime: "4 menit baca",
    image: "assets/hero-dpk.jpg",
    imageCaption: "Malam penganugerahan Duta Baca Kota Sawahlunto tahun 2026 di Gedung Pusat Kebudayaan Sawahlunto.",
    excerpt: "Ajang bergengsi Duta Baca Kota Sawahlunto 2026 melahirkan duta-duta muda yang bertugas mengkampanyekan budaya gemar membaca, resensi buku, dan literasi digital kreatif ke sekolah dan komunitas warga.",
    tags: ["DutaBaca", "GenerasiEmas", "FestivalLiterasi", "Sawahlunto"],
    content: `
      <p class="lead font-medium text-xl text-[#0D1B2A] leading-relaxed mb-6">
        Malam puncak pemilihan Duta Baca Kota Sawahlunto 2026 berlangsung meriah di Gedung Pusat Kebudayaan. Para finalis yang merupakan perwakilan generasi muda terbaik menunjukkan gagasan program literasi kreatif untuk memajukan minat baca kota pusaka.
      </p>

      <h3 class="font-primary font-bold text-2xl text-[#0D1B2A] mt-8 mb-4">Misi Penggerak Komunitas Baca</h3>
      <p class="mb-5 leading-relaxed text-gray-800">
        Duta Baca terpilih akan bersinergi dengan DPK Kota Sawahlunto dalam rangkaian roadshow literasi nagari, kampanye membaca 15 menit sehari di keluarga, serta menginisiasi klub buku mingguan bagi pelajar dan remaja.
      </p>
    `
  }
];

const unduhFilesData = [
  {
    id: "kid-2026",
    title: "Katalog Induk Daerah (KID) Bahan Pustaka Kota Sawahlunto 2026",
    format: "PDF",
    size: "4.8 MB",
    date: "01 September 2026",
    filename: "Katalog_Induk_Daerah_Sawahlunto_2026.pdf"
  },
  {
    id: "sop-arsip-ombilin",
    title: "Standar Operasional Prosedur Preservasi Arsip Statis Tambang Ombilin",
    format: "PDF",
    size: "2.3 MB",
    date: "25 Agustus 2026",
    filename: "SOP_Preservasi_Arsip_Ombilin_UNESCO.pdf"
  },
  {
    id: "juknis-srikandi",
    title: "Petunjuk Teknis Implementasi Aplikasi SRIKANDI di Lingkungan Pemko Sawahlunto",
    format: "PDF",
    size: "3.1 MB",
    date: "15 Agustus 2026",
    filename: "Juknis_Implementasi_SRIKANDI_Pemko_Sawahlunto.pdf"
  },
  {
    id: "panduan-akreditasi-pustaka",
    title: "Panduan Teknis Pembentukan & Akreditasi Perpustakaan Nagari / Desa",
    format: "PDF",
    size: "2.7 MB",
    date: "05 Agustus 2026",
    filename: "Panduan_Akreditasi_Perpustakaan_Nagari.pdf"
  },
  {
    id: "laporan-iplm-2026",
    title: "Laporan Hasil Pengukuran Indeks Pembangunan Literasi Masyarakat (IPLM) Sawahlunto",
    format: "PDF",
    size: "1.9 MB",
    date: "20 Juli 2026",
    filename: "Laporan_IPLM_Sawahlunto_2026.pdf"
  }
];
