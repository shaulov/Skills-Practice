const array = [16, 24, 12, 3, 5, 1, 2, 8, 10, 23];

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return array[i];
  }
  return null;
}

console.log(linearSearch(array, 5));