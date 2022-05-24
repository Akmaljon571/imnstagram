import person from "./person.js";
import { video} from "./person.js";
import personTml, { chatletft } from "./personTml.js";


export default function (list, data) {
    let frg = document.createDocumentFragment()
    data.forEach(key => {
        let newNode = person(key)
        frg.append(newNode)
    });
    list.innerHTML = ''
    list.append(frg)
}
export function videoe (list, data) {
    let frg = document.createDocumentFragment()
    data.forEach(key => {
        let newNod = video(key)
        frg.append(newNod)
    });
    list.append(frg)
}
export function chatrendor(list, data) {
    let frg = document.createDocumentFragment()
    data.forEach(key => {
        let newNod = personTml(key)
        frg.append(newNod)
    });
    list.append(frg)
}
