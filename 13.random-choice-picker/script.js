const choicesInput = document.querySelector(".choices-input");
const choicesContainer = document.querySelector(".choices");

choicesInput.addEventListener("focus", () => {
    choicesInput.classList.add("focus");

    choicesInput.addEventListener("keyup", () => {
        const choices = choicesInput.innerText.split(",");
        choicesContainer.innerHTML = "";
        choices.forEach(choice => {
            if (choice.trim() !== "") {
                choicesContainer.innerHTML += `<span>${choice}</span>`;
            }
        })
    })
})

choicesInput.addEventListener("focusout", () => {
    if (choicesInput.innerText === "") {
        choicesInput.classList.remove("focus");
    }
})
