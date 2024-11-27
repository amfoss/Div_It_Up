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
const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modal-message');
const close = document.getElementById('close-modal');
typedValueElement.disabled = true;

document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
    const spanWords = words.map(function(word) { 
        return `<span>${word} </span>`
    });
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
    typedValueElement.disabled = false;
    typedValueElement.value = '';
    typedValueElement.focus();
    startTime = new Date().getTime();
});
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = new Date().getTime() - startTime;
        const HighScore = localStorage.getItem("highest");
        let message = '';
        if(HighScore != null){
            message= `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.Current highscore is ${HighScore}`;
        }
        if(HighScore>(elapsedTime/1000) || HighScore == null){
            message = `CONGRATULATIONS! You set a new Highscore of ${elapsedTime / 1000} seconds.`;
            localStorage.setItem("highest",elapsedTime/1000);
        }
        showModal(message);
        typedValueElement.disabled = true;
    } 
    else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = '';
        wordIndex++;
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } 
    else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = '';
    } 
    else {
        typedValueElement.className = 'error';
    }
});

function showModal(message) {
    modalMsg.innerText = message;
    modal.style.display = 'flex';
}
close.addEventListener('click', () => {
    modal.style.display = 'none';
});