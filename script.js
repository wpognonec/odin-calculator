buttons = document.querySelectorAll("button")

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
  button.addEventListener("click", (e) => console.log(e.target.textContent))
});