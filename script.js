const player1 = document.querySelector(".Player1");
const player2 = document.querySelector(".Player2");
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");
const diceE1 = document.querySelector(".Diceimg");
score1.textContent = 0;
score2.textContent = 0;
let player = [1, 2];
let score_player1 = 0;
let score_player2 = 0;
// diceE1.classList.add("hidden");

const btnRoll = document.querySelector(".btn-success");
btnRoll.addEventListener("click", function () {
  // diceE1.classList.remove("hidden");
  const dicenumber1 = Math.floor(Math.random() * 6) + 1;
  // console.log(dicenumber);
  diceE1.src = `./img-${dicenumber1}.png`;
  console.log(diceE1);

  // if (true) {
  score_player1 += dicenumber1;
  document.querySelector(`#score-${1}`).textContent = score_player1;
  btnRoll.setAttribute("disabled", true);
  btnRoll2.removeAttribute("disabled");
  // btnRoll2.classList.push("btn_success");
  // }
  if (score_player1 >= 30) {
    document.querySelector("h1.winner").innerText = "winner is Player1";
    btnRoll2.setAttribute("disabled", true);

    // reset();
  }
});
const btnRoll2 = document.querySelector(".btn_roll");
btnRoll2.addEventListener("click", function () {
  const dicenumber2 = Math.floor(Math.random() * 6) + 1;
  diceE1.src = `./img-${dicenumber2}.png`;
  console.log(diceE1);
  if (true) {
    score_player2 += dicenumber2;
    document.querySelector(`#score-${2}`).textContent = score_player2;
    btnRoll2.setAttribute("disabled", true);
    btnRoll.removeAttribute("disabled");
  }
  if (score_player2 >= 30) {
    document.querySelector("h1.winner").innerText = "winner is Player2";
    btnRoll.setAttribute("disabled", true);
    //  reset();
  }
});
if (score_player1 == 0 && score_player2 == 0) {
  btnRoll2.setAttribute("disabled", true);
  btnRoll.removeAttribute("disabled");
}

function reset() {
  document.querySelector(`#score-${1}`).innerText = "";
  document.querySelector(`#score-${2}`).textContent = "";
  document.querySelector("h1.winner").innerText = "winner:";
  document.querySelector(`#score-${1}`).innerText = "0";
  document.querySelector(`#score-${2}`).textContent = "0";
}
