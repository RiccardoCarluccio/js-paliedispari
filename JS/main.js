const BTN_INPUT = document.querySelector(".btn-input");
const USER_INPUT = document.getElementById("user-input");
let sum;

BTN_INPUT.addEventListener('click', function getData() {
  const USER_NUM = USER_INPUT.value;
  sum = USER_NUM + randomNumber();
  
  //TEST somma
  console.log(`The sum is: ${sum}`);
})

//TEST funzione random
randomNumber();

//funzione TEST
test(randomNumber);
