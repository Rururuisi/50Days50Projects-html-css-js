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

canvas.addEventListener("mousedown", (e) => {
    isPress = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("touchstart", (e) => {
    isPress = true;
    const touchPos = getTouchPos(e);
    x = touchPos.x;
    y = touchPos.y;
});

canvas.addEventListener("mouseup", () => penUp());
canvas.addEventListener("touchend", () => penUp());

const penUp = () => {
    isPress = false;
    x = undefined;
    y = undefined;
}

canvas.addEventListener("mousemove", (e) => {
    if (isPress) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

canvas.addEventListener("touchmove", (e) => {
    if (isPress) {
        const touchPos = getTouchPos(e);
        const x2 = touchPos.x;
        const y2 = touchPos.y;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

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
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
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

function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
    }
}
