/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

let readline = require('readline-sync');

let length = readline.question('Enter the length of the room in meters: ');
length = parseInt(length, 10);

let width = readline.question('Enter the width of the room in meters: ');
width = parseInt(width, 10);

let areaInMeters = length * width;
let areaInFeet = areaInMeters * 10.7639;

console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);

