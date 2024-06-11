const Msgel =  document.getElementById("msg")
const Insel =  document.getElementById("ins")
const Insgel =  document.getElementById("insg")
const Coustcol = document.getElementsByClassName("custom-col-sm")
const myBtn = document.getElementsByClassName("mybtn")
const Liel = document.getElementsByTagName("li")
const Cchoice = document.getElementById("cchoice")
const Uchoice = document.getElementById("uchoice")


document.addEventListener('keydown', function(event) {
    const inputs = document.querySelectorAll('input[type="number"]');
    const currentIndex = Array.from(inputs).findIndex(input => input === document.activeElement);
    console.log(inputs.innerText)
    const columns = 5; // Number of columns
    const rows = 5; // Number of rows
    let nextIndex = -1;

    switch(event.key) {
      case 'ArrowRight':
        if ((currentIndex + 1) % columns !== 0 && currentIndex + 1 < inputs.length) {
          nextIndex = currentIndex + 1;
        }
        break;
      case 'ArrowLeft':
        if (currentIndex % columns !== 0) {
          nextIndex = currentIndex - 1;
        }
        break;
      case 'ArrowUp':
        if (currentIndex - columns >= 0) {
          nextIndex = currentIndex - columns;
        }
        break;
      case 'ArrowDown':
        if (currentIndex + columns < inputs.length) {
          nextIndex = currentIndex + columns;
        }
        break;
    }

    if (nextIndex >= 0) {
      inputs[nextIndex].focus();
      event.preventDefault(); // Prevent default scrolling behavior
    }
  });

  const inputs = document.querySelectorAll('input[type="number"]');
  const inputValues = [];


  function userChoice() {
   
    inputs.forEach(input => {
      inputValues.push(input.value);
    });
    inputs.forEach(input => {
        input.value = '';
      });

    for (let i=0 ;i<inputValues.length;i++){
      if(inputValues[i]==""){
       Msgel.textContent = "Hey! Watch out you should enter some values! or click reset to proceed with deafult values!";
      }
    }

    console.log(inputValues)
    for (let i=0 ; i<inputs.length ;i++){
      inputs[i].type = "button"
      Array.from(Coustcol).forEach(mybox => {
        mybox.style.backgroundColor = "white";
        Insel.style.display = "none"
        Array.from(myBtn).forEach(btn=>{
          btn.style.display ="none"
        })
        Insgel.textContent = "Game Started! Now! computer will give you a number and also u need to clcik on the number you want to select after that!"
        Insgel.style.color = "blue"
        Array.from(Liel).forEach(
          li =>{
            li.style.display="none"

            
          }
        )
        
      })
          HandleTurn()
    }
  }

function HandleTurn()
{


for (let i=0 ; i<inputs.length ;i++){

  compChoice=false;
      
 if(compChoice==false)  {  
  inputs[i].onclick = ()=> {
    let userChoice = userInput (i);
    Uchoice.textContent = "User Choice " + userChoice
    inputs[i].disabled=true
    let myran = getRandom()
    console.log(inputValues.findIndex[myran])
    let myranIndex = inputValues.findIndex(value => parseInt(value) === myran);
    inputs[myranIndex].disabled=true
    Cchoice.textContent = "My Choice " + myran;



  }
}

  }
}



function getRandom(){
  random_number = Math.floor(Math.random()*25)+1;
  return random_number;
}
function userInput(num) {
  return(inputValues[num]);
}


  let inputsdup; 

document.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('input[type="number"]');
  inputsdup = Array.from(inputs).map(input => input.value); 
});

function Reset() {

  let inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input, index) => {
    if (input.value === '') {
      input.value = inputsdup[index]; 
      Msgel.textContent = ""
    } else {
      inputsdup[index] = input.value; 
      input.value = ''; 
    }
  });
}