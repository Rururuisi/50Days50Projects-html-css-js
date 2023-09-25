const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const circle = document.querySelector(".circle");
const article = document.querySelector(".article-container");
const navItems = document.querySelectorAll(".nav-item");

openBtn.addEventListener("click", () => {
    action(false);
})

closeBtn.addEventListener("click", () => {
    action(true);
})

function action(isRotatePos) {
    circle.style.transform = `rotate(${isRotatePos ? 0 : -90}deg)`;
    article.style.transform = `rotate(${isRotatePos ? 0 : -20}deg)`;
    navItems.forEach((curr, idx) => {
        curr.style.transform = isRotatePos ? `translateX(-${100 + idx * 50}%)` : "translateX(0)";
    })
}
