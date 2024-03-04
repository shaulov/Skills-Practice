function cashFunction(fn) {
  const cash = new Map();

  return function (arguments) {
    if (cash.get(arguments)) {
      console.log('value from cash: ', cash.get(arguments));
      return cash.get(arguments);
    }
    const result = fn(arguments);
    console.log('calculated value: ', result);
    cash.set(arguments, result);
    return result;
  }
}

function factorial(n) {
  let result = 1;
  while (n !== 1) {
    result *= n;
    n--;
  }
  return result;
}

const cashedFunc = cashFunction(factorial);

cashedFunc(5);
cashedFunc(4);
cashedFunc(3);
cashedFunc(4);
cashedFunc(5);
cashedFunc(1);