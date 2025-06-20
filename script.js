// Simple scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  window.addEventListener("scroll", () => {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });
});
