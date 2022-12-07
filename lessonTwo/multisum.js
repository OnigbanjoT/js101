function multisum(lastNumber) {
  let i = 1;
  let sum = 0;
  while (i <= lastNumber) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i += 1;
  }
  return sum;
}

multisum(3);
