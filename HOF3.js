const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const strigifiedArgs = JSON.stringify(args);
    return (strigifiedArgs in cache) ? cache[strigifiedArgs] : (cache[strigifiedArgs] = fn(...args));
  };
};

const fibb = (x) => {
  if ( x <= 1) return 1;
  return fibb(x - 2) + fibb(x - 1);
};
const memoizedFibb = memoize((x) => {
  if ( x <= 1) return 1;
  return memoizedFibb(x - 2) + memoizedFibb(x - 1);
});

const timerHOF = (func, tag = 'mytimer') => (...args) => {
  console.time(tag);
  const result = func(...args);
  console.timeEnd(tag);
  return result;
};

const timedFibb = timerHOF(fibb, 'standard');

const timedMemoizedFibb =  timerHOF(memoizedFibb, 'memoized');

console.warn(timedFibb(45));
console.warn(timedMemoizedFibb(45));
