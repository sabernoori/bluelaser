document.addEventListener('DOMContentLoaded', function() {
  const machinesSwiper = new Swiper('.swiper.is-machines', {
    slidesPerView: 3.6,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.arrow_btn-right.is-machines',
      prevEl: '.arrow_btn-left.is-machines',
    },
    breakpoints: {
      // Mobile (under 480px)
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      // Tablet and smaller screens
      481: {
        slidesPerView: 2.2,
        spaceBetween: 15
      },
      // Desktop
      992: {
        slidesPerView: 3.6,
        spaceBetween: 20
      }
    }
  });
});