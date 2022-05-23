import reject from "./reject.js";
let list = document.getElementById('list')


async function main() {
    let fet = await fetch('https://reqres.in/api/users')
    let newFet =(await fet.json()).data
    reject( list, newFet);
}

main()