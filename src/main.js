import { isStringStartsWith } from './strings.js';

console.log(isStringStartsWith('Ветеринар', 'вет')); // true
console.log(isStringStartsWith('Молоко', 'мол')); // true
console.log(isStringStartsWith('Карго Корги', 'КАРГО ')); // true

console.log(isStringStartsWith('Карго Корги', 'кор ')); // false
console.log(isStringStartsWith('Ковёр', 'кова ')); // false
