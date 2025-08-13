import chalk from 'chalk';

// 1. Удаление поля из объекта
const removeProperty = (obj, property) => {
  delete obj[property];
};

// 2. Добавление/изменение поля в объекте
const addProperty = (obj, property, value) => {
  obj[property] = value;
};

// 3. Сравнение значений полей двух объектов
const compare = (obj1, obj2, property) => {
  const value1 = obj1[property];
  const value2 = obj2[property];
  const areEqual = value1 === value2;

  const message = `Сравнение поля "${property}": ${value1} vs ${value2}`;
  const color = areEqual ? chalk.green.bold : chalk.red.bold;

  console.log(color(message));
  return areEqual;
};

export { removeProperty, addProperty, compare };
