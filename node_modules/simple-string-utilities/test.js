const { lowercase, uppercase, capitalize, formatDate, countCharacters } = require('./index');

let text = 'hello, world!';
let date = new Date();

console.log(lowercase(text)); // Output: hello, world!
console.log(uppercase(text)); // Output: HELLO, WORLD!
console.log(capitalize(text)); // Output: Hello, world!
console.log(formatDate(date, 'dd/MM/yyyy')); // Output: 09/03/2024
console.log(countCharacters(text)); // Output: 13
