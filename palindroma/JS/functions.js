/**
 * @param {string} 
 */
function checkPalindrome (word) {
  if (typeof word !== 'string') {
    word = 'word';
  }

  const wordArray = word.split("");
  //TEST
  console.log(`The chosen word is: ${word} and the resulting array is: ${wordArray}`);
}

//TEST FUNZIONE checkPalindrome()
console.log(checkPalindrome('test&test'));