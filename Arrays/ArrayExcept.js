//Create a function called 'except', which returns a new array excluding a given value from an existing array

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2, 3]);

console.log(output);

function except(array, excluded) {
  let output = [];

  for (let number of array) {
    if (!excluded.includes(number)) {
      output.push(number);
    }
  }
  return output;
}
