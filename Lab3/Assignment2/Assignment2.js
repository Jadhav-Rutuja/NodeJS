// Question 2 : Solve the given problem using lodash module in node.js:
// ● Use the chunk() method to split an array [1, 2, 3, 4, 5, 6, 7, 8] into chunks of size 3.
// ● Use the flatten() method to flatten a nested array [[1, 2], [3, 4], [5, 6]].
// ● Log both results to the console.

const lodash = require('lodash');


const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = lodash.chunk(array, 3);


const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = lodash.flatten(nestedArray);


console.log('Chunked Array (size 3):');
console.log(chunkedArray);

console.log('\nFlattened Array:');
console.log(flattenedArray);