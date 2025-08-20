import chalk from 'chalk';

export const showSpongeBobCharacter = (name) => {
  switch (name) {
    case 'spongebob':
      console.log(chalk.yellow('| ( · )( · ) |'));
      console.log(chalk.yellow('Жёлтый - SpongeBob'));
      break;

    case 'patrick':
      console.log(chalk.magenta('/ ( · )( · ) \\'));
      console.log(chalk.magenta('Розовый - Patrick'));
      break;

    case 'squidward':
      console.log(chalk.blue('( ( · )( · ) )'));
      console.log(chalk.blue('Голубой - Squidward'));
      break;

    case 'plankton':
      console.log(chalk.green('| ( · ) |'));
      console.log(chalk.green('Тёмно-зелёный - Plankton'));
      break;

    case 'mr. crabs':
    case 'mr.crabs':
      console.log(chalk.red('|·||·|'));
      console.log(chalk.red('Красный - Mr. Crabs'));
      break;

    default:
      console.log(chalk.gray('Персонаж не найден'));
  }
};
