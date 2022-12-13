let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalized = [];

for (let i = 0; i < words.length; i++){
  let word = words[i];

  capitalized.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capitalized.join(' '));


