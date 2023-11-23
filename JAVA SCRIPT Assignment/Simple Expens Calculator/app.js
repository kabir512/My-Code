let amountInput = document.getElementById('amountInput')
let incomeVal = document.getElementById('income')
let expenseVal = document.getElementById('expense')

let income = 0
let expense = 0
let profitLoss = 0

function calculateIncome () {
    console.log(amountInput.value)
    income = income + Number(amountInput.value)
    incomeVal.innerText = income
    calculatePL()
  }

  function calculateExpense () {
    console.log(amountInput.value)
    expense = expense - Number(amountInput.value)
    expenseVal.innerText = expense
    calculatePL()
  }

function calculatePL(){
  profitLoss = income - expense

}
