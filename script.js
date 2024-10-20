buttons = document.querySelectorAll("button")
display = document.querySelector(".row1")
display.textContent = 0

let op1, op2, operator

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
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
    if (e.target.textContent === "AC") display.textContent = 0
    else if ("1234567890".includes(e.target.textContent)) {
      let digit = parseInt(e.target.textContent)
      if (display.textContent === "0") display.textContent = digit
      else display.textContent += digit
    }
  })
});