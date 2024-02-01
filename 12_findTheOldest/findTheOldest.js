const findTheOldest = function(people) {
  console.log(people[0])
  // Define oldest person string variable
  let oldestPerson = {age: 0};
  let resultPerson = {};
  // Loop through each object of arrays
  for (let i = 0;i > people.length;i++) {
    // If the result is higher than the current value of the high age variable, replace name in that result.
    console.log(people[i])
    if ((people[i].yearOfDeath - people[i].yearOfBirth) > oldestPerson.age) {
      oldestPerson.age = (people[i].yearOfDeath - people[i].yearOfBirth);
      resultPerson = people[i];
      // oldestPerson.age = people[i].age;
    }
    else {
      console.log(people[i])
    }
  }
  console.log(resultPerson);
  return resultPerson;
  // Return name of oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
