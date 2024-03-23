let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

function playGame(playerMove) {
  const move = pickComputermove();

  let result = "";

  if (playerMove === move) {
    result = "Match Tied";
  } else if (
    (playerMove === "Rock" && move === "Scissors") ||
    (playerMove === "Scissors" && move === "Paper") ||
    (playerMove === "Paper" && move === "Rock")
  ) {
    result = "You win";
  } else {
    result = "You Lose";
  }

  if (result === "You win") {
    score.win++;
  } else if (result === "You Lose") {
    score.lose++;
  } else if (result === "Match Tied") {
    score.tie++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById("result").innerHTML = result;
  document.getElementById("computermove").innerHTML = `computer chose ${move}`;

  document.getElementById("win").innerHTML = `win : ${score.win}`;
  document.getElementById("lose").innerHTML = `lose : ${score.lose}`;
  document.getElementById("tie").innerHTML = `tie : ${score.tie}`;
}

function pickComputermove() {
  const picker = Math.random();
  let move = "";
  if (picker < 1 / 3) {
    move = "Rock";
  } else if (picker < 2 / 3) {
    move = "Paper";
  } else {
    move = "Scissors";
  }

  return move;
}

window.onload = function () {
  let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    lose: 0,
    tie: 0,
  };

  document.getElementById("win").innerHTML = `win : ${score.win}`;
  document.getElementById("lose").innerHTML = `lose : ${score.lose}`;
  document.getElementById("tie").innerHTML = `tie : ${score.tie}`;
};
