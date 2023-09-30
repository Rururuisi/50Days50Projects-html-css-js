const githubUrl = `https://github.com/`;
const githubUserAPI = "https://api.github.com/users/";

const main = document.querySelector("#main");
const form = document.querySelector(".user-form");
const search = document.querySelector("#search");

const getUser = async(username) => {
    let user, repos;
    try {
        user = (await axios.get(githubUserAPI + username)).data;
        repos = await getUserRepos(user);
    } catch (err) {
        if (err.response.status === 404)
            createErrorCard(`No profile with this username`);
    }
    if (user && repos)
        createUserCard(user, repos);
}

const getUserRepos = async(user) => {
    try {
        const repos = (await axios.get(user.repos_url + "?sort=created")).data;
        return repos;
    } catch (err) {
        createErrorCard(`Problem fetching repos`);
    }
}

const createUserCard = (user, repos) => {
    const { avatar_url, name, bio, followers, following, public_repos } = user;

    let userBio = bio ? bio : "";
    const reposHtml = getReposHtml(repos);

    main.innerHTML = `
    <div class="card">
        <div>
            <img src="${avatar_url}" alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2><a href="${githubUrl + name}">${name}</a></h2>
            <p>${userBio}</p>
            <ul>
                <li>${followers} <strong>Followers</strong></li>
                <li>${following} <strong>Following</strong></li>
                <li>${public_repos} <strong>Repo</strong></li>
            </ul>
            <div class="repos">
                ${reposHtml}
            </div>
        </div>
    </div>
    `
}

const getReposHtml = (repos) => {
    let reposHtml = "";
    repos.slice(0, 5).forEach(({ name, html_url }) => {
        reposHtml += `<a href="${html_url}" class="repo">${name}</a>`;
    });
    return reposHtml;
}

const createErrorCard = (errorMsg) => {
    main.innerHTML = `
        <div class="card">
            <h2>${errorMsg}</h2>
        </div>
    `;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = search.value;
    if (username) {
        getUser(username);
        search.value = '';
    }
})
