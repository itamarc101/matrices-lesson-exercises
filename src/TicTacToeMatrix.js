const Matrix = require("./Matrix")

class TicTacToeMatrix extends Matrix {
  constructor() {
    super(3, 3)
    this.loadBoard()
    this.lastPlayer = null
    this.gameOver = false
  }

  loadBoard() {
    this.matrix = Array.from({ length: 3 }, () => Array(3).fill("."))
    this.lastPlayer = null
    this.gameOver = false
  }

  play(rowNum, colNum, player) {
    if (this.gameOver) {
      console.log("Game is over. Resetting board...")
      this.loadBoard()
      this.print()
      return
    }

    const symbol = player === 1 ? "x" : "o"

    // 1. Prevent playing on taken cell
    if (this.matrix[rowNum][colNum] !== ".") {
      console.log("Cell already taken. Choose another spot.")
      return
    }

    // 2. Prevent same player playing twice
    if (this.lastPlayer === player) {
      console.log(`Player ${player} already played. Wait for the other player.`)
      return
    }

    // Place symbol
    this.alter(rowNum, colNum, symbol)
    this.lastPlayer = player

    // 3. Check for win
    if (this.checkWinner(rowNum, colNum, symbol)) {
      console.log(`Congratulations Player ${player}`)
      this.gameOver = true
    }
  }

  checkWinner(row, col, symbol) {
    // Row win
    if (this.matrix[row].every(cell => cell === symbol)) return true

    // Column win
    if (this.matrix.every(row => row[col] === symbol)) return true

    // Main diagonal
    if (row === col && this.matrix.every((row, i) => row[i] === symbol)) return true

    // Anti-diagonal
    if (row + col === 2 && this.matrix.every((row, i) => row[2 - i] === symbol)) return true

    return false
  }
}



let board = new TicTacToeMatrix()
board.loadBoard()
board.print()

console.log("Playing moves:")
board.play(2, 2, 1) // Player 1 → x
board.play(0, 0, 2) // Player 2 → o
board.print()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1
    
board.print()
module.exports = TicTacToeMatrix
