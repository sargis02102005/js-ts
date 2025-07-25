// Исходные данные (как и прежде)
const width = 4.5;
const length = 6.67;
const pricePerSquareMeter = 350;

// 1. Вычисляем площадь, занимаемую вещами
const area = width * length;

// 2. Определяем, сколько квадратных метров нужно оплатить (округляем в большую сторону)
const payableArea = Math.ceil(area);

// 3. Вычисляем общую сумму к оплате
const totalPrice = payableArea * pricePerSquareMeter;

// 4. Рассчитываем количество сторублёвых купюр
const hundreds = Math.floor(totalPrice / 100);

// 5. Рассчитываем количество пятидесятирублёвых купюр
const remainingAmount = totalPrice % 100;
const fifties = Math.floor(remainingAmount / 50);

// Выводим результаты в консоль, используя шаблонные строки
console.log(`Ширина: ${width} м`);
console.log(`Длина: ${length} м`);
console.log(`Площадь: ${area} м^2`);
console.log("---------");
console.log(`Нужно оплатить: ${payableArea} м^2`);
console.log(`Цена 1 м^2: ${pricePerSquareMeter} руб`);
console.log(`Сумма за ${payableArea} м^2: ${totalPrice} руб`);
console.log("---------");
console.log(`Нужно дать сторублёвых купюр: ${hundreds}`);
console.log(`Нужно дать пятидесятирублёвых купюр: ${fifties}`);


