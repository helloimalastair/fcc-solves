function sumPrimes(num: number) {
  let sum = 0;
  for(let i = num; i > 1; i--) {
    let loopedPrime = false;
    for(let j = 2, s = Math.sqrt(i); j <= s; j++) {
      if(i % j === 0) {
        loopedPrime = true;
      }
    }
    if(!(loopedPrime || num <= 1)) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);