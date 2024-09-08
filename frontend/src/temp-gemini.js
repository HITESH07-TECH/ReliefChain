'use strict';

/**
 * Smooth scrolling for anchor links
 */
const smoothScrollLinks = document.querySelectorAll("a[href^='#']");

for (let i = 0; i < smoothScrollLinks.length; i++) {
  smoothScrollLinks[i].addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

/**
 * Back to top button
 */
const backToTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  window.scrollY > 300 ? backToTopBtn.classList.add("visible")
    : backToTopBtn.classList.remove("visible");
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/**
 * Loading animation on page load
 */
window.addEventListener("load", function () {
  const loader = document.querySelector("[data-loader]");
  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 500); // Optional: Removes the loader from the DOM after fade-out
  }
});
