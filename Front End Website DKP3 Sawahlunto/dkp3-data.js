/**
 * ============================================================
 * dkp3-data.js — Basis Data Resmi DKP3 Kota Sawahlunto
 * Dinas Ketahanan Pangan, Pertanian dan Perikanan
 * ZERO EMOJIS — Clean civic UI/UX philosophy
 * ============================================================
 */

window.DKP3Data = {
  // 1. Profil & Kontak Instansi
  institution: {
    name: "Dinas Ketahanan Pangan, Pertanian dan Perikanan",
    shortName: "DKP3 Kota Sawahlunto",
    government: "Pemerintah Kota Sawahlunto",
    province: "Sumatera Barat",
    address: "Jl. Ir. H. Amran Nur No. 2, 3, 5, Kota Sawahlunto, Sumatera Barat 25422",
    phone: "(0754) 61110",
    email: "dkp3@sawahluntokota.go.id",
    officeHours: "Senin - Kamis: 07.30 - 16.00 WIB | Jumat: 07.30 - 16.30 WIB",
    leadership: {
      name: "Heni Purwaningsih, SP, MP",
      title: "Kepala Dinas Ketahanan Pangan, Pertanian dan Perikanan",
      photo: "assets/panen-pangan.jpg",
      quote: "Mewujudkan kedaulatan pangan daerah yang tangguh, memperkuat kelembagaan petani dan pembudidaya ikan, serta mendorong inovasi pertanian berkelanjutan yang berdaya saing di Kota Sawahlunto."
    }
  },

  // 2. Pantauan Harga Komoditas Pangan Strategis (SPH Bapok)
  bapokPrices: [
    { commodity: "Beras Sokan Solok", price: "Rp 16.500", unit: "kg", status: "Stabil", trend: "tetap", market: "Pasar Sawahlunto" },
    { commodity: "Beras Anak Daro", price: "Rp 17.000", unit: "kg", status: "Stabil", trend: "tetap", market: "Pasar Sawahlunto" },
    { commodity: "Cabai Merah Keriting", price: "Rp 38.000", unit: "kg", status: "Turun", trend: "panen", market: "Pasar Talawi" },
    { commodity: "Bawang Merah Lokal", price: "Rp 32.000", unit: "kg", status: "Stabil", trend: "tetap", market: "Pasar Sawahlunto" },
    { commodity: "Jagung Pipil Kering", price: "Rp 6.200", unit: "kg", status: "Stabil", trend: "tetap", market: "Pasar Sapan" },
    { commodity: "Ikan Nila Kolam Segar", price: "Rp 34.000", unit: "kg", status: "Melimpah", trend: "restocking", market: "Pasar Sawahlunto" },
    { commodity: "Daging Sapi Murni", price: "Rp 140.000", unit: "kg", status: "Stabil", trend: "tetap", market: "Pasar Sawahlunto" },
    { commodity: "Telur Ayam Ras", price: "Rp 28.500", unit: "kg", status: "Stabil", trend: "tetap", market: "Pasar Silungkang" }
  ],

  // 3. Empat Pilar Layanan Publik DKP3
  publicServices: [
    {
      id: "ketahanan-pangan",
      badge: "Kedaulatan Pangan",
      title: "Ketahanan & Distribusi Pangan Daerah",
      subtitle: "Pengelolaan Cadangan Beras & P2B",
      desc: "Pengelolaan Cadangan Pangan Pemerintah Daerah (CPPD), stabilisasi pasokan dan pemantauan harga pangan harian, fasilitasi Gerakan Pekarangan Pangan Bergizi (P2B), serta pengawasan keamanan mutu PSAT."
    },
    {
      id: "pertanian-alsintan",
      badge: "Mekanisasi Tani",
      title: "Pertanian & Prasarana Alsintan",
      subtitle: "Bantuan Traktor, Pompa & Pupuk",
      desc: "Pengembangan kawasan sentra padi dan hortikultura di Sawah Baruah Talawi, peminjaman dan penyaluran alsintan modern (traktor roda dua/empat, kultivator, pompa air), penyaluran pupuk bersubsidi, dan pengendalian hama terpadu."
    },
    {
      id: "perikanan-budidaya",
      badge: "Perikanan Air Tawar",
      title: "Budidaya & Konservasi Perairan",
      subtitle: "Restocking Benih Nila & POKMASWAS",
      desc: "Penebaran berkala ribuan benih ikan nila dan mas di saluran irigasi teknis hamparan sawah, pembinaan Kelompok Pengawas Masyarakat (POKMASWAS), dan pelatihan pembuatan pakan ikan mandiri berbasis bahan lokal."
    },
    {
      id: "peternakan-puskeswan",
      badge: "Kesehatan Hewan",
      title: "Peternakan & Layanan Puskeswan",
      subtitle: "Vaksinasi PMK & Inseminasi Buatan",
      desc: "Pelayanan medik veteriner gratis di Pusat Kesehatan Hewan (Puskeswan), jemput bola vaksinasi booster PMK dan rabies ke kandang peternak, layanan Inseminasi Buatan (IB) sapi unggul, dan sertifikasi NKV."
    }
  ],

  // 4. Koleksi Berita Lapangan & Publikasi Resmi
  newsArticles: [
    {
      id: "1",
      title: "Agrowisata Sawah Baruah Talawi Hilie: Kolaborasi Pemdes, DKP3, dan Balai Penyuluh Hadirkan Pertanian Produktif Terpadu",
      slug: "agrowisata-sawah-baruah-talawi-hilie-kolaborasi-pemdes-dkp3",
      category: "Pertanian & Alsintan",
      date: "04 September 2026",
      readTime: "4 Menit",
      author: "Humas DKP3 Sawahlunto",
      image: "assets/hero-dkp3.jpg",
      caption: "Hamparan persawahan terasering Sawah Baruah Talawi Hilie yang kini dikembangkan menjadi sentra agrowisata edukatif dan lumbung pangan produktif Sawahlunto.",
      excerpt: "Kawasan persawahan hamparan Sawah Baruah di Desa Talawi Hilie resmi bertransformasi menjadi percontohan agrowisata edukatif berbasis ketahanan pangan dan budidaya tanaman hortikultura ramah lingkungan.",
      tags: ["Pertanian", "Agrowisata", "Talawi", "BPP", "Ketahanan Pangan"],
      content: [
        "Kawasan persawahan hamparan Sawah Baruah yang berlokasi di Desa Talawi Hilie, Kecamatan Talawi, kini resmi menjelma sebagai salah satu sentra percontohan agrowisata berbasis ketahanan pangan terpadu di Kota Sawahlunto. Transformasi ini terwujud berkat sinergi strategis antara Pemerintah Desa Talawi Hilie, Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto, serta Balai Penyuluh Pertanian (BPP) Kecamatan Talawi.",
        "Kepala Dinas Ketahanan Pangan, Pertanian dan Perikanan Kota Sawahlunto, Heni Purwaningsih, SP, MP, dalam peninjauan lapangan menyatakan bahwa pengembangan kawasan Sawah Baruah tidak hanya diarahkan untuk menarik minat wisatawan lokal maupun regional, melainkan memiliki fungsi esensial sebagai benteng kedaulatan pangan dan wahana edukasi budidaya modern bagi generasi muda.",
        "\"Kami mengintegrasikan sistem pertanian multi-komoditas di hamparan seluas lebih dari 25 hektar ini. Selain tanaman padi varietas unggul tahan hama, kelompok tani setempat kami dampingi untuk menanam cabai merah keriting, jagung hibrida, hingga komoditas hortikultura sayuran dataran rendah. Saluran irigasi yang tertata rapi juga dimanfaatkan untuk budidaya ikan air tawar larik,\" jelas Heni Purwaningsih.",
        "Pemerintah Desa Talawi Hilie bersama lembaga adat dan kelompok tani setempat menyambut antusias program pendampingan intensif dari para penyuluh pertanian lapangan (PPL). Jalan usaha tani yang diperkeras dan jalur tracking pematang sawah yang diperlebar memungkinkan pengunjung berinteraksi langsung dengan para petani saat masa tanam maupun masa panen raya.",
        "DKP3 Sawahlunto berkomitmen untuk terus menyalurkan bantuan sarana produksi pertanian ramah lingkungan, termasuk pupuk organik cair, bibit bersertifikat, dan pendampingan pengelolaan limbah jerami menjadi kompos organik. Agrowisata ini diproyeksikan menjadi percontohan replikasi bagi desa dan kelurahan lain di seluruh pelosok Kota Sawahlunto."
      ]
    },
    {
      id: "2",
      title: "Panen Serentak Cabai dan Jagung di Hamparan Sawah Baruah: DKP3 dan Wali Kota Serahkan Bantuan Alsintan Modern",
      slug: "panen-serentak-cabai-jagung-alsintan-talawi",
      category: "Pertanian & Alsintan",
      date: "01 September 2026",
      readTime: "3 Menit",
      author: "Tim Peliputan DKP3",
      image: "assets/panen-pangan.jpg",
      caption: "Hasil panen raya cabai merah keriting dan jagung manis kelompok tani binaan DKP3 Kota Sawahlunto siap dipasok ke pasar lokal.",
      excerpt: "Kegiatan panen serentak komoditas hortikultura cabai merah dan jagung di hamparan Sawah Baruah dirangkai dengan penyerahan bantuan traktor roda dua, kultivator, dan mesin pengolah kopi kepada kelompok tani.",
      tags: ["Panen Raya", "Cabai", "Jagung", "Alsintan", "Wali Kota"],
      content: [
        "Para petani yang tergabung dalam gabungan kelompok tani (Gapoktan) di hamparan Sawah Baruah menggelar panen serentak komoditas hortikultura cabai merah keriting dan jagung pipil. Panen raya ini mencatatkan hasil panen yang menggembirakan dengan produktivitas mencapai 8,4 ton per hektar untuk jagung dan 6,2 ton per hektar untuk cabai merah.",
        "Hadir langsung dalam agenda panen serentak tersebut Wali Kota Sawahlunto didampingi Kepala DKP3 Heni Purwaningsih, SP, MP, unsur Forkopimda, para camat, serta puluhan ketua kelompok tani se-Kecamatan Talawi. Momentum keberhasilan panen ini turut dirangkai dengan penyerahan bantuan sarana mekanisasi alat mesin pertanian (Alsintan) bersumber dari APBD Kota dan Dana Alokasi Khusus (DAK) Kementerian Pertanian.",
        "Bantuan yang diserahterimakan meliputi 6 unit traktor roda dua, 4 unit kultivator pengolah bedengan tanah, 10 unit pompa air sentrifugal untuk antisipasi kemarau, serta 2 unit mesin pengolah pulper dan roaster kopi untuk mendukung hilirisasi hasil kebun perkebunan rakyat di wilayah perbukitan.",
        "\"Modernisasi alat mesin pertanian merupakan kunci utama untuk efisiensi biaya produksi dan memangkas waktu pengolahan lahan. Di tengah tantangan perubahan iklim global, pemanfaatan mekanisasi serta ketepatan kalender tanam yang dirumuskan tim penyuluh kami terbukti mampu mengamankan pasokan pangan warga Sawahlunto,\" tutur Heni Purwaningsih di sela penyerahan simbolis traktor kepada perwakilan petani.",
        "Hasil panen cabai merah keriting dari hamparan Sawah Baruah langsung disalurkan ke Pasar Sawahlunto dan pasar kecamatan guna menjaga stabilitas harga cabai di pasaran konsumen, sehingga inflasi daerah pada sektor bahan pangan tetap berada dalam koridor yang terkendali."
      ]
    },
    {
      id: "3",
      title: "Perkuat Ketahanan Pangan Keluarga, DKP3 Tebar 750 Benih Ikan Nila dan Bina POKMASWAS Bersama Talawi",
      slug: "penebaran-benih-ikan-nila-saluran-irigasi-pokmaswas",
      category: "Perikanan Air Tawar",
      date: "28 Agustus 2026",
      readTime: "3 Menit",
      author: "Bidang Perikanan DKP3",
      image: "assets/perikanan-irigasi.jpg",
      caption: "Pelepasan benih ikan nila ke saluran irigasi beton bersih hamparan sawah oleh tim penyuluh perikanan DKP3 bersama warga kelompok tani.",
      excerpt: "Optimalisasi saluran irigasi teknis dilakukan DKP3 melalui penebaran 750 benih ikan nila unggul serta pengukuhan Kelompok Masyarakat Pengawas (POKMASWAS) untuk menjaga kelestarian ekosistem perairan.",
      tags: ["Perikanan", "Ikan Nila", "Irigasi", "POKMASWAS", "Restocking"],
      content: [
        "Bidang Perikanan Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto melaksanakan kegiatan restocking dan pemanfaatan saluran irigasi tersier melalui penebaran 750 ekor benih ikan nila merah dan hitam kualitas unggul di saluran irigasi Kelompok Tani Maju Basamo, Talawi.",
        "Program pemanfaatan saluran irigasi mengalir untuk budidaya perikanan air tawar ini merupakan bagian dari strategi ganda DKP3: pertama, menciptakan sumber protein hewani segar yang mudah diakses warga tani; kedua, menumbuhkan kesadaran kolektif masyarakat agar menjaga saluran irigasi tetap bersih, jernih, dan bebas dari timbunan sampah plastik.",
        "Bersamaan dengan penebaran benih, DKP3 bersama aparat desa mengukuhkan kepengurusan Kelompok Masyarakat Pengawas (POKMASWAS) Perairan Umum Bersama Talawi Hilie. POKMASWAS bertugas mengawasi kelestarian debit air, mencegah penangkapan ikan dengan metode merusak (seperti racun dan strum listrik), serta merawat keramba pembatas air.",
        "Kepala Bidang Perikanan DKP3 menjelaskan bahwa benih ikan nila yang ditebar berasal dari Balai Benih Ikan (BBI) lokal yang telah melalui proses karantina dan seleksi ketahanan penyakit. \"Saluran irigasi yang mendapat aliran air pegunungan yang jernih memiliki kandungan oksigen terlarut sangat baik. Dalam waktu 3 hingga 4 bulan ke depan, benih-benih ini telah siap dipanen untuk konsumsi kelompok maupun dibagikan ke keluarga yang berisiko stunting,\" ungkapnya.",
        "DKP3 menargetkan program budidaya irigasi terpadu ini akan diperluas ke 10 titik saluran irigasi desa lainnya di Kecamatan Barangin, Silungkang, dan Lembah Segar sepanjang tahun anggaran berjalan."
      ]
    },
    {
      id: "4",
      title: "Apresiasi Dedikasi Garda Terdepan Pangan: DKP3 Serahkan Penghargaan Kelembagaan dan Ketenagaan Penyuluhan Teladan",
      slug: "penghargaan-penyuluh-pertanian-teladan-sawahlunto",
      category: "Penyuluhan & SDM",
      date: "24 Agustus 2026",
      readTime: "3 Menit",
      author: "Sekretariat DKP3",
      image: "assets/hero-dkp3.jpg",
      caption: "Penyerahan piagam penghargaan penyuluh pertanian teladan tingkat Kota Sawahlunto oleh Kepala DKP3.",
      excerpt: "Pemberian penghargaan tahunan bagi penyuluh pertanian PNS, THL-TBPP, dan Penyuluh Swadaya berprestasi sebagai wujud apresiasi atas pengabdian mendampingi kelompok tani di pelosok Sawahlunto.",
      tags: ["Penyuluh", "Penghargaan", "BPP", "Kelembagaan", "SDM Pertanian"],
      content: [
        "Keberhasilan sektor pertanian dan ketahanan pangan di Kota Sawahlunto tidak terlepas dari dedikasi dan kerja keras para penyuluh pertanian yang setiap hari berada di tengah-tengah hamparan sawah dan ladang masyarakat. Untuk itu, DKP3 menggelar Penyerahan Penghargaan Kelembagaan dan Ketenagaan Penyuluhan Pertanian Teladan dan Berprestasi Tingkat Kota Sawahlunto.",
        "Penghargaan terbagi dalam lima kategori utama: Balai Penyuluh Pertanian (BPP) Berprestasi, Penyuluh Pertanian PNS Teladan, Tenaga Harian Lepas Tenaga Bantu Penyuluh Pertanian (THL-TBPP) Teladan, Penyuluh Pertanian Swadaya Teladan, serta Gabungan Kelompok Tani (Gapoktan) Mandiri Berprestasi.",
        "Kepala DKP3 Heni Purwaningsih, SP, MP, menegaskan bahwa peran penyuluh saat ini telah berevolusi bukan sekadar mengajarkan teknik bercocok tanam, melainkan bertindak sebagai konsultan agribisnis, fasilitator akses permodalan KUR Pertanian, dan jembatan adopsi teknologi digital pertanian bagi petani milenial.",
        "\"Kami sangat bangga dengan komitmen para penyuluh kita. Di tengah medan geografis perbukitan Sawahlunto yang bergelombang, para penyuluh tetap hadir mendampingi petani mengendalikan serangan hama wereng, mengenalkan sistem tanam jajar legowo, dan melatih pembuatan pupuk hayati cair secara mandiri,\" puji Heni.",
        "Para pemenang penghargaan berhak mendapatkan piagam resmi Wali Kota, dana pembinaan pengembangan kelembagaan, serta diusulkan mewakili Kota Sawahlunto pada seleksi ketenagaan penyuluhan pertanian berprestasi tingkat Provinsi Sumatera Barat."
      ]
    },
    {
      id: "5",
      title: "Jaga Daya Tahan Pasokan: DKP3 Pastikan Cadangan Beras Aman dan Gelorakan Gerakan Pekarangan Pangan Bergizi",
      slug: "cadangan-beras-pemerintah-gerakan-p2b-sawahlunto",
      category: "Ketahanan Pangan",
      date: "18 Agustus 2026",
      readTime: "3 Menit",
      author: "Bidang Ketahanan Pangan DKP3",
      image: "assets/panen-pangan.jpg",
      caption: "Pemeriksaan berkala mutu cadangan pangan beras pemerintah daerah di gudang logistik DKP3 Kota Sawahlunto.",
      excerpt: "Stok Cadangan Pangan Pemerintah Daerah (CPPD) di gudang logistik dipastikan aman, diiringi pembagian 2.000 bibit tanaman cabai dan sayuran polybag untuk optimalisasi pekarangan keluarga.",
      tags: ["Cadangan Beras", "P2B", "Kedaulatan Pangan", "Stunting", "Pekarangan"],
      content: [
        "Menghadapi potensi fluktuasi iklim dan ancaman gelombang El Nino, Dinas Ketahanan Pangan, Pertanian dan Perikanan (DKP3) Kota Sawahlunto memastikan bahwa posisi stok Cadangan Beras Pemerintah Daerah (CBPD) berada dalam kondisi sangat aman dan mencukupi untuk memenuhi kebutuhan darurat masyarakat.",
        "Hasil audit tim pengawas mutu pangan DKP3 bersama Perum Bulog Cabang Solok menunjukkan stok fisik beras cadangan pemerintah Kota Sawahlunto yang tersimpan di gudang logistik mencapai lebih dari 45 ton dengan kualitas mutu medium plus yang terjaga higienis dan berkala diuji laboratorium.",
        "Seiring dengan pengamanan stok beras hulu, DKP3 mengencangkan hilir ketahanan pangan skala rumah tangga melalui program inovasi Gerakan Pekarangan Pangan Bergizi (P2B). Gerakan ini menyasar kelompok wanita tani (KWT) dan dasawisma di empat kecamatan.",
        "Pada tahap awal sosialisasi, DKP3 telah menyalurkan 2.000 bibit cabai rawit, cabai keriting, terong, tomat, serta media tanam polybag dan pupuk kandang matang. Program ini dirancang untuk menekan pengeluaran belanja dapur keluarga sekaligus menyediakan sumber pangan segar kaya vitamin pencegah stunting pada anak balita.",
        "\"Jika setiap rumah tangga di Sawahlunto memiliki 5 sampai 10 polybag cabai dan sayuran di pekarangan rumahnya, warga tidak perlu cemas saat harga cabai di pasar melonjak. Kemandirian pangan dimulai dari halaman rumah kita sendiri,\" tegas Heni Purwaningsih."
      ]
    },
    {
      id: "6",
      title: "Puskeswan Sawahlunto Gencarkan Vaksinasi PMK dan Layanan Inseminasi Buatan Jemput Bola ke Kandang Peternak",
      slug: "pelayanan-kesehatan-hewan-puskeswan-pmk-inseminasi",
      category: "Peternakan & Puskeswan",
      date: "06 Agustus 2026",
      readTime: "3 Menit",
      author: "Medik Veteriner DKP3",
      image: "assets/hero-dkp3.jpg",
      caption: "Dokter hewan DKP3 Kota Sawahlunto melakukan pemeriksaan klinis dan vaksinasi hewan ternak warga.",
      excerpt: "Tim medik veteriner Puskeswan DKP3 Sawahlunto mendatangi langsung kandang peternak sapi dan kambing untuk memberikan vaksinasi booster PMK, vitamin, dan layanan kawin suntik gratis.",
      tags: ["Puskeswan", "Peternakan", "Vaksin PMK", "Inseminasi Buatan", "Kesehatan Ternak"],
      content: [
        "Memastikan populasi ternak ruminansia terbebas dari ancaman Penyakit Mulut dan Kuku (PMK) serta penyakit Lumpy Skin Disease (LSD), tim medik veteriner Pusat Kesehatan Hewan (Puskeswan) DKP3 Kota Sawahlunto secara intensif menjalankan program layanan jemput bola langsung ke kandang-kandang peternak rakyat.",
        "Layanan jemput bola ini mencakup pemeriksaan klinis kesehatan umum, pemberian vitamin neurotropik dan obat cacing terpadu, penyemprotan disinfektan kandang, serta penyuntikan vaksinasi booster PMK.",
        "Selain tindakan preventif penyakit menular, dokter hewan dan inseminator DKP3 melayani permintaan Inseminasi Buatan (IB) atau kawin suntik menggunakan semen beku pejantan unggul varietas Sapi Simmental, Limousin, dan Brahman. Layanan ini diberikan tanpa dipungut biaya retribusi guna memotivasi peternak memperbesar skala usaha ternak mereka.",
        "\"Kesehatan hewan ternak berdampak langsung pada mutu daging konsumsi masyarakat dan nilai jual ternak peternak kita. Dengan pemantauan rutin Puskeswan, status Kota Sawahlunto tetap terkontrol dengan tingkat kesembuhan dan proteksi antibodi kawanan ternak di atas 95 persen,\" ungkap dokter hewan koordinator Puskeswan Sawahlunto.",
        "Peternak yang membutuhkan layanan darurat medik veteriner dapat menghubungi nomor call center Puskeswan DKP3 atau berkoordinasi melalui kelompok tani ternak di masing-masing desa."
      ]
    },
    {
      id: "7",
      title: "Dukung Penilaian Adipura Tahap II, DKP3 Gerakkan Petani Jaga Kebersihan Sentra Pertanian dan Saluran Irigasi",
      slug: "adipura-kebersihan-sentra-pertanian-saluran-air",
      category: "Pertanian & Alsintan",
      date: "12 Agustus 2026",
      readTime: "3 Menit",
      author: "Tim Sanitasi Pangan DKP3",
      image: "assets/perikanan-irigasi.jpg",
      caption: "Aksi gotong royong aparatur DKP3 dan kelompok tani membersihkan saluran drainase dan irigasi di Silungkang.",
      excerpt: "Gerakan pembersihan terpadu di kawasan sentra pertanian, rumah potong hewan, dan sepanjang aliran irigasi guna menyukseskan penilaian Adipura Kota Sawahlunto sekaligus menjaga sanitasi pangan.",
      tags: ["Adipura", "Sanitasi", "Irigasi", "Lingkungan", "RPH"],
      content: [
        "Dalam rangka menyukseskan tahapan penilaian Adipura Tahap II di Kota Sawahlunto, jajaran DKP3 menggerakkan seluruh aparatur bersama komunitas petani, peternak, dan pengelola Rumah Potong Hewan (RPH) Lubang Panjang untuk melaksanakan aksi pembersihan lingkungan pertanian secara terpadu.",
        "Fokus aksi kebersihan diarahkan pada pembersihan gulma, endapan lumpur, dan sampah kemasan anorganik di sepanjang 12 kilometer jaringan irigasi persawahan, pemilahan limbah kotoran ternak menjadi pupuk biogas di sentra peternakan sapi Talawi, serta penataan area kandang transit RPH.",
        "Penyelenggaraan pertanian ramah lingkungan menjadi salah satu indikator penting dalam instrumen penilaian kota bersih dan berkelanjutan. DKP3 juga menyosialisasikan larangan membuang botol atau sachet bekas pestisida sintetis ke badan sungai atau pematang sawah.",
        "\"Kami menyediakan drop box khusus penampungan limbah wadah pestisida di setiap kantor BPP kecamatan. Limbah Bahan Berbahaya dan Beracun (B3) pertanian ini nantinya akan dikelola sesuai standar lingkungan hidup agar tidak mencemari mata air dan habitat perikanan darat kita,\" terang koordinator lapangan DKP3.",
        "Sinergi kebersihan ini membuktikan bahwa sektor pertanian di Kota Sawahlunto tidak hanya berorientasi pada peningkatan tonase panen, tetapi juga menjunjung tinggi etika kelestarian bentang alam warisan dunia yang asri."
      ]
    },
    {
      id: "8",
      title: "Geliat Komoditas Perkebunan: DKP3 Fasilitasi Pelatihan Pascapanen Kopi Robusta dan Arabika Bukit Gadang",
      slug: "inovasi-pengolahan-kopi-organik-bukit-gadang",
      category: "Pertanian & Alsintan",
      date: "29 Juli 2026",
      readTime: "3 Menit",
      author: "Bidang Perkebunan DKP3",
      image: "assets/panen-pangan.jpg",
      caption: "Sortasi biji kopi petik merah kelompok tani perkebunan Bukit Gadang binaan DKP3 Kota Sawahlunto.",
      excerpt: "Pemberdayaan petani kopi di lereng perbukitan Sawahlunto melalui transfer teknologi pemilahan biji petik merah dan fermentasi alami guna mendongkrak citarasa kopi lokal bernilai tinggi.",
      tags: ["Kopi Sawahlunto", "Perkebunan", "Pascapanen", "Hilirisasi", "UMKM Tani"],
      content: [
        "Potensi perkebunan rakyat di kawasan dataran tinggi Bukit Gadang dan Lumindai terus diasah oleh DKP3 Kota Sawahlunto. Melalui program pembinaan hilirisasi hasil kebun, DKP3 menyelenggarakan bimbingan teknis penanganan pascapanen kopi robusta dan arabika bagi 30 perwakilan petani muda.",
        "Pelatihan menitikberatkan pada standar pemetikan biji gelondong merah sempurna (full red cherry), metode penjemuran meja para-para (solar dome dryer), serta teknik fermentasi basah (full wash) dan fermentasi madu (honey process) yang higienis.",
        "Berdasarkan hasil uji cita rasa (cupping test) oleh tim juri profesional asosiasi kopi Sumatera Barat, kopi dari perkebunan rakyat Sawahlunto memiliki profil rasa unik dengan aroma rempah manis alami dan tingkat keasaman yang seimbang berkat tanah perbukitan vulkanik yang kaya mineral.",
        "\"Kami tidak ingin petani Sawahlunto hanya menjual biji kopi mentah asalan dengan harga murah ke pedagang perantara. Melalui standarisasi pascapanen ini, nilai jual green bean meningkat hingga tiga kali lipat, dan bahkan dapat langsung diserap oleh gerai-gerai kedai kopi modern di Sawahlunto maupun Padang,\" tegas Heni Purwaningsih saat menutup pelatihan.",
        "Ke depan, DKP3 akan mendampingi kelompok tani kopi setempat untuk mendapatkan sertifikasi Indikasi Geografis dan izin edar resmi agar kopi Sawahlunto mampu menembus jaringan retail nasional."
      ]
    }
  ],

  // 5. Dokumen Publik Resmi untuk Unduhan
  publicDocuments: [
    {
      title: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) DKP3 2025",
      category: "Akuntabilitas",
      size: "3.4 MB",
      fileType: "PDF",
      date: "Februari 2026",
      desc: "Laporan evaluasi capaian kinerja program ketahanan pangan, sasaran produksi pertanian dan perikanan tahun anggaran 2025."
    },
    {
      title: "Rencana Strategis (Renstra) DKP3 Kota Sawahlunto 2021-2026",
      category: "Perencanaan",
      size: "5.8 MB",
      fileType: "PDF",
      date: "Revisi 2024",
      desc: "Dokumen arah kebijakan makro, target indikator kinerja utama kedaulatan pangan, dan alokasi pembangunan prasarana pertanian lima tahunan."
    },
    {
      title: "Buku Saku Panduan Pengendalian Hama & Penyakit Padi Sawah",
      category: "Penyuluhan",
      size: "4.1 MB",
      fileType: "PDF",
      date: "Juli 2026",
      desc: "Buku panduan praktis bagi kelompok tani mengenali hama wereng batang coklat, penggerek batang, dan formula pestisida nabati."
    },
    {
      title: "Standar Operasional Prosedur (SOP) Permohonan Bantuan Alsintan",
      category: "Layanan Publik",
      size: "1.2 MB",
      fileType: "PDF",
      date: "Januari 2026",
      desc: "Tahapan verifikasi kelompok tani, kelengkapan proposal, dan sistem pinjam pakai traktor roda dua dan pompa air pertanian."
    },
    {
      title: "SOP Pelayanan Kesehatan Hewan & Inseminasi Buatan Puskeswan",
      category: "Layanan Publik",
      size: "980 KB",
      fileType: "PDF",
      date: "Maret 2026",
      desc: "Panduan alur pemeriksaan klinik hewan ternak, vaksinasi rabies, dan penjadwalan inseminasi buatan di Kota Sawahlunto."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.DKP3Data;
}
