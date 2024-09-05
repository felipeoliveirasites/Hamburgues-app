const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

const updateSlidePosition = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('current-indicator', index === currentIndex);
    });
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
    updateIndicators();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
    updateIndicators();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
        updateIndicators();
    });
});
