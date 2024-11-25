// Set up canvas and color map
const canvas = document.getElementById("canvas");
const colors = {
    r: 'red',
    g: 'green',
    b: 'blue',
    y: 'yellow',
    p: 'purple',
    o: 'orange',
    d: 'pink',
    c: 'cyan'
};

// Create a grid of pixels
for (let i = 0; i < 2500; i++) { // 50x50 grid
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
}

// Variable to store the current selected color
let selectedColor = null;

// Function to handle painting on key press
function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const color = colors[key];

    if (color) {
        selectedColor = color; // Update the selected color
        console.log(`Selected color: ${color}`); // Optional, for debugging
    }
}

// Function to handle pixel clicks
function handlePixelClick(event) {
    if (selectedColor) {
        event.target.style.backgroundColor = selectedColor; // Paint the pixel with the selected color
    }
}

// Add event listener for keypress
window.addEventListener("keydown", handleKeyPress);

// Add event listeners for clicking pixels
const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener("click", handlePixelClick);
});
