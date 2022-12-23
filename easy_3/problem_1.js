let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
  let currentValue = cities[i];

  if (currentValue === null) {
    continue;
  }

  console.log(currentValue.length);
}