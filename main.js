// Создаем объект с несколькими полями
let obj = {
    name: 'Sargis',
    age: 19
};

// 1. Добавляем поле, используя .
obj.email = 'oganyan.sargis20@mail.ru';

// 2. Добавляем поле, содержащее в имени пробел или тире, используя []
obj['phone number'] = '8-965-116-62-35';

console.log(obj); // Проверяем добавленные поля

// 3. Удаляем оба поля, которые создали до этого
delete obj.email;
delete obj['phone number'];

console.log(obj); // Проверяем удаление полей

// 4. Добавляем объекту вложенный объект
obj.address = {};

// 5. Добавляем вложенному объекту новое поле
obj.address.city = 'Moscow';

// 6. Изменяем значение поля вложенного объекта
obj.address.city = 'Moscow oblast';

console.log(obj); // Проверяем изменения

// 7. Добавляем в объект новое поле, название которого лежит в другой переменной
let fieldName = 'salary';
let fieldValue = 5000;
obj[fieldName] = fieldValue;

console.log(obj); // Проверяем добавление поля через переменные

// 8. Создаем объект из 3-5 полей, для которых значения берутся из одноименных переменных (краткая запись)
let title = 'Book';
let author = 'Author Name';
let pages = 200;

let book = {
    title,
    author,
    pages
};

console.log(book); // Проверяем созданный объект

