let timer = null
let callback = ([entry]) => {
    const toast = document.querySelector('.toast')
    if (entry.isIntersecting) {
      toast.classList.add('active')
      timer = setTimeout(() => {
        toast.classList.remove('active')
       }, 5 * 1000);
      return
    }
    clearTimeout(timer)
    toast.classList.remove('active')
}

const options = { threshold: 0 }

const observer = new IntersectionObserver(callback, options)

const section = document.querySelector('.sec4')
observer.observe(section)

function initPositionImg() {
  const dragImg = document.querySelector('.scroll-img')
  const positionLeft = dragImg.clientWidth / 2 - dragContainer.clientWidth / 2
  dragContainer.scrollLeft = positionLeft
}

const ImgObserver = new ResizeObserver(([entry]) => {
  if (entry && entry.target) {
    initPositionImg()
  }
});

const dragContainer = document.querySelector('.horizontal-scroll-container')
ImgObserver.observe(dragContainer, {box: "border-box"});

$(document).ready(function () {
  AOS.init();
  
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