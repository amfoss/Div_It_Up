# Part 3 of Issue 1

We are supposed to make a simple typing game using HTML, CSS and JS.

## Working: 

- The dataset fot this typing game will be defined by an array in JS doc.
- As they user starts typing in the textarea, the timer will start. 
- The game will show the time and accuracy of the user and there will be a restart button to start again.
- When you type the right word it shows in green, otherwise in red.
- Restart button gives you a new quote everytime.

## Design:
The design of the website is basic yet modern.
### HTML Design
- **Text Input**: A `<textarea>` with an ID `input` for users to type the quote. It is interactive and styled to enhance focus.
- **Stats Section**: Two `<p>` elements with `<span>` tags inside:
  - `timer`: Displays the time taken to type.
  - `accuracy`: Shows the typing accuracy as a percentage.
- **Restart Button**: A button (`<button id="restart">`) to reset the game and start over.
- **Modal Dialog**: A modal (`#successModal`) for showing a success message, time, and accuracy. An overlay (`#overlay`) dims the background for better focus.

### CSS Design
- **Text Input**: Styled to match the overall theme, with focus effects to highlight interaction.
- **Stats Section**: Displays time and accuracy in a clean, readable format using `flexbox`.
- **Button Styling**: Styled with hover effects to make it visually appealing.
- **Modal Design**: The modal has a semi-transparent overlay and a prominent box for the success message, using rounded corners, shadows, and centered text.

## Event Driven Programming
The way we mark a section of code we want to execute is by creating a function. To handle events (button clicking, typing, etc.), we register event listeners. An event listener is a function which listens for an event to occur and executes in response.

I have made projects using HTML, CSS and JS before so I didn't follow the Lesson rather created it on my own. 
I made sure all the prerequisites are matched. 
I'll use comments in the code to explain the functioning of the code.

# Challenge
I am not writing the full code here but will implement the changes in the code as well and explain it using comments there.

- Disable the input event listener on completion, and re-enable it when the button is clicked:
Ans: The `textbox.removeEventListener("input", handleInput)` is called when the user completes the quote

- Disable the textbox when the player completes the quote
Ans: `textbox.disabled = true;` disables the textbox when the quote is completed

- Display a modal dialog box with the success message
Ans: A modal with the success message is displayed using `showModal()`.

- Store high scores using localStorage
Ans: High scores are stored and retrieved using `localStorage`