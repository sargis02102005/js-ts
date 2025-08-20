import { compare } from './compares.js';
console.log(compare(1, 1)); // true
console.log(compare(1, '1')); // false

console.log(compare(true, true)); // true
console.log(compare(false, false)); // true

console.log(compare(23, 23)); // true
console.log(compare('abc', 'abc')); // true

console.log(compare('ABC', 'abc')); // false
