import { sayHi, sayText, square, sum, power } from './ functions.js';

// Тестирование sayHi
sayHi('Анатолий'); // Зелёное "Привет," и синее имя
sayHi('Мария'); // Аналогично для другого имени

// Тестирование sayText
sayText('Важное сообщение'); // Белый текст на чёрном фоне
sayText('Ещё один пример');

// Тестирование математических функций
console.log('5² =', square(5));
console.log('2 + 3 =', sum(2, 3));
console.log('2^10 =', power(2, 10));
