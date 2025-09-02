export const filter = (people) => {
  // Создаем объект для хранения результатов
  const result = {
    mans: [], // Массив для подходящих мужчин
    women: [], // Массив для подходящих женщин
  };

  // Проходим по каждому человеку в массиве
  for (const person of people) {
    //Условия для мужчин: gender = 'm' И age > 18
    if (person.gender === 'm' && person.age > 18) {
      result.mans.push(person.name); // Добавляем имя в массив мужчин
    }

    //Условия для женщин: gender = 'f' И age > 20
    if (person.gender === 'f' && person.age > 20) {
      result.women.push(person.name); // Добавляем имя в массив женщин
    }
  }

  return result; // Возвращаем объект с результатами
};
