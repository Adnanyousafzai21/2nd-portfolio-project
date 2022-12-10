var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const jsmedia = (widthSize) => {
  if (widthSize.matches) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 50,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};

const widthSize = window.matchMedia("(max-width:780px)");
jsmedia(widthSize);
widthSize.addEventListener("change", jsmedia);

const heroSection = document.querySelector(".header");
const footerElemnt = document.querySelector(".section-footer");
const ScrollElment = document.createElement("div");
ScrollElment.classList.add("ScrollTop-style");

ScrollElment.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V6M5 12l7-7 7 7"/></svg>`;
footerElemnt.after(ScrollElment);
const scrolltop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

ScrollElment.addEventListener("click", scrolltop);
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");
const mobileMenu = document.querySelector(".menu-btn");
mobileMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuIcon.classList.toggle("active");
});
