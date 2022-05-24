import { chatletft, chatringth } from "./personTml.js"
let chatList = document.querySelector('.chat_list1')
let table = document.querySelector('.table-bordered')


async function chat() {
    let win = window.location.search.split('=')[1]
    let dat = await fetch('https://reqres.in/api/users/'+win)
    let datet = (await dat.json()).data
    table.append(chatringth(datet));
    chatList.className = 'chat_list1 om'
}

chat()

async function chatleft() {
    let glaniy = await fetch('https://reqres.in/api/users')
    let glavniyCopy = (await glaniy.json()).data
    glavniyCopy.forEach(key => {
        chatList.append(chatletft(key)); 
    });
}

chatleft()