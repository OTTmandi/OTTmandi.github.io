// product.js

const planSelect = document.getElementById("plan-select");
const whatsappLink = document.getElementById("whatsapp-link");

function updateLink() {
  const months = planSelect.value;
  const phone = "917667458425"; // Replace with your WhatsApp number
  const message = `Hi, I'm interested in buying ${months} month${months > 1 ? 's' : ''} of YouTube Premium from OTT Mandi.`;

  whatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

planSelect.addEventListener("change", updateLink);

// Set initial link on page load
updateLink();
