/**
 * 
 */
function randomNumber() {
  const cpuResult = Math.floor(Math.random() * 5) + 1;
  console.log(`The random number between 1 and 5 is: ${cpuResult}`);
  return cpuResult;
}

//FUNZIONE TEST
function test(tested) {
  tested();
}