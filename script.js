console.log("Welcome to Tic tac toe")
let music = new Audio("turn.mp3")
let aturn = new Audio("beep.mp3")
let gameover = new Audio("victory.mp3")
let isgameover=false;

let turn = "X"

//Funtion to change the turn
const changeTurn = ()=>{
    return turn=== "X"?"O":"X"
}

//Function to check win
const checkWin =()=>
{
    let boxtext= document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!==""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            gameover.play();
        }
    })

}
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            aturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText= "Turn for "+turn;
            }

        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn='X';
    isgameover=false
    document.getElementsByClassName("info")[0].innerText= "Turn for "+turn;
    music.play();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})