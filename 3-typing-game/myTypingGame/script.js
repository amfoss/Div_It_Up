const canvas = document.getElementById("box");
const shapes = [];
function randomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}

function createShape(x, y, color) {
    const div = document.createElement("div");
    div.className = "shape";
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.backgroundColor = color;
    canvas.appendChild(div);
    shapes.push(div);
}

document.addEventListener("keydown", (event) => {
    const canvasRect = canvas.getBoundingClientRect();

    const x = Math.random() * canvasRect.width - 20;
    const y = Math.random() * canvasRect.height - 20;

    if (event.key === " ") {
        for (let i = 0; i < 10; i++) {
            createShape(Math.random() * canvasRect.width, Math.random() * canvasRect.height, randomColor());
        }
    } 
    else if (event.key === "Backspace") {
        const lastShape = shapes.pop();
        if (lastShape) {
            canvas.removeChild(lastShape);
        }
    } 
    else if (event.key === "Enter") {
        shapes.forEach((shape) => canvas.removeChild(shape));
        shapes.length = 0;
    } 
    else {
        createShape(x, y, randomColor());
    }
    if (["Backspace", "Enter", " "].includes(event.key)) {
        event.preventDefault();
    }
});
