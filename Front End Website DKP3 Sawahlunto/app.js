/* ================================================================
   app.js — Logika Interaktif DKP3 Sawahlunto
   Dinas Ketahanan Pangan, Pertanian dan Perikanan Kota Sawahlunto
   STRICT ZERO EMOJIS — Precision Civic Architecture
   ================================================================ */

// 1. Word-by-word staggered animation
(function initWordAnimation() {
  const CONFIG = {
    selector: '[data-animate-words]',
    minDelay: 50,
    maxDelay: 250,
  };

  document.body.classList.add('js-animate-ready');
  const elements = document.querySelectorAll(CONFIG.selector);

  elements.forEach((element) => {
    if (element.classList.contains('word-animation-processed')) return;

    const originalHTML = element.innerHTML;

    function wrapWordsInHTML(html) {
      const temp = document.createElement('div');
      temp.innerHTML = html;

      function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          if (!text.trim()) return document.createTextNode(text);

          const fragment = document.createDocumentFragment();
          const regex = /\S+/g;
          let lastIndex = 0, match;

          while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
              const spaceSpan = document.createElement('span');
              spaceSpan.textContent = text.substring(lastIndex, match.index);
              spaceSpan.className = 'animate-space';
              fragment.appendChild(spaceSpan);
            }
            const wordSpan = document.createElement('span');
            wordSpan.textContent = match[0];
            wordSpan.className = 'animate-word';
            const delay = Math.random() * (CONFIG.maxDelay - CONFIG.minDelay) + CONFIG.minDelay;
            wordSpan.style.transitionDelay = `${delay}ms`;
            fragment.appendChild(wordSpan);
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < text.length) {
            const spaceSpan = document.createElement('span');
            spaceSpan.textContent = text.substring(lastIndex);
            spaceSpan.className = 'animate-space';
            fragment.appendChild(spaceSpan);
          }
          return fragment;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const clone = node.cloneNode(false);
          Array.from(node.childNodes).forEach((child) => clone.appendChild(processNode(child)));
          return clone;
        }
        return node.cloneNode(true);
      }

      const fragment = document.createDocumentFragment();
      Array.from(temp.childNodes).forEach((node) => fragment.appendChild(processNode(node)));
      return fragment;
    }

    const processedContent = wrapWordsInHTML(originalHTML);
    element.innerHTML = '';
    element.appendChild(processedContent);
    element.classList.add('word-animation-processed');

    const revealAll = () => {
      element.querySelectorAll('.animate-word').forEach((w) => {
        w.classList.add('revealed');
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              requestAnimationFrame(revealAll);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    } else {
      revealAll();
    }

    setTimeout(revealAll, 400);
  });
})();

// 2. Hero Frame Reveal
(function initHeroReveal() {
  const heroFrame = document.getElementById('heroFrame');
  if (!heroFrame) return;
  heroFrame.style.opacity = '1';
})();

// 3. Profil Modal Controls
function openProfilModal() {
  const modal = document.getElementById('profilModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProfilModal() {
  const modal = document.getElementById('profilModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.getElementById('closeProfilModal')?.addEventListener('click', closeProfilModal);
document.getElementById('profilModalBackdrop')?.addEventListener('click', closeProfilModal);

// 4. Unduh Modal Controls
function openUnduhModal() {
  const container = document.getElementById('unduhListContainer');
  if (!container) return;

  const docs = (typeof unduhFilesData !== 'undefined') ? unduhFilesData : [
    { name: 'Rencana Strategis (Renstra) DKP3 Sawahlunto 2021-2026', size: '5.8 MB', type: 'PDF' },
    { name: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah 2025', size: '3.4 MB', type: 'PDF' },
    { name: 'Buku Saku Panduan Pengendalian Hama & Penyakit Padi Sawah', size: '4.1 MB', type: 'PDF' },
    { name: 'Standar Operasional Prosedur (SOP) Bantuan Alsintan & Traktor', size: '1.2 MB', type: 'PDF' }
  ];

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
}

function handleDownloadSim(docName) {
  alert(`Memulai unduhan dokumen resmi DKP3 Sawahlunto:\n"${docName}"`);
}

function closeUnduhModal() {
  const modal = document.getElementById('unduhModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.getElementById('closeUnduhModal')?.addEventListener('click', closeUnduhModal);
document.getElementById('unduhModalBackdrop')?.addEventListener('click', closeUnduhModal);

// 5. Global Escape Key Listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProfilModal();
    closeUnduhModal();
  }
});
