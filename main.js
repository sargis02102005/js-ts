let a = 10;

console.log(1 > 0);//true
console.log(!(1 < 0));//true

console.log('a' == a);//false
console.log('a' !== a);//true

a = 4;

console.log(a == 10);//false
console.log(a == '10');//false

console.log(a >= 4);//true
console.log('4' == a);//true

console.log(!(1 === '1'));//true

console.log(!!true);//true
console.log(!!!('0' == 0));//false
console.log(false == !false);//false

console.log(1 != '1');//false
console.log(1 !== '1');//true

console.log(1 != '0');//true