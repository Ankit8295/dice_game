"use strict";

//elements
let number, player1Guess, player2Guess;
let turnLeftPlayer1 = 2;
let turnLeftPlayer2 = 2;
let rolling = true;
let playing1 = false;
let playing2 = false;
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const guess1 = document.querySelector(".player-1_guess");
const guess2 = document.querySelector(".player-2_guess");
const winner1Text = document.querySelector(".winner1txt");
const winner2Text = document.querySelector(".winner2txt");
const rollDice = document.querySelector(".rollDice");
const newGame = document.querySelector(".newGame");
const checkGuess1Btn = document.querySelector(".checkPlayer1Guess");
const checkGuess2Btn = document.querySelector(".checkPlayer2Guess");
const player1GuessLeft = document.querySelector(".player1GuessLeft");
const player2GuessLeft = document.querySelector(".player2GuessLeft");
const diceImg = document.querySelector(".dice_img");

//rolling a dice
rollDice.addEventListener("click", function () {
  if (rolling) {
    number = Math.trunc(Math.random() * 6) + 1;
    diceImg.style.display = "none";

    diceImg.src = `dice-${number}.png`;
    player1.classList.add("active");
    playing1 = true;
    playing2 = true;
  }
});

//checking guess of player1

checkGuess1Btn.addEventListener("click", function () {
  if (!number) alert("please roll a dice first");
  if (playing1) {
    rolling = false;
    player1Guess = Number(guess1.value);
    if (turnLeftPlayer1 === 1) {
      playing1 = false;
      player1.classList.remove("active");
      player2.classList.add("active");
      player1.classList.add("loser");
    }
    if (player1Guess === number) {
      diceImg.style.display = "block";
      player1.classList.remove("loser");
      player1.classList.add("winner");
      winner1Text.style.display = "block";
    } else {
      turnLeftPlayer1--;
      player1GuessLeft.textContent = turnLeftPlayer1;
      player1.classList.remove("active");
      player2.classList.add("active");
    }
  }
  guess1.value = "";
});

//checking guess of player2

checkGuess2Btn.addEventListener("click", function () {
  if (!number) alert("please roll a dice first");
  if (playing2) {
    rolling = false;
    player2Guess = Number(guess2.value);
    if (turnLeftPlayer2 === 1) {
      playing2 = false;
      player2.classList.remove("active");
      player1.classList.add("active");
      player2.classList.add("loser");
    }
    if (player2Guess === number) {
      player2.classList.remove("loser");
      diceImg.style.display = "block";
      player2.classList.add("winner");
      winner2Text.style.display = "block";
    } else {
      turnLeftPlayer2--;
      player2GuessLeft.textContent = turnLeftPlayer2;
      player2.classList.remove("active");
      player1.classList.add("active");
    }
  }
  guess2.value = "";
});

//for a new game
newGame.addEventListener("click", function () {
  playing1 = false;
  playing2 = false;
  rolling = true;
  number = undefined;
  guess1.value = "";
  guess2.value = "";
  turnLeftPlayer2 = 2;
  turnLeftPlayer1 = 2;
  player1.classList.remove("loser");
  player2.classList.remove("loser");
  player1.classList.remove("active");
  player2.classList.remove("active");
  player2.classList.remove("winner");
  player1.classList.remove("winner");
  winner1Text.style.display = "none";
  winner2Text.style.display = "none";
});
