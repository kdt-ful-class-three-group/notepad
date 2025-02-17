const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".delete");
const display = document.querySelector(".display");

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

const calculate = (num1, operator, num2) => {
  let result = 0;
  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      result = Number(num1) / Number(num2);
      break;
  }
  return result;
};

const updateDisplay = (value) => {
  display.textContent = value;
};

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator === "") {
      num1 += e.target.textContent;
      updateDisplay(num1);
    } else {
      num2 += e.target.textContent;
      updateDisplay(num2);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      result = calculate(num1, operator, num2);
      updateDisplay(result);
      num1 = result;
      num2 = "";
      operator = "";
    } else {
      operator = e.target.textContent;
    }
  });
});

deleteButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  updateDisplay("");
});
