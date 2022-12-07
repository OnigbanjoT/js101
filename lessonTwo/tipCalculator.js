let readline = require('readline-sync');

let billAmount = readline.question('What is the bill?: ');
billAmount = parseFloat(billAmount);

let tipRate = readline.question('What is the tip rate?: ');
tipRate = parseFloat(tipRate);

let tipAmount = billAmount * (tipRate / 100);
let totalBill = billAmount + tipAmount;

console.log(`The tip amount is $${tipAmount.toFixed(2)}`);
console.log(`The total bill is $${totalBill.toFixed(2)}`);

