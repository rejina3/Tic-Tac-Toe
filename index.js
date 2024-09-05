let buttons = document.querySelectorAll(".btn");
let turnO = true;
let heading = document.getElementById("win");
let congrats = heading.innerText;
let reset=document.querySelector(".reset");
let tie=document.getElementById("draw");
let tietext= tie.innerText;
let newgame=document.getElementById("newbtn");

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];



newgame.addEventListener("click",()=>{
    turnO = true;
    buttons.forEach((btn) => {
        btn.innerText = '';
        btn.disabled = false;
    });
    heading.classList.add("hide");
    newgame.classList.add("hide");
    tie.classList.add("hide");
});

reset.addEventListener("click", () => {
    turnO = true;
    buttons.forEach((btn) => {
        btn.innerText = '';
        btn.disabled = false;
    });
    heading.classList.add("hide");
});
const showwinner = () => {
    heading.innerText = congrats;
    heading.classList.remove("hide");
    buttons.forEach((btn)=>{
        btn.disabled=true;
    });
    newgame.classList.remove("hide");
    tie.classList.add("hide");
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;

        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner();
              
                return; // End function once a winner is found
            }
           
        }
    }
    heading.classList.add("hide");
};



const checkDraw = () => {
    return [...buttons].every(btn => btn.innerText !== '');
};

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;

        if (!checkWinner() && checkDraw()) {
            tie.innerText = tietext;
            tie.classList.remove("hide");
            newgame.classList.remove("hide");
        }
        if(checkWinner()){
            checkDraw()=false;
        }
    });
});