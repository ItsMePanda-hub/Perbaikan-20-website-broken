// Data Berita & Dokumen Resmi DPKPLH Kota Sawahlunto
// Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup
// STRICT ZERO EMOJIS — Full Journalistic Content

const newsCategories = [
  'Semua',
  'Perumahan & PSU',
  'Kebersihan & Sampah',
  'Konservasi RTH',
  'Pertanahan',
  'AMDAL & Lingkungan'
];

const telemetryData = [
  { label: 'Piala Adipura Kota', value: 'Kota Bersih 2026', status: 'Kementerian LH RI', note: 'Kategori Kota Kecil Terbersih' },
  { label: 'Rehabilitasi RTLH', value: '142 Unit Tuntas', status: 'Program BSPS', note: 'Tersebar di 4 Kecamatan' },
  { label: 'Pengelolaan Sampah', value: '18,5 Ton/Hari', status: 'TPA Kayu Gadang', note: 'Rencana Penerapan RDF' },
  { label: 'Indeks Kualitas Udara (IKU)', value: '91,4 (Sangat Baik)', status: 'Stasiun Pemantau', note: 'Baku Mutu Udara Prima' }
];

const coreSectors = [
  {
    id: 'perumahan',
    badge: 'Pilar 01',
    category: 'Perumahan & PSU',
    title: 'Perumahan Rakyat & PSU Permukiman',
    desc: 'Penyaluran Bantuan Stimulan Perumahan Swadaya (BSPS) untuk renovasi Rumah Tidak Layak Huni (RTLH), pembangunan jalan setapak nagari, dan drainase permukiman sehat.',
    highlight: '142 Unit RTLH Tuntas & Peningkatan PSU'
  },
  {
    id: 'pertanahan',
    badge: 'Pilar 02',
    category: 'Pertanahan',
    title: 'Pertanahan & Gugus Tugas Reforma Agraria',
    desc: 'Pengamanan dan sertifikasi aset tanah milik pemerintah daerah, fasilitasi pengadaan tanah fasilitas publik, penataan batas wilayah nagari, serta konsolidasi pertanahan.',
    highlight: 'Sertifikasi Aset & Batas Wilayah Nagari'
  },
  {
    id: 'kebersihan',
    badge: 'Pilar 03',
    category: 'Kebersihan & Sampah',
    title: 'Pengelolaan Sampah & Limbah B3',
    desc: 'Operasional armada angkutan kebersihan harian, penguatan Tempat Pemrosesan Akhir (TPA) Kayu Gadang, wacana teknologi RDF, pembinaan Bank Sampah Unit dan TPS3R desa.',
    highlight: 'Armada Terpadu & TPA Kayu Gadang'
  },
  {
    id: 'lingkungan',
    badge: 'Pilar 04',
    category: 'Konservasi RTH',
    title: 'Pengendalian Lingkungan & Ruang Terbuka Hijau',
    desc: 'Penataan dan pemeliharaan Ruang Terbuka Hijau (Taman Segitiga, Taman Silo, Hutan Kota), pengawasan uji laboratorium Sungai Batang Ombilin, serta Program Kampung Iklim (ProKlim).',
    highlight: 'Konservasi RTH & Uji Sungai Batang Ombilin'
  }
];

