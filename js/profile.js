import template from "./template.js";


async function user() {
    let userId = window.location.search.split('=')[1];
    console.log(userId);
    const singleUserData = await fetch('https://reqres.in/api/users/'+userId)
    if (singleUserData.ok) {
        let userData = (await singleUserData.json()).data;
        console.log(userData);
        let userNodes = template(userData, false)

        document.querySelector('.main').append(userNodes)
    }
}

user()