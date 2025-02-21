const mobileNav1 = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav1.classList.toggle("hamburger-active");
};
mobileNav1.addEventListener("click", () => toggleNav());

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let slideInterval;

function updateSlidePosition() {
  document.querySelector(".carousel-images").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

function startAutoplay() {
  slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoplay() {
  clearInterval(slideInterval);
}

// Start autoplay when page loads
window.onload = startAutoplay;

// Pause autoplay on hover and resume on mouse leave
document.querySelector(".carousel").addEventListener("mouseover", stopAutoplay);
document.querySelector(".carousel").addEventListener("mouseout", startAutoplay);








