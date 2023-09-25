const boxes = document.querySelectorAll(".box");

checkBoxes();

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
    boxes.forEach(box => {
        if (box.getBoundingClientRect().bottom < window.innerHeight) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}