/*
Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.



*/
// srt:uuunbbeliaaaaveeabbbblllllee // str.length = 28
export const deduplicate = (str) => {
  let result = '';
  let i = 0;
  //i:0 < str.length:28
  while (i < str.length) {
    //str[0] = 'u', str[-1] = undefined
    if (str[i] === str[i - 1]) {
      result += str[i];
    }
    i++;
  }

  return result;
};
