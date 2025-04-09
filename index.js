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





