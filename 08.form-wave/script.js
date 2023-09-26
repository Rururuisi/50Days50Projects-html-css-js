const labels = document.querySelectorAll("label");

labels.forEach(label => {
    const text = label.innerText.split("");
    label.innerText = "";
    text.forEach((letter, idx) => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.transitionDelay = `${idx * 50}ms`;
        label.appendChild(span);
    })
})