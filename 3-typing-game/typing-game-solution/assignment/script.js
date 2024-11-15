const tile1 = document.getElementById('tile1');
const tile2 = document.getElementById('tile2');
const tile3 = document.getElementById('tile3');
const tile4 = document.getElementById('tile4');
const tile5 = document.getElementById('tile5');
const tile6 = document.getElementById('tile6');
const tile7 = document.getElementById('tile7');
const tile8 = document.getElementById('tile8');
const tile9 = document.getElementById('tile9');
const message = document.getElementById('message');

let tileNumber=1;
const tiles=[tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9];

start_with_x = 1;
let letter;
function XO(){
    if(start_with_x) {
        letter = 'x'
        start_with_x=0;
    }
    else{
        letter='o'
        start_with_x=1
    }
    return letter;
}
document.getElementById('start').addEventListener('click', () => {
    tiles[tileNumber-1].style.border = "2px solid red";
})

document.onkeydown = function(event) {
    console.log(event.key)
    switch(event.key){
        case "ArrowRight":
            // console.log(event.key)
            if (tileNumber<9){
                tiles[tileNumber-1].style.border = "2px solid black";
                tileNumber+=1;
                tiles[tileNumber-1].style.border = "2px solid red";
            };
            break;
        case "ArrowLeft":
            if (tileNumber>1){
                tiles[tileNumber-1].style.border = "2px solid black";
                tileNumber-=1;
                tiles[tileNumber-1].style.border = "2px solid red";
            };
            break;
        case "ArrowUp":
            if (tileNumber>3){
                tiles[tileNumber-1].style.border = "2px solid black";
                tileNumber-=3;
                tiles[tileNumber-1].style.border = "2px solid red";
            }
            break;
        case "ArrowDown":
            if (tileNumber<7){
                tiles[tileNumber-1].style.border = "2px solid black";
                tileNumber+=3;
                tiles[tileNumber-1].style.border = "2px solid red";
            }
            break;
        case "Enter":
            tiles[tileNumber-1].style.fontSize = "80px"
            tiles[tileNumber-1].innerHTML = XO();
            break;
    }

    const win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2, 4,6]]
    for (let combination of win){
        const [a, b , c] = combination;
        if((tiles[a].innerHTML === 'x' && tiles[b].innerHTML === 'x' && tiles[c].innerHTML === 'x') || (tiles[a].innerHTML === 'o' && tiles[b].innerHTML === 'o' && tiles[c].innerHTML === 'o')){
            message.innerHTML = `Congratulations!! (${letter}) wins the game`;
            break;
        }
    }
    
                    
    
};

