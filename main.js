// 1. Генерируем количество классов (от 1 до 20)
const numberOfClasses = Math.floor(Math.random() * 20) + 1;

// 2. Генерируем количество учеников в классе (от 1 до 35)
const numberOfStudentsPerClass = Math.floor(Math.random() * 35) + 1;

// 3. Вычисляем общее количество учеников в школе
const totalNumberOfStudents = numberOfClasses * numberOfStudentsPerClass;

// 4. Вычисляем необходимое количество парт
//    Если количество учеников нечетное, округляем вверх до ближайшего целого числа
const numberOfDesks = Math.ceil(totalNumberOfStudents / 2);

// 5. Выводим результаты в консоль
console.log(`Классов: ${numberOfClasses}`);
console.log(`Учеников: ${numberOfStudentsPerClass}`);
console.log(`Нужно купить парт: ${numberOfDesks}`);


