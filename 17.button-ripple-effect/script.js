const buttons = document.querySelectorAll(".ripple");

buttons.forEach(btn => {

    btn.addEventListener("click", function(e) {
        // click position on the viewport
        const x = e.clientX;
        const y = e.clientY;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const posTop = y - btnTop;
        const posLeft = x - btnLeft;

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = `${posTop}px`;
        circle.style.left = `${posLeft}px`;
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})
