const timerHOF = (func) => (...args) => {
  console.time('mytimer');
  const result = func(...args);
  console.timeEnd('mytimer');
  return result;
}

const expensiveFunction = (iterations) => {
  let c = 1;
  for (let i = 0; i < iterations; i++) {
    c = c + i * 2;
  }
  return c;
}

const timedExpensiveFunction = timerHOF(expensiveFunction);

timedExpensiveFunction(1000);
timedExpensiveFunction(500000000);
