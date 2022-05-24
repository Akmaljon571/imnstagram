export default function({ id, avatar, last_name, email, first_name }) {
    let template3 = document.getElementById('t')
    let newTemplate = template3.content.cloneNode(true)

    newTemplate.querySelector('.chat_img').src = avatar
    newTemplate.querySelector('.chat_ism').textContent = last_name
    newTemplate.querySelector('.chat_fam').textContent = first_name 
    newTemplate.querySelector('.link').href = `/chat.html?user=${id}`
    

    return newTemplate
}

export function chatletft({ id, avatar, last_name, email, first_name }) {
    let template3 = document.getElementById('templateChat')
    let newTemplate = template3.content.cloneNode(true)

    
    newTemplate.querySelector('.imgGlavniy').src = avatar
    newTemplate.querySelector('.chatism').textContent = last_name
    newTemplate.querySelector('.activ').textContent = 'online' 
    newTemplate.querySelector('.link').href = `/chat.html?user=${id}`
    

    return newTemplate
}
export function chatringth({ id, avatar, last_name, email, first_name }) {
    let template3 = document.getElementById('template-table')
    let newTemplate = template3.content.cloneNode(true)

    
    newTemplate.querySelector('.imgGlavniy').src = avatar
    newTemplate.querySelector('.last').textContent += last_name

    return newTemplate
}