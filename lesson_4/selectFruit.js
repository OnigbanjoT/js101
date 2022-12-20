let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  // create fruit obj
  let fruits = {};
  // loop through object
  let objKeysAndValues = Object.entries(obj);
  for (let i = 0; i < objKeysAndValues.length; i++) {
    // select every key with a value of 'Fruit'
    if (objKeysAndValues[i][1] === 'Fruit') {
      // push that key-value pair to fruit obj
      fruits[objKeysAndValues[i][0]]  = objKeysAndValues[i][1];
    }
  }
  return fruits;
}


selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(selectFruit(produce));
console.log(produce);
