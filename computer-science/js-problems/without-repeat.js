// O(n*n)
// function withoutRepeat(array) {
//   const res = [];
//   for (let i = 0; i < array.length; i++) {
//     let count = 0;
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] === array[j]) count++;
//     }
//     if (count === 1) res.push(array[i]);
//   }
//   return res;
// }

function withoutRepeat(array) {
  const res = {};
  for (let value of array) {
    res[value] = res[value] ? res[value] + 1 : 1;
  }
  return Object.keys(res).filter(item => res[item] === 1);
}

console.log(withoutRepeat([1, 2, 3, 1, 2, 3, 4, 5]));