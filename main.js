const alex = {
    name: 'Alex',
    dateOfBirth: new Date('2024-05-15'),
};

const jake = {
    name: 'Jake',
    dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
    name: 'John',
    dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
    name: 'Bob',
    dateOfBirth: new Date(),
};

// Дней в году * часов в дне * минут в часе * секунд в часе * миллисекунд в секунде
const millisecondsInYear = 365 * 24 * 60 * 60 * 1000; // Или сразу просто 31536000000. Кол-во миллисекунд в году.

// Текущая дата
const now = new Date();

// Делим "сколько прошло миллисекунд с момента рождения" на количество миллисекунд в годе, тем самым находим
// сколько прошло лет с момента рождения. И округляем вниз, чтобы получить "полных лет"
alex.age = Math.floor((now.getTime() - alex.dateOfBirth.getTime()) / millisecondsInYear);
jake.age = Math.floor((now.getTime() - jake.dateOfBirth.getTime()) / millisecondsInYear);
john.age = Math.floor((now.getTime() - john.dateOfBirth.getTime()) / millisecondsInYear);
bob.age = Math.floor((now.getTime() - bob.dateOfBirth.getTime()) / millisecondsInYear);

console.log(alex);
console.log(jake);
console.log(john);
console.log(bob);