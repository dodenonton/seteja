/**
 * SUTEJA WOOD ART - Interactive Logic
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
   Product Detail Modal
   ------------------------------------------------------------------------- */
const PRODUCTS_DATA = {
  ganesha: {
    title: 'Patung Ganesha',
    category: 'Patung Kayu Mitologi',
    img: 'images/prod_ganesha.jpg',
    material: 'Kayu Suar Solid / Oven Kiln-Dried',
    desc: 'Patung Dewa Ganesha perlambang kebijaksanaan dan penyingkir segala rintangan. Dikerjakan dengan pahat tangan murni berornamen mahkota praba khas Bali.'
  },
  penari: {
    title: 'Patung Penari Bali',
    category: 'Seni Figur Tradisional',
    img: 'images/prod_penari.jpg',
    material: 'Kayu Suar / Waru Pilihan',
    desc: 'Figur penari legong Bali dalam balutan busana adat lengkap dengan gelungan bunga kamboja. Lekuk tubuh dinamis mengekspresikan kelenturan tarian dewata.'
  },
  kotak: {
    title: 'Kotak Souvenir Ukir',
    category: 'Souvenir & Kerajinan',
    img: 'images/prod_kotak.jpg',
    material: 'Kayu Jati Solid / Suar',
    desc: 'Kotak kayu berukir ornamen bunga teratai dan daun kuta-mesir Bali. Sangat pas untuk kotak perhiasan berharga, kado spesial, atau souvenir eksklusif.'
  },
  souvenir: {
    title: 'Souvenir Miniatur Arca',
    category: 'Souvenir Meja',
    img: 'images/prod_souvenir.jpg',
    material: 'Kayu Waru / Hibiscus Lot',
    desc: 'Set figur miniatur dengan ekspresi ketenangan batin dan doa anjali mudra. Pilihan favorit wisatawan untuk cinderamata khas Pulau Dewata.'
  },
  hiasan: {
    title: 'Hiasan Dinding Relik Dewi',
    category: 'Dekorasi Interior',
    img: 'images/prod_hiasan.jpg',
    material: 'Kayu Jati Solid (Aged Teak)',
    desc: 'Plakat ukiran dinding berdimensi dalam yang menampilkan wajah dewi Bali bermahkota megah. Memberikan aksen hangat dan kharismatik pada ruangan Anda.'
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
        `Halo Suteja Wood Art, saya tertarik untuk memesan atau mengetahui info ketersediaan karya:\n\n*${item.title}*\nKategori: ${item.category}\nMaterial: ${item.material}\n\nApakah karya ini saat ini tersedia? Terima kasih!`
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
   Gallery Item Lightbox
   ------------------------------------------------------------------------- */
const GALLERY_DATA = {
  '1': { title: 'Patung Penari di Taman Pura', img: 'images/gallery_1.jpg' },
  '2': { title: 'Ukiran Relief Bunga Kuta Mesir', img: 'images/gallery_2.jpg' },
  '3': { title: 'Koleksi Miniatur Biksu Meditasi', img: 'images/gallery_3.jpg' },
  '4': { title: 'Kotak Ukir Kayu Jepun Bali', img: 'images/gallery_4.jpg' },
  '5': { title: 'Karya Pahat Wajah Dewi Sri', img: 'images/gallery_5.jpg' }
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
      modalCategory.textContent = 'DOKUMENTASI GALERI KARYA';
      modalTitle.textContent = gItem.title;
      modalDesc.textContent = 'Dokumentasi karya seni asli buatan tangan empu pemahat Suteja Wood Art Bali.';
      modalMaterial.textContent = 'Kayu Pilihan Berkualitas Tinggi';

      const waMsg = encodeURIComponent(
        `Halo Suteja Wood Art, saya melihat foto galeri karya:\n\n*${gItem.title}*\n\nBisa saya mendapatkan info lebih lanjut mengenai karya seperti ini? Terima kasih!`
      );
      modalWaBtn.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

      modal.classList.add('active');
    });
  });
}
