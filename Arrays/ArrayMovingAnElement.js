//Write a function that moves an element in an array to a new position based on a given offset

const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, -1);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }

  let moving = array[index];
  array.splice(index, 1);
  array.splice(position, 0, moving);
  return array;
}
