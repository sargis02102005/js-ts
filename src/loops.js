export const diceRoll = () => {
  let attempts = 0;
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  while (dice1 !== dice2) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    attempts++;
  }

  return {
    dice1: dice1,
    dice2: dice2,
    attempts: attempts,
  };
};
