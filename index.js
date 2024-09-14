const carousel = document.getElementById("carousel");
const slides = carousel.children;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let currentSlide = 0;
const totalSlides = slides.length;

// Create navigation dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("button");
  dot.classList.add(
    "w-3",
    "h-3",
    "rounded-full",
    "bg-gray-300",
    "hover:bg-gray-400"
  );
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.children;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  Array.from(dots).forEach((dot, index) => {
    dot.classList.toggle("bg-gray-600", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


setInterval(nextSlide, 5000);


updateCarousel();
