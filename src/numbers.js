export const generateInteger = (min, max) => {
  min = Math.ceil(min); // округляем до ближайшего большего целого
  max = Math.floor(max); // округляем до ближайшего меньшего целого
  /*
  Умножая Math.random() на (max - min + 1), получают значение от 0 до (max - min) (включительно)
  В конце добавляют min, чтобы сместить диапазон, так что он становится от min до max (включительно).
  */
  const generateInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return generateInteger;
};
export const circle = (radius) => {
  const PI = Math.PI;
  const area = PI * radius ** 2;
  return Math.round(area * 100) / 100; // Округление до 2х знаков
};
