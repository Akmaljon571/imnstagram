export default function({ id, avatar, last_name, email, first_name }) {
    let template3 = document.getElementById('t')
    let newTemplate = template3.content.cloneNode(true)

    newTemplate.querySelector('.chat_img').src = avatar
    newTemplate.querySelector('.chat_ism').textContent = last_name
    newTemplate.querySelector('.chat_fam').textContent = first_name 
    
    

    return newTemplate
}