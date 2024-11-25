// Array of quotes to be used in the typing game.
const quotes = [
  "You know my methods, Watson. Apply them, and you will see that the solution becomes elementary when you break it into logical steps.",
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth. It is the foundation of all reasoning.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last. A mind needs to continuously grow and adapt.",
  "I never make exceptions. An exception disproves the rule, and in our line of work, consistency is the only path to the truth.",
  "What one man can invent another can discover. Progress, after all, relies on the constant battle of ingenuity and determination.",
  "There is nothing more deceptive than an obvious fact. People often ignore it, being distracted by the complexities that mask simplicity.",
  "It is a capital mistake to theorize before one has data. Insensibly, one begins to twist facts to suit theories, instead of theories to suit facts.",
  "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius. To excel, one must first understand excellence.",
  "Nothing clears up a case so much as stating it to another person. It forces one to organize thoughts and often reveals overlooked details.",
  "The game is afoot! Let us not waste a moment, Watson. Adventure and danger await, and the thrill of the chase lies ahead."
];

// Variables to store the current quote, start time, and timer.
// These keep track of the game state and timing.
let quote = "";
let start = null;
let timer = null;

// Grab all the elements we'll be interacting with in the DOM.
const quoteEl = document.getElementById("quote"); // Where the quote will be displayed.
const inputEl = document.getElementById("input"); // Where the user types their input.
const timeEl = document.getElementById("timer"); // Displays the elapsed time.
const accEl = document.getElementById("accuracy"); // Displays the typing accuracy.
const restartBtn = document.getElementById("restart"); // Button to restart the game.

// Modal elements for showing success and stats.
const successModal = document.getElementById("successModal");
const modalTime = document.getElementById("modalTime");
const modalAccuracy = document.getElementById("modalAccuracy");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("closeModal");

// Function to randomly pick a quote from the array.
function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Start the game by setting up everything: the quote, input, and timer.
function startGame() {
  quote = getQuote(); // Pick a random quote.
  quoteEl.textContent = quote; // Display the selected quote.
  inputEl.value = ""; // Clear the input box from any previous content.
  inputEl.disabled = false; // Make the input box editable again.
  inputEl.focus(); // Automatically focus on the input box for convenience.

  // Reset the timer and accuracy display.
  start = new Date(); // Capture the current time as the starting point.
  timeEl.textContent = "0"; // Show 0 seconds elapsed at the start.
  accEl.textContent = "0"; // Show 0% accuracy until user starts typing.

  clearInterval(timer); // Make sure no leftover timer is running.
  timer = setInterval(updateTime, 100); // Start the timer, updating every 100ms.
  updateQuoteDisplay(); // Highlight the quote for better visual feedback.
}

// Function to calculate the elapsed time and update the display.
function updateTime() {
  const elapsed = Math.floor((new Date() - start) / 1000); // Time in seconds since the start.
  timeEl.textContent = elapsed; // Update the timer display.
}

// Calculate typing accuracy based on how many characters match so far.
function calcAcc() {
  const typed = inputEl.value; // Get what the user has typed so far.
  let correct = 0; // Initialize the correct character count.

  // Compare each typed character with the corresponding quote character.
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === quote[i]) {
      correct++;
    }
  }

  // Calculate the percentage of correct characters and return it.
  return Math.floor((correct / quote.length) * 100);
}

// Highlight the typed part of the quote with color for better user feedback.
function updateQuoteDisplay() {
  const typed = inputEl.value; // What the user has typed so far.
  let display = ""; // Initialize the display string.

  // Loop through the quote, character by character.
  for (let i = 0; i < quote.length; i++) {
    if (i < typed.length) { // For characters already typed:
      if (typed[i] === quote[i]) {
        display += `<span style="color: green;">${quote[i]}</span>`; // Correct character in green.
      } else {
        display += `<span style="color: red;">${quote[i]}</span>`; // Incorrect character in red.
      }
    } else {
      display += `<span>${quote[i]}</span>`; // Remaining characters in default color.
    }
  }

  quoteEl.innerHTML = display; // Update the quote display with highlights.
}

// Show the success modal with time and accuracy when the user finishes the quote.
function showModal() {
  modalTime.textContent = timeEl.textContent; // Add elapsed time to the modal.
  modalAccuracy.textContent = accEl.textContent; // Add accuracy to the modal.

  // Display the modal and overlay by removing hidden classes.
  successModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Close the success modal and overlay.
function closeModalDialog() {
  successModal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Save and update the high score if the current attempt beats it.
function updateHighScore(time, accuracy) {
  // Get the current high score from local storage, or initialize with defaults.
  const highScore = JSON.parse(localStorage.getItem("highScore")) || { time: Infinity, accuracy: 0 };

  // If the new time is better, update the high score and notify the user.
  if (time < highScore.time) {
    localStorage.setItem("highScore", JSON.stringify({ time, accuracy }));
    alert(`New High Score! Time: ${time}s, Accuracy: ${accuracy}%`);
  }
}

// Display the current high score in the console.
function displayHighScore() {
  const highScore = JSON.parse(localStorage.getItem("highScore")) || { time: "N/A", accuracy: "N/A" };
  console.log(`High Score - Time: ${highScore.time}s, Accuracy: ${highScore.accuracy}%`);
}

// Event listener for input in the typing box.
inputEl.addEventListener("input", () => {
  updateQuoteDisplay(); // Update the highlighted quote display.
  accEl.textContent = calcAcc(); // Recalculate and update the accuracy.

  // Check if the user has typed the entire quote correctly.
  if (inputEl.value === quote) {
    clearInterval(timer); // Stop the timer.
    inputEl.disabled = true; // Disable input box to prevent further typing.
    const time = parseInt(timeEl.textContent, 10); // Get final time.
    const accuracy = parseInt(accEl.textContent, 10); // Get final accuracy.

    showModal(); // Show the success modal.
    updateHighScore(time, accuracy); // Update the high score if applicable.
  }
});

// Event listeners for restarting the game and closing the modal.
restartBtn.addEventListener("click", startGame);
closeModal.addEventListener("click", closeModalDialog);
overlay.addEventListener("click", closeModalDialog);

// Start the game and display the high score when the page loads.
startGame();
displayHighScore();
