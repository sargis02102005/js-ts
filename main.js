const a = 2 - Math.round(Math.random() * 4 )
/*
// Без сокращенния
if (a > 0){
    console.log('положительное')
}
else if (a === 0){
    console.log('null')
}
else {
    console.log('отрицательное')
}
*/
// Сокращённый вариант
/*const massenger =
    a > 0 ? 'положительное' : a < 0 ? 'отрицательное' : 'null';

console.log(massenger);
*/
// Сокращённый вариант №2
console.log(a > 0 ? 'положительное' : a < 0 ? 'отрицательное' : 'null')