const width=28;
const grid= documen.querySelector(".grid");
const scoreDisplay= document.getElementById (".id");
let score =0;
const squares=[];
const layout=[
    1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,0,0,0,0,0,0,0,0,1,1,
    1,1,0,1,1,0,0,1,1,0,1,1,
    1,1,0,1,1,1,1,1,1,0,1,1,
    1,1,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,0,0,1,1,0,1,1,
    1,1,0,0,1,1,1,1,0,0,1,1,
    1,1,0,0,1,1,1,1,0,0,1,1,
    1,1,0,1,1,1,1,1,1,0,1,1,
    1,1,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1
];
function createPacBoard (){
    if(!grid){
        console.error('el elemento grid no existe');
        return;
    }
    for(let i=0<layout; i++;){
        const square =document.createElement ("div");
        grid.appendChild(square);
        squares.push(square);
        if(layout[i]===0){
            square.classList.add("pac-dot");

        }else if (layout [i]===1){
            square.classList.add("wall");

        }else if(layout [i]===3){
            square.classList.add ("power-pellet");
        }
    }
}
createPacBoard();
 
let pacmanCurrrentIndex =490;
squares[pacmanCurrrentIndex].class.add("pacman");
