// inputs : loanAmount (decimal), APR (decimal), loanDuration (months)
// outputs: monthlyInterestRate (APR / 12), loanDurationInMonths, monthlyPayment

// let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

// edge case: No interest loan? 

const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return  number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculator(){
  prompt(messages.welcome);

  prompt(messages.numberOne);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(messages.invalidNumber);
    number1 = readline.question();
  }
  
  prompt(messages.numberTwo);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(messages.invalidNumber);
    number2 = readline.question();
  }
  
  prompt(messages.operation);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages.invalidOperation);
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(`${messages.result} ${output}`);
  
  prompt(messages.anotherCalculation);
  let answer = readline.question();

  if (answer == 'y'){
    calculator();
  }
}

calculator();
