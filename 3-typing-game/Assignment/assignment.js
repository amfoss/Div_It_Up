let idd = 1;
let firstelem = document.getElementById(String(idd));
let scoree=0;
firstelem.style.borderColor = "yellow";


document.addEventListener('keydown', (ev) => {
    if (firstelem) firstelem.style.borderColor = ""; 

    if (ev.key === "ArrowRight") {
        idd += 1;
    } else if (ev.key === "ArrowLeft") {
        idd -= 1;
    } else if (ev.key === "ArrowDown") {
        idd += 6;
    } else if (ev.key === "ArrowUp") {
        idd -= 6;
    } 
    const elem = document.getElementById(String(idd));
    if (elem) {
        elem.style.borderColor = "yellow";
        firstelem = elem;
    } else {
        idd = ev.key === "ArrowRight" ? idd - 1 : ev.key === "ArrowLeft" ? idd + 1 : ev.key === "ArrowDown" ? idd - 6 : idd + 6;
        if (firstelem) firstelem.style.borderColor = "yellow";
    }
});


document.addEventListener('keypress', (ev) => {
    if (ev.key == "Enter") {
        const bbb = document.getElementById(String(idd));
        bbb.style.backgroundColor = "white";
        const scoreboard = document.getElementById('score');
        const prevId = localStorage.getItem("previd");
        const prevElement = document.getElementById(String(prevId));

        if (prevElement && prevElement.innerText === bbb.innerText) {  
            prevElement.style.backgroundColor = "green";
            bbb.style.backgroundColor = "green";
            scoree += 1;
            scoreboard.innerText = scoree;
        } 

        
        localStorage.setItem("previd", bbb.id);

        
    }
    if(scoree==21){
        const cpage=document.getElementById('cpage');
        const ement=document.querySelector(".block")
        cpage.removeAttribute("hidden");
        ement.disabled=true;
    }
});

