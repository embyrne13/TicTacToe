const square = document.querySelectorAll('.square')
const playerx = 'X'
const playero = 'O'
let turn = playerx
const message = document.getElementById('message')
const boardTrack = Array(square.length)
boardTrack.fill(null)
const scoreboard = document.getElementById('scoreboard')
const scoreboardMessage = document.getElementById('scoreboardmessage')
const playAgain = document.getElementById('Play Again')
const winningCombos = [
  { combo: [1, 2, 3] },
  { combo: [4, 5, 6] },
  { combo: [7, 8, 9] },
  { combo: [1, 4, 7] },
  { combo: [2, 5, 8] },
  { combo: [3, 6, 9] },
  { combo: [1, 5, 9] },
  { combo: [3, 5, 7] }
]
let isWinner = false

square.forEach((square) => square.addEventListener('click', squareClick))
function squareClick(event) {
  if (!isWinner) {
    if (scoreboard.classList.contains('visible')) {
      return
    }
    let squareNumber = event.target.getAttribute('id')
    if (event.target.innerText !== '') {
      return
    }
    if (turn === playerx) {
      event.target.innerText = playerx
      boardTrack[squareNumber - 1] = playerx
      turn = playero
      message.innerHTML = "O's turn!"
      checkWinner()
    } else {
      event.target.innerText = playero
      boardTrack[squareNumber - 1] = playero
      turn = playerx
      message.innerHTML = "X's turn!"
      checkWinner()
    }
  }
}
function checkWinner() {
  for (const winningCombo of winningCombos) {
    const { combo } = winningCombo
    const tv1 = boardTrack[combo[0] - 1]
    const tv2 = boardTrack[combo[1] - 1]
    const tv3 = boardTrack[combo[2] - 1]
    if (tv1 != null && tv1 === tv2 && tv1 === tv3) {
      gameOver(tv1)
      message.className = 'hide'
      return
    }
  }
  const allSquares = boardTrack.every((square) => square !== null)
  if (allSquares) {
    gameOver(null)
    message.className = 'hide'
    return
  }
}
function gameOver(winnerText) {
  isWinner = true
  let text = "It's a tie!!!"
  if (winnerText != null) {
    text = `Winner is ${winnerText}!!!`
  }
  scoreboard.className = 'show'
  scoreboardMessage.innerText = text
}
playAgain.addEventListener('click', newGame)
function newGame() {
  isWinner = false
  message.className = 'visible'
  scoreboard.className = 'hide'
  boardTrack.fill(null)
  square.forEach((square) => (square.innerText = ''))
}
