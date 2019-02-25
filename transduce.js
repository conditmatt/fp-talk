// f(g(x)) style functional composition
const compose = (...fns) => (args) => fns.reduceRight((arg, fn) => fn(arg), args);

// f(x) --------> g(x) ---------> h(x)
const pipe = (...fns) => (args) => fns.reduce((arg, fn) => fn(arg), args);


const doubleNumber = (x) => 2 * x;

const subtract1 = (x) => x - 1;

const twoXMinusOne = compose(subtract1, doubleNumber);
const otherTwoXMinusOne = pipe(doubleNumber, subtract1);

console.warn(twoXMinusOne(5), twoXMinusOne(10000));
console.warn(otherTwoXMinusOne(5), otherTwoXMinusOne(10000));

const timerHOF = (func, tag = 'mytimer') => (...args) => {
  console.time(tag);
  const result = func(...args);
  console.timeEnd(tag);
  return result;
};

const bigArray = [];
for (let i = 0; i < 10000000; i++) {
  bigArray[i] = i;
}

const { compose: rCompose, map, filter, into, } = require('ramda');


const tinyArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];

const fibb = (x) => {
  if ( x <= 1) return 1;
  return fibb(x - 2) + fibb(x - 1);
};

const logger = (x) => { console.log(x); return x; };
const halver = (x) => x / 2;
const isInt = (x) => Number.isInteger(x);
const lessThan10 = (x) => x < 30;

const slowFilteredArray = timerHOF(() => bigArray.map(halver)
                                                 .filter(lessThan10)
                                                 .map(logger)
                                                 .filter(isInt)
                                                 .map(logger)
                                                 .map(fibb),
'es6Filter'
)();


const transducer = rCompose(
  map(halver),
  filter(lessThan10),
  map(logger),
  filter(isInt),
  map(logger),
  map(fibb)
);

const transducedArray = timerHOF(() => into([], transducer, bigArray), 'transucedFilter')();
// console.error(transducedArray);
