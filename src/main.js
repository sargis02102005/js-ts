import { generateInteger, isAdult } from './ functions.js';
// Случайный возраст от 15 до 22
const age = generateInteger(15, 23); // 23, потому что max не включительно

console.log(isAdult(age));
// Примеры вручную
console.log(isAdult(17));
console.log(isAdult(18));
