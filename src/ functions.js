import chalk from 'chalk';
//  Функция generateInteger (генерирует случайное целое число в диапазоне [min, max))
const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const isAdult = (age) => {
  const isAdult = age >= 18;
  const message = isAdult
    ? chalk.green.bold`Пользователь совершеннолетний (${age} лет)`
    : chalk.red.bold`Пользователь НЕ совершеннолетний (${age} лет)`;

  console.log(`${message}`);
  return isAdult;
};

// Экспортируем вместе с остальными функциями
export { generateInteger, isAdult };
