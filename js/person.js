export default function ({ id, avatar, last_name, email, firt_name }, indan = true) {
    let template = document.getElementById('template')
    let newTemplate = template.content.cloneNode(true)
    newTemplate.querySelector('.glavniyImg').src = avatar
    newTemplate.querySelector('.UserName').textContent = last_name
    newTemplate.querySelector('.link').href = `/profile.html?user=${id}` 
    

    return newTemplate
}