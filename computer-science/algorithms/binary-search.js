const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 203, 333, 4444, 425255, 989242];
let count = 0;

function binarySearch(array, item) {
  count++;
  const mid = Math.floor(array.length / 2);
  if (array[mid] === item) return mid;
  if (array[mid] < item) {
    return binarySearch(array.slice(mid + 1), item);
  }
  if (array[mid] > item) {
    return binarySearch(array.slice(0, mid), item);
  }
  return null
}

console.log(binarySearch(array, 7));

// without recursion
function binarySearch(array, item) {
  while (array.length > 0) {
    count++;
    const mid = Math.floor(array.length / 2);
    if (array[mid] === item) return mid;
    if (array[mid] < item) {
      array = array.slice(mid + 1);
    } else {
      array = array.slice(0, mid);
    }
  }
  return null;
}