export const roundValues = (numbers) => {
  const result = [];
  const positive = [];

  //Цикл для запуска массива numbers
  for (const item of numbers) {
    result.push(item);
  }
  //Цикл для на хождение сколько положительных чисел
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positive.push(i);
    }
  }

  let roundedCount = 0;
  for (const item of positive) {
    if (roundedCount <= positive[positive.length - 5]) {
      result[item] = Math.round(numbers[item]);
      roundedCount++;
    }
  }

  return result;
};
