document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is successfully linked to HTML!');

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu i');
    const nav = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Search functionality
    const searchInput = document.querySelector('.middle-header input[type="text"]');
    searchInput.addEventListener('input', (e) => {
        console.log('User is searching for:', e.target.value);
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.featured-products .product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('p').textContent;
            console.log(`${productName} added to cart!`);
        });
    });

    // Sliding background functionality
    const slides = document.querySelectorAll('.sliding-background .slide');
    if (slides.length === 0) {
        console.error('No slides found. Please check the selector or ensure slides are present in the HTML.');
        return;
    }
    if (slides.length === 0) {
        console.error('No slides found. Please check the selector or ensure slides are present in the HTML.');
        return;
    }
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    showSlide(currentSlide); // Initialize the first slide
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
const slides = document.querySelectorAll('.sliding-background div');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(showNextSlide, 1000); // Change slide every 1 seconds
