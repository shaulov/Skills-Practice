function recursionFibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}

function iterationFibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  let prev = 1;
  let res = 1;
  for (let i = 0; i < n-2; i++) {
    let temp = res;
    res += prev;
    prev = temp;
  }
  return res;
}

console.log(iterationFibonacci(0));
console.log(iterationFibonacci(2));
console.log(iterationFibonacci(8));
console.log(iterationFibonacci(10));
console.log(iterationFibonacci(-1));
console.log(iterationFibonacci(5));
console.log(iterationFibonacci(7));