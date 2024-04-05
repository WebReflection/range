// a Python like range function
// iterable via for / of out of the box
function* range(start, ...rest) {
  let stop = start, steps = 1;
  if (rest.length) [stop, steps] = [...rest, 1];
  else start = 0;
  while (start < stop) {
    yield start;
    start += steps;
  }
}

// consume the generator and returns `true` if value is found
const has = (values, value) => {
  for (const current of values) {
    if (current === value)
      return true;
  }
  return false;
};

// base (closed) generator used as proxy reference
const base = range(0);
has(base);

/**
 * Yields all numbers from `start`, included, to `stop`, excluded,
 * optionally incrementing via `step`.
 * @param {number} start if `stop` is not present, becomes `0` and `stop` will be the `start` limit.
 * @param {number} [stop=start] if present, it signals the limit (excluded) of the range.
 * @param {number} [step=1] if present, it's used to increment the range from `start` (included) to `stop` (excluded).
 * @return {Generator<number>}
 */
export default (...args) => {
  const values = () => range(...args);
  return new Proxy(base, {
    // for (const value of range(0, ...rest));
    get: (_, iterator) => () => values()[iterator](),
    // if (value in range(0, ...rest));
    has: (_, value) => has(values(), parseFloat(value)),
  });
};
