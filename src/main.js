import { compareObject } from './loops.js';

console.log(compareObject({}, {})); // true
console.log(compareObject({ age: 45 }, { age: 45 })); // true
console.log(compareObject({ ready: true, photo: null }, { ready: true, photo: null })); // true
console.log(compareObject({ a: 10, b: 20, c: 30 }, { c: 30, a: 10, b: 20 })); // true

console.log(compareObject({ name: 'max' }, { name: 'john' })); // false
console.log(compareObject({ nick: 'maxon' }, {})); // false
console.log(compareObject({ age: 45, name: 'a' }, { age: 45, name: 'b' })); // false
