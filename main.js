
const a = 10;

if (a === 2 || 3) {
    console.log(-1);
 }// Результат проверки -1

if (a === 2 || a === 3) {
    console.log(0);
} // Результат проверки ничего

if (10 % 1) {
    console.log(1);
}// Результат проверки ничего

if (10 % 0) {
    console.log(2);
} else if (10) {
    console.log(3);
} else if (true) {
    console.log(4);
}// Результат проверки 3

let g = '';

if (g) {
    console.log(5);
} else {
    console.log(6);
}// Результат проверки 6

if (undefined) {
    console.log(7);
} // Результат проверки ничего

if ('0') {
    console.log(8);
} else if ('') {
    console.log(9);
} else {
    console.log('a');
}// Результат проверки 8

if (!'0') {
    console.log('b');
} else {
    console.log('c');
}// Результат проверки c

if (!!'' || !!0 || !!1) {
    console.log('d');
}// Результат проверки d

if (undefined || false || '' || 0) {
    console.log('e');
} else if (!false && (0 || '0')) {
    console.log('f');
} else {
    console.log('g');
}// Результат проверки f

const a = 0;
const b = 1;
let c;

console.log(a == '0' ? 'h' : 'i');// Результат проверки h
console.log(!(a > b) ? 'j' : 'k');// Результат проверки j
console.log(0 ? 'l' : 'm');// Результат проверки m
console.log(!0 ? 'n' : 'o');// Результат проверки n
console.log((null === undefined || 11 % 5) && (a > b || !!true) ? 'n' : 'o');// Результат проверки n

console.log('abc' == 'ABC' ? 'p' : 'q');// Результат проверки q
console.log('false' ? 'r' : 's');// Результат проверки r
console.log('false' == false ? 't' : 'u');// Результат проверки u
console.log(Number('one') ? 'v' : 'w');// Результат проверки w
console.log(c ? 'x' : 'y');// Результат проверки y
console.log(null == undefined ? 'z' : '🫡');// Результат проверки ничего

