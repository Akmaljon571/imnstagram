import reject from "./reject.js";
import { videoe } from "./reject.js";
let list = document.getElementById('list')
let mainVideo =  document.getElementById('main')


async function main() {
    let fet = await fetch('https://reqres.in/api/users')
    let newFet =(await fet.json()).data
    reject( list, newFet);
    videoe( mainVideo,newFet);
}

main()