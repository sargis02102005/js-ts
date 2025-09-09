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
  //Цикл для округление каждого положительного числа в нем, кроме последних трех положительных чисел
  //const countToRound = positive.length - 3;
  //let roundedCount = 0;
  //   for (const item of positive) {
  //     if (roundedCount < countToRound) {
  //       result[item] = Math.round(numbers[item]);
  //       roundedCount++;
  //     }
  //   }
  let roundedCount = 0;
  for (const item of positive) {
    if (roundedCount <= 3) {
      result[item] = Math.round(numbers[item]);
      roundedCount++;
    }
  }

  return result;
};
