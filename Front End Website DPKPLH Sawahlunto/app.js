/**
 * DPKPLH Kota Sawahlunto — Core Client Script
 * Dinas Perumahan, Kawasan Permukiman, Pertanahan dan Lingkungan Hidup
 * STRICT ZERO EMOJIS COMPLIANT
 */

document.addEventListener('DOMContentLoaded', () => {
  initWordAnimations();
  initModals();
  populateUnduhanList();
});

/* ==========================================================================
   1. Word-by-Word Text Entrance Animation
   ========================================================================== */
function initWordAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate-words]');
  
  animatedElements.forEach(el => {
    const text = el.textContent.trim();
    if (!text) return;
    
    const words = text.split(/\s+/);
    el.innerHTML = '';
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + (index < words.length - 1 ? ' ' : '');
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(16px)';
      span.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`;
      el.appendChild(span);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll('span');
          spans.forEach(s => {
            s.style.opacity = '1';
            s.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(el);
  });
}

/* ==========================================================================
   2. Modal Management (Profil & Unduh)
   ========================================================================== */
function initModals() {
  // Profil Modal Elements
  const profilModal = document.getElementById('profilModal');
  const profilBackdrop = document.getElementById('profilModalBackdrop');
  const closeProfilBtn = document.getElementById('closeProfilModal');

  // Unduh Modal Elements
  const unduhModal = document.getElementById('unduhModal');
  const unduhBackdrop = document.getElementById('unduhModalBackdrop');
  const closeUnduhBtn = document.getElementById('closeUnduhModal');

  // Close Profil
  if (profilBackdrop) profilBackdrop.addEventListener('click', closeProfilModal);
  if (closeProfilBtn) closeProfilBtn.addEventListener('click', closeProfilModal);

  // Close Unduh
  if (unduhBackdrop) unduhBackdrop.addEventListener('click', closeUnduhModal);
  if (closeUnduhBtn) closeUnduhBtn.addEventListener('click', closeUnduhModal);

  // Keyboard Escape Handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProfilModal();
      closeUnduhModal();
    }
  });
}

window.openProfilModal = function() {
  const modal = document.getElementById('profilModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

window.closeProfilModal = function() {
  const modal = document.getElementById('profilModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

window.openUnduhModal = function() {
  const modal = document.getElementById('unduhModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

window.closeUnduhModal = function() {
  const modal = document.getElementById('unduhModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   3. Unduhan List Population
   ========================================================================== */
function populateUnduhanList() {
  const container = document.getElementById('unduhListContainer');
  if (!container || typeof unduhFilesData === 'undefined') return;

  container.innerHTML = unduhFilesData.map(file => `
    <div class="bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-colors flex items-center justify-between gap-4">
      <div class="space-y-1">
        <h5 class="text-sm font-semibold text-white">${file.title}</h5>
        <div class="flex items-center gap-2 text-xs text-emerald-300">
          <span class="px-2 py-0.5 rounded bg-white/10 text-white font-mono">${file.format}</span>
          <span>${file.size}</span>
          <span>&bull;</span>
          <span class="text-gray-400">${file.date}</span>
        </div>
      </div>
      <button onclick="handleDownloadSim('${file.title}', '${file.filename}')" class="px-4 py-2 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-xs font-medium cursor-pointer transition flex items-center gap-1.5 shrink-0">
        <span>Unduh</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      </button>
    </div>
  `).join('');
}

window.handleDownloadSim = function(title, filename) {
  // Graceful simulation notification without alerts or emojis
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-50 bg-[#064E3B] text-white text-xs px-5 py-3 rounded-xl shadow-xl border border-white/20 transition-all';
  toast.textContent = `Mengunduh berkas resmi: ${filename}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
};
