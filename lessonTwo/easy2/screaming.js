const readline = require('readline-sync');

function capitalize(word){
  for (let i = 0; i < word.length; i++){
    word[i] = word[i].toUpperCase();
  }
  return word;
}

let username = readline.question('What is your name? ');
let message ;


if (username.includes('!')) {
  message = capitalize(message) + '!';
}
else {
  message += '.';
}

console.log(message);