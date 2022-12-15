let numbers = [1, 2, 3, 4];
console.log(numbers);

while(numbers.length > 0){
  //numbers.pop();
  //numbers.shift();
  numbers.splice(0);
}

console.log(numbers);