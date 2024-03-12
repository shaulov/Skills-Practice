function palindrome(word) {
  word = word.replace(/[^a-zа-яё]/gi, '').toLowerCase();
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word.at(-1 - i)) return false;
  }
  return true;
}

function palindrome2(word) {
  word = word.toLowerCase();
  let i = 0;
  let j = word.length - 1;
  while (i < j) {
    if (word[i] === ' ') i++;
    if (word[j] === ' ') j--;
    if (word[i] !== word[j]) return false;
    i++;
    j--;
  }
  return true;
}

function palindrome2(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

console.log(palindrome('aabb'));
console.log(palindrome('AaBb'));
console.log(palindrome('abba'));
console.log(palindrome('aBba'));
console.log(palindrome('abbba'));
console.log(palindrome('abAaa'));
console.log(palindrome('А роза упала на лапу Азора'));