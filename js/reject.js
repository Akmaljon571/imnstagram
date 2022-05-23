import person from "./person.js";
import { video } from "./person.js";

export default function (list, data) {
    let frg = document.createDocumentFragment()
    data.forEach(key => {
        let newNode = person(key)
        frg.append(newNode)
    });
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