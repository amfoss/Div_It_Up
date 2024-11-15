 // inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    "I am vengeance. I am the night. I am Batman.",
    "It’s not who I am underneath, but what I do that defines me.",
    "Sometimes it's only madness that makes us what we are.",
    "I wear a mask. And that mask, it's not to hide who I am, but to create what I am.",
    "You either die a hero, or you live long enough to see yourself become the villain.",
    "A hero can be anyone. Even a man doing something as simple as reassuring.",
    "I have one rule: no killing.",
    "Endure, Master Wayne. Take it. They'll hate you for it, but that's the point of Batman.",
    "All men have limits. They learn what they are and learn not to exceed them. I ignore mine.",
];

let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
let eventhand = false;
let tptp=false;
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const Congopage =document.getElementById('congo')
const cpage=document.getElementById('cpage')
const highscore=document.getElementById('highscore')
typedValueElement.disabled=true;

// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
    // get a quote
    eventhand=true;
    typedValueElement.disabled=false;
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

if(!eventhand){
    typedValueElement.addEventListener('input', () => {
        // Get the current word
        const currentWord = words[wordIndex];
        // get the current value
        const typedValue = typedValueElement.value;
    
        if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence
        // Display success
        const hehe=localStorage.getItem("highScore");
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        if(!tptp){
            localStorage.setItem("highScore", elapsedTime/1000);
            tptp=true;
        }
        if(elapsedTime <parseInt(hehe)){
            localStorage.setItem("highScore", elapsedTime/1000);
        }
        const high="High score :"+localStorage.getItem("highScore");
        Congopage.innerText = message;
        highscore.innerText = high;
        cpage.removeAttribute("hidden");
        document.getElementById('hidbut').addEventListener('click', () => {
            cpage.setAttribute("hidden", "hidden");
        });

        //flags
        eventhand=false;
        typedValueElement.disabled=true;
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
    
}