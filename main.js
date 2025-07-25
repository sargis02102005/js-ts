// 1. Генерируем радиус круга (целое число от 1 до 20)
const radius = Math.floor(Math.random() * 20) + 1;

// 2. Вычисляем площадь круга
const area = Math.PI * radius * radius;

// 3. Округляем площадь до 2 знаков после запятой
const roundedArea = area.toFixed(2); // toFixed() возвращает строку!

// 4. Формируем сообщение
const message = `Радиус: ${radius}\nПлощадь: ${roundedArea}`;

// 5. Выводим сообщение
console.log(message);


