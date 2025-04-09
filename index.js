console.log("index connected2");
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
//
const gallerySlider = new Swiper(".swiper.is-gallery", {
  // Parameters
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 800,
  grabCursor: true,
  parallax: true
});

//

// Initialize Articles Swiper with scoped navigation selectors
const articlesContainer = document.querySelector('.section_blog');
if (articlesContainer) {
    const articlesSwiper = new Swiper(articlesContainer.querySelector('.swiper.is-articles'), {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 24,
        breakpoints: {
            // Mobile
            480: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            // Landscape
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            // Tablet
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            // Desktop (default)
            1200: {
                slidesPerView: 4, // Adjust as needed for larger screens
                spaceBetween: 20,
            }
        },
        navigation: {
            nextEl: articlesContainer.querySelector('.next.is-articles'),
            prevEl: articlesContainer.querySelector('.prev.is-articles'),
        },
        // Add observer for CMS dynamic content
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    });
}

// Initialize Products Swiper with scoped navigation selectors
const productsContainer = document.querySelector('.section_products');
if (productsContainer) {
    const productsSwiper = new Swiper(productsContainer.querySelector('.swiper.is-products'), {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 24,
        breakpoints: {
            // Mobile
            480: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            // Landscape
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            // Tablet
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            // Desktop (default)
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
        navigation: {
            nextEl: productsContainer.querySelector('.next.is-products'),
            prevEl: productsContainer.querySelector('.prev.is-products'),
        },
        // Add observer for CMS dynamic content
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    });
} else {
    console.warn('Products swiper element not found');
}
});

 
