let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 0) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});

const burgerMenu = document.getElementById("burger-menu");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");

burgerMenu.addEventListener("click", function () {
  header.classList.toggle("header__translate");
  burgerMenu.classList.toggle("active");
  nav.classList.toggle("active");
  navList.classList.toggle("active");
  document.querySelector("body").classList.toggle("overflow-hidden");
});

if (document.querySelector(".last-news-slider")) {
  function calculateSlidesPerViewNews() {
    if (window.innerWidth >= 1280) {
      return 3;
    } else if (window.innerWidth >= 1024) {
      return 2;
    } else if (window.innerWidth >= 768) {
      return 1.5;
    } else if (window.innerWidth >= 320) {
      return 1.1;
    }
  }
  var swiper = new Swiper(".last-news-slider", {
    slidesPerView: calculateSlidesPerViewNews(),
    slidesPerGroup: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = calculateSlidesPerViewNews();
    swiper.update();
  });
}

if (document.querySelector(".aiswiper__container")) {
  var swiper = new Swiper(".aiswiper__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
  });
}
