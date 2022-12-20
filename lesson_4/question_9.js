let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let total = 0;
Object.values(ages).forEach(age => total += age);

console.log(total);
