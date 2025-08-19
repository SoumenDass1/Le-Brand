document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide3');
  const dotsContainer = document.querySelector('.slider-dots');
  let index = 0;
  const total = slides.length;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = document.querySelectorAll('.dot');

  function goToSlide(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function nextSlide() {
    index = (index + 1) % total;
    goToSlide(index);
  }

  let interval = setInterval(nextSlide, 2000);

  const container = document.querySelector('.slider-container');
  container.addEventListener('mouseenter', () => clearInterval(interval));
  container.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 2000));
});
