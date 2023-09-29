const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profileImg = document.querySelector("#profile-img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

const data = {
    headerImgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    title: "Lorem ipsum dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam.",
    profileImgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Jhon Doe",
    date: "Oct 08, 2020"
}

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="${data.headerImgUrl}" alt=""/>`;
    title.innerText = data.title;
    excerpt.innerText = data.excerpt;
    profileImg.innerHTML = `<img src="${data.profileImgUrl}" alt="" />`;
    name.innerText = data.name;
    date.innerText = date.date;

    animatedBgs.forEach(bg => bg.classList.remove("animated-bg"));
    animatedBgText.forEach(bgText => bgText.classList.remove("animated-bg-text"));
}
