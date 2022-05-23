import personTml from "./personTml.js";
import reject from "./reject.js";
import { videoe, chatrendor} from "./reject.js";


let list = document.getElementById('list')
let mainVideo =  document.getElementById('main')
let chatVideo = document.querySelector('.chat_video')
let chat = document.querySelector('.chat')


async function main() {
    let fet = await fetch('https://reqres.in/api/users')
    let newFet =(await fet.json()).data
    reject( list, newFet);
    videoe(chatVideo,newFet);
    chatrendor(chat,newFet);
}

main()


