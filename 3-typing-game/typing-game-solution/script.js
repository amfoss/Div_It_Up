const quotes = [
    'When you want to say something to someone far away... BSNL paves the way',
    'Good things come to those who wait()',
    'When life gives you oppurtunities, try-catch them!',
    "Some bugs can only be fixed with a good night's sleep()",
    'Commit to your goals like you commit to Git.',
    "I hope this sentence isn't too recursive",
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const dialogueBox = document.createElement('DIALOG')
const typedValueElement = document.getElementById('typed-value');
typedValueElement.disabled=true;

document.getElementById('start').addEventListener('click', () => {
    typedValueElement.disabled=false;
    const quoteIndex = Math.floor(Math.random()* quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
    const spanWords = words.map(function(word) { return `<span> ${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    typedValueElement.value = '';
    typedValueElement.focus();
    startTime = new Date().getTime();
});

typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value

    if (typedValue===currentWord && wordIndex===words.length-1){
        timetaken = new Date().getTime() - startTime
        const text = document.createTextNode(`CONGRATULATIONS! You finished in ${timetaken/1000} seconds`);
        dialogueBox.setAttribute("open", "open");
        dialogueBox.appendChild(text);
        document.body.appendChild(dialogueBox);
        typedValueElement.value = '';
        typedValueElement.disabled=true;
    } else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = ''
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