let title = "Flintstone Family Members";
let remainingSpace = 40 - title.length;
let leftSpace = Math.floor(remainingSpace / 2);
console.log(title.length);
console.log(remainingSpace);

title.padStart((leftSpace + title.length), ' ');

//Math.floor();
//title.padStart()