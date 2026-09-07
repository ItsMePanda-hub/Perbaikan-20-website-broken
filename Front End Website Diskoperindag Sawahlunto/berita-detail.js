/* ================================================================
   berita-detail.js — Logika Halaman Detail Berita Diskoperindag
   (Dedicated Full Article Page, Zero Emojis, Direct Navigation)
   Palet: Forest Emerald, Songket Gold, Sage Pastel
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderArticleDetail();
  setupMobileMenu();
});

function renderArticleDetail() {
  if (!window.DiskoperindagData || !window.DiskoperindagData.newsArticles) return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get('id'), 10) || 1;

  const articles = window.DiskoperindagData.newsArticles;
  let currentArticle = articles.find(a => a.id === articleId);

  // Fallback to first article if not found
  if (!currentArticle) {
    currentArticle = articles[0];
  }

  // Update Page Title
  const pageTitleEl = document.getElementById('page-title');
  if (pageTitleEl) {
    pageTitleEl.textContent = `${currentArticle.title} — Diskoperindag Kota Sawahlunto`;
  }

  // Update Breadcrumbs
  const breadcrumbCat = document.getElementById('breadcrumb-category');
  const breadcrumbTitle = document.getElementById('breadcrumb-title');
  if (breadcrumbCat) breadcrumbCat.textContent = currentArticle.category;
  if (breadcrumbTitle) breadcrumbTitle.textContent = currentArticle.title;

  // Update Category Badge & Title
  const badgeEl = document.getElementById('article-category-badge');
  const titleEl = document.getElementById('article-title');
  if (badgeEl) badgeEl.textContent = currentArticle.category;
  if (titleEl) titleEl.textContent = currentArticle.title;

  // Update Metadata
  const dateEl = document.querySelector('#article-date span');
  const readTimeEl = document.querySelector('#article-readtime span');
  const authorEl = document.querySelector('#article-author span');
  if (dateEl) dateEl.textContent = currentArticle.date;
  if (readTimeEl) readTimeEl.textContent = currentArticle.readTime;
  if (authorEl) authorEl.textContent = currentArticle.author;

  // Update Hero Image & Caption
  const heroImg = document.getElementById('article-hero-img');
  const captionEl = document.getElementById('article-caption');
  if (heroImg) {
    heroImg.src = currentArticle.image;
    heroImg.alt = currentArticle.title;
  }
  if (captionEl) {
    captionEl.textContent = `Liputan: ${currentArticle.title} — Sawahlunto`;
  }

  // Update Content Body
  const contentBody = document.getElementById('article-content-body');
  if (contentBody) {
    contentBody.innerHTML = currentArticle.content;
  }

  // Render Related News
  renderRelatedNews(currentArticle.id, currentArticle.category);
}

// ============================================================
// RENDER RELATED ARTICLES (3 CARDS, DIRECT NAV)
// ============================================================
function renderRelatedNews(currentId, currentCategory) {
  const container = document.getElementById('related-news-grid');
  if (!container || !window.DiskoperindagData) return;

  const articles = window.DiskoperindagData.newsArticles;
  
  // Prefer same category, then others
  let others = articles.filter(a => a.id !== currentId);
  others.sort((a, b) => {
    if (a.category === currentCategory && b.category !== currentCategory) return -1;
    if (a.category !== currentCategory && b.category === currentCategory) return 1;
    return 0;
  });

  const related3 = others.slice(0, 3);

  container.innerHTML = related3.map(art => `
    <article class="news-card">
      <div class="news-card-img-wrap">
        <img src="${art.image}" alt="${escapeHTML(art.title)}" loading="lazy">
        <div class="absolute top-3 left-3 bg-[#0d3829]/95 text-white font-primary font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#c68a27]/30">
          ${escapeHTML(art.category)}
        </div>
      </div>
      <div class="news-card-body p-5">
        <div class="text-[11px] text-white/70 font-medium mb-1.5">
          ${escapeHTML(art.date)}
        </div>
        <h4 class="font-primary font-bold text-base text-white line-clamp-2 leading-tight mb-2">
          <a href="berita-detail.html?id=${art.id}" class="hover:underline">
            ${escapeHTML(art.title)}
          </a>
        </h4>
        <p class="text-xs text-white/75 line-clamp-3 leading-relaxed mb-4">
          ${escapeHTML(art.excerpt)}
        </p>
        <div class="pt-3 border-t border-white/10 mt-auto">
          <a href="berita-detail.html?id=${art.id}" class="news-card-btn text-xs py-1.5 px-4" id="related-btn-${art.id}">
            Selengkapnya
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================================
// SHARE & COPY LINK UTILITIES (ZERO EMOJIS)
// ============================================================
function copyArticleLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const btnText = document.getElementById('copy-btn-text');
    if (btnText) {
      const original = btnText.textContent;
      btnText.textContent = 'Tautan Tersalin';
      setTimeout(() => {
        btnText.textContent = original;
      }, 2500);
    }
  }).catch(() => {
    alert('Tautan halaman: ' + url);
  });
}

function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  window.open(`https://api.whatsapp.com/send?text=${title}%0A${url}`, '_blank');
}

// Mobile Menu
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// Helper: Escape HTML
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Modals
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
