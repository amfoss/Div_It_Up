// Loop through each plant element by their ID and make them draggable
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

// This function makes the terrarium element draggable
function dragElement(terrariumElement) {
	// Variables to store the element's position and the cursor's position
	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

	// When the pointer is pressed down on the element, we start the drag process
	terrariumElement.onpointerdown = function (e) {
		e.preventDefault(); // Prevents any default behavior like text selection
		// Capture the cursor's initial position
		pos3 = e.clientX;
		pos4 = e.clientY;

		// Attach event listeners for moving the pointer and releasing it
		document.onpointermove = elementDrag;
		document.onpointerup = stopElementDrag;
	};

	// This function handles the actual dragging of the element
	function elementDrag(e) {
		// Calculate how much the cursor has moved since the last update
		pos1 = pos3 - e.clientX; // Distance moved horizontally
		pos2 = pos4 - e.clientY; // Distance moved vertically
		// Update the cursor's current position
		pos3 = e.clientX;
		pos4 = e.clientY;

		// Move the element by adjusting its top and left styles
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}

	// This function stops the drag process when the pointer is released
	function stopElementDrag() {
		// Remove the event listeners for dragging and releasing
		// This ensures dragging stops when we lift the pointer
		document.onpointermove = null;
		document.onpointerup = null;
	}
	//Challenge
	terrariumElement.addEventListener('mouseover', function () {
		this.style.transform = 'scale(1.2)'; // Enlarge plant
		this.style.transition = 'transform 0.3s'; // Smooth transition
	});
	
	terrariumElement.addEventListener('mouseout', function () {
		this.style.transform = 'scale(1)'; // Return to original size
	});
	
	terrariumElement.addEventListener('click', function () {
		this.style.animation = 'shake 0.5s'; // Apply shake animation
		setTimeout(() => this.style.animation = '', 500); // Remove animation after it finishes
	});

	let borderApplied = false; // Flag to track if the border is applied
	terrariumElement.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevent default right-click menu

    if (!borderApplied) {
        // Add a random border
        const borders = ['dotted', 'dashed', 'solid', 'double', 'groove'];
        const randomBorder = borders[Math.floor(Math.random() * borders.length)];
        this.style.border = `3px ${randomBorder} black`; // Apply random border style
        borderApplied = true; // Update the flag
    } else {
        // Remove the border
        this.style.border = 'none';
        borderApplied = false; // Reset the flag
    }
    });
	
}
