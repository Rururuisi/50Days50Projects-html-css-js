const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.querySelector("#start-btn");
const gameContainer = document.querySelector(".game-container");
const timeEl = document.querySelector("#time");
const scoreEl = document.querySelector("#score");
const messageEl = document.querySelector(".message-container");
const msgCloseBtn = document.querySelector(".msg-close-btn");

let seconds = 0;
let score = 0;
let selected_insect = {};

startBtn.addEventListener("click", () => {
    screens[0].classList.add("up");
});

chooseInsectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        selected_insect = { src, alt };
        screens[1].classList.add("up");
        setTimeout(createInsect, 1000);
        startGame();
    })
})

msgCloseBtn.addEventListener("click", () => {
    messageEl.classList.remove("visible");
})

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = `${Math.floor(seconds / 60)}`.padStart(2, "0");
    let s = `${seconds % 60}`.padStart(2, "0");
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function createInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

    insect.addEventListener("click", catchInsect);

    gameContainer.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
        x: Math.random() * (width - 200) + 100,
        y: Math.random() * (height - 200) + 100
    }
}

function catchInsect() {
    increaseScore();
    this.classList.add("caught");
    setTimeout(() => this.remove(), 2000);
    addInsect();
}

function increaseScore() {
    score++;
    if (score % 20 === 0) {
        messageEl.classList.add("visible");
    }
    scoreEl.innerHTML = `Score: ${score}`;
}

function addInsect() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}
