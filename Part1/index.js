const w = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
const game = [];
const resetBtn = document.getElementById("button-container");
const playerBox = document.getElementById("player");

function result() {
  for (let i = 0; i < w.length; i++) {
    if (game[w[i][0]] && game[w[i][1]] && game[w[i][2]]) {
      if (game[w[i][0]] === game[w[i][1]] && game[w[i][1]] === game[w[i][2]]) {
        window.alert(`Player ${game[w[i][0]]} WINS`);
        resetBtn.style.display = 'flex';
        return true;
      }
    }
  }
  let turn = 0;
  for (let i = 0; i < game.length; i++) {
    if (game[i]) turn++;
  }
  if (turn === 9) {
    window.alert("CATS GAME! Try again!");
    resetBtn.style.display = 'flex';
    return true;
  }
}

function play(id) {
  if (result()) return window.alert("Game is over, please reset board");
  const box = document.getElementById(id);
  const player = document.getElementById("player");
  if (player.innerText === "X") {
      if (box.innerText) return window.alert("Tsk, tsk... You gotta select an open square!")
    player.innerText = "O";
    box.innerText = "X";
    game[id] = "X";
    result();
  } else {
    if (box.innerText) return window.alert("Tsk, tsk... You gotta select an open square!")
    player.innerText = "X";
    box.innerText = "O";
    game[id] = "O";
    result();
  }
}

function reset() {
  for (let i = 0; i < 9; i++) {
    const box = document.getElementById(i);
    box.innerText = "";
    game.pop();
  }
  playerBox.innerText = "X";
  resetBtn.style.display = 'none';
}
