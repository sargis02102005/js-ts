/*
Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.



*/
//srt:uuunbbeliaaaaveeabbbblllllee // str.length = 28
export const deduplicate = (str) => {
  let result = '';

  for (const item of str) {
    if (item !== result[result.length - 1]) {
      result += item;
    }
  }

  return result;
};
