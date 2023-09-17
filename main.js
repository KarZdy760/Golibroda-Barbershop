let menu = document.querySelector(".menu-icon");
let navBar = document.querySelector(".nav-bar");

menu.onclick = () => {
  menu.classList.toggle("bx-menu");
  navBar.classList.toggle("open");
};

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
