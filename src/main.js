import { generateInteger } from './numbers.js';
import { circle } from './numbers.js';
const random = generateInteger(3, 12); // от 3 до 12 включительно

// Вычисляем площадь
const area = circle(random);

// Выводим результат
console.log(`Радиус: ${random}`);
console.log(`Площадь: ${area}`);
