import chalk from 'chalk';

// 1. Функция sayHi с chalk
const sayHi = (name) => {
  console.log(chalk.green('Привет,') + ' ' + chalk.blue(name));
};

// 2. Функция sayText с chalk
const sayText = (text) => {
  console.log(chalk.bgBlack.white(text));
};

// 3. Функция square
const square = (num) => num * num;

// 4. Функция sum
const sum = (a, b) => a + b;

// 5. Функция power
const power = (a, b) => a ** b;

// Экспорт функций
export { sayHi, sayText, square, sum, power };
