import chalk from 'chalk';

const shuffle = (src) => {
  const result = [];
  let i = 0;

  while (result.length < src.length) {
    const randomIndex = Math.floor(Math.random() * src.length);

    const randomElement = src[randomIndex];
    if (!result.includes(randomElement)) {
      result.push(randomElement);
    }
    i++;
  }
  console.log(chalk.red(`Общее количество итераций:`) + chalk.green(i));
  return result;
};

const arr = [5, 8, 1, 3];

console.log(shuffle(arr));
