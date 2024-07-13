const container = document.querySelector('.container');
function randomColor() {
    let color = [ "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];
    return color[Math.round(Math.random()*14)];
  } 
  
function getNumber(){
    container.innerHTML = '';
   var grids = [];
   
   var inputs = parseInt(prompt("Enter number of rows, should be less than 100 "));
   var gridSize = (640/inputs);
   var input = inputs * inputs
   if (inputs <= 100){
      for (let i = 0; i < input; i++) {
        grids[i] = document.createElement('div');
        grids[i].classList.add('box');
        grids[i].style.minWidth = `${gridSize}px`;
        grids[i].style.minHeight = `${gridSize}px`;
        grids[i].style.border = '1px solid red';
        container.appendChild(grids[i]);
        
    }
    var box = document.getElementsByClassName('box');
    var arr = [...box];
    for (let j = 0; j < arr.length; j++) {
      
        arr[j].addEventListener("mouseover",()=>{
          arr[j].style.backgroundColor = randomColor();
        
       
        })
      
    }
    console.log(randomColor())
    
 

   }
   else{
    alert("Invalid number");
    container.innerHTML = '';
   }

  }

  




           
  
  


  



