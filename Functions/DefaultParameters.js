//Demonstrate how to set default parameters in a function

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));
