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



  function userChoice() {
    const inputs = document.querySelectorAll('input[type="number"]');
    const inputValues = [];

    inputs.forEach(input => {
      inputValues.push(input.value);
    });
    inputs.forEach(input => {
        input.value = '';
      });

    console.log(inputValues);
  }




  let inputsdup; 

document.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('input[type="number"]');
  inputsdup = Array.from(inputs).map(input => input.value); // Initialize inputsdup inside
});

function Reset() {
  let inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input, index) => {
    if (input.value === '') {
      input.value = inputsdup[index]; 
    } else {
      console.log(`Setting input ${index} to empty value`);
      inputsdup[index] = input.value; 
      input.value = ''; 
    }
  });
}
