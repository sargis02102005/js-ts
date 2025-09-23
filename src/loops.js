export const func = (obj) => {
  let maxLen = 0;
  let lastValue = '';

  // for (const key in obj) {
  //   if (Array.isArray(obj[key]) && obj[key].length > maxLen) {
  //     maxLen = obj[key].length;
  //     lastValue = obj[key][obj[key].length - 1];
  //   }
  // }
  for (const key in obj) {
    const array = obj[key];
    if (Array.isArray(array) && array.length > maxLen) {
      maxLen = array.length;
      lastValue = array[array.length - 1];
    }
  }
  return { maxLen, lastValue };
};
