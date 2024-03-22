function isStringRotated1(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let rotate = str1.substring(i) + str1.substring(0, i);

    if (rotate === str2) return true;
  }
  
  return false;
}

function isStringRotated(str1, str2) {
  if (str1.length !== str2.length) return false;

  let newStr = str1 + str1;

  return newStr.includes(str2);
}

console.log(isStringRotated('javascript', 'scriptjava')); //true
console.log(isStringRotated('javascript', 'iptjavascr')); //true
console.log(isStringRotated('javascript', 'java')); //false