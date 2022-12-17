let message = 'The Flintstones Rock!';
let count = 0;
while (count < 10){
  console.log(message.padStart(message.length + count));
  count++;
}