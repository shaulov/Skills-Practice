function allAnagrams1(array) {
  const dict = array?.[0];

  for (let i = 1; i < array.length; i++) {
    for (let char of array[i]) {
      if (!dict.includes(char)) return false;
    }
  }

  return true;
}

function allAnagrams(array) {
  const sorted = array.map(item => item.split('').sort().join(''));

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) return false;
  }

  return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd']));
console.log(allAnagrams(['abcd', 'bdXc', 'cabd']));