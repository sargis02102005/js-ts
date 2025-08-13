import { removeProperty, addProperty, compare } from './ functions.js';

// Тестирование removeProperty
const user = { id: 1, age: 20, name: 'alex' };
removeProperty(user, 'id');
console.log(user); // { age: 20, name: 'alex' }

removeProperty(user, 'age');
console.log(user); // { name: 'alex' }

removeProperty(user, 'name');
console.log(user); // {}

// Тестирование addProperty
const user1 = { id: 5, name: 'max' };
addProperty(user1, 'address', 'ул. Углеродная 5');
console.log(user1); // { id: 5, name: 'max', address: 'ул. Углеродная 5' }

addProperty(user1, 'age', 50);
console.log(user1); // { id: 5, name: 'max', address: 'ул. Углеродная 5', age: 50 }

addProperty(user1, 'id', -3);
console.log(user1); // { id: -3, name: 'max', address: 'ул. Углеродная 5', age: 50 }

// Тестирование compare
const user2 = { id: 90, name: 'stas', address: 0 };
compare(user2, { id: 90 }, 'id'); // Зелёный: 90 vs 90
compare(user2, { id: 90, name: 'alex' }, 'name'); // Красный: 'stas' vs 'alex'
compare({}, {}, 'address'); // Красный: undefined vs undefined

user2.id = user2.name.length;
compare({ id: 4, name: 'mikhail' }, user2, 'id'); // Зелёный: 4 vs 4

user2.address = Boolean(1);
compare({ address: 1 }, user2, 'address'); // Зелёный: 1 vs true (нестрогое сравнение)
