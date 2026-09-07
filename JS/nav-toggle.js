document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navWrap = document.querySelector(".nav-wrap");

  if (!menuBtn || !navWrap) return;

  menuBtn.addEventListener("click", function () {
    const isOpen = menuBtn.classList.toggle("open");
    navWrap.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  const navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuBtn.classList.remove("open");
      navWrap.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
});
