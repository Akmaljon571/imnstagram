import person from "./person.js";

export default function (list, data) {
    let frg = document.createDocumentFragment()
    data.forEach(key => {
        let newNode = person(key)
        frg.append(newNode)
    });
    list.append(frg)
}