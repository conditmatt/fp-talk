const add = (a, b) => a + b;

const curriedAdd = (a) => (b) => a + b;

const otherCurriedAdd = function(a) {
  // the inner function keeps the outer scope,
  // a term known as closure 🙊
  return function(b) {
    return a + b;
  };
};
const curry = (fn) => {
  const currryN = (n, fn) => (...args) => {
    return args.length >= fn.length
      ? fn(...args)
      : currryN(n - args.length, (...innerArgs) => fn(...args, ...innerArgs));
  };
  return currryN(fn.length, fn);
};

const mycurry = curry(add);
console.warn(mycurry(2)(3));
console.warn(mycurry(2, 3));

const subtract = (a, b) => a - b;
const curriedSubtract = curry(subtract);

const subtract2 = curriedSubtract()(2); // ?????? can't do this

const reversedSubtract = (b) => (a) => subtract(a, b);

const actualSubtract2 = reversedSubtract(2);

console.warn(actualSubtract2(10));
