buttons = document.querySelectorAll("button")
display = document.querySelector(".row1")
display.textContent = 0

let op1, op2, operator, result

function add(a, b) {
  result = a + b
  op1 = undefined
  op2 = undefined
  return result
}

function subtract(a, b) {
  result = a - b
  op1 = undefined
  op2 = undefined
  return result
}

function multiply(a, b) {
  result = a * b
  op1 = undefined
  op2 = undefined
  return result
}

function divide(a, b) {
  result = a / b
  op1 = undefined
  op2 = undefined
  return result
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
      return divide(op1, op2)
    default:
      break;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
      display.textContent = 0
      op1 = undefined
      op2 = undefined
      operator = undefined
    }
    else if ("1234567890".includes(e.target.textContent)) {
      let digit = parseInt(e.target.textContent)
      if (result && !op1) {
        op1 = result
      }
      if (!op1) {
        op1 = digit
        display.textContent = op1
      } else if (!op2 && !operator) {
        op1 = op1 * 10 + digit
        display.textContent = op1
      } else if (!op2 && operator) {
        op2 = digit
        display.textContent = op2
      } else {
        op2 = op2 * 10 + digit
        display.textContent = op2
      }
    } else if ("%/*-+".includes(e.target.textContent)) {
      if (op1 && op2 && operator) {
        result = operate(op1, op2, operator)
        op1 = result
        display.textContent = result
      }
      operator = e.target.textContent
    } else if (e.target.textContent === "=") {
      result = operate(op1, op2, operator)
      op1 = result
      operator = undefined
      display.textContent = result
    }
  })
});