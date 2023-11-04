'use strict';

// swiper
const swiper = new Swiper(".swiper", {
  // slidesPerView: 2,
  // spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // スライドの表示枚数：1024px未満の場合
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
});

// voice-swiper
// const voiceSwiper = new Swiper(".voice-swiper", {
//   slidesPerView: 2,
//   spaceBetween: 25,
//   loop: true,
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//     },
// });


// ナビゲーションメニュー
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}