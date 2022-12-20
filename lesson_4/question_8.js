let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//create empty object
let obj = {};
// get key value pairs from flinstone
let keyValue = Object.entries(flintstones);

keyValue.forEach((keyValue) => {
  let [key, value] = keyValue;
  
  obj[value] = key;
 // console.log(key);
 // console.log(value);
})

// loop through values and assign as keys in new object
console.log(keyValue);
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
console.log(obj);