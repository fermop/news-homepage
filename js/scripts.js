// Selectors
const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".nav-container");
const navItems = document.querySelectorAll(".nav__item");

// Events
  // Menu button
menuBtn.onclick = () => {
  navContainer.classList.toggle("active");
  if (navContainer.classList.contains("active")) {
    menuBtn.src = "./assets/images/icon-menu-close.svg";
    menuBtn.style.width = "1.875rem";
    menuBtn.style.height = "1.875rem";
  } else {
    menuBtn.src = "./assets/images/icon-menu.svg";
    menuBtn.style.width = "2.5rem";
    menuBtn.style.height = "1rem";
  }
};

  // If the user is at mobile device and they select a nav item, the navbar will automatically close
navItems.forEach((e) => {
  e.addEventListener("click", function () {
    if (navContainer.classList.contains("active")) {
      navContainer.classList.remove("active");
      menuBtn.src = "./assets/images/icon-menu.svg";
      menuBtn.style.width = "2.5rem";
      menuBtn.style.height = "1rem";
    }
  });
});