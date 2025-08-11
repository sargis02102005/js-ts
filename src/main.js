import chalk from 'chalk';
const currentDate = new Date().toISOString();
// 1. Серый цветом по синем фону
console.log(chalk.bgBlue.white(currentDate));

// 2. Зелёным цветом по чёрному фону
console.log(chalk.bgBlack.green(currentDate));

// 3. Красным цветом по серому фону
console.log(chalk.bgGray.red(currentDate));

// 4. Синим цветом по зелёному фону
console.log(chalk.bgGreen.blue(currentDate));
