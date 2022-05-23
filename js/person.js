export default function ({ id, avatar, last_name, email, first_name }, indan = true) {
    let template = document.getElementById('template')
    let newTemplate = template.content.cloneNode(true)
    newTemplate.querySelector('.glavniyImg').src = avatar
    newTemplate.querySelector('.UserName').textContent = last_name
    newTemplate.querySelector('.link').href = `/profile.html?user=${id}` 
    

    return newTemplate
}

export function video ({ id, avatar, last_name, email, first_name }) {
    let template = document.getElementById('tem')
    let newTemplate = template.content.cloneNode(true)


    newTemplate.querySelector('.glavniyImg').src = avatar
    newTemplate.querySelector('.video_rasm1').src = avatar
    newTemplate.querySelector('.video_ism').textContent = last_name
    newTemplate.querySelector('.video_fam').textContent = first_name 
    
    return newTemplate
}