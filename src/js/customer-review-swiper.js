var swiper = new Swiper('.customer-review__swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
  allowTouchMove: true,
  clickable: true,
  spaceBetween: 10,
});
