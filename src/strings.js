export const isStringStartsWith = (text, part) => {
  // text.toLowerCase() и part.toLowerCase() приводят обе строки к нижнему регистру, чтобы сравнение было нечувствительным к регистру
  //startsWith() проверяет, начинается ли строка text с подстроки part
  return text.toLowerCase().startsWith(part.toLowerCase());
};
