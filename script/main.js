// --- Pictures and captions ---
const slides = [
    { img: "assets/pictures/1.jpg", caption: "Remember our first date?" },
    { img: "assets/pictures/2.jpg", caption: "Laughing together at that funny moment" },
    { img: "assets/pictures/3.jpg", caption: "Our first sunset walk" },
    { img: "assets/pictures/4.jpg", caption: "The coffee we shared" },
    { img: "assets/pictures/5.jpg", caption: "Sweet memories forever" },
    { img: "assets/pictures/6.jpg", caption: "A small adventure we had" },
    { img: "assets/pictures/7.jpg", caption: "Our favorite movie night" },
    { img: "assets/pictures/8.jpg", caption: "That funny little argument" },
    { img: "assets/pictures/9.jpg", caption: "Random happy moments" },
    { img: "assets/pictures/10.jpg", caption: "Always thinking of you" }
];

let currentIndex = 0;
const slideshow = document.getElementById("slideshow");
const caption = document.getElementById("caption");
const finalQuestion = document.getElementById("finalQuestion");

function showNextSlide() {
    slideshow.classList.remove("active"); // fade out
    caption.style.opacity = 0;

    setTimeout(() => {
        currentIndex++;

        if (currentIndex < slides.length) {
            slideshow.src = slides[currentIndex].img;
            caption.textContent = slides[currentIndex].caption;

            slideshow.classList.add("active");
            caption.style.opacity = 1;
        } else {
            // End of slides, show final question
            slideshow.parentElement.style.display = "none";
            finalQuestion.style.display = "block";
        }
    }, 1000); // match CSS transition
}

// Initialize first slide
slideshow.src = slides[0].img;
caption.textContent = slides[0].caption;
slideshow.classList.add("active");
caption.style.opacity = 1;

// Change slide every 5 seconds
setInterval(() => {
    if (currentIndex < slides.length - 1) {
        showNextSlide();
    }
}, 5000);
