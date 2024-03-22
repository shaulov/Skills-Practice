function merge(left, right) {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const half = Math.floor(array.length / 2);
  const left = array.splice(0, half);

  return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort([1, 2, 1, 22, 3, 1]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([5, 4, 3, 2, 1]));
console.log(mergeSort([5, 2, 3, 4, 1]));