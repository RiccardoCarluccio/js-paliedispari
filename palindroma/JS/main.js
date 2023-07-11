const BTN_INPUT = document.querySelector(".btn-input");
const USER_INPUT = document.getElementById("user-input");

BTN_INPUT.addEventListener('click', function getWord() {
  const USER_WORD = USER_INPUT.value;

  //TEST INPUT
  console.log(`The word is: ${USER_WORD}`);

  wordSplit(USER_WORD);
  wordReverse(wordSplit(USER_WORD));
  
  const finalReversedWord = wordReverse(wordSplit(USER_WORD)).join;

  console.log(palindromeCheck(USER_WORD, finalReversedWord));
})