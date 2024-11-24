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
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
        
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
    
    terrariumElement.addEventListener("dblclick", doSomething )

    function doSomething(){
        if(terrariumElement==document.getElementById('plant1'))
            alert("plant1");
        if(terrariumElement==document.getElementById('plant2'))
            alert("plant2");
        if(terrariumElement==document.getElementById('plant3'))
            alert("plant3");
        if(terrariumElement==document.getElementById('plant4'))
            alert("plant4");
        if(terrariumElement==document.getElementById('plant5'))
            alert("plant5");
        if(terrariumElement==document.getElementById('plant6'))
            alert("plant6");
        if(terrariumElement==document.getElementById('plant7'))
            alert("plant7");
        if(terrariumElement==document.getElementById('plant8'))
            alert("plant8");
        if(terrariumElement==document.getElementById('plant9'))
            alert("plant9");
        if(terrariumElement==document.getElementById('plant10'))
            alert("plant10");
        if(terrariumElement==document.getElementById('plant11'))
            alert("plant11");
        if(terrariumElement==document.getElementById('plant12'))
            alert("plant12");
        if(terrariumElement==document.getElementById('plant13'))
            alert("plant13");
        if(terrariumElement==document.getElementById('plant14'))
            alert("plant14");
    }
}
