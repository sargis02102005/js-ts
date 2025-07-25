const text = 'example';
const start = text.charAt(0).toUpperCase()// E
const middle = text.slice(1, text.length - 1).toLowerCase()//xampl
const end = text.charAt(text.length - 1).toUpperCase()//E
//           E    +  xampl  + E
console.log(start + middle + end)

