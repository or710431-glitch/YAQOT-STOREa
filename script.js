// ===== PRODUCTS DATA =====
const products = [
    {
        id: 1,
        name: 'عباية فاخرة',
        image: 'y9.jpg',
        price: '2500 جنيه',
        description: 'عباية فاخرة بتصميم عصري وخامة عالية الجودة',
        rating: 5,
        reviews: 128
    },
    {
        id: 2,
        name: 'عباءة فاخرة',
        image: 'y10.jpg',
        price: '2800 جنيه',
        description: 'عباءة كلاسيكية أنيقة مناسبة لجميع المناسبات',
        rating: 4.8,
        reviews: 95
    },
    {
        id: 3,
        name: 'مصلية فاخرة',
        image: 'y12.jpg',
        price: '500 جنيه',
        description: 'مصلية فاخرة بألوان متعددة وتصاميم حديثة',
        rating: 4.9,
        reviews: 156
    },
    {
        id: 4,
        name: 'باكدج كامل',
        image: 'y14.jpg',
        price: '3800 جنيه',
        description: 'مصليتين فاخرتين مصحفين في باكدج كامل',
        rating: 5,
        reviews: 87
    },
    {
        id: 5,
        name: 'مصلية حريرية فاخرة باكدج كامل ',
        image: 'y15.jpg',
        price: '800 جنيه',
        description: 'مصلية من الحرير الطبيعي ناعمة وفاخرة',
        rating: 4.9,
        reviews: 142
    },
    
    {
        id: 6,
        name: 'عباءة ملكية',
        image: 'y17.jpg',
        price: '4000 جنيه',
        description: 'عباءة ملكية بتصميم فاخر وتفاصيل ذهبية',
        rating: 4.8,
        reviews: 74
    },
    {
        id: 7,
        name: 'عباية أنيقة',
        image: 'yaqoot2.jpg',
        price: '4000 جنيه',
        description: 'عباية أنيقة بتصميم عصري ومريح',
        rating: 4.9,
        reviews: 118
    }
];

// ===== GALLERY DATA =====
const galleryImages = [
    { image: 'yaqoot.jpg', description: 'صورة البراند الأولى' },
    { image: 'yaqoot2.jpg', description: 'تشكيلة العباءات' },
    { image: 'yaqoot3.jpg', description: 'جودة التصنيع' },
    { image: 'yaqoot4.jpg', description: 'تفاصيل الخياطة' },
    { image: 'yaqoot5.jpg', description: 'الألوان المتاحة' },
    { image: 'y9.jpg', description: 'منتج متميز' },
    { image: 'y10.jpg', description: 'تصميم عصري' },
    { image: 'y12.jpg', description: 'مصليات فاخرة' },
    { image: 'y14.jpg', description: 'تفاصيل ذهبية' },
    { image: 'y15.jpg', description: 'خاماته ممتازة' },
    { image: 'y16.jpg', description: 'عباءة ملكية' },
    { image: 'y17.jpg', description: 'ألوان جميلة' },
];

// ===== INITIALIZE AOS =====
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// ===== LOAD PRODUCTS =====
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-aos="fade-up">
            <div class="product-image" style="cursor: pointer;" onclick="openProductImage('${product.image}', '${product.name}')">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <div class="product-overlay-icon">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${getStars(product.rating)}</span>
                    <span class="rating-text">${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `).join('');
}

// ===== LOAD GALLERY =====
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = galleryImages.map((item, index) => `
        <div class="gallery-item" data-aos="zoom-in" onclick="openLightbox(${index})">
            <img src="${item.image}" alt="${item.description}">
            <div class="gallery-overlay">
                <div class="gallery-icon">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== GET STARS RATING =====
function getStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) stars += '✩';
    
    return stars;
}

// ===== LIGHTBOX FUNCTIONS =====
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const image = galleryImages[index];
    
    document.getElementById('lightboxImage').src = image.image;
    document.getElementById('imageDescription').textContent = image.description;
    document.getElementById('currentImage').textContent = index + 1;
    document.getElementById('totalImages').textContent = galleryImages.length;
    
    // Show navigation buttons for gallery images
    document.getElementById('prevImage').style.display = 'flex';
    document.getElementById('nextImage').style.display = 'flex';
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openProductImage(imageSrc, imageTitle) {
    const lightbox = document.getElementById('lightbox');
    
    document.getElementById('lightboxImage').src = imageSrc;
    document.getElementById('imageDescription').textContent = imageTitle;
    document.getElementById('currentImage').textContent = '1';
    document.getElementById('totalImages').textContent = '1';
    
    // Hide navigation buttons for product images
    document.getElementById('prevImage').style.display = 'none';
    document.getElementById('nextImage').style.display = 'none';
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const image = galleryImages[currentImageIndex];
    
    document.getElementById('lightboxImage').src = image.image;
    document.getElementById('imageDescription').textContent = image.description;
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const image = galleryImages[currentImageIndex];
    
    document.getElementById('lightboxImage').src = image.image;
    document.getElementById('imageDescription').textContent = image.description;
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
}

// ===== KEYBOARD SHORTCUTS FOR LIGHTBOX =====
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') nextImage();
        if (e.key === 'ArrowRight') prevImage();
    }
});

// ===== LIGHTBOX EVENT LISTENERS =====
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('prevImage').addEventListener('click', nextImage);
document.getElementById('nextImage').addEventListener('click', prevImage);

// Close when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// ===== TOUCH SWIPE FOR LIGHTBOX =====
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('lightbox').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('lightbox').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        nextImage();
    } else if (touchEndX - touchStartX > 50) {
        prevImage();
    }
});

// ===== ANIMATE STATISTICS =====
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                const duration = 2000;
                const start = performance.now();
                
                element.animated = true;
                
                const animate = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const current = Math.floor(progress * target);
                    element.textContent = current;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        element.textContent = target;
                    }
                };
                
                requestAnimationFrame(animate);
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(el => observer.observe(el));
}


// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CTA BUTTON SCROLL TO PRODUCTS =====
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadGallery();
    animateStatistics();
    
    // Product button click handler
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-button')) {
            showNotification('تم إضافة المنتج للعرض بنجاح! ✨', 'success');
        }
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== FORM INPUT FOCUS EFFECTS =====
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});
