/* ================================================================
   berita-detail.js — Logika Halaman Berita Penuh Diskominfo Sawahlunto
   (Full Page Editorial News Layout, Zero Emojis, No Card Enclosure)
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
      title: 'Pemko Sawahlunto Berikan Dukungan Penuh Untuk Persiapan Kontingen Porprov 2026',
      category: 'Olahraga',
      date: 'Selasa, 25 Agustus 2026',
      author: 'Tim Liputan Diskominfo Sawahlunto',
      readTime: '4 menit baca',
      image: 'assets/hero.jpg',
      imageCaption: 'Dokumentasi resmi Pemerintah Kota Sawahlunto.',
      tags: ['Sawahlunto', 'Porprov 2026', 'KONI', 'Olahraga'],
      content: '<p>Konten berita resmi Pemerintah Kota Sawahlunto.</p>'
    };
  }

  // 3. Populate Page Metadata & Elements
  document.title = `${article.title} — Diskominfo Sawahlunto`;

  const metaPageTitle = document.getElementById('metaPageTitle');
  if (metaPageTitle) metaPageTitle.textContent = `${article.title} — Diskominfo Sawahlunto`;

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
  if (articleAuthor) articleAuthor.textContent = article.author || 'Tim Liputan Diskominfo Sawahlunto';

  const articleDate = document.getElementById('articleDate');
  if (articleDate) articleDate.textContent = article.date;

  const articleImage = document.getElementById('articleImage');
  if (articleImage) {
    articleImage.src = article.image || 'assets/hero.jpg';
    articleImage.alt = article.title;
  }

  const articleImageCaption = document.getElementById('articleImageCaption');
  if (articleImageCaption) {
    articleImageCaption.textContent = article.imageCaption || 'Dokumentasi resmi Pemerintah Kota Sawahlunto.';
  }

  const articleBody = document.getElementById('articleBody');
  if (articleBody) articleBody.innerHTML = article.content;

  // 4. Populate Tags
  const articleTags = document.getElementById('articleTags');
  if (articleTags) {
    const tags = article.tags || ['Sawahlunto', 'Pemerintahan', 'Diskominfo'];
    articleTags.innerHTML = tags.map((t) => `
      <span class="px-3.5 py-1.5 rounded-full bg-white/70 border border-black/15 text-black text-xs font-medium">
        #${t}
      </span>
    `).join('');
  }

  // 5. Render Related News Cards (Matching Body.jpg exactly: 3 navy cards with white text)
  const relatedContainer = document.getElementById('relatedNewsGrid');
  if (relatedContainer && typeof newsArticles !== 'undefined') {
    const otherArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

    relatedContainer.innerHTML = otherArticles.map((item) => {
      const dateParts = item.date.split(',');
      const dayPart = dateParts[0] ? dateParts[0] + ',' : '';
      const restDate = dateParts[1] ? dateParts[1].trim() : item.date;

      return `
        <article class="news-card p-8 sm:p-10 lg:p-11 min-h-[460px] lg:min-h-[500px]">
          <div>
            <span class="inline-block px-3 py-1 mb-4 rounded-full bg-sky-400/20 text-sky-200 text-xs font-medium uppercase tracking-wide">
              ${item.category}
            </span>
            <h3 class="news-card-title text-xl sm:text-2xl lg:text-[25px]">
              <a href="berita-detail.html?id=${item.id}" class="hover:text-sky-200 transition">
                ${item.title}
              </a>
            </h3>
          </div>

          <div class="flex items-end justify-between pt-8 border-t border-white/10 mt-6">
            <div class="text-white text-base sm:text-lg lg:text-[19px] font-secondary font-medium leading-snug">
              ${dayPart}<br>${restDate}
            </div>
            <a href="berita-detail.html?id=${item.id}" class="btn-pill px-7 py-2.5 rounded-full text-sm sm:text-base font-medium inline-block text-center">
              Selengkapnya
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // 6. Social Share Actions
  window.shareArticleDetail = function (platform) {
    const pageUrl = window.location.href;
    const shareText = encodeURIComponent(`${article.title} - Diskominfo Kota Sawahlunto`);

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
        btn.classList.add('bg-emerald-600');
        setTimeout(() => {
          btn.textContent = orig;
          btn.classList.remove('bg-emerald-600');
        }, 2000);
      }
    }).catch(() => {
      alert('Tautan disalin: ' + window.location.href);
    });
  };

  // 7. Profil Modal
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

  document.getElementById('closeProfilModal')?.addEventListener('click', window.closeProfilModal);
  document.getElementById('profilModalBackdrop')?.addEventListener('click', window.closeProfilModal);

  // 8. Unduh Modal
  window.openUnduhModal = function () {
    const container = document.getElementById('unduhListContainer');
    if (!container) return;

    const docs = (typeof unduhFilesData !== 'undefined') ? unduhFilesData : [
      { name: 'Rencana Strategis (Renstra) Diskominfo Sawahlunto 2021-2026', size: '2.4 MB', type: 'PDF' },
      { name: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah 2025', size: '3.1 MB', type: 'PDF' },
      { name: 'Buku Saku Masterplan Sawahlunto Smart City Terintegrasi', size: '5.8 MB', type: 'PDF' }
    ];

    container.innerHTML = docs.map((f) => `
      <div class="flex items-center justify-between rounded-2xl bg-white/5 hover:bg-white/10 transition p-4 text-white text-sm group border border-white/10">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-sky-400/20 text-sky-200 flex items-center justify-center font-bold text-xs uppercase">
            ${f.type || 'PDF'}
          </div>
          <div>
            <h5 class="font-medium text-white group-hover:text-sky-200 transition text-sm leading-snug">${f.name}</h5>
            <span class="text-xs text-gray-400 font-normal">Ukuran: ${f.size || '1.5 MB'}</span>
          </div>
        </div>
        <button onclick="handleDownloadSim('${f.name}')" class="px-4 py-1.5 rounded-full bg-white text-black hover:bg-sky-100 text-xs font-medium transition cursor-pointer flex items-center gap-1.5 focus:outline-none">
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
    alert(`Memulai unduhan dokumen resmi Diskominfo Sawahlunto:\n"${docName}"`);
  };

  window.closeUnduhModal = function () {
    const modal = document.getElementById('unduhModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  document.getElementById('closeUnduhModal')?.addEventListener('click', window.closeUnduhModal);
  document.getElementById('unduhModalBackdrop')?.addEventListener('click', window.closeUnduhModal);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProfilModal();
      window.closeUnduhModal();
    }
  });
})();
