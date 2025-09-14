export const matrix = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].join('\t'));
  }
};
