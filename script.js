buttons = document.querySelectorAll("button")
display = document.querySelector(".row1")
display.textContent = 0

let op1, op2, operator
let newNum = false

function add(a, b) {
  op1 = undefined
  op2 = undefined
  return Math.round((a + b) * 100) / 100
}

function subtract(a, b) {
  op1 = undefined
  op2 = undefined
  return Math.round((a - b) * 100) / 100
}

function multiply(a, b) {
  op1 = undefined
  op2 = undefined
  return Math.round((a * b) * 100) / 100
}

function divide(a, b) {
  op1 = undefined
  op2 = undefined
  return Math.round((a / b) * 100) / 100
}

function mod(a, b) {
  op1 = undefined
  op2 = undefined
  return Math.round((a % b) * 100) / 100
}

function operate(op1, op2, operator) {
  switch (operator) {
    case "+":
      return add(op1, op2)
    case "-":
      return subtract(op1, op2)
    case "*":
      return multiply(op1, op2)
    case "/":
      if (op2 === 0) return "NOPE"
      return divide(op1, op2)
    case "%":
      return mod(op1, op2)
    default:
      break;
  }
}

function setOperator(operator) {
  operatorButtons = document.querySelectorAll(".operator")
  operatorButtons.forEach((button) => {
    if (button.textContent === operator) {
      button.style.background = "#be9d9d"
    } else {
      button.style.background = ""
    }
  })
}

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
      display.textContent = 0
      op1 = undefined
      op2 = undefined
      operator = undefined
      setOperator(operator)
    } else if (e.target.textContent === "+/-") {
      if (display.textContent[0] !== "-") {
        display.textContent = "-" + display.textContent
      } else {
        display.textContent = display.textContent.slice(1)
      }
    } else if ("1234567890".includes(e.target.textContent)) {
      let digit = parseInt(e.target.textContent)
      if (newNum) {
        display.textContent = digit
        newNum = false
      } else if (display.textContent === "0") {
        display.textContent = digit
      } else if (display.textContent === "-0") {
        display.textContent = "-" + digit  
      } else {
        display.textContent += digit
      }
    } else if ("%/*-+".includes(e.target.textContent)) {
      if (op1 && op2 && operator) {
        let result = operate(op1, op2, operator)
        op1 = result
        display.textContent = result
        operator = e.target.textContent
        newNum = true
      } else if (op1 && !operator) {
        operator = e.target.textContent
        newNum = true
      } else if (!op1) {
        op1 = parseFloat(display.textContent)
        operator = e.target.textContent
        newNum = true
      } else if (!op2) {
        op2 = parseFloat(display.textContent)
        let result = operate(op1, op2, operator)
        op1 = result
        operator = e.target.textContent
        display.textContent = result
        newNum = true
      } 
      setOperator(operator)
    } else if (e.target.textContent === "=") {
      if (op1 && operator) {
        op2 = parseFloat(display.textContent)
        let result = operate(op1, op2, operator)
        op1 = result
        operator = undefined
        setOperator(operator)
        display.textContent = result
        newNum = true
      }
    } else if (e.target.textContent === ".") {
      if (newNum) {
        display.textContent = "0."
        newNum = false
      } else if (!display.textContent.includes(".")) {
        display.textContent += "."
      }
    } else if (e.target.textContent === "DEL") {
      if (display.textContent.length === 1) display.textContent = 0
      else if (display.textContent) display.textContent = display.textContent.slice(0,-1)
    }
  })
});