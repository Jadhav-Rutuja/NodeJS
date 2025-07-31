// Question 3: Solve the given problem using lodash module in node.js
// ● Create an array of objects:
// const users = [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, 
// { name: 'Charlie', age: 35 }, { name: 'David', age: 20 } ];
// ● Use the filter() method to find all users older than 25..
// ● Use the _.sortBy() method to sort the users by age in ascending order.
// ● Log filtered and sorted results to the console.

const _ = require('lodash');
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 20 }
];


const filteredUsers = _.filter(users, user => user.age > 25);

const sortedUsers = _.sortBy(users, 'age');

console.log('Filtered Users (age > 25):');
console.log(filteredUsers);

console.log('\nSorted Users (by age in ascending order):');
console.log(sortedUsers);