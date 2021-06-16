import { container, arrow } from './variables.js'
import { arrowWidth } from './arrows.js'


window.addEventListener('resize', () => {
    arrow.forEach(item => {
        if(item.className.split(' ').indexOf("left") !== -1){
            item.style.left = `${container.clientWidth - arrowWidth}px`
        }
    })
})