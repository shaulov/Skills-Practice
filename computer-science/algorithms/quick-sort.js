const array = [20, 85, 94, 38, 57, 59, 79, 42, 17, 57, 10, 43, 5, 69, 71, 88];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) return array;

  const midIndex = Math.floor(array.length / 2);
  const mid = array.at(midIndex);
  const lessItems = [];
  const greaterItems = [];
  for (let i = 0; i < array.length; i++) {
    if (i === midIndex) continue;
    if (array[i] <= mid) lessItems.push(array[i]);
    if (array[i] > mid) greaterItems.push(array[i]);
    count++;
  }

  return [...quickSort(lessItems), mid, ...quickSort(greaterItems)];
}

console.log(quickSort(array));
console.log(count);