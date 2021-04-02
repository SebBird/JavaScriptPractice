//Pass two values, and create an array from this given range

const numbers = arrayFromRange(-10, 10);

console.log(numbers);

function arrayFromRange(min, max) {
  let rangeArray = [];

  for (min; min <= max; min++) rangeArray.push(min);

  return rangeArray;
}
