import { generateInteger } from './numbers.js';
import { squareS } from './numbers.js';
const randomA = generateInteger(1, 10);
const area = squareS(randomA);
console.log(`Площадь квадрата со стороной a=${randomA} равна ${area}`);
