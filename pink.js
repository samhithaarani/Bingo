const Msgel =  document.getElementById("msg")
const Insel =  document.getElementById("ins")
const Insgel =  document.getElementById("insg")
const Coustcol = document.getElementsByClassName("custom-col-sm")
const myBtn = document.getElementsByClassName("mybtn")
const Liel = document.getElementsByTagName("li")
const Cchoice = document.getElementById("cchoice")
const Uchoice = document.getElementById("uchoice")
let player = "None"

document.addEventListener('keydown', function(event) {
    const inputs = document.querySelectorAll('input[type="number"]');
    const currentIndex = Array.from(inputs).findIndex(input => input === document.activeElement);
    console.log(inputs.innerText)
    const columns = 5; // Number of columns
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

    for (let i = 0; i < inputValues.length; i++) {
        if (inputValues[i] == "") {
            Msgel.textContent = "Hey! Watch out you should enter some values! or click reset to proceed with default values!";
            return;
        }
    }

    console.log(inputValues);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].type = "button";
        Array.from(Coustcol).forEach(mybox => {
            mybox.style.backgroundColor = "white";
            Insel.style.display = "none";
            Array.from(myBtn).forEach(btn => {
                btn.style.display = "none";
            });
            Insgel.textContent = "Game Started! Now! start by selecting a number from grid";
            Insgel.style.color = "blue";
            Array.from(Liel).forEach(li => {
                li.style.display = "none";
            });
        });
        HandleTurn();
    }
}

function HandleTurn() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onclick = () => {
            let userChoice = userInput(i);
            Uchoice.textContent = "Your Turn Select Number";
            Uchoice.style.color = "green";
            player = "user";
            inputs[i].disabled = true;
            handleGame(i);
            checkWin(i, "player");

            let myran = getRandom();
            let myranIndex = inputValues.findIndex(value => parseInt(value) === myran);
            Cchoice.textContent = "My Choice " + myran;

            if (!inputs[myranIndex].disabled) {
                inputs[myranIndex].disabled = true;
                player = "computer";
                handleGame(myranIndex);
                checkWin(myranIndex, "computer");
            }
        }
    }
}

update_List = inputValues;

function handleGame(myNum) {
    update_List[myNum] = 0;
    console.log(update_List);
    return update_List;
}

function getRandom() {
    let random_number;
    const availableNumbers = inputValues.map((val, idx) => !inputs[idx].disabled && parseInt(val)).filter(Boolean);

    if (availableNumbers.length === 0) {
        console.log("No more available numbers");
        return -1;
    }

    do {
        random_number = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    } while (!availableNumbers.includes(random_number));

    return random_number;
}

let comp_List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 16, 20, 18, 19, 23, 21, 24, 22, 25];
let player_List = inputValues;

let win_pat = {
    cols: [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24]
    ],
    rows: [
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24]
    ],
    dig: [
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ]
};

function checkWin(myNum, player) {
    if (player === "user") {
        player_List[myNum] = 0;
    } else {
        comp_List[myNum] = 0;
    }

    let count = 0;
    let patterns = [...win_pat.cols, ...win_pat.rows, ...win_pat.dig];

    patterns.forEach(pattern => {
        if (pattern.every(index => player_List[index] === 0)) {
            count++;
        }
    });

    if (count >= 5) {
        displayResult("User");
        return;
    }

    count = 0;
    patterns.forEach(pattern => {
        if (pattern.every(index => comp_List[index] === 0)) {
            count++;
        }
    });

    if (count >= 5) {
        displayResult("Computer");
        return;
    }
}

    // Function to display result dynamically
    function displayResult(winner) {
      let resultContainer = document.getElementById("resultContainer");
      resultContainer.innerHTML = `
          <img src="https://i.pinimg.com/originals/a4/62/22/a46222b305b14333a1f3ac485cba8b7a.gif" alt="${winner} wins">
          <p>${winner} wins!!</p>
      `;
      resultContainer.classList.add("show"); // Show the result container
  }
function userInput(num) {
    return inputValues[num];
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
            Msgel.textContent = "";
        } else {
            inputsdup[index] = input.value;
            input.value = '';
        }
    });
}
