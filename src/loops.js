export const analyzeArray = (arr) => {
  if (arr.length === 0) {
    return { min: undefined, max: undefined, avg: undefined };
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (const item of arr) {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
    sum += item;
  }
  const avg = sum / arr.length;
  return { min, max, avg };
};
export const randomNumbers = [];
for (let i = 0; i < 8; i++) {
  randomNumbers.push(Math.floor(Math.random() * 14) + 2); // от 2 до 15 включительно
}
