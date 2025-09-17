import { compareArrays } from './loops.js';

console.log(compareArrays([], [])); // true
console.log(compareArrays([true, null, 1, 'stop'], [true, null, 1, 'stop'])); // true

console.log(compareArrays([1, 2, 3], [1, 1, 3])); // false
console.log(compareArrays([null], [])); // false
