console.log("Tic Tac Toe Game..!!");

let bgMusic = new Audio("dilDyDiya.mp3");
let turnMusic = new Audio("dilDyDiya.mp3");
let gameOver = new Audio("dilDyDiya.mp3");
let isGameOver = false;

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Functon to check for winner
const checkWin = () => {
    let boxTxts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [0, 3, 6, -5, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [2, 4, 6, 5, 15, 135],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0]
    ];
    wins.forEach((e) => {
        if ((boxTxts[e[0]].innerText === boxTxts[e[1]].innerText) && (boxTxts[e[2]].innerText === boxTxts[e[1]].innerText) && (boxTxts[e[0]].innerText !== "")) {
            document.querySelector('.turnInfo').innerText = boxTxts[e[0]].innerText + " " + "Won";
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100px";
            turnMusic.pause();
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game Logic
// bgMusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        // console.log('box clicked..!');
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("turnInfo")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset Button
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("turnInfo")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    
    document.querySelector(".line").style.width = "0vw";
})