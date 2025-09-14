export const func = (obj) => {
  const counter = {};
  for (const user of obj) {
    if (counter[user.age] === undefined) {
      counter[user.age] = 0;
    }
    counter[user.age]++;
  }

  const result = '';
  for (const age in counter) {
    console.log(`Возраст=${age}. Количество людей=${counter[age]}`);
  }
  return result;
};
