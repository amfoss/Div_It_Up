# Typing Game

### Challenge
1.
```
typedValueElement.removeEventListener('input');
```
It should written in 'if' condition where user completes the quote.

2.
```
typedValueElement.disabled = true;
```
It should written in 'if' condition where user completes the quote.

3.
HTML
```
<div id="modal" class="modal">
    <div class="modal-content">
        <p id="msg"></p>
        <button id="close">Close</button>
    </div>
</div>
```
Javascript
```
const modal = document.getElementById('modal');
const msg = document.getElementById('msg');
const closeBtn = document.getElementById('close');

const time = 5000;
const text = `CONGRATULATIONS! You finished in ${time / 1000} seconds.`;
msg.innerText = text;
modal.style.display = 'block';

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
```

4.
```
const elapsedTime = new Date().getTime() - startTime;
const Score = localStorage.getItem("hs");
if(Score != null){
  message= `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.Current highscore is ${HighScore}`;
}
if(Score>elapsedTime / 1000 || Score == null){
  message = `CONGRATULATIONS! You finished with a new Highscore of ${elapsedTime / 1000} seconds.`;
  localStorage.setItem("hs",elapsedTime/1000);
}
```

### Assigment
HTML
```
<!DOCTYPE html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8" /> 
	<meta name="viewport"
		content="width=device-width, 
				initial-scale=1.0" /> 
	<title>word scramble</title> 
	<link href="style.css" rel="stylesheet" /> 
</head> 
<body> 
	<div class="back"> 
		<h1 class="title">Word Scramble Game</h1> 
		<div id="scrambled"> 
			<h2 id="scrambleWord">Word</h2> 
			<p id="hint"></p> 
		</div> 
		<div id="form"> 
			<input id="input" placeholder="Guess correct word" /> 
		</div> 
		<h3 id="output">Result:</h3> 
		<div class="end"> 
			<button type="button" onclick="check()"> Check </button> 
			<button type="button" onclick="refresh()"> Refresh </button> 
		</div> 
		<script src="script.js"></script> 
	</div> 
</body> 
</html>
```
---
CSS
```
body{ 
	display: flex; 
	flex-direction: column; 
	justify-content: center; 
	align-items: center; 
	min-height: 50vh; 
} 

.back{ 
	font-size: x-large; 
	color: whitesmoke; 
	background-color: rgb(57, 151, 57); 
	box-shadow: 0 2px 5px grey; 
	padding: 0% 5% 1% 5%; 
	text-align: center; 
	border-radius: 5px 0; 
} 

.title{ 
	border-bottom: 4px dashed; 
	border-color: white; 
} 

input{ 
	font-size: 20px; 
	padding-left: 10px; 
	outline: 2px grey; 
} 


.end{ 
	margin-bottom: 0%; 
	display: flex; 
	width: 100%; 
} 

button{ 
	width: 48%; 
	padding: 1%; 
	margin: 1%; 
	background-color: rgb(41, 117, 41); 
	border-radius: 5px; 
	border-color: rgb(29, 90, 29); 
	font-size: large; 
}
```
---
Javascript
```
const words = [
    "apple", 
    "mountain", 
    "library", 
    "ocean", 
    "friend", 
    "dance", 
    "school", 
    "guitar", 
    "chocolate", 
    "bicycle"
  ];
  
  const hints = [
    "A popular fruit, often red or green", 
    "A large, elevated landform", 
    "A place where you can borrow books", 
    "A vast body of saltwater", 
    "Someone you trust and enjoy spending time with", 
    "A rhythmic movement to music", 
    "A place for learning and education", 
    "A stringed musical instrument", 
    "A sweet treat made from cacao beans", 
    "A two-wheeled vehicle powered by pedaling"
  ];
  
let displayWord = ""; 

function shuffle(str) { 
	strArray = Array.from(str); 
	for (let i = 0; i < strArray.length - 1; ++i) { 
		let j = Math.floor(Math.random() * strArray.length); 
		let temp = strArray[i]; 
		strArray[i] = strArray[j]; 
		strArray[j] = temp; 
	} 
	return strArray.join(" "); 
} 
 
function check() { 
	let input = document.getElementById("input"); 
	let output = document.getElementById("output"); 
	if ( 
		input.value.toLocaleLowerCase() === 
		displayWord.toLocaleLowerCase() 
	) 
		output.innerHTML = "Result: Correct"; 
	else output.innerHTML = "Result: Incorrect"; 
} 

function refresh() { 
	index = Math.floor(Math.random() * 5); 
	displayWord = words[index]; 
	displayHint = hints[index]; 
	scrambleWord = 
		document.getElementById("scrambleWord"); 
	scrambleWord.innerText = 
		shuffle(displayWord).toUpperCase(); 
	let hint = document.getElementById("hint"); 
	hint.innerHTML = "<b>Hint:</b> " + displayHint; 
	document.getElementById("output").innerText = "Result:"; 
} 

refresh();
```
