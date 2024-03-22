function isUnique(string) {
  const dictionary = {};
  for (let symbol of string) {
    if (dictionary[symbol]) {
      return false;
    } 
    dictionary[symbol] = 1;
  }
  return true;
}

function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (string.lastIndexOf(char) !== i) return false;
  }
  return true;
}

console.log(isUnique('abcdefg')); //true
console.log(isUnique('1234567')); //true
console.log(isUnique('abcABC')); //true
console.log(isUnique('abcaefg')); //false
console.log(isUnique('')); //true