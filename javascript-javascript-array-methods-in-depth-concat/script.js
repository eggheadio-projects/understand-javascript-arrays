// Array.prototype.concat();
// See console for output!

var people = [
  {
    name: 'Shane'
  },
  {
    name: 'Sally'
  }
];

var people2 = [
  {
    name: 'Simon'
  },
  {
    name: 'Ben'
  }
];

people2.concat(people2)
  .forEach(function (person) {
    console.log(person.name);
  });