Function.prototype.myBind = function(context, ...args) {
  return (...rest) => {
    return this.call(context, ...args.concat(rest));
  }
}

function log(...props) {
  console.log(this.name, this.age, ...props);
}

const obj = { name: 'Name', age: 21 };

const bound = log.myBind(obj, 42);
bound();

function logPerson(number) {
  console.log(`Person ${this.name}, ${this.age}, ${this.job}, number: ${number}`);
}

const person1 = { name: 'MM', age: '21', job: 'FF' };
const person2 = { name: 'SS', age: '22', job: 'WW' };

function bindFn(context, callback, ...rest) {
  return (...args) => {
    callback.call(context, ...rest, ...args);
  }
}

const bindPerson1 = bindFn(person1, logPerson);
const bindPerson2 = bindFn(person2, logPerson);

console.log(bindPerson1(11));
console.log(bindPerson2(12));

function log(...props) {
  console.log(this.name, this.age, ...props);
}

function cleanBind(context, callback, ...rest) {
  return function(...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = callback;

    const result = context[uniqId](...rest.concat(args));

    delete context[uniqId];

    return result;
  }
}

const cleanBindPerson1 = cleanBind(person1, log);
const cleanBindPerson2 = cleanBind(person2, log);

console.log(cleanBindPerson1(11));
console.log(cleanBindPerson2(12));