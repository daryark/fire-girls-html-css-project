var swiper = new Swiper('.gallery__swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  longSwipes: false,
  loop: true,
});
