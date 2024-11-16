# Assignments

## Typing-game

**Challenge:**

1.
```
##Disable the input event listener on completion, and re-enable it when the button is clicked

const typedValueElement = document.getElementById('typed-value');

//This commands returns the element where i want to add value.
//This command disables the element thus prohibiting the user from using it.

document.getElementById('start').addEventListener('click', () => {
typedValueElement.disabled=false;
.
.
)};
//Here insite the eventhandler i am enabling the use of the element ,so when user clicks the start button it appears.

```
2.
```
implementing this command inside "if(!eventhand)" condition.
 typedValueElement.disabled=true;
```
3.
```
##Display a modal dialog box with the success message

Here i have added a logic , first the div will be set hidden once the user is dont with the typing game i have removed the hidden attribute
and then if the button OK below it is clicked ,the div will be set back to hudden again.

HTML structure :


Throughout the task i learnt how to use <dialog>,<form> elements in html.

div id="cpage" hidden="hidden" >
            <dialog id="congrat" open>
                <p id="congo"></p>
                <p> May this mark as a beginning</p>
                <p id="highscore">   </p>
                <form method="dialog">
                    <button type="button" id="hidbut">OK</button>
                </form>
                </dialog>
        </div>

CSS OVERVIEW :

#congrat{
    border-width: 8px;
    background-color: #800020;
    border-color: black;
}

#congo{
    font-family: sans-serif;
    font-weight: bold;
    color:#e9b90e;
}

JAVASCRIPT IMPLEMENTATION :

const Congopage =document.getElementById('congo')
const cpage=document.getElementById('cpage')
const highscore=document.getElementById('highscore')
const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
Congopage.innerText = message;
cpage.removeAttribute("hidden");

document.getElementById('hidbut').addEventListener('click', () => {
          cpage.setAttribute("hidden", "hidden");
      });

```
**Dialog-box**

![image](https://github.com/user-attachments/assets/1a915f39-8f30-4f5b-aa48-a08408133133)


4.
```
##Store high scores using localStorage
Here i have impemented the algorithm such that the boolean will be stored false for the initial condition and the first record of the user will be stored
in local storage , Then the condition will never become true , intead another condition is implemented to check if the current score is high score or not.

let tptp=false;

const hehe=localStorage.getItem("highScore");
const elapsedTime = new Date().getTime() - startTime;
if(!tptp){
localStorage.setItem("highScore", elapsedTime/1000);
tptp=true;
}
if(elapsedTime <parseInt(hehe)){
 localStorage.setItem("highScore", elapsedTime/1000);
}
const high="High score :"+localStorage.getItem("highScore");  //concatenation

highscore.innerText = high;

```

## Typing game Overview

![Screencast from 2024-11-15 18-12-01 (online-video-cutter com)](https://github.com/user-attachments/assets/38a8d4ec-ffe7-4a3c-aaeb-19ffe85d2fc5)


**Assingment**
```
What i learnt?

HTML:
For implementing an highlighting function i manganed to learn the matrice method , in which i can store the id name of elements
in a matrice format , later using arithmetic operators i used the highlight style to move around.

CSS:

I learnt more about positioning in css
There are four different position values:

static
relative
fixed
absolute

JavaScript:

document.getElementById();
-built-in JavaScript function that allows you to select an HTML element using its unique ID attribute

firstelem.style.borderColor = "yellow";
-using .style we can do css dunctionality using js.

document.addEventListener('keydown', (ev) => {  });
-This is a command to add an event listener for a action user do .here i have used it for the keydown function.

Local-Storage:
localStorage in JavaScript allows web applications to store data locally within the user's browser – with no expiration date.
The data isn't deleted when the browser is closed, and is available when the browser is opened again.

-For my assignment i had to use this to store the previous block the user selected.

localStorage.getItem("previd");
-local-storage command to get the previous stored information using the name set for it.

localStorage.setItem("previd", bbb.id);
-local-storage command to store a value locally for later access.

const ement=document.querySelector(".block")
-In my work i have used this command to access a element using its class name.
```
**Completion image**

![image](https://github.com/user-attachments/assets/2c07092f-9d1b-4a52-9fd6-197a87fe7ffd)
