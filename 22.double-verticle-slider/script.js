const silderContainer = document.querySelector(".slider-container");
const sildeLeft = document.querySelector(".left-slide");
const sildeRight = document.querySelector(".right-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLen = sildeRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

sildeLeft.style.top = `-${(slidesLen - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLen - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLen - 1;
        }
    }
    sildeRight.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
    sildeLeft.style.transform = `translateY(${activeSlideIndex * 100}vh)`;

}
