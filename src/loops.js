export const compareObject = (a, b) => {
  // Если массивы разные по длине -> сразу return false;
  if (a.length !== b.length) {
    return false;
  }

  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};
