/* ================================================================
   app.js — Logika Interaktif Halaman Beranda Diskoperindag Sawahlunto
   Palet Identitas: Forest Emerald, Songket Gold, Sage Pastel
   ZERO EMOJIS — Clean civic UI/UX philosophy
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeroTextAnimation();
  renderBapokTicker();
  renderServices();
  renderFeaturedNews();
  renderPublicDocs();
  setupMobileMenu();
});

// ============================================================
// 1. SMOOTH WORD-BY-WORD ANIMATION (Panamera Hero Heading)
// ============================================================
function initHeroTextAnimation() {
  const heading = document.getElementById('hero-heading');
  if (!heading) return;

  const rawText = heading.textContent.trim();
  const words = rawText.split(/\s+/);

  heading.innerHTML = '';
  document.body.classList.add('js-animate-ready');

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'animate-word';
    span.textContent = word;
    heading.appendChild(span);

    if (index < words.length - 1) {
      span.className += ' mr-2 sm:mr-3 inline-block';
    }
  });

  const wordElements = heading.querySelectorAll('.animate-word');
  wordElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('revealed');
    }, 60 + i * 45);
  });
}

// ============================================================
// 2. RENDER SISTEM PEMANTAUAN HARGA BAHAN POKOK (SPH BAPOK)
// ============================================================
function renderBapokTicker() {
  const container = document.getElementById('bapok-grid');
  if (!container || !window.DiskoperindagData) return;

  const { bapokPrices } = window.DiskoperindagData;
  container.innerHTML = bapokPrices.map(item => `
    <div class="bapok-pill">
      <div class="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">${escapeHTML(item.status)}</div>
      <div class="font-primary font-bold text-slate-900 text-sm sm:text-base leading-tight mb-2">${escapeHTML(item.commodity)}</div>
      <div class="flex items-baseline justify-between gap-1">
        <span class="font-primary font-black text-base sm:text-lg text-[#0d3829]">${escapeHTML(item.price)}</span>
        <span class="text-[11px] text-slate-500 font-medium">/${escapeHTML(item.unit)}</span>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 3. RENDER 4 PILAR LAYANAN PUBLIK
// ============================================================
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || !window.DiskoperindagData) return;

  const { publicServices } = window.DiskoperindagData;
  container.innerHTML = publicServices.map(srv => `
    <div class="feature-card flex flex-col justify-between">
      <div>
        <div class="inline-block px-3 py-1 rounded-full bg-[#0d3829]/10 text-[#0d3829] font-primary font-bold text-xs uppercase tracking-wide mb-3 border border-[#0d3829]/15">
          ${escapeHTML(srv.badge)}
        </div>
        <h4 class="font-primary font-bold text-xl text-slate-900 mb-1">${escapeHTML(srv.title)}</h4>
        <p class="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">${escapeHTML(srv.subtitle)}</p>
        <p class="text-sm text-slate-700 leading-relaxed mb-6">${escapeHTML(srv.desc)}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span class="text-xs font-bold text-[#0d3829]">Layanan Resmi Gratis</span>
        <a href="pasar.html#layanan" class="font-primary font-bold text-xs text-slate-900 hover:text-[#c68a27] hover:underline flex items-center gap-1">
          Informasi Lengkap
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 4. RENDER 3 BERITA TERKINI (DIRECT NAVIGATION, NO POPUP CARDS)
// ============================================================
function renderFeaturedNews() {
  const container = document.getElementById('home-news-grid');
  if (!container || !window.DiskoperindagData) return;

  const { newsArticles } = window.DiskoperindagData;
  const top3 = newsArticles.slice(0, 3);

  container.innerHTML = top3.map(article => `
    <article class="news-card">
      <div class="news-card-img-wrap">
        <img src="${article.image}" alt="${escapeHTML(article.title)}" loading="lazy">
        <div class="absolute top-3 left-3 bg-[#0d3829]/95 text-[#e6f4ec] font-primary font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-[#c68a27]/30">
          ${escapeHTML(article.category)}
        </div>
      </div>
      <div class="news-card-body">
        <div class="text-xs text-[#e6f4ec]/70 font-medium mb-2">
          ${escapeHTML(article.date)} &bull; ${escapeHTML(article.readTime)}
        </div>
        <h4 class="news-card-title">
          <a href="berita-detail.html?id=${article.id}" class="hover:underline text-white">
            ${escapeHTML(article.title)}
          </a>
        </h4>
        <p class="news-card-text">
          ${escapeHTML(article.excerpt)}
        </p>
        <div class="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
          <a href="berita-detail.html?id=${article.id}" class="news-card-btn" id="news-detail-btn-${article.id}">
            Selengkapnya
          </a>
          <span class="text-xs text-[#e6f4ec]/60 font-medium">${escapeHTML(article.author)}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================================
// 5. RENDER DOKUMEN PUBLIK (UNDUH MODAL)
// ============================================================
function renderPublicDocs() {
  const container = document.getElementById('public-docs-list');
  if (!container || !window.DiskoperindagData) return;

  const { publicDocuments } = window.DiskoperindagData;
  container.innerHTML = publicDocuments.map(doc => `
    <div class="p-4 rounded-2xl bg-emerald-50/40 hover:bg-emerald-50/80 border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#0d3829] text-white">${escapeHTML(doc.fileType)}</span>
          <span class="text-xs text-slate-600 font-medium">${escapeHTML(doc.category)} &bull; ${escapeHTML(doc.size)}</span>
        </div>
        <h5 class="font-primary font-bold text-sm sm:text-base text-slate-900">${escapeHTML(doc.title)}</h5>
        <p class="text-xs text-slate-500 mt-0.5">Rilis: ${escapeHTML(doc.date)}</p>
      </div>
      <button type="button" onclick="triggerDownload('${escapeHTML(doc.title)}')" class="shrink-0 px-4 py-2 rounded-xl bg-[#0d3829] text-white font-primary font-bold text-xs hover:bg-[#154c38] transition-colors flex items-center justify-center gap-1.5 shadow-sm">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        Unduh PDF
      </button>
    </div>
  `).join('');
}

function triggerDownload(title) {
  alert('Mengunduh berkas resmi Diskoperindag Kota Sawahlunto:\n\n' + title + '\n\n(Format PDF resmi tersimpan)');
}

// ============================================================
// 6. MODAL HANDLERS (PROFIL & UNDUH)
// ============================================================
function openProfilModal() {
  const modal = document.getElementById('profil-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeProfilModal() {
  const modal = document.getElementById('profil-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function openUnduhModal() {
  const modal = document.getElementById('unduh-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeUnduhModal() {
  const modal = document.getElementById('unduh-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  const profilModal = document.getElementById('profil-modal');
  const unduhModal = document.getElementById('unduh-modal');
  if (e.target === profilModal) closeProfilModal();
  if (e.target === unduhModal) closeUnduhModal();
});

// Close modals with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProfilModal();
    closeUnduhModal();
  }
});

// ============================================================
// 7. MOBILE MENU TOGGLE
// ============================================================
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
