const readline = require('readline-sync');

let num1 = readline.question('Enter the first number: ');
num1 = parseInt(num1, 10);
let num2 = readline.question('Enter the second number: ');
num2 = parseInt(num2, 10);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
