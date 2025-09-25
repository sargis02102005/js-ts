export const append = (src, items) => {
  for (const item of src) {
    if (item === items) {
      return false;
    }
  }
  src.push(items);
};
