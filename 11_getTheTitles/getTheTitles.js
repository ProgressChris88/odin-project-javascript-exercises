const getTheTitles = function(books) {
  let resultArray = [];
  for (let i = 0;i < books.length; i++)
  {
    resultArray.push(books[i].title)
  }
  return resultArray
};

// Do not edit below this line
module.exports = getTheTitles;
