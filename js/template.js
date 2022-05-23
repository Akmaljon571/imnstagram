export default function ({ id, avatar, last_name, email, first_name }, indan = true) {
    let template = document.getElementById('template')
    let newTemplate = template.content.cloneNode(true)
    newTemplate.querySelector('.profile-img').src = avatar
    newTemplate.querySelector('.imgimg').src = avatar
    newTemplate.querySelector('.ism').textContent = last_name
    newTemplate.querySelector('.fam').textContent = first_name
    newTemplate.querySelector('.gmail').textContent = email
    

    return newTemplate
}