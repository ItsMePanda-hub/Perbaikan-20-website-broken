/* ================================================================
   berita.js — Logika Interaktif Portal Berita Diskoperindag Sawahlunto
   (Direct Link to Full Article Page, Zero Emojis, No Popup Card)
   Palet: Forest Emerald, Songket Gold, Sage Pastel
   ================================================================ */

(function () {
  let currentCategory = 'Semua';
  let searchQuery = '';
  let currentPage = 1;
  const itemsPerPage = 6;

  document.addEventListener('DOMContentLoaded', () => {
    initCategoryPills();
    initSearch();
    renderArticles();
    setupMobileMenu();
  });

  // ============================================================
  // 1. CATEGORY FILTER PILLS
  // ============================================================
  function initCategoryPills() {
    const pillButtons = document.querySelectorAll('.category-pill');
    pillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pillButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'Semua';
        currentPage = 1;
        renderArticles();
      });
    });
  }

  // ============================================================
  // 2. LIVE SEARCH INPUT
  // ============================================================
  function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      currentPage = 1;
      renderArticles();
    });
  }

  // ============================================================
  // 3. FILTERING & RENDERING NEWS GRID
  // ============================================================
  function getFilteredArticles() {
    if (!window.DiskoperindagData || !window.DiskoperindagData.newsArticles) return [];
    const articles = window.DiskoperindagData.newsArticles;

    return articles.filter(art => {
      const matchCategory = (currentCategory === 'Semua') || (art.category === currentCategory);
      const matchSearch = !searchQuery ||
        art.title.toLowerCase().includes(searchQuery) ||
        art.excerpt.toLowerCase().includes(searchQuery) ||
        art.category.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });
  }

  function renderArticles() {
    const container = document.getElementById('berita-grid');
    const emptyState = document.getElementById('empty-state');
    const badge = document.getElementById('article-count-badge');
    const paginationContainer = document.getElementById('pagination-controls');

    if (!container) return;

    const filtered = getFilteredArticles();

    if (badge) {
      badge.textContent = `Menampilkan ${filtered.length} Berita Terverifikasi`;
    }

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    // Pagination slice
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    container.innerHTML = paginated.map(art => `
      <article class="news-card">
        <div class="news-card-img-wrap">
          <img src="${art.image}" alt="${escapeHTML(art.title)}" loading="lazy">
          <div class="absolute top-3 left-3 bg-[#0d3829]/95 text-white font-primary font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-[#c68a27]/30">
            ${escapeHTML(art.category)}
          </div>
        </div>
        <div class="news-card-body">
          <div class="text-xs text-white/70 font-medium mb-2">
            ${escapeHTML(art.date)} &bull; ${escapeHTML(art.readTime)}
          </div>
          <h4 class="news-card-title">
            <a href="berita-detail.html?id=${art.id}" class="hover:underline text-white">
              ${escapeHTML(art.title)}
            </a>
          </h4>
          <p class="news-card-text">
            ${escapeHTML(art.excerpt)}
          </p>
          <div class="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
            <a href="berita-detail.html?id=${art.id}" class="news-card-btn" id="news-card-read-${art.id}">
              Selengkapnya
            </a>
            <span class="text-xs text-white/60 font-medium">${escapeHTML(art.author)}</span>
          </div>
        </div>
      </article>
    `).join('');

    renderPagination(totalPages);
  }

  // ============================================================
  // 4. PAGINATION CONTROLS
  // ============================================================
  function renderPagination(totalPages) {
    const container = document.getElementById('pagination-controls');
    if (!container) return;

    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = '';

    // Prev button
    if (currentPage > 1) {
      html += `
        <button type="button" onclick="window.BeritaApp.setPage(${currentPage - 1})" class="px-4 py-2 rounded-full bg-white text-[#0d3829] font-primary font-bold text-xs shadow-sm hover:bg-[#0d3829] hover:text-white transition-all flex items-center gap-1 border border-[#0d3829]/15">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
          Sebelumnya
        </button>
      `;
    }

    for (let i = 1; i <= totalPages; i++) {
      const activeClass = (i === currentPage)
        ? 'bg-[#0d3829] text-white shadow-md border-2 border-[#c68a27]'
        : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200';
      html += `
        <button type="button" onclick="window.BeritaApp.setPage(${i})" class="w-9 h-9 rounded-full ${activeClass} font-primary font-bold text-xs transition-all flex items-center justify-center shadow-sm">
          ${i}
        </button>
      `;
    }

    // Next button
    if (currentPage < totalPages) {
      html += `
        <button type="button" onclick="window.BeritaApp.setPage(${currentPage + 1})" class="px-4 py-2 rounded-full bg-white text-[#0d3829] font-primary font-bold text-xs shadow-sm hover:bg-[#0d3829] hover:text-white transition-all flex items-center gap-1 border border-[#0d3829]/15">
          Berikutnya
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>
      `;
    }

    container.innerHTML = html;
  }

  // Exposed API
  window.BeritaApp = {
    setPage: function (p) {
      currentPage = p;
      renderArticles();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // Setup Mobile Menu
  function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  }

  // Helper Escape HTML
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Modal helpers
  window.openProfilModal = function() {
    const m = document.getElementById('profil-modal');
    if (m) { m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); }
  };
  window.closeProfilModal = function() {
    const m = document.getElementById('profil-modal');
    if (m) { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); }
  };
  window.openUnduhModal = function() {
    const m = document.getElementById('unduh-modal');
    if (m) { m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); }
  };
  window.closeUnduhModal = function() {
    const m = document.getElementById('unduh-modal');
    if (m) { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); }
  };
})();
