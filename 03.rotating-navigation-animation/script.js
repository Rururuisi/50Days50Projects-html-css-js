const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const circle = document.querySelector(".circle");
const article = document.querySelector(".article-container");

openBtn.addEventListener("click", () => {
    rotate(false);
})

closeBtn.addEventListener("click", () => {
    rotate(true);
})

function rotate(isPos) {
    circle.style.transform = `rotate(${isPos ? 0 : -90}deg)`;
    article.style.transform = `rotate(${isPos ? 0 : -20}deg)`;
}
