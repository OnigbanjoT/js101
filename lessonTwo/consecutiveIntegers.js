const readline = require('readline-sync');

const lastNumber = Number.parseInt(readline.question('Enter an integer greater than 0: '), 10);

const operation = readline.question("Enter 's' to compute the sum, or 'p' to compute the product. ");

let i = 1;
let sum = 0;
let product = 1;

while (i <= lastNumber) {
  if (operation === 's') {
    sum += i;
  }
  if (operation === 'p') {
    product *= i;
  }
  i += 1;
}

if (operation === 's') {
  console.log(`The sum of integers between 1 and ${lastNumber} is ${sum}`);
}

if (operation === 'p') {
  console.log(`The product of integers between 1 and ${lastNumber} is ${product}`);
}
