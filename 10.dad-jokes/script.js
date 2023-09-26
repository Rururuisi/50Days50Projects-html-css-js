// https://icanhazdadjoke.com

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const getRandomJoke = async() => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "get",
        headers: {
            "Accept": "application/json",
        }
    })
    const data = await response.json();
    return data.joke;
}


async function displayRandomJoke() {
    joke.innerText = await getRandomJoke();
}

displayRandomJoke();

btn.addEventListener("click", displayRandomJoke);
