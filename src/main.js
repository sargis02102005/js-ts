const arr = [5, 8, 1, 3];
const shuffle = (src) => {
  const j = Math.floor(Math.random() * src.length);

  for (let i = 0; i < src.length; i++) {
    [src[i], src[j]] = [src[j], src[i]];
  }
  return src;
};

console.log(shuffle(arr));
