const palindromes = function (string) {
  // Compare the string forwards and backwards.
  testStr = string.replace(/[^a-zA-ZS]/g, "").toLowerCase();
  if (testStr == testStr.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
