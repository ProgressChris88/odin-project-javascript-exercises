const fibonacci = function (inputNum) {
  inputNum = Number(inputNum);
  if (inputNum < 0) {
    return "OOPS";
  }
  let arrayResult = [1, 1];
  for (i = 1; i < inputNum; i++) {
    sumNum = arrayResult[i] + arrayResult[i - 1];
    arrayResult.push(sumNum);
  }
  return arrayResult[inputNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;

// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8 (1, 1, 2, 3, 5, 8)
