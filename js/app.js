////////////////////////////////
// Global Variables Here
// let player = 'x'
// const playAgain = document.getElementById('play again?')
// const winning = document.getElementById('winningmessage')
// const x = document.getElementById('Xscore')
// const o = document.getElementById('Oscore')
// let winner = false
// let xWin = 0
// let oWin = 0
// let count = 0

// let goFirst = x
const square = document.querySelectorAll('.square')
console.log(square)
////////////////////////////////
// Functions For Game Logic Here
// startGame()
// playAgain.addEventListener('click')
// function startGame() {
//   if (winner === false) {
//     if (
//       table[1] + table[2] + table[3] === 3 ||
//       table[1] + table[4] + table[7] === 3 ||
//       table[1] + table[5] + table[9] === 3 ||
//       table[2] + table[5] + table[8] === 3 ||
//       table[3] + table[5] + table[7] === 3 ||
//       table[3] + table[6] + table[9] === 3 ||
//       table[4] + table[5] + table[6] === 3 ||
//       table[7] + table[8] + table[9] === 3 ||) {
//       message.textContext = "X's win!!!"
//       winner = true
//       xWin++
//       x.innerText = xWin
//     }
//     if (table[1] + table[2] + table[3] === -3 ||
//       table[1] + table[4] + table[7] === -3 ||
//       table[1] + table[5] + table[9] === -3 ||
//       table[2] + table[5] + table[8] === -3 ||
//       table[3] + table[5] + table[7] === -3 ||
//       table[3] + table[6] + table[9] === -3 ||
//       table[4] + table[5] + table[6] === -3 ||
//       table[7] + table[8] + table[9] === -3 ||) {
//       message.textContext = "O's win!!!"
//       winner = true
//       oWin++
//       x.innerText = oWin
//     }
//   }
// }

// function click(action) {
//   let square =  parseInt(action.target.id.replace('square', ''))
//   if (table[square] !== '') return
//   checkWinner () }
// function checkWinner()
// ////////////////////////////////
// // Event Listeners Here
// document.querySelector('section.table').addEventListener('click')
square.forEach((s) =>
  s.addEventListener('click', () => {
    console.log('click')
  })
)

////////////////////////////////
