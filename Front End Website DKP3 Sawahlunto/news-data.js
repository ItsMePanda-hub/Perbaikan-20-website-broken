// Data Berita & Dokumen Resmi DKP3 Kota Sawahlunto
// Dinas Ketahanan Pangan, Pertanian dan Perikanan
// STRICT ZERO EMOJIS — Full Journalistic Content

const newsCategories = [
  'Semua',
  'Pertanian & Alsintan',
  'Perikanan Air Tawar',
  'Ketahanan Pangan',
  'Peternakan & Puskeswan',
  'Penyuluhan & SDM'
];

const telemetryData = [
  { label: 'Cadangan Beras Daerah (CBPD)', value: '45,8 Ton', status: 'Kondisi Aman', note: 'Gudang Logistik Sawahlunto' },
  { label: 'Sentra Padi Sawah Baruah', value: '25+ Hektar', status: 'Panen Produktif', note: 'Kecamatan Talawi' },
  { label: 'Penebaran Benih Nila Irigasi', value: '12 Titik', status: 'Restocking Aktif', note: 'Pengawasan POKMASWAS' },
  { label: 'Layanan Vaksinasi PMK & Puskeswan', value: '4 Kecamatan', status: 'Bebas Biaya', note: 'Jemput Bola Ternak' }
];

const coreSectors = [
  {
    id: 'pertanian',
    badge: 'Sektor 01',
    category: 'Pertanian & Alsintan',
    title: 'Mekanisasi Alsintan & Pertanian Hamparan',
    desc: 'Pengembangan kawasan terasering produktif Sawah Baruah Talawi, penyaluran bantuan traktor roda dua dan empat, pompa air irigasi, serta pengendalian hama terpadu bersama kelompok tani.',
    highlight: '6 Unit Traktor Baru & Pompa Sentrifugal'
  },
  {
    id: 'perikanan',
    badge: 'Sektor 02',
    category: 'Perikanan Air Tawar',
    title: 'Budidaya Saluran Irigasi & POKMASWAS',
    desc: 'Optimalisasi saluran irigasi beton bersih untuk budidaya ikan nila dan mas unggul, pembinaan Kelompok Pengawas Masyarakat (POKMASWAS), dan pembuatan pakan mandiri.',
    highlight: 'Penebaran 750+ Benih Nila Unggul Berkala'
  },
  {
    id: 'pangan',
    badge: 'Sektor 03',
    category: 'Ketahanan Pangan',
    title: 'Cadangan Pangan & Gerakan Pekarangan P2B',
    desc: 'Pengelolaan Cadangan Pangan Pemerintah Daerah (CPPD), stabilisasi pasokan dan pemantauan harga pasar harian, serta pembagian ribuan bibit polybag pekarangan keluarga.',
    highlight: 'Pengamanan Stok Beras & 2.000 Bibit Polybag'
  },
  {
    id: 'peternakan',
    badge: 'Sektor 04',
    category: 'Peternakan & Puskeswan',
    title: 'Kesehatan Hewan & Inseminasi Buatan',
    desc: 'Pelayanan medik veteriner gratis Pusat Kesehatan Hewan (Puskeswan), jemput bola vaksinasi booster PMK ke kandang warga, dan layanan kawin suntik bibit sapi Simmental.',
    highlight: 'Layanan Jemput Bola & Proteksi PMK 95%+'
  }
];

