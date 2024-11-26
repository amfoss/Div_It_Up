const words = [
  "apple", "banana", "grape", "orange", "cherry",
  "mango", "peach", "pear", "plum", "kiwi", "lemon", "lime"
];

let currentWord = "";
let score = 0;
let wordCount = 0;
let startTime;
let endTime;

const currentWordElement = document.getElementById("current-word");
const typedValueElement = document.getElementById("typed-value");
const messageElement = document.getElementById("message");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start");

startButton.addEventListener("click", startGame);

function startGame() {
  score = 0;
  wordCount = 0;
  scoreElement.innerText = score;
  messageElement.innerText = "";
  typedValueElement.value = "";
  typedValueElement.focus();
  startTime = new Date().getTime();
  setNewWord();

  typedValueElement.addEventListener("keyup", checkInput);
}

function setNewWord() {
  if (wordCount >= 10) {
    endGame();
    return;
  }

  currentWord = words[Math.floor(Math.random() * words.length)];
  currentWordElement.innerText = currentWord;
  wordCount++;
}

function checkInput(event) {
  if (event.key === "Enter") {
    const typedValue = typedValueElement.value.trim();

    if (typedValue === currentWord) {

      score++;
      scoreElement.innerText = score;
      messageElement.innerText = "Correct! Well done.";
      messageElement.style.color = "green";
      typedValueElement.value = "";
      setNewWord();
    } else {
      
      messageElement.innerText = "Incorrect! Try again.";
      messageElement.style.color = "red";
    }
  }
}

function endGame() {
  endTime = new Date().getTime();
  totalTime = (wordCount/((endTime-startTime)/(1000 * 60))).toFixed(3);;
  currentWordElement.innerText = "";
  messageElement.innerText = `Congratulations! Your final score is ${score} and your speed is ${totalTime}WPM`;
  typedValueElement.removeEventListener("keyup", checkInput);
}
