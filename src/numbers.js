import chalk from 'chalk';
export const calculateChange = (amount) => {
  let remainAmount = amount;

  const banknotes5000 = Math.floor((remainAmount / 5000) % 5000); // Сколько полных купюр по 5000 помещается в оставшейся сумме
  //remainAmount %= 5000; // Сколько ещё денег осталось, если вычесть все купюры по 5000 руб

  const banknotes2000 = Math.floor((remainAmount / 2000) % 2000); // Сколько полных купюр по 2000 помещается в оставшейся сумме
  // remainAmount %= 2000; // Сколько ещё денег осталось, если вычесть все купюры по 2000 руб

  const banknotes1000 = Math.floor((remainAmount / 1000) % 1000); // Сколько полных купюр по 1000 помещается в оставшейся сумме
  // remainAmount %= 1000; // Сколько ещё денег осталось, если вычесть все купюры по 1000 руб

  const banknotes500 = Math.floor((remainAmount / 500) % 500); // Сколько полных купюр по 500 помещается в оставшейся сумме
  // remainAmount %= 500; // Сколько ещё денег осталось, если вычесть все купюры по 500 руб

  const banknotes100 = Math.floor((remainAmount / 100) % 100); // Сколько полных купюр по 100 помещается в оставшейся сумме
  // remainAmount %= 100; // Сколько ещё денег осталось, если вычесть все купюры по 100 руб

  const banknotes50 = Math.floor((remainAmount / 50) % 50); // Сколько полных купюр по 50 помещается в оставшейся сумме
  // remainAmount %= 50; // Сколько ещё денег осталось, если вычесть все купюры по 50 руб

  const banknotes10 = Math.floor((remainAmount / 10) % 10); // Сколько полных купюр по 10 помещается в оставшейся сумме
  // remainAmount %= 10; // Сколько ещё денег осталось, если вычесть все купюры по 10 руб

  console.log(`${chalk.green('Купюр 5000 необходимо')} ${chalk.blue(banknotes5000)}
${chalk.green('Купюр 2000 необходимо')} ${chalk.blue(banknotes2000)}
${chalk.green('Купюр 1000 необходимо')} ${chalk.blue(banknotes1000)}
${chalk.green('Купюр 500 необходимо')} ${chalk.blue(banknotes500)}
${chalk.green('Купюр 100 необходимо')} ${chalk.blue(banknotes100)}
${chalk.green('Купюр 50 необходимо')} ${chalk.blue(banknotes50)}
${chalk.green('Купюр 10 необходимо')} ${chalk.blue(banknotes10)}
${chalk.green('Рублей необходимо')} ${chalk.blue(remainAmount)}
`);
};
