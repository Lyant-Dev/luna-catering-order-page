// SHOW & CLOSE MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   SHOW MENU
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// HIDE MENU
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MOBILE MENU
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// CHANGE HEADER STYLES

const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

// SWIPER POPULAR
const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  spaceBetween: 32,
  slidesPerView: "auto",
  centeredSlides: true,

  breakpoints: {
    1150: {
      spaceBetween: 80,
    },
  },
});

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

// Link the ID of each section (section id="home") to each link (a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
  //We get the position y scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, // id for each section
      top = section.offsetTop - 50, // Distance from the top edge
      height = section.offsetHeight, // Element height
      link = document.querySelector('.nav__menu a[href*="' + id + '"]'); //id nav link

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height,
    );
  });
};
window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".popular__swiper, .footer__container,.footer__copy");
sr.reveal(".section__title");
sr.reveal(".home__shape", { origin: "bottom" });
sr.reveal(".home__catering", {
  delay: 1000,
  distance: "2000px",
  duration: 1500,
});
sr.reveal(".home__splash", { delay: 1600, scale: 0, duration: 1500 });
sr.reveal(".home__broccoli-1, .home__broccoli-2", {
  delay: 2200,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(".home__mushrooms-1, .home__mushrooms-2", {
  delay: 2000,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(".home__lettuce", {
  delay: 2000,
  scale: 0,
  duration: 1500,
  rotate: { z: 180 },
});
sr.reveal(".home__title", {
  delay: 3000,
});
sr.reveal(".home__data,.home__sticker", {
  delay: 4000,
});
sr.reveal(".about__data", {
  origin: "left",
});
sr.reveal(".about__images", {
  origin: "right",
});
sr.reveal(".about__menu", {
  delay: 1000,
});
sr.reveal(".about__pakchoy-1,.about__pakchoy-2", {
  delay: 1400,
});
sr.reveal(".products__card,.contact__info", {
  interval: 100,
});
sr.reveal(".contact__shape", {
  delay: 600,
  scale: 0,
});
sr.reveal(".contact__delivery", {
  delay: 1200,
});
