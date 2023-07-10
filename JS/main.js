const BTN_INPUT = document.querySelector(".btn-input");
const USER_INPUT = document.getElementById("user-input");
const EVEN_ODD_SELECT = document.getElementById("even-odd-select");

let sum;
let counter = 0;

BTN_INPUT.addEventListener('click', function getData() {
  const USER_NUM = USER_INPUT.value;
  sum = parseInt(USER_NUM) + parseInt(randomNumber());
  
  //TEST somma
  console.log(`The sum is: ${sum}`);

  //SEZIONE SELECT
  const userChoice = EVEN_ODD_SELECT.value;
  if (userChoice === 'Odd') {
    if (sum % 2 === 0) {
      console.log('The sum was even. You lost.');
      counter--;
    } else {
      console.log('The sum was odd. You won.');
      counter++;
    }
  } else {
    if (sum % 2 === 0) {
      console.log('The sum was even. You won.');
      counter++;
    } else {
      console.log('The sum was odd. You lost.')
      counter--;
    }
  }
  console.log(`Your win/loss edge is: ${counter}`);

})

//TEST funzione random
randomNumber();

//funzione TEST
test(randomNumber);

//AVVISO DI FINE TEST
console.log("End of functions' tests");
