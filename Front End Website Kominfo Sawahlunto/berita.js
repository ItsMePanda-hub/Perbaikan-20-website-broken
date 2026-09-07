/* ================================================================
   berita.js — Logika Halaman Portal Berita Diskominfo Sawahlunto
   (Direct Link to Article Page, Zero Emojis, No Popup Card)
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

  // 2. Parse URL parameters (e.g. ?category=Olahraga or ?q=search)
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

  // 3. Render Featured Article (Direct link to berita-detail.html)
  function renderFeaturedNews() {
    if (!featuredContainer || typeof newsArticles === 'undefined') return;
    const featured = newsArticles.find((a) => a.featured) || newsArticles[0];
    if (!featured) return;

    featuredContainer.innerHTML = `
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12">
        <div class="max-w-3xl space-y-4">
          <div class="flex items-center gap-3">
            <span class="inline-block px-3.5 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-semibold uppercase tracking-wider">
              Sorotan Utama - ${featured.category}
            </span>
            <span class="text-xs text-gray-300 font-secondary font-medium">
              ${featured.readTime || '3 menit baca'}
            </span>
          </div>

          <h3 class="font-primary font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
            <a href="berita-detail.html?id=${featured.id}" class="hover:text-sky-200 transition">
              ${featured.title}
            </a>
          </h3>

          <p class="text-sm sm:text-base text-gray-200 font-secondary line-clamp-3 leading-relaxed">
            ${featured.excerpt}
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-sky-300 font-secondary">
            <span>Tanggal: ${featured.date}</span>
            <span>Penulis: ${featured.author}</span>
          </div>
        </div>

        <div class="flex-shrink-0">
          <a href="berita-detail.html?id=${featured.id}" class="btn-pill px-8 py-3.5 rounded-full text-base sm:text-lg font-medium inline-block shadow-lg">
            Baca Berita Lengkap
          </a>
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
        if (currentSort === 'latest') return new Date(b.dateIso) - new Date(a.dateIso);
        if (currentSort === 'oldest') return new Date(a.dateIso) - new Date(b.dateIso);
        if (currentSort === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
  }

  // 6. Render News Grid (Direct link to berita-detail.html)
  function renderNewsGrid() {
    if (!newsGrid) return;
    const filtered = getFilteredArticles();

    if (newsCountLabel) {
      newsCountLabel.textContent = `Menampilkan ${filtered.length} Berita`;
    }

    if (filtered.length === 0) {
      newsGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (paginationControls) paginationControls.innerHTML = '';
      return;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
    }

    const totalPages = Math.ceil(filtered.length / articlesPerPage);
    if (currentPage > totalPages) currentPage = 1;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedArticles = filtered.slice(startIndex, startIndex + articlesPerPage);

    newsGrid.innerHTML = paginatedArticles.map((article) => {
      const dateParts = article.date.split(',');
      const dayPart = dateParts[0] ? dateParts[0] + ',' : '';
      const restDate = dateParts[1] ? dateParts[1].trim() : article.date;

      return `
        <article class="news-card p-8 sm:p-10 lg:p-11 min-h-[460px] lg:min-h-[500px]">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="inline-block px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-medium tracking-wide uppercase">
                ${article.category}
              </span>
              <span class="text-xs text-gray-400 font-secondary font-medium">
                ${article.readTime || '3 menit'}
              </span>
            </div>
            
            <h3 class="news-card-title text-xl sm:text-2xl lg:text-[25px]">
              <a href="berita-detail.html?id=${article.id}" class="hover:text-sky-200 transition">
                ${article.title}
              </a>
            </h3>

            <p class="mt-4 text-xs sm:text-sm text-gray-300 font-secondary line-clamp-3 leading-relaxed">
              ${article.excerpt}
            </p>
          </div>

          <div class="flex items-end justify-between pt-8 border-t border-white/10 mt-6">
            <div class="text-white text-base sm:text-lg lg:text-[19px] font-secondary font-medium leading-snug">
              ${dayPart}<br>${restDate}
            </div>
            <a href="berita-detail.html?id=${article.id}" class="btn-pill px-7 py-2.5 rounded-full text-sm sm:text-base font-medium inline-block text-center">
              Selengkapnya
            </a>
          </div>
        </article>
      `;
    }).join('');

    renderPagination(totalPages);
  }

  // 7. Render Pagination
  function renderPagination(totalPages) {
    if (!paginationControls) return;
    if (totalPages <= 1) {
      paginationControls.innerHTML = '';
      return;
    }

    let buttons = [];

    // Prev button
    buttons.push(`
      <button 
        onclick="changePage(${currentPage - 1})" 
        class="px-4 py-2 rounded-full border border-black/20 bg-white/70 hover:bg-white text-xs sm:text-sm font-medium transition ${currentPage === 1 ? 'opacity-40 pointer-events-none' : ''}"
        ${currentPage === 1 ? 'disabled' : ''}
      >
        Sebelumnya
      </button>
    `);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
      const isCurrent = i === currentPage;
      buttons.push(`
        <button 
          onclick="changePage(${i})" 
          class="w-9 h-9 rounded-full text-xs sm:text-sm font-semibold transition ${isCurrent ? 'bg-[#181f4d] text-white shadow-md' : 'bg-white/70 hover:bg-white text-black border border-black/20'}"
        >
          ${i}
        </button>
      `);
    }

    // Next button
    buttons.push(`
      <button 
        onclick="changePage(${currentPage + 1})" 
        class="px-4 py-2 rounded-full border border-black/20 bg-white/70 hover:bg-white text-xs sm:text-sm font-medium transition ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : ''}"
        ${currentPage === totalPages ? 'disabled' : ''}
      >
        Berikutnya
      </button>
    `);

    paginationControls.innerHTML = buttons.join('');
  }

  // Global window functions for inline onclick handlers
  window.filterByCategory = function (category) {
    currentCategory = category;
    currentPage = 1;
    renderCategoryPills();
    renderNewsGrid();
  };

  window.changePage = function (page) {
    currentPage = page;
    renderNewsGrid();
    const gridEl = document.getElementById('newsGrid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  window.resetFilters = function () {
    currentCategory = 'Semua';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    currentPage = 1;
    renderCategoryPills();
    renderNewsGrid();
  };

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      currentPage = 1;
      if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !searchQuery);
      renderNewsGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      currentPage = 1;
      renderNewsGrid();
    });
  }

  // Sort selector handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderNewsGrid();
    });
  }

  // Profil Modal
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

  // Unduh Modal
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

  // Global Escape Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProfilModal();
      window.closeUnduhModal();
    }
  });

  // Initial Run
  parseUrlParams();
  renderFeaturedNews();
  renderCategoryPills();
  renderNewsGrid();
})();
