$(document).ready(function () {
  const swiper1 = new Swiper('#sec2-swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: "#sec2-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#sec2-swiper .swiper-button-next',
      prevEl: '#sec2-swiper .swiper-button-prev',
    },
    breakpoints: {},
  });

  const swiper2 = new Swiper('#sec3-swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: "#sec3-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#sec3-swiper .swiper-button-next',
      prevEl: '#sec3-swiper .swiper-button-prev',
    },
    breakpoints: {},
  });

  const swiper3 = new Swiper('#sec7-swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: "#sec7-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#sec7-swiper .swiper-button-next',
      prevEl: '#sec7-swiper .swiper-button-prev',
    },
    breakpoints: {},
  });
});