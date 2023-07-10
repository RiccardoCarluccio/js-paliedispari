/**
 * @param {string} 
 */
function palindromeCheck (word) {
  if (typeof word !== 'string') {
    word = 'word';
  }

  const WORD_ARRAY = word.split("");
  //TEST
  console.log(`The chosen word is: ${word} and the resulting array is: ${WORD_ARRAY}`);

  return WORD_ARRAY;
}

//TEST FUNZIONE palindromeCheck()
console.log(palindromeCheck('classe102'));

/**
 * @param {Array}
 */
function wordReverse (wordSplitted) {
  const WORD_REVERSED = [];
  for (i = wordReverse.length; i = 0; i--) {
    WORD_REVERSED.push(wordSplitted(i));
  }

  //TEST
  console.log(`The reversed array is: ${WORD_REVERSED}`);
}

//TEST FUNZIONE wordSplitted
console.log(wordReverse());