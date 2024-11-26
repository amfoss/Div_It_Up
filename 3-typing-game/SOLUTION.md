Assignment: 
Have added the directory for my typing game with this pr.

Challenges:
Screenshots:

![Screenshot from 2024-11-27 06-54-12](https://github.com/user-attachments/assets/02327fba-b3f4-4c9f-a8b8-c26a7a384c3f)
![Screenshot from 2024-11-27 06-54-46](https://github.com/user-attachments/assets/f77f031f-287c-4b8a-99ac-2d25cbf23234)


index.js

```<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div class="open-modal-btn-wrapper">
    <button class="open-modal-btn">
        Open Modal
    </button>
  </div>

  <div class="modal-overlay hide">
      <div class="modal-wrapper">
          <div class="close-btn-wrapper">
              <button class="close-modal-btn">
                  Close
              </button>
          </div>
          <h1 id="modal">Success</h1>
          <div class="modal-content">
              Congratulations!
          </div>
      </div>
  </div>
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```
script.js

```// inside script.js
// all of our quotes
const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
let activeEvent;
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  typedValueElement.disabled = false;
  activeEvent = true;
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});

// at the end of script.js
typedValueElement.addEventListener('input', () => {
  if (!activeEvent) {
    return;
  }
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    
    const elapsedTime = new Date().getTime() - startTime;
    let highScore = localStorage.getItem('highScore');
  
    if (!highScore || elapsedTime < highScore) {
      localStorage.setItem('highScore', elapsedTime);
      messageElement.innerText = `New High Score: ${elapsedTime.toFixed(2)} seconds!`;
    } else {
      messageElement.innerText = `Your Time: ${elapsedTime.toFixed(2)} seconds. High Score: ${highScore} seconds.`;
    }
    const openBtn = document.querySelector(".open-modal-btn");
    const modal = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-modal-btn");

    function openModal() {
        modal.classList.remove("hide");
    }

    function closeModal(e, clickedOutside) {
        if (clickedOutside) {
            if (e.target.classList.contains("modal-overlay"))
                modal.classList.add("hide");
        } else modal.classList.add("hide");
    }

    openBtn.addEventListener("click", openModal);
    modal.addEventListener("click", (e) => closeModal(e, true));
    closeBtn.addEventListener("click", closeModal);
    // end of sentence
    // Display success
    // const elapsedTime = new Date().getTime() - startTime;
    // const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    // messageElement.innerText = message;
    typedValueElement.disabled = true;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});


```
Have implemented all the functionality mentioned in the challenges.
