// ===== Menu toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Scroll reveal =====
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Language switch =====
const langButtons = document.querySelectorAll(".lang-btn");
const texts = document.querySelectorAll("[data-en]");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const lang = btn.dataset.lang;
    texts.forEach(el => {
      el.textContent = el.dataset[lang];
    });
  });
});

// ===== Smooth scrolling for anchor links =====
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
