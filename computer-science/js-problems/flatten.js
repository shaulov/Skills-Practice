function flatten(array) {
  const result = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [3, 5, 6, 1], 1, 2]));
console.log(flatten([1, 2, 3, [3, 5], [1], 2, [1, [2, 3]]]));