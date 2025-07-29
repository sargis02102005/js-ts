const a = 10;

if (a === 2 || 3) {
    console.log(-1);
 }// -1

if (a === 2 || a === 3) {
    console.log(0);
} // false

if (10 % 1) {
    console.log(1);
}// 1

if (10 % 0) {
    console.log(2);
} else if (10) {
    console.log(3);
} else if (true) {
    console.log(4);
}// 4

let g = '';

if (g) {
    console.log(5);
} else {
    console.log(6);
}// 6

if (undefined) {
    console.log(7);
} // false

if ('0') {
    console.log(8);
} else if ('') {
    console.log(9);
} else {
    console.log('a');
}// 8

if (!'0') {
    console.log('b');
} else {
    console.log('c');
}// c

if (!!'' || !!0 || !!1) {
    console.log('d');
}// d

if (undefined || false || '' || 0) {
    console.log('e');
} else if (!false && (0 || '0')) {
    console.log('f');
} else {
    console.log('g');
}// f

const a = 0;
const b = 1;
let c;

console.log(a == '0' ? 'h' : 'i');// h
console.log(!(a > b) ? 'j' : 'k');// j
console.log(0 ? 'l' : 'm');// m
console.log(!0 ? 'n' : 'o');// n
console.log((null === undefined || 11 % 5) && (a > b || !!true) ? 'n' : 'o');// n

console.log('abc' == 'ABC' ? 'p' : 'q');// q
console.log('false' ? 'r' : 's');// r
console.log('false' == false ? 't' : 'u');// u
console.log(Number('one') ? 'v' : 'w');// w
console.log(c ? 'x' : 'y');// y
console.log(null == undefined ? 'z' : '🫡');// z
