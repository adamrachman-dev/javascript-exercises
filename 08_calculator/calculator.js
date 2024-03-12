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

/* // legacy
const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  if (!arr.length) return 0;
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for (const i of arr) {
    result *= i;
  }
  return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};
*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
