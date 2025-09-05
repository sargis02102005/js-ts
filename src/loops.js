/*
Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.



*/
// srt:uuunbbeliaaaaveeabbbblllllee
export const deduplicate = (str) => {
  let result = '';
  let i = 0;

  for (const item of str) {
    if (item !== str[i - 1]) {
      result += item;
    }
    i++;
  }

  return result;
};
