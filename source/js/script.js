'use strict';
(function () {

  // инициализация слайдера
var sliderScreenshots = new Swiper ('.screenshots__slider', {
  // Optional parameters
  init: false,
  direction: 'horizontal',
  loop: true,
  speed:600,
  slidesPerView: 4,
  centeredSlides : true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0, // Slide rotate in degrees
    stretch: 0, // Stretch space between slides (in px)
    depth: 40, // Depth offset in px (slides translate in Z axis)
    modifier: 8.15, // Effect multipler
    slideShadows: false, // Enables slides shadows
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // breakpoints: {
  //   // // when window width is >= 320px
  //   // 700: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 20
  //   // },
  //   // // when window width is >= 480px
  //   // 1100: {
  //   //   slidesPerView: 3,
  //   //   spaceBetween: 30
  //   // },
  //   // // when window width is >= 640px
  //   // 1400: {
  //   //   slidesPerView: 4,
  //   //   spaceBetween: 40
  //   // }
  // }
})

sliderScreenshots.init();

// скрытие лишних слайдов

var screenshotSlides = $(".screenshots__slider .swiper-slide");
var screenshotArrow = $(".screenshots__slider .screenshots__arrow");

var hiddenSlide = function (slide) {
  slide.removeClass("opacity--0");
  slide.addClass("opacity--1");
};

var showSlide = function (slide) {
  slide.removeClass("opacity--1");
  slide.addClass("opacity--0");
};


var checkDepthSlider = function (slidesArr, depth) { // depth - всегда отрицательное число
  $.each(slidesArr, function () {
    var zIndexEl = $(this).css("zIndex");
    var el = $(this);

    zIndexEl < depth ? showSlide(el) : hiddenSlide(el);
  })
}

checkDepthSlider(screenshotSlides, -30);

sliderScreenshots.on('slideChange', function () {
  checkDepthSlider(screenshotSlides, -30);
});

$.each(screenshotArrow, function () {
  $(this).click(function() {
    
  });
})

// Плавный скролл ссылок-якорей

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: ($(hash).offset().top) - 100
      }, 800);
    }
  });
});

// при нажатии на кнопку video__play исчезает video__wrap-hover и запускается видео внутри video__wrap-video

})();