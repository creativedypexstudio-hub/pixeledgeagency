
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form: prepare an enquiry in WhatsApp
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  // Replace this with your own WhatsApp number.
  // Include country code; do not include + or spaces.
  const whatsappNumber = "916392938124";

  if (whatsappNumber.includes("X")) {
    alert("Please add your WhatsApp number in script.js first.");
    return;
  }

  const text = [
    "Hello Pixel Edge Agency!",
    "",
    "Name: " + name,
    "Email: " + email,
    "Service: " + service,
    "Project details: " + message
  ].join("\n");

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});
