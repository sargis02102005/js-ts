import chalk from 'chalk';
export const nambers = (a) => {
  const colors = [chalk.red, chalk.green, chalk.blue];

  for (let i = 0; i < a; i++) {
    console.log(colors[i % 3](i));
  }
};
export const getRandomInt = (min = 5, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
