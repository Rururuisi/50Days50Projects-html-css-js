const hint = document.querySelector(".hint");
const keycodesContainer = document.querySelector(".keycodes-container");

window.addEventListener("keydown", (event) => {
    hint.style.display = "none";
    keycodesContainer.style.display = "block";
    document.querySelector(".key").innerText = event.key === " " ? "Space" : event.key;
    document.querySelector(".keyCode").innerText = event.keyCode;
    document.querySelector(".code").innerText = event.code;
})
