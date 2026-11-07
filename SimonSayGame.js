let gameSeq = [];
let userSeq = [];

let level = 0;
let highestScore = 0;
let gameStarted = false;

let colors = ['red', 'yellow', 'green', 'purple'];

let h2 = document.querySelector("h2");
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    gameStarted = true;
    console.log("game started")

  levelUp();
}})

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColors = colors[randomIdx];
  let randBtn = document.querySelector(`.${randomColors}`);
  // console.log(randomIdx);
  // console.log(randomColors);
  // console.log(randBtn);
  gameSeq.push(randomColors);
  console.log(gameSeq)
  btnFlash(randBtn);
  Greatest();


}

function btnFlash(btn) {
  btn.classList.add('gameflash');
  setTimeout(() => {
    btn.classList.remove('gameflash');
  }, 250);
}

function userFlash(btn) {
  btn.classList.add('userflash');
  setTimeout(() => {
    btn.classList.remove('userflash');
  }, 250);
}

function checkAns(idx) {

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over!!Your score is ${level}<br>press any key to start. `;
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function () {
      document.querySelector('body').style.backgroundColor = 'white'
    }
      , 200);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll('.box');

for (btn of allbtns) {
  btn.addEventListener('click', btnPress);
}

function reset() {
  gameStarted == false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
function Greatest() {
  if (level >= highestScore) {
    highestScore = level;
    h3.innerText = `Highest Score = ${highestScore}`;
  }
}
