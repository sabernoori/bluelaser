// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the search trigger and wrapper elements
    const searchTrigger = document.querySelector('.search');
    const searchWrapper = document.querySelector('.search_wrapper');

    // Function to close search wrapper
    function closeSearchWrapper() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = '';
        }
        searchWrapper.style.opacity = '0';
        searchWrapper.style.visibility = 'hidden';
        // Wait for the animation to complete before hiding the wrapper
        setTimeout(() => {
            searchWrapper.style.display = 'none';
        }, 300);
    }

    // Add click event listener to search trigger
    searchTrigger.addEventListener('click', function() {
        // Reset all visibility properties
        searchWrapper.style.display = 'block';
        searchWrapper.style.opacity = '1';
        searchWrapper.style.visibility = 'visible';
        // Add a small delay to ensure the DOM is updated
        setTimeout(() => {
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }, 10);
    });

    // Add click event to close search
    const searchClose = document.querySelector('.search_close_container');
    if (searchClose) {
        searchClose.addEventListener('click', closeSearchWrapper);
    }

    // Add keyboard event listener for Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && searchWrapper.style.display !== 'none') {
            closeSearchWrapper();
        }
    });
});





/////////////////////////////swiper for related products and articles/////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Gallery Slider
    const gallerySlider = new Swiper(".swiper.is-gallery", {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        speed: 800,
        grabCursor: true,
        parallax: true
    });

    // Initialize Articles Swiper
    const articlesSwiperEl = document.querySelector('.swiper.is-articles');
    if (articlesSwiperEl) {
        const articlesSwiper = new Swiper(articlesSwiperEl, {
            loop: true,
            slidesPerView: 1.2,
            spaceBetween: 24,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: '.articles-next',
                prevEl: '.articles-prev',
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
        });
    } else {
        console.warn('Articles swiper element not found');
    }

    // Initialize Products Swiper
    const productsSwiperEl = document.querySelector('.swiper.is-products');
    if (productsSwiperEl) {
        const productsSwiper = new Swiper(productsSwiperEl, {
            loop: true,
            slidesPerView: 1.2,
            spaceBetween: 24,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            },
            navigation: {
                nextEl: '.products-next',
                prevEl: '.products-prev',
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
        });
    } else {
        console.warn('Products swiper element not found');
    }
});

