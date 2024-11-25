const Num1 = document.getElementById('Num1');
const Num2 = document.getElementById('Num2');
const Num3 = document.getElementById('Num3');
const Num4 = document.getElementById('Num4');
const Prev_Guess = document.getElementById('ps');
const Prev_Guess_Header = document.getElementById('psh');
const inputbox = document.getElementById('guess');
const RestartButton = document.getElementById('rs');

let GuessNum = 0;

let GuessAmt = 0;



function UpdateNum(k){
  Num1.innerText=k[0];
  Num2.innerText=k[1];
  Num3.innerText=k[2];
  Num4.innerText=k[3];
}

RestartButton.addEventListener('click',()=>{
  RestartButton.visibility='';
  GuessNum=getRandomInt(1000,9999);
  GuessAmt=0;
  inputbox.value='';
  UpdateNum('----');
  while (Prev_Guess.firstChild) {
    Prev_Guess.removeChild(Prev_Guess.lastChild);
  }
  Prev_Guess_Header.innerText = "Previous Guesses:";
  Prev_Guess.style.visibility='visible';
})


inputbox.addEventListener("input",()=>{
  let val=inputbox.value;



  if(val.length > 3){
    GuessAmt++;
    //Do PrevGuess
    inputbox.value="";
    let ele =document.createElement("ls");
    let ele2=document.createElement("ol");
    ele2.className = "Numbox";
    h1=document.createElement("h1");
    h2=document.createElement("h1");
    h3=document.createElement("h1");
    h4=document.createElement("h1");
    ele2.appendChild(h1);
    ele2.appendChild(h2);
    ele2.appendChild(h3);
    ele2.appendChild(h4);

    h2.className = "red";
    h3.className="yellow";
    h4.className="green";

    ele.appendChild(ele2)
    Prev_Guess.appendChild(ele);

    //Set val of h1
    GuessNum=GuessNum.toString();
    let y=0;
    let r=0;
    let m=Num1.innerText+Num2.innerText+Num3.innerText+Num4.innerText;
    let k=''
    //Count a number repeating
    let multi_occurence=''
    let ml=0
    console.log(GuessNum);
    for(let i=0;i<val.length;i++){
      if(GuessNum[i] == val[i]){
        r+=1;
        k+=GuessNum[i];
        multi_occurence+=GuessNum[i];
      }
      else{
        k+=m[i];
        for(let j=0;j<val.length;j++){
          if(val[j] == GuessNum[i]){
            y+=1;
            multi_occurence+=GuessNum[i];
            if(count(multi_occurence,GuessNum[i])>1){
              ml++;
            }
          }
        }

      }
    }
    console.log(k);
    UpdateNum(k);

    if(k === GuessNum){
      Prev_Guess.style.visibility = 'hidden';

      let hs = localStorage.getItem('hs');
      RestartButton.style.visibility = 'visible';
      if(hs === null || hs > GuessAmt){
        Prev_Guess_Header.innerText = `You Won with ${GuessAmt} guesses.That is a new HIGHSCORE!`;
        localStorage.setItem('hs',GuessAmt);
      }
      else{
        Prev_Guess_Header.innerText = `You Won with ${GuessAmt} guesses.The High Score is ${hs}`;
      }
    }
    //Setup Text 
    h1.innerText=val;
    h2.innerText = r;
    h3.innerText= y;
    h4.innerText=ml;

  }
})





function count(str,count_term){
  let c =0;
  for(let j=0;j<str.length;j++){
    if(str[j]==count_term){c++;}
  }
  return c;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


GuessNum=getRandomInt(1000,9999);
