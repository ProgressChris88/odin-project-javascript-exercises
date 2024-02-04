const findTheOldest = function(people) {
  let oldestPerson = {age: 0};
  let resultPerson = {};
  const date = new Date();
  const currentYear = date.getFullYear();
  for (let i = 0;i < people.length;i++) {
    if (people[i].yearOfDeath === undefined) {
      people[i].yearOfDeath = currentYear
    }
    if ((people[i].yearOfDeath - people[i].yearOfBirth) > oldestPerson.age) {
      oldestPerson.age = (people[i].yearOfDeath - people[i].yearOfBirth);
      resultPerson = people[i];
    }
  }
  return resultPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
