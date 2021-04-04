//Demonstrate the arguments object, and how it can be utilised to create a function that takes varying amounts of arguments

// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 50));
