//Write your own version of the includes method

const numbers = [1, 3, 5, 10];

console.log(numbers.includes(10));

function includes(array, searchElement) {
  for (let number of array) if (number === searchElement) return true;
  return false;
}
