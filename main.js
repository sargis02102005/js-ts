const text = 'EXAMPLE';

const firstChar = text.charAt(0)
const lastChar = text.charAt(text.length - 1)


console.log(firstChar.toUpperCase() + text.slice(1, text.length - 1).toLowerCase() + lastChar.toUpperCase())
