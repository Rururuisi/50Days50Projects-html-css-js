const cups = document.querySelectorAll(".cup");
const root = document.querySelector(":root");
const emptyLiter = document.querySelector(".liters");
const waterPercentage = document.querySelector(".percentage");


const fillClass = "fill-water";
const cupVolume = 250;
const goalInLiter = 2;

const isToggleCup = (idx) => {
    const isLeftFilled = idx === 0 || cups[idx - 1].classList.contains(fillClass);
    const isRightEmpty = idx === cups.length - 1 || !cups[idx + 1].classList.contains(fillClass);
    return (isLeftFilled && isRightEmpty);
}

const updateMainCup = () => {
        const filledCupsLen = document.querySelectorAll(`.${fillClass}`).length;
        const fillWaterInLiter = cupVolume * filledCupsLen / 1000;
        const emptyVolume = goalInLiter - fillWaterInLiter;
        const waterDrinkPerc = fillWaterInLiter / goalInLiter * 100
        root.style.setProperty("--main-cup-water-height", `${waterDrinkPerc}%`);
        emptyLiter.innerText = `${emptyVolume}L`;
        waterPercentage.innerText = `${waterDrinkPerc > 0 ? `${waterDrinkPerc}%` : ""}`
}

cups.forEach((cup, idx) => {
    cup.addEventListener("click", () => {
        if (isToggleCup(idx)) {
            cup.classList.toggle(fillClass);
        } else {
            cups.forEach((c, i) => {
                i > idx ? c.classList.remove(fillClass) : c.classList.add(fillClass);
            });
        }
        updateMainCup();
    })
})
