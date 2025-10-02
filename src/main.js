const user = { name: 'Коля', age: 9 };
const diplom = { degree: 'Магистр', university: 'МГУ', department: 'Кафедра информационных технологий' };

// const mergeToNewObject = (odj1, odj2) => {
//   return { ...odj1, ...odj2 };
// };

// const mergeToNewObject = () => {
//   return { ...user, ...diplom };
// };

// const obj3 = mergeToNewObject(user, diplom);

const obj3 = { ...user, ...diplom };

console.log(obj3);
console.log(khkkg);
/*
{
  name: 'Коля',
  age: 9,
  degree: 'Магистр',
  university: 'МГУ',
  department: 'Кафедра информационных технологий'
}
 */
M;
