export const countOfPositiveAndNegative = (arr) => {
  let positive = 0;
  let negative = 0;

  for (const item of arr) {
    console.log(item);
    // Логика подсчёта ... ???
    if (item >= 0) {
      positive++;
    } else {
      negative++;
    }
  }

  return { positive, negative };
};
