function highestFrequency(array) {
  const dictionary = {};
  let max = 0;
  let res = '';

  for (let item of array) {
    if (dictionary[item]) {
      dictionary[item] += 1;
    } else {
      dictionary[item] = 1;
    }

    if (dictionary[item] > max) {
      max = dictionary[item];
      res = item;
    }
  }
  return res;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e']));
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc']));
console.log(highestFrequency(['abc', 'def']));
console.log(highestFrequency(['abc', 'def', 'e', 'a']));
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi']));