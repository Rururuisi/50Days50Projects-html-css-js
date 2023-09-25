const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const circle = document.querySelector(".circle");
const article = document.querySelector(".article-container");
const navItems = document.querySelectorAll(".nav-item");

openBtn.addEventListener("click", () => {
    action(true);
})

closeBtn.addEventListener("click", () => {
    action(false);
})

function action(isOpen) {
    circle.style.transform = `rotate(${isOpen ? -90 : 0}deg)`;
    article.style.transform = `rotate(${isOpen ? -20 : 0}deg)`;
    navItems.forEach((curr, idx) => {
        curr.style.transform = isOpen ? "translateX(0)" : `translateX(-${100 + idx * 50}%)`;
    })
}
