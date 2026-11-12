// Mobile menu toggle
const navToggle = document.querySelector(".nav-main__toggle");
const navMenu = document.querySelector(".nav-main__menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navMenu.contains(e.target) &&
    !navToggle.contains(e.target) &&
    navMenu.classList.contains("is-active")
  ) {
    navMenu.classList.remove("is-active");
  }
});

// Close menu when clicking a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-active");
  });
});
