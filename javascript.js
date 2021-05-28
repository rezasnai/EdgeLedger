"use strict";

// select element
const nav = document.querySelector(".navBar");
const header = document.querySelector(".hero");
const navBarItems = document.querySelector(".navBar-items");

// fixxed navBar
console.log(nav);
const fixedNavbar = function (enteries) {
  const [entery] = enteries;
  if (entery.isIntersecting) {
    nav.classList.remove("fixedNavBar");
  } else {
    nav.classList.add("fixedNavBar");
  }
};

const navObserver = new IntersectionObserver(fixedNavbar, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});

navObserver.observe(header);

//smoth scroll
navBarItems.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("navBar-item")) {
    const section = document.querySelector(e.target.getAttribute("href"));

    window.scroll({
      left: pageXOffset + section.getBoundingClientRect().x,
      top: pageYOffset + section.getBoundingClientRect().y,
      behavior: "smooth",
    });
  }
});
