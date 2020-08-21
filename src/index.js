import './styles/main.css'
import {model} from './model'

let site = document.querySelector("#site")

model.forEach(block => {
    site.insertAdjacentHTML("beforeend", block.toHTML())
})




