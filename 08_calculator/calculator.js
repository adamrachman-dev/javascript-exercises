function add(num1, num2) {
  return num1 + num2;
}

function subtract(bigNum, smallNum) {
  return bigNum - smallNum;
}

function sum(arr) {
  return arr.reduce((total, item) => total + item, 0);
}

function multiply(arr) {
  return arr.reduce((total, item) => total * item);
}

function power(num, powerByValue) {
  return num ** powerByValue;
}

function factorial(num) {
  if (num === 0) return 1;
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
