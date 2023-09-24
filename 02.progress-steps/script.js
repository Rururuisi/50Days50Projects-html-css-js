const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const stepNum = circles.length;
let currentActive = 0;

nextBtn.addEventListener("click", () => {
    if (currentActive < stepNum) {
        currentActive++;
        circles[currentActive].style.transitionTimingFunction = "step-end";
    }
    update();
})

prevBtn.addEventListener("click", () => {
    if (currentActive > 0) {
        circles[currentActive].style.transitionTimingFunction = "step-start";
        currentActive--;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        index <= currentActive ? circle.classList.add("active") : circle.classList.remove("active");
    })

    progress.style.width = `${currentActive / (stepNum-1) * 100}%`;

    if (currentActive === 0) {
        prevBtn.disabled = true;
    } else if (currentActive === stepNum - 1) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
