const Matrix = require("./Matrix")

class EmployeeMatrix extends Matrix {
  constructor() {
    super(0, 0)
  }

  loadData(salaryData) {
    this.matrix = salaryData.map(obj => Object.values(obj))
    this.rows = this.matrix.length
    this.cols = this.matrix[0]?.length || 0
  }
  getEmployees(department) {
    return this.matrix
      .filter(row => row[2] === department)
      .map(row => row[1])
  }
  getTotalSalary(department) {
    return this.matrix
      .filter(row => row[2] === department)
      .reduce((sum, row) => sum + row[3], 0)
  }
  findRichest() {
    const richest = this.matrix.reduce((max, row) => {
      return row[3] > max[3] ? row : max
    })
    return richest[1]
  }
  
  
}
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]


let m = new EmployeeMatrix()

m.loadData(data)
m.print()
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

console.log(m.getEmployees("Finance")) // [ "Gillian", "Anisha" ]
console.log(m.getEmployees("Design"))  // [ "Tibor", "Jakub", "Mar", "Nisha" ]

console.log(m.getTotalSalary("Finance")) // 4300
console.log(m.getTotalSalary("Design"))  // 5300

console.log(m.findRichest()) // "Anisha"

module.exports = EmployeeMatrix
