/**
 * @param {string} 
 */
function wordSplit (word) {
  if (typeof word !== 'string') {
    word = 'word';
  }

  const WORD_ARRAY = word.split("");
  //TEST
  console.log(`The chosen word is: ${word} and the resulting array is: ${WORD_ARRAY}`);

  return WORD_ARRAY;
}

//TEST FUNZIONE wordSplit()
console.log(wordSplit('classe102'));
console.log('End of starting tests');

/**
 * @param {array}
 */
function wordReverse (splittedArray) {
  const WORD_REVERSED = [];
  for (i = splittedArray.length - 1; i >= 0; i--) {
    WORD_REVERSED.push(splittedArray[i]);
  }

  //TEST
  console.log(`The reversed array is: ${WORD_REVERSED}`);

  return WORD_REVERSED;
}

// //TEST FUNZIONE wordSplitted
// console.log(wordReverse());