// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

showSlide(currentSlide);

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "⚠ Please fill in all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.style.color = "green";
    this.reset();
  }
});
