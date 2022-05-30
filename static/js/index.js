const numberButtons = document.querySelectorAll(".number-button");
const functionButtons = document.querySelectorAll(".function-button");
const operationButtons = document.querySelectorAll(".operation-button");
const calculatorDisplay = document.querySelector(".calculator-display");

const operations = {
  plus: add,
  minus: minus,
  multiply: multiply,
  divide: divide,
};

const functions = {
  clear: clear,
  equal: equal,
};

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function add(num1, num2) {
  return num1 + num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function clear() {
  operations_structure = [];
  calculatorDisplay.innerHTML = "";
}
function equal() {
  const { firstNum, secondNum, operation } = calculation_data;
  const result = operation(firstNum, secondNum);
  calculatorDisplay.innerHTML = result;
  return result;
}

const calculation_data = {
  firstNum: null,
  secondNum: null,
  operation: null,
};
function calculate() {}

let operations_structure = [];

function verifyCorrectInput(currentInput) {
  //number operation number operation number and so on...
  if (operations_structure.length > 0) {
    const recentInput = operations_structure[operations_structure.length - 1];
    if (currentInput.type === recentInput.type) return false;
  }

  return true;
}
function init() {
  numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
      const number = numbers[e.target.id];
      const operation_object = {
        type: "number",
        value: number,
      };
      const isLegibleInput = verifyCorrectInput(operation_object);
      if (isLegibleInput) {
        operations_structure.push(operation_object);
      }

      console.log(operations_structure);
    });
  });

  operationButtons.forEach((operationButton) => {
    operationButton.addEventListener("click", (e) => {
      const operation = operations[e.target.id];
      const operation_object = {
        type: "operation",
        value: operation,
      };
      const isLegibleInput = verifyCorrectInput(operation_object);
      if (isLegibleInput) {
        operations_structure.push(operation_object);
      }
      console.log(operations_structure);
    });
  });

  functionButtons.forEach((functionButton) => {
    functionButton.addEventListener("click", (e) => {
      const func = e.target.id;
      functions[func]();
    });
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("hi");
  init();
});
