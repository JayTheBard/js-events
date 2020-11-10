var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  // console.log("== event triggered");
  var text = event.currentTarget.value;
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log("== event triggered, allWords:", allWords)
}

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

function handleAddWordButtonClick(event) {
  var word = allWords[currentWord];
  if (word) {
    var wordElem = generateWordElem(word);

    var container = event.currentTarget.parentNode.parentNode;
    var wordsContainer = container.querySelector('.words-container');
    wordsContainer.appendChild(wordElem);

    currentWord = (currentWord + 1) % allWords.length;
  }
}

var wordsInput = document.getElementById('words-input');
// wordsInput.addEventListener('input', handleNewWordsEntered);
wordsInput.addEventListener('change', handleNewWordsEntered);

var wordButtons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < wordButtons.length; i++) {
  wordButtons[i].addEventListener('click', handleAddWordButtonClick);
}
