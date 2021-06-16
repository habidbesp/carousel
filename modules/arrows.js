import { arrow, container } from './variables.js'

let arrowWidth;
let arrowHeight;
arrow.forEach(item => {
    item.style = "display: flex; justify-content: center; align-items: center"
    item.style.position = "absolute";
    arrowWidth = parseInt(item.style.width = "50px");
    arrowHeight = parseInt(item.style.height = "50px");
    item.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
    item.style.color = "rgba(0, 0, 0, 0.8)"
    item.style.borderRadius = "50px"
    item.style.cursor = "pointer"

    item.style.top = `${(container.clientHeight / 2) - (arrowHeight / 2)}px`
    
    if(item.className.split(' ').indexOf("left") !== -1){
        item.style.left = `${container.clientWidth - arrowWidth}px`
    }
})


export  { arrowWidth }