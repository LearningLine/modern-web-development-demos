var people = [
  { name: 'Jason', age: 41, speak: function() { console.log('Hi!'); } },
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 21 },
  { name: 'Carol', age: 28 },
];

var jason = people[0];
var str = jason.name;
var fn = jason.speak;

// for (var i = 0, n = people.length; i < n; i++) {
//   console.log(people[i].name);
// }

// people.forEach(function(person) {
//   console.log(person.name);
// });

var voters = people.filter(function(person) {
  return person.age >= 18;
});

var voterNames = voters.map(function(voter) {
  return voter.name;
});

var combinedAges = voters.reduce(function(result, current) {
  return result + current.age;
}, 0);

console.log(combinedAges);
