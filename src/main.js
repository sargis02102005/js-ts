import { sayHi, sayText, square, sum, power } from './ functions.js';

// 1. Проверка sayHi
sayHi('Анатолий'); // Выведет: Привет, Анатолий (зелёный + синий)
sayHi('Мария'); // Выведет: Привет, Мария

// 2. Проверка sayText
sayText('Это важное сообщение!'); // Белый текст на чёрном фоне
sayText('Ещё один пример.'); // Также стилизованный вывод

// 3. Проверка square
console.log(square(5)); // 25
console.log(square(10)); // 100

// 4. Проверка sum
console.log(sum(2, 3)); // 5
console.log(sum(-1, 10)); // 9

// 5. Проверка power
console.log(power(2, 10)); // 1024
console.log(power(3, 3)); // 27 (3³ = 27)
