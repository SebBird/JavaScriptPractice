//Write a function that counts the occurrences of a given value within an array, using the reduce method if possible

const numbers = [1, 2, 3, 4, 1];
const count = countOccurrences(numbers, 1);

console.log(count);

// function countOccurrences(array, searchElement) {
//   let occurrences = 0;

//   for (let number of array) if (number === searchElement) occurrences++;
//   return occurrences;
// }

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
