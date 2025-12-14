const buttons = document.querySelectorAll(".choiceBtn");
const landing = document.getElementById("landing");
const wrapped = document.getElementById("wrapped");
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bg-music");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// BUTTON CLICK → SHOW WRAPPED + PLAY MUSIC
buttons.forEach(button => {
    button.addEventListener("click", () => {
        landing.style.display = "none";
        wrapped.style.display = "flex";

        slides.forEach(slide => slide.classList.remove("active"));
        slides[0].classList.add("active");
        wrapped.style.background = slides[0].getAttribute("data-bg");

        // Update progress bar
        updateDots();

        // Play music
        music.play();

        currentSlide = 0;
    });
});

// CLICK ANYWHERE ON WRAPPED → NEXT SLIDE
wrapped.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove("active");
        currentSlide++;
        slides[currentSlide].classList.add("active");
        wrapped.style.background = slides[currentSlide].getAttribute("data-bg");

        // Update progress bar
        updateDots();
    }
});

// FUNCTION TO UPDATE PROGRESS BAR
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

updateDots();