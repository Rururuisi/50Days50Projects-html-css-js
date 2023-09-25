const loading = document.querySelector(".loading");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loading.innerText = `${load}%`;

    loading.style.opacity = `${(100 - load) / 100}`;
    bg.style.filter = `blur(${30 - 30 / 100 * load}px)`;
}
