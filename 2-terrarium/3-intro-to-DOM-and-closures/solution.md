# challenge
```
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
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	terrariumElement.ondblclick = pointerDrag;
	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onpointerup = elementDrag;
		document.onclick = stopElementDrag;
	}

	function elementDrag(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}
	function stopElementDrag() {
		document.onpointerup = null;
		document.onpointermove = null;
	}
}
```

# assignment

## Document element
It is an web API that is used by developers to access and manipulate the document(text, elements, etc.). It allows the developer to give the webpage certain functionalities using other API's like pointerdown, dblclick ,etc. by acting as an interface to the contents of the webpage.
