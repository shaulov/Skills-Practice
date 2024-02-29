const array = [20, 85, 94, 38, 57, 59, 79, 42, 17, 10, 43, 5, 69, 71, 88];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count++;
    }
  }
  return array;
}

console.log(bubbleSort(array));
console.log(count);