let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// create minimum age
// loop through ages values
// compare each value to minimum age
  // reassign mimimum age to be current value 
  // or continue

let values = Object.values(ages);
let mimimumAge = values[0];
values.forEach((value) => {
  if (mimimumAge > value) {
    mimimumAge = value;
  }
})

console.log(mimimumAge);
