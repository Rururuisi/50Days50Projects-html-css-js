const toolbox = document.querySelector(".toolbox");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const sizeDisplay = document.querySelector(".size");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const colorPicker = document.querySelector("#color");
const clearBtn = document.querySelector("#clear");

let size = 10;
let isPress = false;
let color = colorPicker.value;
let x, y;

window.addEventListener("resize", setCanvasSize());

canvas.addEventListener("mousedown", (e) => penDown(e));
canvas.addEventListener("touchstart", (e) => penDown(e));

const penDown = (e) => {
    isPress = true;
    x = e.offsetX;
    y = e.offsetY;
}

canvas.addEventListener("mouseup", () => penUp());
canvas.addEventListener("touchend", () => penUp());

const penUp = () => {
    isPress = false;
    x = undefined;
    y = undefined;
}

canvas.addEventListener("mousemove", (e) => penMove(e));
canvas.addEventListener("touchmove", (e) => penMove(e));

const penMove = (e) => {
    if (isPress) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
}

decreaseBtn.addEventListener("click", () => {
    size = size - 5 < 5 ? 5 : size - 5;
    sizeDisplay.innerText = size;
})

increaseBtn.addEventListener("click", () => {
    size = size + 5 > 50 ? 50 : size + 5;
    sizeDisplay.innerText = size;
})

colorPicker.addEventListener("change", (e) => color = e.target.value);

clearBtn.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height))

function setCanvasSize() {
    const toolboxHight = toolbox.offsetHeight;
    if (window.innerWidth < 804) {
        toolbox.style.width = window.innerWidth;
        ctx.canvas.width = window.innerWidth;
    }
    ctx.canvas.height = window.innerHeight - toolboxHight;
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
