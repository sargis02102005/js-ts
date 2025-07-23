let nick = 'nick';

console.log(nick.length);
// 4

console.log(nick.toUpperCase());
// NICK

console.log(nick);
// nick

nick = nick.toUpperCase();

console.log(nick);
// NICK

const firstLetter = nick.charAt(0);
console.log(firstLetter);
// N

const endWithK = nick.endsWith('K');
console.log(endWithK);
// true

// Можно вызывать методы без использования переменной:
const endWithK1 = 'someword'.endsWith('K'); // false
console.log(endWithK1);