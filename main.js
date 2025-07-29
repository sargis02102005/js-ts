let fullname = 'Alexander Adams';
let surname = '';

const newLine = '\n';

const threshold = 10;

if (fullname.length > threshold) {
    console.log(`У ${fullname} длинное имя, оно превышает ${threshold} знаков`, newLine);
//    У Alexander Adams длинное имя, оно превышает 10 знаков

    fullname.toUpperCase();// ALEXANDER ADAMS

    const letter1 = 'M';
    if (fullname.indexOf(letter1) !== -1) {
        console.log(`Буква "${letter1}" найдена`);
    } else {
        console.log(`Буква "${letter1}" не найдена`);
    }//Буква M не найдена

    const letter2 = 'R';
    if (fullname.toUpperCase().includes(letter2)) {
        console.log(`Буква "${letter2}" найдена`, newLine);
    } else {
        console.log(`Буква "${letter2}" не найдена`);
    }// Буква R  найдена

    fullname = '              ';

    if (surname) {
        console.log(`Его фамилия: ${surname}`, newLine);
    } else {
        surname = 'Себастьянов';
    }// Себастьянов
}

if (fullname.trim().length) {
    console.log(`Осталось имя: ${fullname}`, newLine);
} else {
    console.log('Имя пустое', newLine);
} // Имя пустое


const start = 2;
const end = 5;

let index = start;
const phrase = surname.at(index++) + surname.at(index++) + surname.at(index++);// ничего не делает

if (surname.slice(start, index) === phrase) {
    console.log(`"${phrase}" действительно лежит внутри "${surname}" между ${start} и ${end} символами`, newLine);
} // ничего

const star = '*';
const underscore = '_';
const count = 3 + Math.round(Math.random() * 3);

const prettified = `${star.repeat(count)}-${surname}-${star.repeat(count)}`;

console.log(prettified);//*****-Себастьянов-*****
console.log(prettified.replaceAll(star, underscore));//_____-Себастьянов-_____