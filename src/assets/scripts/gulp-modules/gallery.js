
const swiper_gallery = new Swiper('.js-gallery__slider', {
  loop: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  pagination: {
    type: 'fraction',
  },
  preloadImages: false,
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

const big_swiper_gallery = new Swiper('.big-swiper_gallery', {
  loop: true,
  centeredSlides: true,
  initialSlide: 0,
  speed: 1000,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination.big-swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: document
      .querySelector('.big-swiper-gallery__wrappper-buttom')
      .querySelector('.big-swiper-gallery-swiper-right'),
    prevEl: document
      .querySelector('.big-swiper-gallery__wrappper-buttom')
      .querySelector('.big-swiper-gallery-swiper-left'),
  },
});

[...document.querySelector('.big-swiper_gallery').querySelectorAll('img')].forEach(img => {
  img.addEventListener('click', () => {
    big_swiper_gallery.slideNext(1000);
  });
});

[...document.querySelectorAll('.js-open-big-gallery')].forEach(img =>
  img.addEventListener('click', () => {
    document.querySelector('.gallery-beckdrop').classList.add('active');
  }),
);
document.querySelector('.js-close-big-gallery').addEventListener('click', () => {
  document.querySelector('.gallery-beckdrop').classList.remove('active');
});

swiper_gallery.controller.control = big_swiper_gallery;
big_swiper_gallery.controller.control = swiper_gallery;
