```3-typing-game

Challenge:
Add more functionality

- Disable the `input` event listener on completion, and re-enable it when the button is clicked
- Disable the textbox when the player completes the quote
- Display a modal dialog box with the success message
- Store high scores using




Soulution:

Part One of the challenge was to disable input event listener I did this function by,
typed valueElement is the input field
typedValueElement.removeEventListener('input');

Part two was to disable textbox i did this using
typedValueElement.disabled = true;

Part four is to create a high score I did this using,
	const elapsedTime = new Date().getTime() - startTime;
	const HighScore = localStorage.getItem("hs");
      if(HighScore != null){
        message= `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.Current highscore is ${HighScore}`;
      }
      if(HighScore>elapsedTime / 1000 || HighScore == null){
        message = `CONGRATULATIONS! You finished with a new Highscore of ${elapsedTime / 1000} seconds.`;
        localStorage.setItem("hs",elapsedTime/1000);
      }
Part three was done by a setting a divs style hidden and visible in which both highscore and congrats message is displayed

Here is the entire code:

HTML:
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <div class="box" id="winbox" style="visibility: hidden;">
    <button class="x" id="close">X</button>
    <h1 class="t1"></h1>Welldone! May the force be with you!</h1>
    <div class="sep"></div>
    <p id="message">Congrats You Completed in 25secs</p>
  </div>


  <script src="script.js"></script>

</body>
</html>

CSS:
.highlight {
    background-color: yellow;
  }
  
  .error {
    background-color: lightcoral;
    border: red;
  }
  .sep{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 500px;
    border: 1px solid black;
  }
  .box {
    width: 500px;
    background-color: lightgreen;
    height: 170px;
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    margin: 10px;
  }
  .x{
    margin-left: 480px;
  }
  Java:
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
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const WinBox=document.getElementById('winbox');
const close = document.getElementById("close");

let k=false;


close.addEventListener('click',() => {
  WinBox.style.visibility = 'hidden';
})

document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // Put the quote into an array of words
    words = quote.split(' ');
    // reset the word index for tracking
    wordIndex = 0;
    WinBox.style.visibility = 'hidden';
    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';
    typedValueElement.disabled = false;
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
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // end of sentence
      // Display success
      const elapsedTime = new Date().getTime() - startTime;
      // Setup the textbox
      const HighScore = localStorage.getItem("hs");
      let message = ``;
      if(HighScore != null){
        message= `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.Current highscore is ${HighScore}`;
      }
      if(HighScore>elapsedTime / 1000 || HighScore == null){
        message = `CONGRATULATIONS! You finished with a new Highscore of ${elapsedTime / 1000} seconds.`;
        localStorage.setItem("hs",elapsedTime/1000);
      }
      messageElement.innerText = message;
      WinBox.style.visibility = 'visible';
      //Challenges
      typedValueElement.disabled = true;
      typedValueElement.removeEventListener('input');



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
  
  
  
  
  
  Assignment:
  
  For the Assignment I made a game where your objective is to find the hidden number based on the clues provided for your previous guess.
      There are three types of clues:
      Red digits indicate the number of digits in your guess that are in the correct position and have the correct value.
      Yellow digits show how many digits are present in the hidden number but are in the wrong position
      Green digits represent the number of digits in your guess that are repeated in the hidden number.
      Use these clues to narrow down guesses and discover the hidden number!Sc   
     
ScreenShots:
![image](https://github.com/user-attachments/assets/0118b3eb-1446-4e61-87d8-a9d96e898ada)
![image](https://github.com/user-attachments/assets/7f57c03e-3cb1-484b-a967-0a0ef01508d0)

     
Code:
HTML
<!-- inside index.html -->
<html>
<head>
  <title>Guess the Text</title>
  <link rel="stylesheet" href="style.css">
</head>


<body>
  <ls class="NumBox">
    <ol class="Numbox">
      <ls class="nums">
        <H1 id="Num1">-</H1>
      </ls>
      <ls class="nums">
        <H1 id="Num2">-</H1>
      </ls>
      <ls class="nums">
        <H1 id="Num3">-</H1>
      </ls>
      <ls class="nums">
        <H1 id="Num4">-</H1>
      </ls>
    </ol>
    <div style="width: 10%;"></div>
    <h1>How to Play:</h1>
    <p >How to Play:
      In this game, your objective is to find the hidden number based on the clues provided for your previous guess. <br>
      There are three types of clues: <br>
      <strong>Red</strong> digits indicate the number of digits in your guess that are in the<strong> correct position </strong>and have the correct value. <br>
      <strong>Yellow</strong> digits show how many digits are present in the hidden number but are in the <strong>wrong position</strong>. <br>
      <strong>Green</strong> digits represent the number of digits in your guess that are <strong>repeated</strong> in the hidden number. <br>
      Use these clues to narrow down your guesses and discover the hidden number!<br>
  </p>
  </ls>
  <h1>Your Guess:</h1>
  <input style="margin-left: 65px;" type="text" placeholder="Enter your Guess:" class="box" id="guess" maxlength="4">
  <button style="visibility: hidden;" id="rs">Restart?</button>
  <h1 id="psh">Previous Guesses:</h1>
  <ol class="PrevGuess" id="ps">

  </ol>
  <script src="script.js"></script>

</body>
</html>

JAVA:
const Num1 = document.getElementById('Num1');
const Num2 = document.getElementById('Num2');
const Num3 = document.getElementById('Num3');
const Num4 = document.getElementById('Num4');
const Prev_Guess = document.getElementById('ps');
const Prev_Guess_Header = document.getElementById('psh');
const inputbox = document.getElementById('guess');
const RestartButton = document.getElementById('rs');

let GuessNum = 0;

let GuessAmt = 0;



function UpdateNum(k){
  Num1.innerText=k[0];
  Num2.innerText=k[1];
  Num3.innerText=k[2];
  Num4.innerText=k[3];
}

RestartButton.addEventListener('click',()=>{
  RestartButton.visibility='';
  GuessNum=getRandomInt(1000,9999);
  GuessAmt=0;
  inputbox.value='';
  UpdateNum('----');
  while (Prev_Guess.firstChild) {
    Prev_Guess.removeChild(Prev_Guess.lastChild);
  }
  Prev_Guess_Header.innerText = "Previous Guesses:";
  Prev_Guess.style.visibility='visible';
})


inputbox.addEventListener("input",()=>{
  let val=inputbox.value;



  if(val.length > 3){
    GuessAmt++;
    //Do PrevGuess
    inputbox.value="";
    let ele =document.createElement("ls");
    let ele2=document.createElement("ol");
    ele2.className = "Numbox";
    h1=document.createElement("h1");
    h2=document.createElement("h1");
    h3=document.createElement("h1");
    h4=document.createElement("h1");
    ele2.appendChild(h1);
    ele2.appendChild(h2);
    ele2.appendChild(h3);
    ele2.appendChild(h4);

    h2.className = "red";
    h3.className="yellow";
    h4.className="green";

    ele.appendChild(ele2)
    Prev_Guess.appendChild(ele);

    //Set val of h1
    GuessNum=GuessNum.toString();
    let y=0;
    let r=0;
    let m=Num1.innerText+Num2.innerText+Num3.innerText+Num4.innerText;
    let k=''
    //Count a number repeating
    let multi_occurence=''
    let ml=0
    console.log(GuessNum);
    for(let i=0;i<val.length;i++){
      if(GuessNum[i] == val[i]){
        r+=1;
        k+=GuessNum[i];
        multi_occurence+=GuessNum[i];
      }
      else{
        k+=m[i];
        for(let j=0;j<val.length;j++){
          if(val[j] == GuessNum[i]){
            y+=1;
            multi_occurence+=GuessNum[i];
            if(count(multi_occurence,GuessNum[i])>1){
              ml++;
            }
          }
        }

      }
    }
    console.log(k);
    UpdateNum(k);

    if(k === GuessNum){
      Prev_Guess.style.visibility = 'hidden';

      let hs = localStorage.getItem('hs');
      RestartButton.style.visibility = 'visible';
      if(hs === null || hs > GuessAmt){
        Prev_Guess_Header.innerText = `You Won with ${GuessAmt} guesses.That is a new HIGHSCORE!`;
        localStorage.setItem('hs',GuessAmt);
      }
      else{
        Prev_Guess_Header.innerText = `You Won with ${GuessAmt} guesses.The High Score is ${hs}`;
      }
    }
    //Setup Text 
    h1.innerText=val;
    h2.innerText = r;
    h3.innerText= y;
    h4.innerText=ml;

  }
})





function count(str,count_term){
  let c =0;
  for(let j=0;j<str.length;j++){
    if(str[j]==count_term){c++;}
  }
  return c;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


GuessNum=getRandomInt(1000,9999);



CSS:
.Numbox{
  display: flex;
  align-content: space-between;
  gap: 50px;
}
.PrevGuess{
  height: 500px;
  overflow: scroll;
  background-color: whitesmoke;
}
.Nums{
  font-size: xx-large;
}
.red{
  color: red;
}
.yellow{
  color: yellow;
}
.green{
  color: green;
}
.box{
  height: 50px;
  width: 190px;
  border: 5px solid lightgreen;
  border-radius: 5px;
}
```
