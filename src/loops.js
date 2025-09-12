import chalk from 'chalk';
export const nambers = (a) => {
  const colors = [chalk.red, chalk.green, chalk.blue];

  for (let i = 0; i < a; i++) {
    console.log(colors[i % 3](i));
  }
};
export const getRandomInt = () => {
  return Math.floor(Math.random() * 20) + 5;
};
