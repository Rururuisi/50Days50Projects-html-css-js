const left = document.querySelector(".split-left");
const right = document.querySelector(".split-right");

left.addEventListener("mouseover", () => {
    left.classList.add("expand");
    right.classList.add("shrink");
})

left.addEventListener("mouseleave", () => {
    left.classList.remove("expand");
    right.classList.remove("shrink");
})

right.addEventListener("mouseover", () => {
    right.classList.add("expand");
    left.classList.add("shrink");
})

right.addEventListener("mouseleave", () => {
    right.classList.remove("expand");
    left.classList.remove("shrink");
})