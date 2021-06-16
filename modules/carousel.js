import { scene, carousel, allPanels, container } from "./variables.js";

const sceneWidth =  parseInt(scene.style.width = "600px") 
const sceneHeight = parseInt(scene.style.height = "400px")

let cells = 12;
let selectedIndex = 0;

function gettranslateZ() {
    return  Math.round((sceneWidth / 2) / (Math.tan((360 / cells) / 2 * Math.PI / 180)));
  }


carousel.style.transform = `translateZ(-${gettranslateZ()}px)`;
allPanels.forEach( ( item, i ) => {
    item.style.width = `${ sceneWidth - 20 }px`
    item.style.height = `${ sceneHeight - 20 }px`
    item.style.transform = `rotateY(${ ( 360 / cells ) * i }deg) translateZ(${ gettranslateZ() }px)`;
})


function rotateCarousel() {
    let angle = (selectedIndex / cells) * -360;
    carousel.style.transform = `translateZ(-${gettranslateZ()}px) rotateY(${angle}deg)`;
  }


container.addEventListener('click', (e) => {
  if((container.clientWidth / 2) - (sceneWidth / 2) > e.clientX){
      selectedIndex--;
      rotateCarousel();
  }
  else if((container.clientWidth / 2) + (sceneWidth / 2) < e.clientX){
      selectedIndex++;
      rotateCarousel();
  }
})

export  { rotateCarousel, sceneWidth, sceneHeight, selectedIndex }; 