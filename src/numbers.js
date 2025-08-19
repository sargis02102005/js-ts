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
