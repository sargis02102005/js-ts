import chalk from 'chalk';

// 1. Функция sayHi (Привет, Анатолий), слово “Привет” зелёное, а имя пользователя синие
export const sayHi = (name) => {
  name = 'Анатолий';
  console.log(chalk.green('Привет,'), chalk.blue(name));
};

// 2. Функция sayText (Пример текста), чёрный фон и белый текст
export const sayText = (text) => {
  text = 'Пример текста';
  console.log(chalk.bgBlack.white(text));
};

// 3. Функция square (Квадрат), любое число умноженное на себя
export const square = (num) => {
  return num * num;
};

// 4. Функция sum (Сумма), которая принимает на вход два аргумента, а возвращает результат сложения
export const sum = (a, b) => {
  return a + b;
};

//Функцию power (Степени), которая принимает на вход два аргумента - число a и степень b, и возвращает число a, возведённое в степень b
export const power = (a, b) => {
  return a ** b;
};
