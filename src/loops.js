export const Lettle = (h) => {
  for (let i = 1; i <= h; i++) {
    console.log(' '.repeat(h - i) + '*'.repeat(2 * i - 1));
  }
};
