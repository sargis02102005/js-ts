// 1. Функция sayHi (выводит цветное приветствие)
const sayHi = (name) => {
  console.log('%cПривет, %c' + name, 'color: green', 'color: blue');
};

// 2. Функция sayText (выводит текст с белым цветом на чёрном фоне)
const sayText = (text) => {
  console.log('%c' + text, 'color: white; background: black; padding: 2px');
};

// 3. Функция square (возвращает квадрат числа)
const square = (num) => {
  return num * num;
};

// 4. Функция sum (возвращает сумму двух чисел)
const sum = (a, b) => {
  return a + b;
};

// 5. Функция power (возвращает a в степени b)
const power = (a, b) => {
  return a ** b;
};

// Экспорт всех функций
export { sayHi, sayText, square, sum, power };
