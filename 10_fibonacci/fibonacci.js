const fibonacci = function(num) {
  let arrayResult = [1];
  let sumNum = 1;
  let priorNum = 1;
  for (i = 0; i < num;i++) {
    // priorNum = sumNum;
    // sumNum = sumNum += priorNum;
    // console.log(sumNum);
    sumNum = arrayResult[i] + sumNum;
    arrayResult.push(sumNum);
    console.log(arrayResult[i]);
  }
  return sumNum;
};

// Do not edit below this line
module.exports = fibonacci;


// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8 (1, 1, 2, 3, 5, 8)
