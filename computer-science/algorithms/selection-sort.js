const array = [20, 85, 94, 38, 57, 59, 79, 42, 17, 10, 43, 5, 69, 71, 88];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    count++;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      count++;
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

console.log(selectionSort(array));
console.log(count);