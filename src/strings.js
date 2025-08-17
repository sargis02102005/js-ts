import chalk from 'chalk';
export const logStringInfo = (text) => {
  //Первая буква жёлтым цветом
  const first = chalk.yellow(text.slice(0, 1));
  //Последняя буква зелёным цветом
  const last = chalk.green(text.slice(text.length - 1));
  //                        Её длина
  console.log(`Символов: ${text.length}\nПревый: ${first}\nПоследний: ${last}`);
};
