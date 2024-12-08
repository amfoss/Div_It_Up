function fourDigitNumber() {
  let digits = [];
  while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
          digits.push(randomDigit);
      }
  }
  return digits.join('');
}

const code = fourDigitNumber();

let timeLeft = 300;


const timer = setInterval(() => {
  timeLeft--;
  document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;

  if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById('result').innerHTML = `You lost the game. The number was ${code}`;
      document.getElementById('guess').disabled = true;
  }
}, 1000);


function checkGuess() {
  const guess = document.getElementById('guess').value;
  if (guess.length !== 4 || isNaN(guess)) {
      alert("Please enter a valid 4-digit number.");
      return;
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
      if (guess[i] === code[i]) {
          bulls++;
      } else if (code.includes(guess[i])) {
          cows++;
      }
  }

  const historyList = document.getElementById('historyList');
  const guessResult = document.createElement('li');
  guessResult.textContent = `Guess: ${guess} - ${bulls} Bulls, ${cows} Cows`;
  historyList.appendChild(guessResult);

  if (bulls === 4) {
      clearInterval(timer);
      document.getElementById('result').innerHTML = ` Congratulations! You won the match,you guessed the number : ${secretNumber}`;
      document.getElementById('guess').disabled = true;
  } else {
      document.getElementById('result').innerHTML = `Keep trying! Check your history below.`;
  }
}