const newsArticles = [
  {
    id: 1,
    title: 'Agrowisata Sawah Baruah Talawi Hilie: Kolaborasi Pemdes, DKP3, dan Balai Penyuluh Hadirkan Pertanian Produktif Terpadu',
    category: 'Pertanian & Alsintan',
    date: 'Jumat, 04 September 2026',
    dateIso: '2026-09-04',
    author: 'Humas DKP3 Sawahlunto',
    readTime: '4 menit baca',
    featured: true,
    image: 'assets/hero-dkp3.jpg',
    imageCaption: 'Hamparan persawahan terasering Sawah Baruah Talawi Hilie yang dikembangkan menjadi sentra agrowisata edukatif dan lumbung pangan produktif Sawahlunto.',
    excerpt: 'Kawasan persawahan hamparan Sawah Baruah di Desa Talawi Hilie resmi bertransformasi menjadi percontohan agrowisata edukatif berbasis ketahanan pangan dan budidaya tanaman hortikultura ramah lingkungan.',
    lead: 'Kawasan persawahan hamparan Sawah Baruah yang berlokasi di Desa Talawi Hilie, Kecamatan Talawi, kini resmi menjelma sebagai salah satu sentra percontohan agrowisata berbasis ketahanan pangan terpadu di Kota Sawahlunto.',
    tags: ['Pertanian', 'Agrowisata', 'Talawi', 'BPP', 'Ketahanan Pangan'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Kawasan persawahan hamparan Sawah Baruah yang berlokasi di Desa Talawi Hilie, Kecamatan Talawi, kini resmi menjelma sebagai salah satu sentra percontohan agrowisata berbasis ketahanan pangan terpadu di Kota Sawahlunto. Transformasi ini terwujud berkat sinergi strategis antara Pemerintah Desa Talawi Hilie, Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto, serta Balai Penyuluh Pertanian (BPP) Kecamatan Talawi.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Integrasi Pertanian Multi-Komoditas dan Wisata Edukasi
      </h3>
      <p>
        Kepala Dinas Ketahanan Pangan, Pertanian dan Perikanan Kota Sawahlunto, Heni Purwaningsih, SP, MP, dalam peninjauan lapangan menyatakan bahwa pengembangan kawasan Sawah Baruah tidak hanya diarahkan untuk menarik minat wisatawan lokal maupun regional, melainkan memiliki fungsi esensial sebagai benteng kedaulatan pangan dan wahana edukasi budidaya modern bagi generasi muda.
      </p>
      <p>
        "Kami mengintegrasikan sistem pertanian multi-komoditas di hamparan seluas lebih dari 25 hektar ini. Selain tanaman padi varietas unggul tahan hama, kelompok tani setempat kami dampingi untuk menanam cabai merah keriting, jagung hibrida, hingga komoditas hortikultura sayuran dataran rendah. Saluran irigasi yang tertata rapi juga dimanfaatkan untuk budidaya ikan air tawar larik," jelas Heni Purwaningsih.
      </p>

      <blockquote class="border-l-4 border-[#0A2E20] bg-[#EEF4F0] rounded-r-2xl p-6 my-8 italic text-black/85 text-lg leading-relaxed">
        "Agrowisata Sawah Baruah membuktikan bahwa pertanian tradisi bila dikolaborasikan dengan mekanisasi alsintan dan manajemen terpadu mampu menghasilkan nilai tambah ekonomi berlipat ganda bagi para petani kita."
        <span class="block not-italic font-semibold text-sm text-[#0A2E20] mt-3">- Dinas Ketahanan Pangan, Pertanian dan Perikanan Kota Sawahlunto</span>
      </blockquote>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Peningkatan Prasarana dan Pendampingan Berkelanjutan
      </h3>
      <p>
        Pemerintah Desa Talawi Hilie bersama lembaga adat dan kelompok tani setempat menyambut antusias program pendampingan intensif dari para penyuluh pertanian lapangan (PPL). Jalan usaha tani yang diperkeras dan jalur tracking pematang sawah yang diperlebar memungkinkan pengunjung berinteraksi langsung dengan para petani saat masa tanam maupun masa panen raya.
      </p>
      <p>
        DKP3 Sawahlunto berkomitmen untuk terus menyalurkan bantuan sarana produksi pertanian ramah lingkungan, termasuk pupuk organik cair, bibit bersertifikat, dan pendampingan pengelolaan limbah jerami menjadi kompos organik. Agrowisata ini diproyeksikan menjadi percontohan replikasi bagi desa dan kelurahan lain di seluruh pelosok Kota Sawahlunto.
      </p>
    `
  },
  {
    id: 2,
    title: 'Panen Serentak Cabai dan Jagung di Hamparan Sawah Baruah: DKP3 Serahkan Bantuan Alsintan Modern',
    category: 'Pertanian & Alsintan',
    date: 'Selasa, 01 September 2026',
    dateIso: '2026-09-01',
    author: 'Tim Peliputan DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/panen-pangan.jpg',
    imageCaption: 'Hasil panen raya cabai merah keriting dan jagung manis kelompok tani binaan DKP3 Kota Sawahlunto siap dipasok ke pasar lokal.',
    excerpt: 'Kegiatan panen serentak komoditas hortikultura cabai merah dan jagung di hamparan Sawah Baruah dirangkai dengan penyerahan bantuan traktor roda dua, kultivator, dan mesin pengolah kopi kepada kelompok tani.',
    lead: 'Para petani yang tergabung dalam gabungan kelompok tani (Gapoktan) di hamparan Sawah Baruah menggelar panen serentak komoditas hortikultura cabai merah keriting dan jagung pipil.',
    tags: ['Panen Raya', 'Cabai', 'Jagung', 'Alsintan', 'Mekanisasi'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Para petani yang tergabung dalam gabungan kelompok tani (Gapoktan) di hamparan Sawah Baruah menggelar panen serentak komoditas hortikultura cabai merah keriting dan jagung pipil. Panen raya ini mencatatkan hasil panen yang menggembirakan dengan produktivitas mencapai 8,4 ton per hektar untuk jagung dan 6,2 ton per hektar untuk cabai merah.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Pemberian Sarana Alsintan untuk Percepatan Produksi
      </h3>
      <p>
        Hadir langsung dalam agenda panen serentak tersebut Kepala DKP3 didampingi unsur Forkopimda, para camat, serta puluhan ketua kelompok tani se-Kecamatan Talawi. Momentum keberhasilan panen ini turut dirangkai dengan penyerahan bantuan sarana mekanisasi alat mesin pertanian (Alsintan) bersumber dari APBD Kota dan Dana Alokasi Khusus (DAK) Kementerian Pertanian.
      </p>
      <p>
        Bantuan yang diserahterimakan meliputi 6 unit traktor roda dua, 4 unit kultivator pengolah bedengan tanah, 10 unit pompa air sentrifugal untuk antisipasi kemarau, serta 2 unit mesin pengolah pulper dan roaster kopi untuk mendukung hilirisasi hasil kebun perkebunan rakyat di wilayah perbukitan.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Menekan Inflasi dan Mengamankan Pasokan Pangan
      </h3>
      <p>
        "Modernisasi alat mesin pertanian merupakan kunci utama untuk efisiensi biaya produksi dan memangkas waktu pengolahan lahan. Di tengah tantangan perubahan iklim global, pemanfaatan mekanisasi serta ketepatan kalender tanam yang dirumuskan tim penyuluh kami terbukti mampu mengamankan pasokan pangan warga Sawahlunto," tutur Heni Purwaningsih.
      </p>
      <p>
        Hasil panen cabai merah keriting dari hamparan Sawah Baruah langsung disalurkan ke Pasar Sawahlunto dan pasar kecamatan guna menjaga stabilitas harga cabai di pasaran konsumen, sehingga inflasi daerah pada sektor bahan pangan tetap berada dalam koridor yang terkendali.
      </p>
    `
  },
  {
    id: 3,
    title: 'Perkuat Ketahanan Pangan Keluarga, DKP3 Tebar 750 Benih Ikan Nila dan Bina POKMASWAS Bersama Talawi',
    category: 'Perikanan Air Tawar',
    date: 'Jumat, 28 Agustus 2026',
    dateIso: '2026-08-28',
    author: 'Bidang Perikanan DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/perikanan-irigasi.jpg',
    imageCaption: 'Pelepasan benih ikan nila ke saluran irigasi beton bersih hamparan sawah oleh tim penyuluh perikanan DKP3 bersama warga kelompok tani.',
    excerpt: 'Optimalisasi saluran irigasi teknis dilakukan DKP3 melalui penebaran 750 benih ikan nila unggul serta pengukuhan Kelompok Masyarakat Pengawas (POKMASWAS) untuk menjaga kelestarian ekosistem perairan.',
    lead: 'Bidang Perikanan Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto melaksanakan kegiatan restocking dan pemanfaatan saluran irigasi tersier melalui penebaran 750 ekor benih ikan nila merah dan hitam kualitas unggul.',
    tags: ['Perikanan', 'Ikan Nila', 'Irigasi', 'POKMASWAS', 'Restocking'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Bidang Perikanan Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto melaksanakan kegiatan restocking dan pemanfaatan saluran irigasi tersier melalui penebaran 750 ekor benih ikan nila merah dan hitam kualitas unggul di saluran irigasi Kelompok Tani Maju Basamo, Talawi.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Manfaat Ganda: Ketahanan Pangan dan Kebersihan Lingkungan
      </h3>
      <p>
        Program pemanfaatan saluran irigasi mengalir untuk budidaya perikanan air tawar ini merupakan bagian dari strategi ganda DKP3: pertama, menciptakan sumber protein hewani segar yang mudah diakses warga tani; kedua, menumbuhkan kesadaran kolektif masyarakat agar menjaga saluran irigasi tetap bersih, jernih, dan bebas dari timbunan sampah plastik.
      </p>
      <p>
        Bersamaan dengan penebaran benih, DKP3 bersama aparat desa mengukuhkan kepengurusan Kelompok Masyarakat Pengawas (POKMASWAS) Perairan Umum Bersama Talawi Hilie. POKMASWAS bertugas mengawasi kelestarian debit air, mencegah penangkapan ikan dengan metode merusak, serta merawat keramba pembatas air.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Target Perluasan ke 10 Titik Saluran Irigasi
      </h3>
      <p>
        Kepala Bidang Perikanan DKP3 menjelaskan bahwa benih ikan nila yang ditebar berasal dari Balai Benih Ikan (BBI) lokal yang telah melalui proses karantina dan seleksi ketahanan penyakit. "Saluran irigasi yang mendapat aliran air pegunungan yang jernih memiliki kandungan oksigen terlarut sangat baik. Dalam waktu 3 hingga 4 bulan ke depan, benih-benih ini telah siap dipanen untuk konsumsi kelompok maupun dibagikan ke keluarga yang berisiko stunting," ungkapnya.
      </p>
      <p>
        DKP3 menargetkan program budidaya irigasi terpadu ini akan diperluas ke 10 titik saluran irigasi desa lainnya di Kecamatan Barangin, Silungkang, dan Lembah Segar sepanjang tahun anggaran berjalan.
      </p>
    `
  },
  {
    id: 4,
    title: 'Apresiasi Dedikasi Garda Terdepan Pangan: DKP3 Serahkan Penghargaan Kelembagaan dan Ketenagaan Penyuluhan Teladan',
    category: 'Penyuluhan & SDM',
    date: 'Senin, 24 Agustus 2026',
    dateIso: '2026-08-24',
    author: 'Sekretariat DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-dkp3.jpg',
    imageCaption: 'Penyerahan piagam penghargaan penyuluh pertanian teladan tingkat Kota Sawahlunto oleh Kepala DKP3.',
    excerpt: 'Pemberian penghargaan tahunan bagi penyuluh pertanian PNS, THL-TBPP, dan Penyuluh Swadaya berprestasi sebagai wujud apresiasi atas pengabdian mendampingi kelompok tani di pelosok Sawahlunto.',
    lead: 'Keberhasilan sektor pertanian dan ketahanan pangan di Kota Sawahlunto tidak terlepas dari dedikasi dan kerja keras para penyuluh pertanian yang setiap hari berada di tengah-tengah hamparan sawah dan ladang masyarakat.',
    tags: ['Penyuluh', 'Penghargaan', 'BPP', 'Kelembagaan', 'SDM Pertanian'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Keberhasilan sektor pertanian dan ketahanan pangan di Kota Sawahlunto tidak terlepas dari dedikasi dan kerja keras para penyuluh pertanian yang setiap hari berada di tengah-tengah hamparan sawah dan ladang masyarakat. Untuk itu, DKP3 menggelar Penyerahan Penghargaan Kelembagaan dan Ketenagaan Penyuluhan Pertanian Teladan dan Berprestasi Tingkat Kota Sawahlunto.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Lima Kategori Utama Teladan Pertanian
      </h3>
      <p>
        Penghargaan terbagi dalam lima kategori utama: Balai Penyuluh Pertanian (BPP) Berprestasi, Penyuluh Pertanian PNS Teladan, Tenaga Harian Lepas Tenaga Bantu Penyuluh Pertanian (THL-TBPP) Teladan, Penyuluh Pertanian Swadaya Teladan, serta Gabungan Kelompok Tani (Gapoktan) Mandiri Berprestasi.
      </p>
      <p>
        Kepala DKP3 Heni Purwaningsih menegaskan bahwa peran penyuluh saat ini telah berevolusi bukan sekadar mengajarkan teknik bercocok tanam, melainkan bertindak sebagai konsultan agribisnis, fasilitator akses permodalan KUR Pertanian, dan jembatan adopsi teknologi digital pertanian bagi petani milenial.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Penyuluh Sebagai Garda Terdepan Kedaulatan Daerah
      </h3>
      <p>
        "Kami sangat bangga dengan komitmen para penyuluh kita. Di tengah medan geografis perbukitan Sawahlunto yang bergelombang, para penyuluh tetap hadir mendampingi petani mengendalikan serangan hama wereng, mengenalkan sistem tanam jajar legowo, dan melatih pembuatan pupuk hayati cair secara mandiri," puji Heni.
      </p>
      <p>
        Para pemenang penghargaan berhak mendapatkan piagam resmi Wali Kota, dana pembinaan pengembangan kelembagaan, serta diusulkan mewakili Kota Sawahlunto pada seleksi ketenagaan penyuluhan pertanian berprestasi tingkat Provinsi Sumatera Barat.
      </p>
    `
  },
  {
    id: 5,
    title: 'Jaga Daya Tahan Pasokan: DKP3 Pastikan Cadangan Beras Aman dan Gelorakan Gerakan Pekarangan Pangan Bergizi',
    category: 'Ketahanan Pangan',
    date: 'Selasa, 18 Agustus 2026',
    dateIso: '2026-08-18',
    author: 'Bidang Ketahanan Pangan DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/panen-pangan.jpg',
    imageCaption: 'Pemeriksaan berkala mutu cadangan pangan beras pemerintah daerah di gudang logistik DKP3 Kota Sawahlunto.',
    excerpt: 'Stok Cadangan Pangan Pemerintah Daerah (CPPD) di gudang logistik dipastikan aman, diiringi pembagian 2.000 bibit tanaman cabai dan sayuran polybag untuk optimalisasi pekarangan keluarga.',
    lead: 'Menghadapi potensi fluktuasi iklim, Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto memastikan bahwa posisi stok Cadangan Beras Pemerintah Daerah (CBPD) berada dalam kondisi sangat aman.',
    tags: ['Cadangan Beras', 'P2B', 'Kedaulatan Pangan', 'Stunting', 'Pekarangan'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Menghadapi potensi fluktuasi iklim dan ancaman ketidakpastian cuaca, Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto memastikan bahwa posisi stok Cadangan Beras Pemerintah Daerah (CBPD) berada dalam kondisi sangat aman dan mencukupi untuk memenuhi kebutuhan darurat masyarakat.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Audit Stok Fisik dan Mutu Beras Terjaga
      </h3>
      <p>
        Hasil audit tim pengawas mutu pangan DKP3 bersama Perum Bulog Cabang Solok menunjukkan stok fisik beras cadangan pemerintah Kota Sawahlunto yang tersimpan di gudang logistik mencapai lebih dari 45 ton dengan kualitas mutu medium plus yang terjaga higienis dan berkala diuji laboratorium.
      </p>
      <p>
        Seiring dengan pengamanan stok beras hulu, DKP3 mengencangkan hilir ketahanan pangan skala rumah tangga melalui program inovasi Gerakan Pekarangan Pangan Bergizi (P2B). Gerakan ini menyasar kelompok wanita tani (KWT) dan dasawisma di empat kecamatan.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Penyaluran Ribuan Bibit Polybag untuk Rumah Tangga
      </h3>
      <p>
        Pada tahap awal sosialisasi, DKP3 telah menyalurkan 2.000 bibit cabai rawit, cabai keriting, terong, tomat, serta media tanam polybag dan pupuk kandang matang. Program ini dirancang untuk menekan pengeluaran belanja dapur keluarga sekaligus menyediakan sumber pangan segar kaya vitamin pencegah stunting pada anak balita.
      </p>
      <p>
        "Jika setiap rumah tangga di Sawahlunto memiliki 5 sampai 10 polybag cabai dan sayuran di pekarangan rumahnya, warga tidak perlu cemas saat harga cabai di pasar melonjak. Kemandirian pangan dimulai dari halaman rumah kita sendiri," tegas Heni Purwaningsih.
      </p>
    `
  },
  {
    id: 6,
    title: 'Puskeswan Sawahlunto Gencarkan Vaksinasi PMK dan Layanan Inseminasi Buatan Jemput Bola ke Kandang Peternak',
    category: 'Peternakan & Puskeswan',
    date: 'Kamis, 06 Agustus 2026',
    dateIso: '2026-08-06',
    author: 'Medik Veteriner DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/hero-dkp3.jpg',
    imageCaption: 'Dokter hewan DKP3 Kota Sawahlunto melakukan pemeriksaan klinis dan vaksinasi hewan ternak warga.',
    excerpt: 'Tim medik veteriner Puskeswan DKP3 Sawahlunto mendatangi langsung kandang peternak sapi dan kambing untuk memberikan vaksinasi booster PMK, vitamin, dan layanan kawin suntik gratis.',
    lead: 'Memastikan populasi ternak ruminansia terbebas dari ancaman Penyakit Mulut dan Kuku (PMK), tim medik veteriner Pusat Kesehatan Hewan (Puskeswan) DKP3 Kota Sawahlunto secara intensif menjalankan program layanan jemput bola.',
    tags: ['Puskeswan', 'Peternakan', 'Vaksin PMK', 'Inseminasi Buatan', 'Kesehatan Ternak'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Memastikan populasi ternak ruminansia terbebas dari ancaman Penyakit Mulut dan Kuku (PMK) serta penyakit Lumpy Skin Disease (LSD), tim medik veteriner Pusat Kesehatan Hewan (Puskeswan) DKP3 Kota Sawahlunto secara intensif menjalankan program layanan jemput bola langsung ke kandang-kandang peternak rakyat.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Pelayanan Terpadu Medik Veteriner Tanpa Biaya
      </h3>
      <p>
        Layanan jemput bola ini mencakup pemeriksaan klinis kesehatan umum, pemberian vitamin neurotropik dan obat cacing terpadu, penyemprotan disinfektan kandang, serta penyuntikan vaksinasi booster PMK.
      </p>
      <p>
        Selain tindakan preventif penyakit menular, dokter hewan dan inseminator DKP3 melayani permintaan Inseminasi Buatan (IB) atau kawin suntik menggunakan semen beku pejantan unggul varietas Sapi Simmental, Limousin, dan Brahman. Layanan ini diberikan tanpa dipungut biaya retribusi guna memotivasi peternak memperbesar skala usaha ternak mereka.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Tingkat Proteksi Kawanan Ternak di Atas 95 Persen
      </h3>
      <p>
        "Kesehatan hewan ternak berdampak langsung pada mutu daging konsumsi masyarakat dan nilai jual ternak peternak kita. Dengan pemantauan rutin Puskeswan, status Kota Sawahlunto tetap terkontrol dengan tingkat kesembuhan dan proteksi antibodi kawanan ternak di atas 95 persen," ungkap dokter hewan koordinator Puskeswan Sawahlunto.
      </p>
      <p>
        Peternak yang membutuhkan layanan darurat medik veteriner dapat menghubungi nomor call center Puskeswan DKP3 atau berkoordinasi melalui kelompok tani ternak di masing-masing desa.
      </p>
    `
  },
  {
    id: 7,
    title: 'Dukung Penilaian Adipura Tahap II, DKP3 Gerakkan Petani Jaga Kebersihan Sentra Pertanian dan Saluran Irigasi',
    category: 'Pertanian & Alsintan',
    date: 'Rabu, 12 Agustus 2026',
    dateIso: '2026-08-12',
    author: 'Tim Sanitasi Pangan DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/perikanan-irigasi.jpg',
    imageCaption: 'Aksi gotong royong aparatur DKP3 dan kelompok tani membersihkan saluran drainase dan irigasi di Silungkang.',
    excerpt: 'Gerakan pembersihan terpadu di kawasan sentra pertanian, rumah potong hewan, dan sepanjang aliran irigasi guna menyukseskan penilaian Adipura Kota Sawahlunto sekaligus menjaga sanitasi pangan.',
    lead: 'Dalam rangka menyukseskan tahapan penilaian Adipura Tahap II di Kota Sawahlunto, jajaran DKP3 menggerakkan seluruh aparatur bersama komunitas petani.',
    tags: ['Adipura', 'Sanitasi', 'Irigasi', 'Lingkungan', 'RPH'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Dalam rangka menyukseskan tahapan penilaian Adipura Tahap II di Kota Sawahlunto, jajaran DKP3 menggerakkan seluruh aparatur bersama komunitas petani, peternak, dan pengelola Rumah Potong Hewan (RPH) Lubang Panjang untuk melaksanakan aksi pembersihan lingkungan pertanian secara terpadu.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Pembersihan Jaringan Irigasi dan Pengelolaan Limbah
      </h3>
      <p>
        Fokus aksi kebersihan diarahkan pada pembersihan gulma, endapan lumpur, dan sampah kemasan anorganik di sepanjang 12 kilometer jaringan irigasi persawahan, pemilahan limbah kotoran ternak menjadi pupuk biogas di sentra peternakan sapi Talawi, serta penataan area kandang transit RPH.
      </p>
      <p>
        Penyelenggaraan pertanian ramah lingkungan menjadi salah satu indikator penting dalam instrumen penilaian kota bersih dan berkelanjutan. DKP3 juga menyosialisasikan larangan membuang botol atau sachet bekas pestisida sintetis ke badan sungai atau pematang sawah.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Penyediaan Drop Box Khusus Limbah Pertanian
      </h3>
      <p>
        "Kami menyediakan drop box khusus penampungan limbah wadah pestisida di setiap kantor BPP kecamatan. Limbah Bahan Berbahaya dan Beracun (B3) pertanian ini nantinya akan dikelola sesuai standar lingkungan hidup agar tidak mencemari mata air dan habitat perikanan darat kita," terang koordinator lapangan DKP3.
      </p>
      <p>
        Sinergi kebersihan ini membuktikan bahwa sektor pertanian di Kota Sawahlunto tidak hanya berorientasi pada peningkatan tonase panen, tetapi juga menjunjung tinggi etika kelestarian bentang alam warisan dunia yang asri.
      </p>
    `
  },
  {
    id: 8,
    title: 'Geliat Komoditas Perkebunan: DKP3 Fasilitasi Pelatihan Pascapanen Kopi Robusta dan Arabika Bukit Gadang',
    category: 'Pertanian & Alsintan',
    date: 'Rabu, 29 Juli 2026',
    dateIso: '2026-07-29',
    author: 'Bidang Perkebunan DKP3',
    readTime: '3 menit baca',
    featured: false,
    image: 'assets/panen-pangan.jpg',
    imageCaption: 'Sortasi biji kopi petik merah kelompok tani perkebunan Bukit Gadang binaan DKP3 Kota Sawahlunto.',
    excerpt: 'Pemberdayaan petani kopi di lereng perbukitan Sawahlunto melalui transfer teknologi pemilahan biji petik merah dan fermentasi alami guna mendongkrak citarasa kopi lokal bernilai tinggi.',
    lead: 'Potensi perkebunan rakyat di kawasan dataran tinggi Bukit Gadang dan Lumindai terus diasah oleh DKP3 Kota Sawahlunto.',
    tags: ['Kopi Sawahlunto', 'Perkebunan', 'Pascapanen', 'Hilirisasi', 'UMKM Tani'],
    content: `
      <p class="text-xl sm:text-2xl font-medium text-black/90 leading-relaxed mb-8">
        Potensi perkebunan rakyat di kawasan dataran tinggi Bukit Gadang dan Lumindai terus diasah oleh DKP3 Kota Sawahlunto. Melalui program pembinaan hilirisasi hasil kebun, DKP3 menyelenggarakan bimbingan teknis penanganan pascapanen kopi robusta dan arabika bagi 30 perwakilan petani muda.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Standarisasi Petik Merah dan Metode Fermentasi
      </h3>
      <p>
        Pelatihan menitikberatkan pada standar pemetikan biji gelondong merah sempurna (full red cherry), metode penjemuran meja para-para (solar dome dryer), serta teknik fermentasi basah (full wash) dan fermentasi madu (honey process) yang higienis.
      </p>
      <p>
        Berdasarkan hasil uji cita rasa (cupping test) oleh tim juri profesional asosiasi kopi Sumatera Barat, kopi dari perkebunan rakyat Sawahlunto memiliki profil rasa unik dengan aroma rempah manis alami dan tingkat keasaman yang seimbang berkat tanah perbukitan vulkanik yang kaya mineral.
      </p>

      <h3 class="font-primary font-bold text-2xl sm:text-3xl text-[#0A2E20] mt-10 mb-4">
        Meningkatkan Nilai Jual Green Bean Petani
      </h3>
      <p>
        "Kami tidak ingin petani Sawahlunto hanya menjual biji kopi mentah asalan dengan harga murah ke pedagang perantara. Melalui standarisasi pascapanen ini, nilai jual green bean meningkat hingga tiga kali lipat, dan bahkan dapat langsung diserap oleh gerai-gerai kedai kopi modern di Sawahlunto maupun Padang," tegas Heni Purwaningsih.
      </p>
      <p>
        Ke depan, DKP3 akan mendampingi kelompok tani kopi setempat untuk mendapatkan sertifikasi Indikasi Geografis dan izin edar resmi agar kopi Sawahlunto mampu menembus jaringan retail nasional.
      </p>
    `
  }
];

const unduhFilesData = [
  { name: 'Rencana Strategis (Renstra) DKP3 Sawahlunto 2021-2026', size: '5.8 MB', type: 'PDF', desc: 'Rencana jangka menengah arah kebijakan kedaulatan pangan daerah.' },
  { name: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) 2025', size: '3.4 MB', type: 'PDF', desc: 'Evaluasi capaian target produksi pertanian dan perikanan tahun 2025.' },
  { name: 'Buku Saku Panduan Pengendalian Hama & Penyakit Padi Sawah', size: '4.1 MB', type: 'PDF', desc: 'Pedoman penanganan hama wereng coklat dan formula hayati organik.' },
  { name: 'Standar Operasional Prosedur (SOP) Bantuan Alsintan & Traktor', size: '1.2 MB', type: 'PDF', desc: 'Alur administrasi permohonan pinjam pakai alat mesin pertanian bagi kelompok tani.' },
  { name: 'SOP Pelayanan Puskeswan & Inseminasi Buatan Ternak Unggul', size: '980 KB', type: 'PDF', desc: 'Prosedur pemeriksaan medik veteriner dan kawin suntik sapi Simmental gratis.' }
];

if (typeof window !== 'undefined') {
  window.newsArticles = newsArticles;
  window.newsCategories = newsCategories;
  window.telemetryData = telemetryData;
  window.coreSectors = coreSectors;
  window.unduhFilesData = unduhFilesData;
}
