//Первый и последний символ строки записан в верхнем регистре
export const func = (str) => {
  //Любая первая буква записан в верхнем регистре
  const stars = str.slice(0, 1).toUpperCase();
  //Между ними записона в нижнем регистре
  const middles = str.slice(1, str.length - 1).toLowerCase();
  //Любая последная буква записан в верхнем регистре
  const end = str.slice(str.length - 1).toUpperCase();

  return stars + middles + end;
};
