import { append } from './loops.js';
const list = [];
// Мама
append(list, 'картошка'); // <--
append(list, 'укроп');
append(list, 'молоко');

// Отец
append(list, 'мясо');
append(list, 'картошка'); // <--
append(list, 'огурцы');

// Дочь
append(list, 'огурцы');
append(list, 'картошка'); // <--
append(list, 'молоко');
append(list, 'печенья');

console.log(list); // [картошка, укроп, молоко, мясо, огурцы, печенья]
