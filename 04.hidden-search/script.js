const container = document.querySelector(".container");
const input = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
    container.classList.toggle("active");
    input.focus();
});
