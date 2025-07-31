// Question 1: Solve the given problem using lodash module in node.js
// ● Create an object:
// const user = { name: 'John', age: 25, city: 'New York' };
// ● Use the omit() method of lodash module to create a new object excluding the age property.
// ● Use the pick() method of lodash module to extract only the name and city properties into a new object.
// ● Log both results to the console.

const lodash = require('lodash');

const user = { name: 'John', age: 25, city: 'New York' };
console.log(user);

const newUser = lodash.omit(user, 'age');
console.log(newUser);

const pickedUser = lodash.pick(user, ['name', 'age']);
console.log(pickedUser);
