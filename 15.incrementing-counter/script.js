const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 200);

        if (count < target) {
            counter.innerText = `${count + increment}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
})
