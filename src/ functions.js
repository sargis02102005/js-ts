//  Функция generateInteger (генерирует случайное целое число в диапазоне [min, max))
const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Экспортируем вместе с остальными функциями
export { generateInteger };
