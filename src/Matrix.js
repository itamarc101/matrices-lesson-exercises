class Matrix {
    constructor(rows, cols) {
      this.rows = rows
      this.cols = cols
      this.generateMatrix()
    }
  
    generateMatrix() {
      this.matrix = []
      let counter = 1
      for (let i = 0; i < this.rows; i++) {
        const row = []
        for (let j = 0; j < this.cols; j++) {
          row.push(counter++)
        }
        this.matrix.push(row)
      }
    }
  
    print() {
      for (let row of this.matrix) {
        console.log(row.join('\t'))
      }
    }
  
    get(row, col) {
      return this.matrix[row][col]
    }
  
    alter(row, col, value) {
      this.matrix[row][col] = value
    }
  
    printRow(row) {
      console.log(this.matrix[row].join('\n'))
    }
  
    printColumn(col) {
      for (let row of this.matrix) {
        console.log(row[col])
      }
    }
    findCoordinate(value) {
        const rowIndex = this.matrix.findIndex(row => row.includes(value))
        if (rowIndex === -1) return null
      
        const colIndex = this.matrix[rowIndex].indexOf(value)
        return { x: colIndex, y: rowIndex }
      }
      
      
  }
  
  let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
    
m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

console.log(m.findCoordinate(12)) // {x: 3, y: 2}
console.log(m.findCoordinate(7))  // {x: 2, y: 1}

  module.exports = Matrix
  
