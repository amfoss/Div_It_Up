# challenge
## html
```
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p>
  <div id="popup" class="item">
    <p id="message"></p>
    <p id="high"></p>
  </div>
  <div>
    <input type="text" aria-label="current word" id="typed-value" />
    <button type="button" id="start">Start</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## css

```
.highlight {
    background-color: yellow;
  }
  
  .error {
    background-color: lightcoral;
    border: red;
  }

#popup{
  display: none;
  position: fixed;
  height: 130px;
  width: 100%;
  overflow: auto;
  z-index: 1;
  background-color: rgb(0, 1, 2);
  top: 30%;
  left: 0%;
}
#message{
  color: aliceblue;
  font-family: Calibri;
  top: 20%;
  text-align: center;
  font-size: 150%;
}
#high{
  color:rgb(255, 246, 122);
  font-family: Calibri;
  text-align: center;
}

```

## javascript

```
const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
let words = [];
let wordIndex = 0;
let startTime = Date.now();
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const x = document.getElementById('popup');
document.getElementById('start').addEventListener('click', () => {
  x.style.display="none";
  typedValueElement.disabled = false;
const quoteIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[quoteIndex];
words = quote.split(' ');
wordIndex = 0;
const spanWords = words.map(function(word) { return `<span>${word} </span>`});
quoteElement.innerHTML = spanWords.join('');
quoteElement.childNodes[0].className = 'highlight';
messageElement.innerText = '';
typedValueElement.value = '';
typedValueElement.focus();
startTime = new Date().getTime();
});
typedValueElement.addEventListener('input', () => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    const elapsedTime = new Date().getTime() - startTime;
    const timetaken = elapsedTime/1000;
    quoteElement.innerHTML='';
    const message = `CONGRATULATIONS! You finished in ${timetaken} seconds.`;
    messageElement.innerText = message;
    const score = parseFloat(localStorage.getItem('highscore'));
    if (!score || score > timetaken){
      localStorage.setItem("highscore" ,timetaken);
    }
    document.getElementById('high').innerHTML="HIGHSCORE :"+ localStorage.getItem("highscore");
    typedValueElement.value = '';
    typedValueElement.disabled = true;
    x.style.display="block";
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    typedValueElement.value = '';
    wordIndex++;
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = '';
  } else {
    typedValueElement.className = 'error';
  }
});

```
# assignment

## html
```
<html>
    <head>
        <title>game corner</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>Typing Game!</p>
        <div class="disclaimer" id="claim">
            <p class="head"><bold>Information about the game</bold></p>
            <p>The Game is about typing as much words as possible in one minute...</p>
            <p>The word changes automatically when the word is typed correctly</p>
            <p class='head'>click start to begin!!!!!!</p>
        </div>
        <div class="content" id="index">
            <div id="high"></div>
            <div id="time"></div>
            <p id="words"></p>
            <div id="point"></div>
        </div>
        <input type="text" id="typings" />
        <button id="start">start</button>
        <script src="script.js"></script>
    </body>
</html>
```
## css
```
body{
    display:flex;
    background-color:#000000;
    color:#f3ca20;
    flex-direction: column;
    align-items: center;
    font-style: italic bold;
    font-size: 150%;

}
.disclaimer{
    display: none;
    background-color: #f3ca20;
    color:#000000
}
.head{
    text-align: center;
    font-weight: 600;
}
#start{
    display:block;
    background-color: #f3ca20;
    color:#000000;
    font-size: 75%;
    font-family: Calibri;
}
#typings{
    display:none;
}
#index{
    display:none;
}
.content{
    display:flex;
    background-color:#000000;
    color:#f3ca20;
    align-items: center;
    flex-flow: column;
    width: 250px;
    height: 200px;
}
#time{
    color: #f3ca20;
    background-color: rgb(0, 0, 0);
    text-align: center;
}
#words{
    color:#f3ca20;
    background-color: rgb(0, 0, 0);
    text-align: center;
}
#point{
    color: #f3ca20;
    background-color: rgb(0, 0, 0);
    text-align: center;
}
#typings{
    background-color: #f3ca20;
    color:#000000;
    font-size: large;
    font-weight: 900;
}
#high{
    color:#f3ca20;
    text-align: center;
}
```
## javascript
```
const word=['Adventure', 'Serene', 'Tranquil', 'Radiant', 'Jubilant', 'Vibrant', 'Wanderlust', 'Resilience', 'Harmony', 'Explore', 'Echo', 'Blossom', 'Euphoria', 'Serendipity', 'Luminescence', 'Enchanting', 'Glimmer', 'Unravel', 'Whimsy', 'Majestic'] ;
let index = 0;
let count = 0;
const inputs = document.getElementById('typings');
const task = document.getElementById('words');
const mark = document.getElementById('point');
document.getElementById('claim').style.display='block';
document.getElementById("high").innerHTML="highscore : " + localStorage.getItem("score");
document.getElementById("start").addEventListener('click',() => {
    document.getElementById('index').style.display='block';
    document.getElementById('claim').style.display='none';
    document.getElementById("start").style.display="none";
    inputs.style.display="block";
    mark.innerHTML='';
    inputs.disabled=false;
    let timer = 60;
    let interval = setInterval(() => {
        document.getElementById('time').innerHTML=timer + " seconds left";
        timer--;
        if (timer <= 0){
            document.getElementById("time").innerHTML = "Time up!";
            const highscore = parseFloat(localStorage.getItem('score'));
            if (!highscore || highscore < count){
                localStorage.setItem("score",count);
            }
            document.getElementById("high").innerHTML="highscore : " + localStorage.getItem("score");
            document.getElementById("start").style.display="block";
            inputs.style.display="none";
            inputs.value='';
            task.innerText='';
            inputs.disabled=true;
            count = 0;
            clearInterval(interval);
        }
    },1000);
    function wording(){
        task.innerText='';
        const indexs = Math.floor(Math.random()* word.length);
        task.innerText=word[indexs];
        inputs.value='';
        inputs.focus();
        inputs.addEventListener('input',() =>{
            const inputvalue = inputs.value;
            if (inputvalue.trim() === word[indexs]){
                count++;
                mark.innerHTML="points : " + count;
                wording();  
            }
        })
    }
    wording();
})
```
