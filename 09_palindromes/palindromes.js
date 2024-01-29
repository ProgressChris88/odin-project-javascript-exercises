const palindromes = function (string) {
  // Compare the string forwards and backwards.
  testStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (testStr == testStr.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
