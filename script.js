const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

const setHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

setHeader();
window.addEventListener("scroll", setHeader, { passive: true });

toggle?.addEventListener("click", () => {
  const open = toggle.classList.toggle("is-open");
  nav?.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.classList.remove("is-open");
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("img").forEach((img) => {
  img.loading = img.loading || "lazy";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".section, .section-band, .menu-card, .card, .blog-card, .gallery-grid img").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
