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

function getEveryNth() {
  var everyNthSelect = document.getElementById('every-nth-select');

  console.log("== everyNthSelect.value:", everyNthSelect.value);
  console.log("  -- typeof(everyNthSelect.value):", typeof(everyNthSelect.value));

  var n = parseInt(everyNthSelect.value);
  console.log("== n:", n);
  console.log("  -- typeof(n):", typeof(n));

  return n;
}

function getHighlightColor() {
  var selectedHighlightColorRadio = document.querySelector('input[name="highlight-color"]:checked');
  console.log("== selectedHighlightColorRadio:", selectedHighlightColorRadio);
  return selectedHighlightColorRadio.value;
}

function handleAddWordButtonClick(event) {
  var word = allWords[currentWord];
  console.log("== word:", word);
  if (word) {
    var n = getEveryNth();
    var highlight;
    if (!((currentWord + 1) % n)) {
      highlight = getHighlightColor();
    }

    var wordElem = generateWordElem(word, highlight);

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
