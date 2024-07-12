const container = document.querySelector('.container');
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

var grids = [];

for (let i = 0; i < 16; i++) {
    grids[i] = document.createElement('div');
    grids[i].classList.add('box');
    grids[i].style.width = '50px';
    grids[i].style.height = '50px';
    grids[i].style.border = '1px solid red';
    container.appendChild(grids[i]);
    
}
var box = document.querySelector('box');
box.addEventListener("mouseover", ()=>{
    box.style.backgroundColor = randomColor()
})
console.log(grids)