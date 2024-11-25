# Keyboard Pixel Art Game

## Overview
This game is a fun interactive art project where users can press different keys to change the color of the "pixel" elements on the screen. The game uses the `keydown` event listener in JavaScript to detect key presses, and each key corresponds to a specific color that fills the canvas pixels when clicked.

## Steps Taken

1. **HTML Setup**:
    - A simple HTML structure with a title, instruction, and a `div` element with an ID of `canvas` to represent the grid of pixels.
  
2. **CSS Setup**:
    - The `#canvas` uses CSS Grid to create a 50x50 grid (total of 2500 pixels).
    - Each pixel is styled as a small square with a border and background color.

3. **JavaScript Logic**:
    - Created a grid of 2500 "pixel" divs inside the `#canvas` div.
    - Each key press (from
    r: 'red',
    g: 'green',
    b: 'blue',
    y: 'yellow',
    p: 'purple',
    o: 'orange',
    d: 'darkpink',
    c: 'cyan 
    ) is mapped to a color, and when the user clicks a pixel, it changes to the corresponding color.
    - A `keydown` event listener is used to detect the key presses and assign a color to the grid.

## Resources Used
- [MDN Web Docs - Event Handling](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) - For understanding how to capture keypresses.
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - To create a pixel grid.
- [MDN Web Docs - JavaScript Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) - For managing user input through key presses.

## Idea

**I got this idea from [Piskel](https://www.piskelapp.com/)**

The simplest part was the grid. I wanted it to look like pixels, thus the size of these boxes.
### 1. **Canvas Setup and Color Map**
   - A `div` element with the id `canvas` is used as the container for the pixel grid.
   - An object `colors` maps specific keys to colors. For example, pressing the key `'r'` selects the color red, `'g'` selects green, and so on.

### 2. **Creating the Pixel Grid**
   - A loop runs 2500 times (for a 50x50 grid), creating a `div` element for each pixel.
   - Each pixel is given the class `pixel` and appended to the `canvas` container.
   
### 3. **Color Selection with Keyboard**
   - A variable `selectedColor` is initialized as `null`. It will hold the color that the user selects using the keyboard.
   - The `handleKeyPress` function listens for keydown events. When a key corresponding to a color (`r`, `g`, `b`, etc.) is pressed, the function updates `selectedColor` to the color mapped to that key.
   
### 4. **Painting Pixels**
   - The `handlePixelClick` function is triggered when a pixel is clicked. If a color has been selected, it sets the clicked pixel's background color to the selected color.
   
### 5. **Event Listeners**
   - An event listener for `keydown` is added to detect when a key is pressed to select a color.
   - Another event listener is added to each pixel (`.pixel`), so when a pixel is clicked, it changes color based on the selected color.


## Future Improvements
- Add functionality to reset the canvas.
- Add a color picker tool.
- Implement an undo feature to remove last drawn pixels.

Enjoy creating pixel art with the keyboard!
