import chalk from 'chalk';
export const printColoredObject = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(chalk(`${chalk.red(key)}: ${chalk.yellow(obj[key])}`));
    }
  }
};
