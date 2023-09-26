const icons = document.querySelectorAll(".icon");
const faqContainers = document.querySelectorAll(".faq-container");

icons.forEach((icon, idx) => {
    icon.addEventListener("click", () => {
        faqContainers[idx].classList.toggle("active");
    })
})
