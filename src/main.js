const numbers = [10, 0];

let number = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (number < numbers[i]) {
    number = numbers[i];
  }
}

console.log(number);
