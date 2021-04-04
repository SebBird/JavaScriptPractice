//Write a function that counts the occurrences of a given value within an array, using the reduce method if possible

const numbers = [1, 2, 3, 4, 1];

try {
  const count = countOccurrences(true, 1);

  console.log(count);
} catch (e) {
  alert(e);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Not an array");
  }

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
