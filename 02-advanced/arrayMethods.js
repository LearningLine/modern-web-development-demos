var people = [
    { name: 'Jason', age: 41 },
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 31 },
    { name: 'Jason', age: 51 }
];

function getNames() {
    var names = [];

    for (var i = 0; i < people.length; i++) {
        names.push(getName(people[i]));
    }

    return names;
}

console.log(getNames());

function getNames2() {
    return people.map(getName);
}

function getName(person) {
    return person.name;
}

console.log(getNames2());

function getAdults() {
    var adults = [];

    for (var i = 0; i < people.length; i++) {
        if (isAdult(people[i])) {
            adults.push(people[i]);
        }
    }

    return adults;
}

function getAdults2() {
    return people.filter(isAdult);
}

function isAdult(person) {
    return person.age >= 18;
}

console.log(getAdults2().map(getName));

function getTotalAge() {
    var total = 0;

    for (var i = 0; i < people.length; i++) {
        total += people[i].age;
    }

    return total;
}

function getTotalAge2() {
    return people.reduce(function(total, person) {
        return total + person.age;
    }, 0);
}

console.log(getTotalAge2());

function getUniqueNames() {
    var uniqueNames = {};

    for (var i = 0; i < people.length; i++) {
        uniqueNames[people[i].name] = true;
    }

    return Object.keys(uniqueNames).sort();
}

function getUniqueNames2() {
    return Object.keys(people.reduce(function(uniqueNames, person) {
        uniqueNames[person.name] = (uniqueNames[person.name] || 0) + 1;

        return uniqueNames;
    }, {})).sort();
}

console.log(getUniqueNames2());











//
