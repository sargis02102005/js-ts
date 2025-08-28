export const diceRoll = () => {
  let attempts = 0;
  let dice1 = 0;
  let dice2 = 0;

  while (dice1 === dice2) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    attempts++;
  }

  return {
    double: dice1,
    attempts: attempts,
  };
};
