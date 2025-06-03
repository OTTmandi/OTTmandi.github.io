// script.js

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// WhatsApp redirection (optional enhancement)
document.querySelectorAll('.whatsapp-button').forEach(button => {
  button.addEventListener("click", () => {
    const phoneNumber = "917667458425"; // Replace with your WhatsApp number
    const message = encodeURIComponent("Hi! I'm interested in purchasing a subscription.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  });
});

// Optional FAQ toggles (if your FAQ becomes interactive later)
document.querySelectorAll('.faq-item h3').forEach(header => {
  header.style.cursor = 'pointer';
  header.addEventListener("click", () => {
    const p = header.nextElementSibling;
    if (p && p.tagName === "P") {
      p.style.display = p.style.display === "none" ? "block" : "none";
    }
  });
});