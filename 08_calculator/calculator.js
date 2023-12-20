const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num) {
  let total = 0;
  if (num.length == 0) {
    total = 0;
  } else {
    for (let i = 0; i < num.length; i++) {
      total += num[i];
    }
  }
  return total;
};

const multiply = function (numArray) {
  let result = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    result = numArray[i] * result;
  }
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (factorialNum) {
  if (factorialNum > 1) {
    let result = factorialNum;
    let count = factorialNum;
    for (let i = 1; i < count; i++) {
      result = result * (factorialNum - 1);
      factorialNum = factorialNum - 1;
    }
    return result;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
