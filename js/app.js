/**
 * SUTEJA WOOD ART - Interactive Logic (English Edition)
 * Matching official design and WhatsApp integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initProductModal();
  initGalleryModal();
  initSmoothScroll();
});

/* -------------------------------------------------------------------------
   Mobile Menu Toggle
   ------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('navLinks');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.innerHTML = nav.classList.contains('open') ? '&#10005;' : '&#9776;';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.innerHTML = '&#9776;';
      });
    });
  }
}

/* -------------------------------------------------------------------------
   Smooth Scroll & Active Link Detection
   ------------------------------------------------------------------------- */
function initSmoothScroll() {
  const sections = document.querySelectorAll('section[id], header[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------
   Product Detail Modal (English Data)
   ------------------------------------------------------------------------- */
const PRODUCTS_DATA = {
  ganesha: {
    title: 'Lord Ganesha Wood Statue',
    category: 'Sacred Mythological Statues',
    img: 'images/prod_ganesha.jpg',
    material: 'Select Kiln-Dried Solid Suar Wood',
    desc: 'Lord Ganesha, the revered deity of wisdom, prosperity, and the remover of obstacles. Chiseled by hand with meticulous precision in the ornate Balinese praba crown.'
  },
  penari: {
    title: 'Balinese Legong Dancer Sculpture',
    category: 'Traditional Figurative Sculpture',
    img: 'images/prod_penari.jpg',
    material: 'Aged Suar & Waru Wood',
    desc: 'Capturing the graceful elegance of a traditional Balinese Legong dancer, crowned with frangipani blossoms and adorned in royal ceremonial attire.'
  },
  kotak: {
    title: 'Hand-Carved Keepsake Jewelry Box',
    category: 'Authentic Souvenirs & Decor',
    img: 'images/prod_kotak.jpg',
    material: 'Perhutani Solid Teak Wood (Kayu Jati)',
    desc: 'An artisanal keepsake box featuring deeply chiseled Balinese floral motifs. Perfect for precious jewelry, luxury gifting, or interior accent.'
  },
  souvenir: {
    title: 'Miniature Meditative Figurines Set',
    category: 'Desk Decor & Keepsakes',
    img: 'images/prod_souvenir.jpg',
    material: 'Smooth Waru Wood (Hibiscus)',
    desc: 'A charming trio of mini figurines in serene contemplation with prayerful anjali mudra. A beloved souvenir for international travelers and art collectors.'
  },
  hiasan: {
    title: 'Balinese Sacred Wall Relief Plaque',
    category: 'Architectural Wall Decor',
    img: 'images/prod_hiasan.jpg',
    material: 'Aged Solid Teak Wood',
    desc: 'A high-relief carved wall plaque portraying an ethereal Balinese goddess. Exudes spiritual tranquility, warmth, and timeless heritage for residential spaces.'
  }
};

const WA_NUMBER = '6287861871288';

function initProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  const closeBtn = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalWaBtn = document.getElementById('modalWaBtn');

  document.querySelectorAll('[data-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-product');
      const item = PRODUCTS_DATA[key];
      if (!item) return;

      modalImg.src = item.img;
      modalImg.alt = item.title;
      modalCategory.textContent = item.category;
      modalTitle.textContent = item.title;
      modalDesc.textContent = item.desc;
      modalMaterial.textContent = item.material;

      const waMsg = encodeURIComponent(
        `Hello Suteja Wood Art, I am interested in inquiring about and ordering this artwork:\n\n*${item.title}*\nCategory: ${item.category}\nTimber Material: ${item.material}\n\nCould you please provide availability and worldwide shipping details? Thank you!`
      );
      modalWaBtn.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

      modal.classList.add('active');
    });
  });

  closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('active');
  });
}

/* -------------------------------------------------------------------------
   Gallery Item Lightbox (English Data)
   ------------------------------------------------------------------------- */
const GALLERY_DATA = {
  '1': { title: 'Balinese Dancer Sculpture in Temple Garden', img: 'images/gallery_1.jpg' },
  '2': { title: 'Intricate Kuta-Mesir Floral Wood Relief', img: 'images/gallery_2.jpg' },
  '3': { title: 'Miniature Meditative Monks Collection', img: 'images/gallery_3.jpg' },
  '4': { title: 'Carved Frangipani Jewelry Keepsake Box', img: 'images/gallery_4.jpg' },
  '5': { title: 'Sacred Hand-Chiseled Goddess Face Plaque', img: 'images/gallery_5.jpg' }
};

function initGalleryModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalWaBtn = document.getElementById('modalWaBtn');

  document.querySelectorAll('[data-gallery]').forEach(itemEl => {
    itemEl.addEventListener('click', () => {
      const gId = itemEl.getAttribute('data-gallery');
      const gItem = GALLERY_DATA[gId];
      if (!gItem) return;

      modalImg.src = gItem.img;
      modalImg.alt = gItem.title;
      modalCategory.textContent = 'ART GALLERY PORTFOLIO';
      modalTitle.textContent = gItem.title;
      modalDesc.textContent = 'Authentic hand-carved creation documented from the master carvers at Suteja Wood Art Bali.';
      modalMaterial.textContent = 'Kiln-Dried Premium Hardwood';

      const waMsg = encodeURIComponent(
        `Hello Suteja Wood Art, I saw this artwork in your gallery:\n\n*${gItem.title}*\n\nCould I receive more details regarding custom commissioning a similar piece? Thank you!`
      );
      modalWaBtn.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

      modal.classList.add('active');
    });
  });
}
