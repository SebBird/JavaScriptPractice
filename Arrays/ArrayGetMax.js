//Write a function which returns the maximum value in an array of numbers

const numbers = [1, 2, 3, 4, 5, 10, 6];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  //   let currentMax = array[0];

  //   for (let number of array) {
  //     currentMax = currentMax < number ? number : currentMax;
  //   }

  //   return currentMax;

  return array.reduce(
    (currentMax, number) =>
      (currentMax = currentMax < number ? number : currentMax)
  );
}
