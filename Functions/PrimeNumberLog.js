//Log all numbers up to the set limit on the console

let limit = 200;

function listPrimes(limit) {
  for (let number = 2; number < limit; number++) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) console.log(number);
  }
}

listPrimes(limit);
