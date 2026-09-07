/* ================================================================
   berita-detail.js — Logika Halaman Detail Warta Lingkungan DPKPLH Sawahlunto
   (Full Page Journalistic Layout, Zero Emojis, Zero Popups)
   ================================================================ */

(function () {
  // 1. Get article ID from URL parameter (e.g. ?id=2)
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = Number(urlParams.get('id')) || 1;

  // 2. Find article from newsArticles dataset
  let article = null;
  if (typeof newsArticles !== 'undefined') {
    article = newsArticles.find((item) => item.id === articleId) || newsArticles[0];
  }

  if (!article) {
    article = {
      id: 1,
      title: 'Sawahlunto Pertahankan Piala Adipura 2026: Sinergi Bersama Wujudkan Kota Bersih dan Lingkungan Berkelanjutan',
      category: 'Kebersihan & Sampah',
      date: 'Jumat, 04 September 2026',
      author: 'Tim Humas DPKPLH Sawahlunto',
      readTime: '4 menit baca',
      image: 'assets/adipura-lingkungan.jpg',
      imageCaption: 'Piala Adipura 2026 simbol komitmen bersama Pemko Sawahlunto dan masyarakat dalam kebersihan kota.',
      tags: ['Adipura2026', 'Kebersihan', 'LingkunganHidup', 'Sawahlunto', 'DPKPLH'],
      content: '<p>Konten warta lapangan resmi Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup Kota Sawahlunto.</p>'
    };
  }

  // 3. Populate Page Metadata & Elements
  document.title = `${article.title} — DPKPLH Sawahlunto`;

  const metaPageTitle = document.getElementById('metaPageTitle');
  if (metaPageTitle) metaPageTitle.textContent = `${article.title} — DPKPLH Sawahlunto`;

  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  if (breadcrumbCategory) breadcrumbCategory.textContent = article.category;

  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  if (breadcrumbTitle) breadcrumbTitle.textContent = article.title;

  const articleCategoryBadge = document.getElementById('articleCategoryBadge');
  if (articleCategoryBadge) articleCategoryBadge.textContent = article.category;

  const articleReadTime = document.getElementById('articleReadTime');
  if (articleReadTime) articleReadTime.textContent = article.readTime || '4 menit baca';

  const articleTitle = document.getElementById('articleTitle');
  if (articleTitle) articleTitle.textContent = article.title;

  const articleAuthor = document.getElementById('articleAuthor');
  if (articleAuthor) articleAuthor.textContent = article.author || 'Tim Humas DPKPLH Sawahlunto';

  const articleDate = document.getElementById('articleDate');
  if (articleDate) articleDate.textContent = article.date;

  const articleImage = document.getElementById('articleImage');
  if (articleImage) {
    articleImage.src = article.image || 'assets/hero-dpkplh.jpg';
    articleImage.alt = article.title;
  }

  const articleImageCaption = document.getElementById('articleImageCaption');
  if (articleImageCaption) {
    articleImageCaption.textContent = article.imageCaption || 'Dokumentasi resmi Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup Kota Sawahlunto.';
  }

  const articleBody = document.getElementById('articleBody');
  if (articleBody) articleBody.innerHTML = article.content;

  // 4. Populate Tags
  const articleTags = document.getElementById('articleTags');
  if (articleTags) {
    const tags = article.tags || ['Sawahlunto', 'Lingkungan', 'DPKPLH'];
    articleTags.innerHTML = tags.map((t) => `
      <span class="px-3.5 py-1.5 rounded-full bg-white border border-[#064E3B]/15 text-[#064E3B] text-xs font-medium">
        #${t}
      </span>
    `).join('');
  }

  // 5. Render Related Journal Cards with Photography
  const relatedContainer = document.getElementById('relatedNewsGrid');
  if (relatedContainer && typeof newsArticles !== 'undefined') {
    const otherArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

    relatedContainer.innerHTML = otherArticles.map((item) => {
      return `
        <article class="journal-card">
          <div class="journal-card-image-wrap">
            <img src="${item.image || 'assets/hero-dpkplh.jpg'}" alt="${item.title}">
            <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#064E3B]/90 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
              ${item.category}
            </span>
          </div>
          <div class="p-6 sm:p-7 flex flex-col justify-between flex-1">
            <div>
              <span class="text-xs text-[#738A80] block mb-2">${item.date}</span>
              <h4 class="journal-headline text-lg sm:text-xl mb-3">
                <a href="berita-detail.html?id=${item.id}">
                  ${item.title}
                </a>
              </h4>
              <p class="text-xs sm:text-sm text-[#4A6056] line-clamp-3 leading-relaxed">
                ${item.excerpt}
              </p>
            </div>
            <div class="pt-6 border-t border-[#064E3B]/10 mt-6 flex items-center justify-between">
              <span class="text-xs text-[#738A80]">${item.readTime || '3 menit baca'}</span>
              <a href="berita-detail.html?id=${item.id}" class="btn-pill-viridian px-5 py-2 text-xs font-medium inline-block">
                Selengkapnya
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // 6. Social Share Actions
  window.shareArticleDetail = function (platform) {
    const pageUrl = window.location.href;
    const shareText = encodeURIComponent(`${article.title} - DPKPLH Kota Sawahlunto`);

    if (platform === 'wa') {
      window.open(`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(pageUrl)}`, '_blank');
    } else if (platform === 'fb') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, '_blank');
    }
  };

  window.copyArticleDetailLink = function () {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.getElementById('btnCopyDetailLink');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Tautan Tersalin';
        btn.classList.add('bg-emerald-700');
        setTimeout(() => {
          btn.textContent = orig;
          btn.classList.remove('bg-emerald-700');
        }, 2000);
      }
    }).catch(() => {
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-6 right-6 z-50 bg-[#064E3B] text-white text-xs px-5 py-3 rounded-xl shadow-xl border border-white/20 transition-all';
      toast.textContent = 'Tautan warta disalin: ' + window.location.href;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    });
  };

  // 7. Modals
  window.openProfilModal = function () {
    const modal = document.getElementById('profilModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeProfilModal = function () {
    const modal = document.getElementById('profilModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  window.openUnduhModal = function () {
    const container = document.getElementById('unduhListContainer');
    if (!container) return;
    const docs = (typeof unduhFilesData !== 'undefined') ? unduhFilesData : [];
    container.innerHTML = docs.map((f) => `
      <div class="flex items-center justify-between rounded-2xl bg-white/5 hover:bg-white/10 transition p-4 text-white text-sm group border border-white/10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#C25E2C]/30 text-[#E07A4B] flex items-center justify-center font-bold text-xs uppercase">
            ${f.format || 'PDF'}
          </div>
          <div>
            <h5 class="font-medium text-white group-hover:text-[#E07A4B] transition text-sm leading-snug">${f.title}</h5>
            <span class="text-xs text-gray-400 font-normal">Ukuran: ${f.size || '1.5 MB'}</span>
          </div>
        </div>
        <button onclick="handleDownloadSim('${f.title}')" class="px-4 py-2 rounded-full bg-white text-[#064E3B] hover:bg-[#F4F8F5] text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 focus:outline-none shadow-sm">
          <span>Unduh</span>
        </button>
      </div>
    `).join('');

    const modal = document.getElementById('unduhModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  };

  window.handleDownloadSim = function (docName) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#064E3B] text-white text-xs px-5 py-3 rounded-xl shadow-xl border border-white/20 transition-all';
    toast.textContent = `Mengunduh berkas resmi DPKPLH: ${docName}`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 2500);
  };

  window.closeUnduhModal = function () {
    const modal = document.getElementById('unduhModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  document.getElementById('closeProfilModal')?.addEventListener('click', window.closeProfilModal);
  document.getElementById('profilModalBackdrop')?.addEventListener('click', window.closeProfilModal);
  document.getElementById('closeUnduhModal')?.addEventListener('click', window.closeUnduhModal);
  document.getElementById('unduhModalBackdrop')?.addEventListener('click', window.closeUnduhModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProfilModal();
      window.closeUnduhModal();
    }
  });
})();
