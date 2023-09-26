const audios = document.querySelectorAll("audio");
const buttons = document.querySelector("#buttons");

audios.forEach(audio => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = audio.id;
    buttons.appendChild(btn);

    btn.addEventListener("click", () => {
        audio.currentTime = 0
        audio.play();
        audios.forEach(sound => { sound !== audio && sound.pause() });
    })
});
