let navMenu = document.querySelector(".nav__menu");
let menuIcon = document.querySelector(".menu-icon");
let navLinks = document.querySelectorAll(".nav__item");
let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll-btn");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    navMenu.classList.toggle("left-[0]");
  });
});

// swiper review
let swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// scroll btn with active header
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("active-header");
    scrollBtn.classList.remove("hidden");
  } else {
    header.classList.remove("active-header");
    scrollBtn.classList.add("hidden");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// scroll animation
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
  delay: 300,
  origin: "top",
  reset: true,
});

sr.reveal(
  ".home__content , .about__title, .popular__title , .review__title, .review__container, .footer__container",
);
sr.reveal(".home__image", { delay: 500, scale: 0.5 });
sr.reveal(".services__card , .popular__card", { interval: 100 });
sr.reveal(".about__content-1, .about__leaf-2", { origin: "right" });
sr.reveal(".about__content-2, .about__leaf-1", { origin: "left" });
