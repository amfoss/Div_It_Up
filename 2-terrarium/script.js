

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
  
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
    console.log(initialx,initialy);
    
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
  
  
  
  terrariumElement.addEventListener("dblclick", (event) => {
    let lightColors = [
      "#FFB6C1",
      "#B0E0E6",
      "#98FB98",
      "#FFD700",
      "#E0FFFF",
      "#F0E68C",
      "#D3D3D3",
      "#ADD8E6",
      "#FFDEAD",
      "#FFE4B5"
    ];
    let randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
    terrariumElement.style.border= "solid black 2px";
    terrariumElement.style.maxWidth = "85%";
    terrariumElement.style.background=randomColor;
  });

}