const newsArticles = [
  {
    id: 1,
    title: 'Sawahlunto Pertahankan Piala Adipura 2026: Sinergi Bersama Wujudkan Kota Bersih dan Lingkungan Berkelanjutan',
    category: 'Kebersihan & Sampah',
    date: 'Jumat, 04 September 2026',
    dateIso: '2026-09-04',
    author: 'Tim Humas DPKPLH Sawahlunto',
    readTime: '4 menit baca',
    featured: true,
    image: 'assets/adipura-lingkungan.jpg',
    imageCaption: 'Aparatur kebersihan DPKPLH Kota Sawahlunto bersama masyarakat merawat ruang publik dan taman kota penunjang penilaian Adipura.',
    excerpt: 'Kota Sawahlunto kembali sukses mengukuhkan diri meraih penghargaan Piala Adipura 2026 kategori kota kecil terbersih berkat konsistensi pengelolaan persampahan terpadu dan penataan ruang publik yang asri.',
    lead: 'Pemerintah Kota Sawahlunto melalui Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup (DPKPLH) kembali membuktikan komitmennya dalam menjaga kebersihan dan kelestarian lingkungan dengan meraih Piala Adipura 2026 dari Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia.',
    tags: ['Adipura 2026', 'Kebersihan Kota', 'DPKPLH', 'Taman Kota', 'Lingkungan Hidup'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Pemerintah Kota Sawahlunto melalui Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup (DPKPLH) kembali membuktikan komitmennya dalam menjaga kebersihan dan kelestarian lingkungan dengan meraih Piala Adipura 2026 dari Kementerian Lingkungan Hidup Republik Indonesia.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Konsistensi Pengelolaan Sampah dan Ruang Terbuka Hijau
      </h3>
      <p>
        Keberhasilan mempertahankan lambang supremasi kebersihan kota ini tidak terlepas dari kerja keras pasukan kuning DPKPLH yang tanpa henti merawat kebersihan jalan protokol, pasar tradisional, kawasan permukiman heritage, serta optimalisasi operasional Tempat Pemrosesan Akhir (TPA) Kayu Gadang.
      </p>
      <p>
        Kepala DPKPLH Kota Sawahlunto menyampaikan bahwa instrumen penilaian Adipura tahun 2026 menuntut standar yang semakin ketat, terutama integrasi pengurangan sampah dari hulu melalui Bank Sampah Unit (BSU) dan tempat pengolahan sampah reduce-reuse-recycle (TPS3R) di nagari dan kelurahan.
      </p>

      <blockquote class="border-l-4 border-[#C25E2C] bg-[#E2ECE6] rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Adipura bukan semata trofi kejuaraan di atas lemari kaca, melainkan representasi budaya hidup bersih warga Sawahlunto dan ikhtiar nyata aparatur kebersihan dalam menjaga bentang alam warisan dunia Ombilin tetap bermartabat."
        <span class="block not-italic font-semibold text-sm text-[#064E3B] mt-3">- Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup Kota Sawahlunto</span>
      </blockquote>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Peran Kolektif Masyarakat dan Lembaga Nagari
      </h3>
      <p>
        Selain pemeliharaan kebersihan harian, DPKPLH mengapresiasi keaktifan sekolah-sekolah berpredikat Adiwiyata, kelompok dasawisma nagari, dan komunitas peduli sungai yang secara berkala menggalang gerakan bersih drainase dan bantaran Sungai Batang Ombilin.
      </p>
      <p>
        Pemerintah Kota Sawahlunto memastikan penghargaan ini akan menjadi bahan bakar semangat untuk mempercepat modernisasi pengolahan sampah ramah lingkungan, memperluas tutupan kanopi hijau pohon pelindung, serta menjaga keasrian kota tambang bersejarah ini hingga dekade mendatang.
      </p>
    `
  },
  {
    id: 2,
    title: 'Optimalisasi TPA Kayu Gadang: DPKPLH Matangkan Skema RDF dan Peningkatan Akses Pengolahan Sampah Terpadu',
    category: 'Kebersihan & Sampah',
    date: 'Selasa, 01 September 2026',
    dateIso: '2026-09-01',
    author: 'Bidang Pengelolaan Sampah DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-dpkplh.jpg',
    imageCaption: 'Peninjauan berkala sistem operasional dan penataan zona sel Tempat Pemrosesan Akhir (TPA) Kayu Gadang Sawahlunto.',
    excerpt: 'Menjawab tantangan kapasitas timbunan harian, DPKPLH Sawahlunto mematangkan kajian penerapan teknologi Refuse Derived Fuel (RDF) guna mengolah sampah padat menjadi bahan bakar alternatif bernilai ekonomi.',
    lead: 'Menjawab tantangan kapasitas timbunan sampah kota yang mencapai 18,5 ton per hari, DPKPLH Sawahlunto mengambil langkah strategis dengan mematangkan skema penerapan teknologi Refuse Derived Fuel (RDF) di Tempat Pemrosesan Akhir (TPA) Kayu Gadang.',
    tags: ['TPA Kayu Gadang', 'Teknologi RDF', 'Pengelolaan Sampah', 'Energi Alternatif', 'Inovasi'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Menjawab tantangan kapasitas timbunan sampah kota yang mencapai rata-rata 18,5 ton per hari, DPKPLH Sawahlunto mengambil langkah strategis dengan mematangkan skema penerapan teknologi Refuse Derived Fuel (RDF) di Tempat Pemrosesan Akhir (TPA) Kayu Gadang, Kecamatan Barangin.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Solusi Sirkular Mengurangi Beban Sanitary Landfill
      </h3>
      <p>
        Kepala Bidang Kebersihan dan Pengelolaan Sampah DPKPLH menjelaskan bahwa penerapan teknologi RDF dirancang untuk mencacah, memilah, dan memadatkan fraksi sampah kering bernilai kalor tinggi (seperti plastik kemasan dan ranting kayu) menjadi briket bahan bakar padat pengganti batubara.
      </p>
      <p>
        "Dengan skema RDF ini, residu sampah yang ditimbun langsung ke zona sanitary landfill dapat ditekan hingga 60 persen. Bahan bakar alternatif yang dihasilkan nantinya dapat dimanfaatkan oleh industri semen dan pembangkit lokal di sekitar Sumatera Barat," paparnya.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Penguatan Infrastruktur Akses dan Kolaborasi Aset
      </h3>
      <p>
        Selain perencanaan teknologi RDF, DPKPLH secara simultan menuntaskan perkuatan tebing pengaman dan perkerasan badan jalan akses menuju TPA Kayu Gadang yang sempat terdampak pergerakan tanah akibat curah hujan tinggi.
      </p>
      <p>
        Sinergi pinjam pakai lahan bersama PT Bukit Asam Unit Penambangan Ombilin (PTBA UPO) terus berjalan harmonis, memastikan keberlangsungan sanitasi persampahan kota tetap berada dalam standar kelayakan teknis Kementerian Lingkungan Hidup.
      </p>
    `
  },
  {
    id: 3,
    title: 'Tuntaskan 142 Unit RTLH: Program Bantuan Stimulan Perumahan Swadaya Wujudkan Hunian Layak Huni di Sawahlunto',
    category: 'Perumahan & PSU',
    date: 'Jumat, 28 Agustus 2026',
    dateIso: '2026-08-28',
    author: 'Bidang Perumahan DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/perumahan-rtlh.jpg',
    imageCaption: 'Rumah warga penerima manfaat program BSPS / RTLH DPKPLH Sawahlunto kini telah layak huni dengan konstruksi dinding kokoh dan sanitasi memadai.',
    excerpt: 'Sebanyak 142 kepala keluarga di empat kecamatan telah menerima manfaat program Bantuan Stimulan Perumahan Swadaya (BSPS), merombak rumah tidak layak huni menjadi hunian sehat, kokoh, dan berketahanan bencana.',
    lead: 'Komitmen Pemerintah Kota Sawahlunto dalam mengentaskan kemiskinan ekstrem dan menyediakan hunian bermartabat terwujud melalui tuntasnya rehabilitasi 142 unit Rumah Tidak Layak Huni (RTLH) sepanjang tahun anggaran 2026.',
    tags: ['BSPS', 'RTLH', 'Bedah Rumah', 'Perumahan Rakyat', 'Kesejahteraan'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Komitmen Pemerintah Kota Sawahlunto dalam mengentaskan kemiskinan ekstrem dan menyediakan hunian bermartabat terwujud melalui tuntasnya rehabilitasi 142 unit Rumah Tidak Layak Huni (RTLH) yang tersebar di Kecamatan Barangin, Lembah Segar, Silungkang, dan Talawi.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Prinsip Aladin: Atap, Lantai, dan Dinding
      </h3>
      <p>
        Program Bantuan Stimulan Perumahan Swadaya (BSPS) yang disalurkan DPKPLH mengacu pada standar pemenuhan keselamatan bangunan, kecukupan ruang gerak, serta akses sanitasi dan air bersih yang sehat. Bantuan stimulan diberikan dalam bentuk material bangunan bermutu serta insentif upah tukang.
      </p>
      <p>
        "Prioritas utama kami adalah membenahi rumah dengan kondisi atap bocor, dinding papan lapuk, dan lantai tanah. Melalui kolaborasi swadaya gotong royong antar-tetangga, nilai stimulan tersebut bertransformasi menjadi hunian permanen berdinding bata rapi dan beratap genteng terawat," jelas Kepala Bidang Perumahan DPKPLH.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Dukungan Sarana Prasarana dan Utilitas Lingkungan
      </h3>
      <p>
        Tidak hanya membedah fisik rumah, DPKPLH mengintegrasikan rehabilitasi permukiman dengan pembangunan Prasarana, Sarana, dan Utilitas Umum (PSU) berupa jalan setapak rabat beton, perbaikan parit drainase lingkungan, dan sambungan sanitasi tangki septik individual kedap air guna mencegah pencemaran air tanah.
      </p>
      <p>
        Warga penerima manfaat menyampaikan rasa syukur dan haru atas terealisasinya hunian layak huni yang memberikan rasa aman bagi keluarga dari cuaca ekstrem dan risiko penyakit lingkungan.
      </p>
    `
  },
  {
    id: 4,
    title: 'Uji Mutu Berkala Sungai Batang Ombilin: DPKPLH Pastikan Baku Mutu Air Sesuai Standar Lingkungan Hidup',
    category: 'AMDAL & Lingkungan',
    date: 'Senin, 24 Agustus 2026',
    dateIso: '2026-08-24',
    author: 'Bidang Pengendalian Pencemaran DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/adipura-lingkungan.jpg',
    imageCaption: 'Petugas laboratorium lingkungan DPKPLH mengambil sampel air di titik pantau Sungai Batang Ombilin untuk pengujian parameter fisika dan kimia.',
    excerpt: 'Tim laboratorium DPKPLH melaksanakan pengambilan sampel air sungai di 8 stasiun pantau Batang Ombilin guna mengawasi baku mutu air dari potensi cemaran limbah domestik dan aktivitas usaha.',
    lead: 'Menjaga kelestarian ekosistem perairan darat yang membelah pusat Kota Sawahlunto, Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup (DPKPLH) secara berkala melaksanakan pemantauan dan pengujian baku mutu air Sungai Batang Ombilin.',
    tags: ['Batang Ombilin', 'Baku Mutu Air', 'Pengendalian Pencemaran', 'Laboratorium Lingkungan', 'Konservasi'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Menjaga kelestarian ekosistem perairan darat yang membelah pusat Kota Sawahlunto, Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup (DPKPLH) secara berkala melaksanakan pemantauan dan pengujian baku mutu air Sungai Batang Ombilin.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Pemantauan pada Delapan Titik Stasiun Strategis
      </h3>
      <p>
        Pengambilan sampel air dilakukan pada 8 stasiun pantau hulu, tengah, dan hilir sungai, mencakup titik inlet perbatasan kota, kawasan pemukiman padat Saringan, outlet sekitar pasar, hingga titik temu muara anak sungai. Parameter yang diuji mencakup derajat keasaman (pH), oksigen terlarut (DO), Biological Oxygen Demand (BOD), Chemical Oxygen Demand (COD), serta Total Suspended Solids (TSS).
      </p>
      <p>
        Hasil uji laboratorium terakreditasi menunjukkan bahwa indeks kualitas air (IKA) Sungai Batang Ombilin berada dalam status kelas II yang memenuhi baku mutu peruntukan rekreasi air, pembudidayaan ikan air tawar, dan pengairan pertanian.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Pengawasan Ketat Pembuangan Air Limbah
      </h3>
      <p>
        DPKPLH secara paralel melakukan inspeksi berkala terhadap instalasi pengolahan air limbah (IPAL) industri perhotelan, rumah sakit umum daerah, dan sentra bengkel otomotif guna memastikan limbah cair yang dialirkan ke badan air telah melewati proses netralisasi standar teknis.
      </p>
      <p>
        Masyarakat diimbau untuk tidak membuang sampah domestik ke bantaran sungai serta bersama-sama menjaga kejernihan sungai bersejarah yang menjadi urat nadi keindahan Kota Warisan Budaya Ombilin.
      </p>
    `
  },
  {
    id: 5,
    title: 'Penguatan Bank Sampah Unit di Nagari: Mengubah Sampah Rumah Tangga Menjadi Nilai Ekonomi Sirkular',
    category: 'Kebersihan & Sampah',
    date: 'Selasa, 18 Agustus 2026',
    dateIso: '2026-08-18',
    author: 'Seksi Pengurangan Sampah DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-dpkplh.jpg',
    imageCaption: 'Aktivitas penimbangan dan pemilahan sampah anorganik di Bank Sampah Unit binaan DPKPLH Kota Sawahlunto.',
    excerpt: 'Pembinaan intensif kepada 28 Bank Sampah Unit (BSU) di nagari dan kelurahan Sawahlunto berhasil mereduksi timbunan sampah plastik sekaligus menambah pendapatan keluarga melalui tabungan emas sampah.',
    lead: 'Pendekatan pengelolaan sampah berbasis masyarakat terus diperkuat oleh DPKPLH Sawahlunto melalui revitalisasi dan pembinaan intensif terhadap 28 Bank Sampah Unit (BSU) yang aktif beroperasi di tingkat nagari dan kelurahan.',
    tags: ['Bank Sampah', 'Ekonomi Sirkular', 'Pilah Sampah', 'Edukasi Lingkungan', 'Masyarakat'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Pendekatan pengelolaan sampah berbasis masyarakat terus diperkuat oleh DPKPLH Sawahlunto melalui revitalisasi dan pembinaan intensif terhadap 28 Bank Sampah Unit (BSU) yang aktif beroperasi di tingkat nagari dan kelurahan.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Mereduksi Sampah dari Sumber Utama
      </h3>
      <p>
        Melalui sistem perbankan sampah ini, warga diajak memilah sampah sejak dari dapur: memisahkan sampah organik sisa makanan, kardus dan kertas, botol plastik PET, serta logam kaleng. Sampah anorganik bernilai jual kemudian ditimbang di BSU terdekat untuk dicatat ke dalam buku tabungan nasabah.
      </p>
      <p>
        "Kunci keberhasilan kota bersih bukan hanya bertumpu pada banyaknya truk pengangkut sampah, melainkan seberapa sadar masyarakat mengurangi dan memilah sampahnya sendiri. Jika sampah bernilai telah diserap di BSU, beban pengangkutan ke TPA berkurang signifikan," ungkap petugas penyuluh lingkungan DPKPLH.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Inovasi Tabungan Emas dan Kerajinan Daur Ulang
      </h3>
      <p>
        Beberapa BSU percontohan di Kecamatan Lembah Segar dan Barangin telah menjalin kemitraan inovatif dengan pegadaian melalui program tabungan emas sampah, di mana saldo setoran sampah nasabah dapat dikonversikan menjadi tabungan emas batangan mini.
      </p>
      <p>
        DPKPLH juga memfasilitasi pelatihan berkala bagi kelompok wanita mandiri untuk menyulap limbah plastik kresek dan sachet menjadi aneka kerajinan tas belanja, dompet, dan pot tanaman hias bernilai jual cinderamata wisata.
      </p>
    `
  },
  {
    id: 6,
    title: 'Penataan Kawasan Hijau Taman Silo: DPKPLH Perluas Ruang Terbuka Hijau Pendukung Pariwisata Heritage',
    category: 'Konservasi RTH',
    date: 'Kamis, 06 Agustus 2026',
    dateIso: '2026-08-06',
    author: 'Bidang Penataan RTH DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/adipura-lingkungan.jpg',
    imageCaption: 'Suasana asri penataan lanskap hijau di sekitar situs cagar budaya Silo Batubara Sawahlunto yang kini menjadi ruang publik favorit warga.',
    excerpt: 'Perluasan dan pemeliharaan Ruang Terbuka Hijau (RTH) di sekitar monumen Silo dan Taman Segitiga menghadirkan perpaduan estetika cagar budaya bersejarah dengan pelestarian keanekaragaman hayati perkotaan.',
    lead: 'Menyeimbangkan perlindungan situs cagar budaya dunia dengan ketersediaan ruang publik yang sehat, DPKPLH Sawahlunto merampungkan penataan lanskap Ruang Terbuka Hijau (RTH) di kawasan Silo dan koridor bersejarah pusat kota.',
    tags: ['Ruang Terbuka Hijau', 'Taman Silo', 'Taman Segitiga', 'Pariwisata Heritage', 'RTH Publik'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Menyeimbangkan perlindungan situs cagar budaya dunia dengan ketersediaan ruang publik yang sehat, DPKPLH Sawahlunto merampungkan penataan lanskap Ruang Terbuka Hijau (RTH) di kawasan Silo dan koridor bersejarah pusat kota.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Integrasi Lanskap Historis dan Vegetasi Peneduh
      </h3>
      <p>
        Kawasan bersejarah Silo yang dahulunya merupakan tempat penampungan batubara masa kolonial kini dikelilingi hamparan rumput manila hijau, deretan pohon trembesi dan mahoni peneduh, serta tanaman hias perdu bougenville yang mekar berwarna-warni.
      </p>
      <p>
        Penataan jalur pedestrian dengan batu alam ramah disabilitas, bangku taman ergonomis dari besi tempa, dan lampu taman hemat energi tenaga surya menjadikan area ini sebagai magnet ruang interaksi sosial warga saat pagi dan sore hari.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Target Capaian 30 Persen RTH Publik Kota
      </h3>
      <p>
        Kepala Bidang Penataan Lingkungan Hidup menegaskan bahwa Kota Sawahlunto terus melangkah menuju target penyediaan 30 persen Ruang Terbuka Hijau publik sesuai amanat undang-undang penataan ruang.
      </p>
      <p>
        "Keberadaan taman kota tidak sekadar mempercantik panorama fotografi wisatawan, tetapi berfungsi esensial sebagai paru-paru kota, penyerap emisi karbon kendaraan, dan daerah resapan air hujan penangkal banjir genangan," tandasnya.
      </p>
    `
  },
  {
    id: 7,
    title: 'Gugus Tugas Reforma Agraria: Akselerasi Pensertifikatan Tanah Aset Pemda dan Penegasan Batas Nagari',
    category: 'Pertanahan',
    date: 'Rabu, 12 Agustus 2026',
    dateIso: '2026-08-12',
    author: 'Bidang Pertanahan DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/perumahan-rtlh.jpg',
    imageCaption: 'Rapat koordinasi teknis Gugus Tugas Reforma Agraria Kota Sawahlunto bersama Kantor Pertanahan dan para Kepala Desa / Kerapatan Adat Nagari.',
    excerpt: 'Rapat koordinasi Gugus Tugas Reforma Agraria (GTRA) memprioritaskan legalisasi aset tanah fasilitas publik milik pemerintah daerah serta penyelesaian penegasan batas wilayah antarnagari secara musyawarah mufakat.',
    lead: 'Menjamin kepastian hukum atas kepemilikan tanah dan mencegah potensi sengketa pertanahan di masa depan, DPKPLH Sawahlunto bersama Kantor Pertanahan Kota Sawahlunto (BPN) mengintensifkan program kerja Gugus Tugas Reforma Agraria (GTRA).',
    tags: ['Reforma Agraria', 'Sertifikasi Tanah', 'Batas Nagari', 'Aset Daerah', 'Kepastian Hukum'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Menjamin kepastian hukum atas kepemilikan tanah dan mencegah potensi sengketa pertanahan di masa depan, DPKPLH Sawahlunto bersama Kantor Pertanahan Kota Sawahlunto (BPN) mengintensifkan program kerja Gugus Tugas Reforma Agraria (GTRA).
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Inventarisasi dan Legalisasi Aset Daerah
      </h3>
      <p>
        Fokus utama kegiatan pertanahan tahun anggaran ini mencakup verifikasi berkas dan pengukuran fisik bidang tanah kantor pemerintah, puskesmas pembantu, gedung sekolah dasar, serta lahan ruang terbuka hijau kota agar seluruhnya memiliki sertifikat hak pakai yang sah dan terdaftar resmi di basis data BPN.
      </p>
      <p>
        Kepala Bidang Pertanahan DPKPLH menyampaikan bahwa pengamanan aset tanah pemerintah daerah sangat krusial guna menghindari klaim sepihak dan mempermudah perencanaan alokasi pembangunan infrastruktur fasilitas umum bagi warga kota.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Fasilitasi Batas Wilayah Nagari dan Desa
      </h3>
      <p>
        Selain pensertifikatan aset, tim pertanahan DPKPLH memfasilitasi musyawarah pemancangan pilar batas wilayah antarnagari bersama Kerapatan Adat Nagari (KAN), tokoh ninik mamak, serta pemerintah desa setempat dengan mengedepankan kearifan lokal hukum adat Minangkabau.
      </p>
      <p>
        Penyelesaian batas wilayah yang tuntas dan terdata secara geospasial digital menjadi fondasi kokoh bagi kepastian investasi dan penataan tata ruang permukiman Kota Sawahlunto yang tertib dan berkeadilan.
      </p>
    `
  },
  {
    id: 8,
    title: 'Pengawasan Kepatuhan AMDAL Terpadu: DPKPLH Pantau Pengelolaan Limbah B3 Faskes dan Kawasan Usaha',
    category: 'AMDAL & Lingkungan',
    date: 'Rabu, 29 Juli 2026',
    dateIso: '2026-07-29',
    author: 'PPLH & Pengawas Lingkungan DPKPLH',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/adipura-lingkungan.jpg',
    imageCaption: 'Petugas Pejabat Pengawas Lingkungan Hidup (PPLH) DPKPLH melakukan inspeksi tempat penyimpanan sementara limbah B3 di fasilitas kesehatan.',
    excerpt: 'Inspeksi berkala kepatuhan dokumen lingkungan AMDAL dan UKL-UPL dilakukan di rumah sakit, puskesmas, dan kawasan bengkel untuk memastikan limbah Bahan Berbahaya dan Beracun (B3) dikelola sesuai SOP ketat.',
    lead: 'Menjamin keselamatan kesehatan warga dan mencegah kontaminasi tanah serta air tanah dari zat berbahaya, tim Pejabat Pengawas Lingkungan Hidup (PPLH) DPKPLH Sawahlunto secara teratur menggelar inspeksi pengawasan kepatuhan izin lingkungan.',
    tags: ['AMDAL', 'Limbah B3', 'PPLH', 'Kesehatan Lingkungan', 'Pengawasan'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-[#0F1E19] leading-relaxed mb-8">
        Menjamin keselamatan kesehatan warga dan mencegah kontaminasi tanah serta air tanah dari zat berbahaya, tim Pejabat Pengawas Lingkungan Hidup (PPLH) DPKPLH Sawahlunto secara teratur menggelar inspeksi pengawasan kepatuhan izin lingkungan di seluruh fasilitas usaha dan layanan kesehatan.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Standarisasi Tempat Penyimpanan Sementara Limbah B3
      </h3>
      <p>
        Fokus pemeriksaan ditujukan pada kelayakan Tempat Penyimpanan Sementara (TPS) Limbah B3 berizin, ketersediaan spill kit antisipasi tumpahan, label simbol bahaya beracun, serta kelengkapan manifest pengangkutan limbah medis oleh transporter berizin resmi Kementerian Lingkungan Hidup.
      </p>
      <p>
        "Limbah medis seperti jarum suntik bekas, perban terkontaminasi, dan sisa reagen kimia tidak boleh bercampur sedikit pun dengan sampah domestik biasa. Pelanggaran terhadap pengelolaan limbah B3 memiliki sanksi administratif dan pidana yang tegas," tegas koordinator PPLH DPKPLH.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#064E3B] mt-10 mb-4">
        Bimbingan Teknis Kepatuhan Dokumen Lingkungan
      </h3>
      <p>
        Bukan hanya mengawasi dan menindak, DPKPLH membuka klinik konsultasi teknis bagi pelaku usaha mikro dan menengah (UMKM) agar dapat menyusun dokumen Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan Hidup (SPPL) secara mudah dan mandiri melalui sistem perizinan berusaha terintegrasi.
      </p>
      <p>
        Ketaatan lingkungan dari seluruh pelaku usaha menjadi benteng pelindung agar roda perekonomian Kota Sawahlunto terus melaju tanpa mengorbankan kualitas kesehatan generasi penerus dan ekosistem bumi.
      </p>
    `
  }
];

const unduhFilesData = [
  { name: 'Rencana Strategis (Renstra) DPKPLH Kota Sawahlunto 2021-2026', size: '6.2 MB', type: 'PDF', desc: 'Arah kebijakan pembangunan perumahan rakyat, penataan permukiman, pertanahan, dan pengelolaan lingkungan hidup kota.' },
  { name: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) 2025', size: '3.8 MB', type: 'PDF', desc: 'Evaluasi target kinerja tahunan capaian indikator Adipura, renovasi RTLH, dan luasan RTH publik.' },
  { name: 'SOP Permohonan Bantuan Stimulan Perumahan Swadaya (BSPS / RTLH)', size: '1.4 MB', type: 'PDF', desc: 'Persyaratan administrasi, kriteria rumah rusak berat/sedang, dan tahapan verifikasi berkas kelompok warga.' },
  { name: 'SOP Izin Tempat Penyimpanan Sementara (TPS) Limbah B3', size: '1.1 MB', type: 'PDF', desc: 'Panduan teknis pengajuan izin penyimpanan limbah bahan berbahaya dan beracun bagi faskes dan pelaku usaha.' },
  { name: 'Buku Panduan Pembentukan dan Pengelolaan Bank Sampah Unit Nagari', size: '2.9 MB', type: 'PDF', desc: 'Pedoman pembukuan nasabah, klasifikasi harga jual sampah anorganik, dan tata kelola organisasi BSU.' }
];

if (typeof window !== 'undefined') {
  window.newsArticles = newsArticles;
  window.newsCategories = newsCategories;
  window.telemetryData = telemetryData;
  window.coreSectors = coreSectors;
  window.unduhFilesData = unduhFilesData;
}
