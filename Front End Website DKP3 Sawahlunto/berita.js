/* ================================================================
   berita.js — Logika Halaman Warta Lapangan DKP3 Sawahlunto
   (Direct Link to Full Page, Journalistic Card Layout, Zero Emojis)
   ================================================================ */

(function () {
  // State
  let currentCategory = 'Semua';
  let searchQuery = '';
  let currentSort = 'latest';
  let currentPage = 1;
  const articlesPerPage = 6;

  // DOM Elements
  const featuredContainer = document.getElementById('featuredNewsContainer');
  const pillsContainer = document.getElementById('categoryPillsContainer');
  const newsGrid = document.getElementById('newsGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const sortSelect = document.getElementById('sortSelect');
  const newsCountLabel = document.getElementById('newsCountLabel');
  const emptyState = document.getElementById('emptyState');
  const paginationControls = document.getElementById('paginationControls');

  // 1. Initialize Word Animation (Failsafe)
  (function initWordAnimation() {
    const elements = document.querySelectorAll('[data-animate-words]');
    elements.forEach((el) => {
      el.style.opacity = '1';
    });
  })();

  // 2. Parse URL parameters (e.g. ?category=Pertanian or ?q=search)
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('category')) {
      const cat = params.get('category');
      if (typeof newsCategories !== 'undefined' && newsCategories.includes(cat)) {
        currentCategory = cat;
      }
    }
    if (params.has('q')) {
      searchQuery = params.get('q').trim();
      if (searchInput) searchInput.value = searchQuery;
      if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !searchQuery);
    }
  }

  // 3. Render Featured Headline Story
  function renderFeaturedNews() {
    if (!featuredContainer || typeof newsArticles === 'undefined') return;
    const featured = newsArticles.find((a) => a.featured) || newsArticles[0];
    if (!featured) return;

    featuredContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-4">
          <div class="flex items-center gap-3">
            <span class="inline-block px-3.5 py-1 rounded-full bg-[#B45309] text-white text-xs font-semibold uppercase tracking-wider">
              Sorotan Utama &bull; ${featured.category}
            </span>
            <span class="text-xs text-emerald-200">
              ${featured.date} &bull; ${featured.readTime || '4 menit baca'}
            </span>
          </div>

          <h3 class="font-primary font-bold text-2xl sm:text-4xl lg:text-[40px] leading-tight text-white">
            <a href="berita-detail.html?id=${featured.id}" class="hover:text-emerald-200 transition">
              ${featured.title}
            </a>
          </h3>

          <p class="text-sm sm:text-base text-gray-200 font-secondary leading-relaxed line-clamp-3">
            ${featured.excerpt}
          </p>

          <div class="pt-3 flex items-center justify-between gap-4">
            <span class="text-xs text-emerald-300 font-medium">Penulis: ${featured.author}</span>
            <a href="berita-detail.html?id=${featured.id}" class="btn-pill-ochre px-7 py-2.5 text-sm font-medium inline-block">
              Baca Berita Lengkap
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="rounded-2xl overflow-hidden border border-white/20 aspect-video lg:aspect-square">
            <img src="${featured.image || 'assets/hero-dkp3.jpg'}" alt="${featured.title}" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    `;
  }

  // 4. Render Category Filter Pills
  function renderCategoryPills() {
    if (!pillsContainer || typeof newsCategories === 'undefined') return;
    pillsContainer.innerHTML = newsCategories.map((cat) => {
      const isActive = cat === currentCategory;
      return `
        <button 
          class="category-pill whitespace-nowrap ${isActive ? 'active' : ''}" 
          onclick="filterByCategory('${cat}')"
          type="button"
        >
          ${cat}
        </button>
      `;
    }).join('');
  }

  // 5. Filter & Sort Articles
  function getFilteredArticles() {
    if (typeof newsArticles === 'undefined') return [];
    return newsArticles
      .filter((article) => {
        const matchesCategory = currentCategory === 'Semua' || article.category === currentCategory;
        const matchesSearch = !searchQuery ||
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (currentSort === 'latest') return (b.dateIso || '').localeCompare(a.dateIso || '');
        if (currentSort === 'oldest') return (a.dateIso || '').localeCompare(b.dateIso || '');
        if (currentSort === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
  }

  // 6. Render News Grid (Journal Cards)
  function renderNewsGrid(articles) {
    if (!newsGrid) return;

    if (articles.length === 0) {
      newsGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (newsCountLabel) newsCountLabel.textContent = '0 Berita Ditemukan';
      if (paginationControls) paginationControls.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (newsCountLabel) newsCountLabel.textContent = `Menampilkan ${articles.length} Berita`;

    // Pagination slice
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    if (currentPage > totalPages) currentPage = 1;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

    newsGrid.innerHTML = paginatedArticles.map((article) => {
      return `
        <article class="journal-card">
          <div class="journal-card-image-wrap">
            <img src="${article.image || 'assets/hero-dkp3.jpg'}" alt="${article.title}">
            <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A2E20]/90 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
              ${article.category}
            </span>
          </div>
          <div class="p-6 sm:p-7 flex flex-col justify-between flex-1">
            <div>
              <span class="text-xs text-[#71847A] block mb-2">${article.date}</span>
              <h4 class="journal-headline text-lg sm:text-xl mb-3">
                <a href="berita-detail.html?id=${article.id}">
                  ${article.title}
                </a>
              </h4>
              <p class="text-xs sm:text-sm text-[#4A5B53] line-clamp-3 leading-relaxed">
                ${article.excerpt}
              </p>
            </div>
            <div class="pt-6 border-t border-[#0A2E20]/10 mt-6 flex items-center justify-between">
              <span class="text-xs text-[#71847A]">${article.readTime || '3 menit baca'}</span>
              <a href="berita-detail.html?id=${article.id}" class="btn-pill-forest px-5 py-2 text-xs font-medium inline-block">
                Selengkapnya
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    renderPagination(totalPages);
  }

  // 7. Render Pagination Controls
  function renderPagination(totalPages) {
    if (!paginationControls || totalPages <= 1) {
      if (paginationControls) paginationControls.innerHTML = '';
      return;
    }

    let buttons = '';
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      buttons += `
        <button 
          onclick="goToPage(${i})" 
          class="w-10 h-10 rounded-full font-medium text-sm transition ${
            isActive
              ? 'bg-[#0A2E20] text-white font-bold'
              : 'bg-white hover:bg-[#FAF8F5] text-[#0A2E20] border border-[#0A2E20]/20'
          }"
        >
          ${i}
        </button>
      `;
    }
    paginationControls.innerHTML = buttons;
  }

  // Global actions
  window.filterByCategory = function (cat) {
    currentCategory = cat;
    currentPage = 1;
    renderCategoryPills();
    renderNewsGrid(getFilteredArticles());
  };

  window.goToPage = function (page) {
    currentPage = page;
    renderNewsGrid(getFilteredArticles());
    window.scrollTo({ top: newsGrid.offsetTop - 120, behavior: 'smooth' });
  };

  window.resetFilters = function () {
    currentCategory = 'Semua';
    searchQuery = '';
    currentPage = 1;
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    renderCategoryPills();
    renderNewsGrid(getFilteredArticles());
  };

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      currentPage = 1;
      if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !searchQuery);
      renderNewsGrid(getFilteredArticles());
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderNewsGrid(getFilteredArticles());
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderNewsGrid(getFilteredArticles());
    });
  }

  // Modals
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
          <div class="w-10 h-10 rounded-xl bg-[#B45309]/30 text-[#F59E0B] flex items-center justify-center font-bold text-xs uppercase">
            ${f.type || 'PDF'}
          </div>
          <div>
            <h5 class="font-medium text-white group-hover:text-[#F59E0B] transition text-sm leading-snug">${f.name}</h5>
            <span class="text-xs text-gray-400 font-normal">Ukuran: ${f.size || '1.5 MB'}</span>
          </div>
        </div>
        <button onclick="handleDownloadSim('${f.name}')" class="px-4 py-2 rounded-full bg-white text-[#0A2E20] hover:bg-[#FAF8F5] text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 focus:outline-none border border-[#0A2E20]/15">
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
    alert(`Memulai unduhan dokumen resmi DKP3 Sawahlunto:\n"${docName}"`);
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

  // Init
  parseUrlParams();
  renderFeaturedNews();
  renderCategoryPills();
  renderNewsGrid(getFilteredArticles());
})();
