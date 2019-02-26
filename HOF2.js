const defaultErrorCatcher = ({ error, }) => console.error(error.message);

const withTryCatch = (fn) => (catchFn = defaultErrorCatcher) => (...args) => {
  try {
    return fn(...args);
  } catch (e) {
    // catchFn(e, args) ?
    // catchFn(args, e) ?
    // catchFn(e, ...args) ?
    return catchFn({ error: e, fn, catchFn, args, });  // best to follow named prop, monadic APIS
  }
};

const randomErrorFunction = () => {
  // imagine this is a function that relies on an outside resource, i.e. network or external API that could throw
  // random number between 0 && 1000 (give or take)
  const randomNumber = Math.floor(Math.random() * 1000);

  if (randomNumber < 500) throw new Error('sorry, too low');

  return `Happy Developer #${randomNumber} :-)`;
};

// ❌ NOTE: THIS IS NOTE SAFE TO RUN, it could error!!!
// note: remove this or it doesn't work
// const result = randomErrorFunction();

// using default error catcher
const safeErrorFunction = withTryCatch(randomErrorFunction)();
console.warn(safeErrorFunction());

const retryCatcher = ({
  fn,
  catchFn,
  error,
  args,
  retries = 0,
  maxRetries = 2,
}) => {
  if (retries >= maxRetries) return error.message;
  try {
    return fn(...args);
  }
  catch (error) {
    return catchFn({ catchFn, fn, args, maxRetries, error, retries: retries + 1, });
  }
};

const withRetryCatch = (fn) => withTryCatch(fn)(retryCatcher);

const randomWithRetry = withRetryCatch(randomErrorFunction);

console.warn(randomWithRetry());
