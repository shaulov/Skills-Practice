function removeDupes1(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (string.lastIndexOf(char) !== i) {
      string = string.substring(0, i) + string.substring(i + 1);
    }
  }
  return string;
}

function removeDupes(string) {
  return [...new Set(string)].join('');
}

console.log(removeDupes('abcd'));
console.log(removeDupes('123423'));
console.log(removeDupes('abcABC'));
console.log(removeDupes('abcabc'));
console.log(removeDupes(''));