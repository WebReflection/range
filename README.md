# @webreflection/range

[![build status](https://github.com/WebReflection/range/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/range/actions) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/range/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/range?branch=main)

A Pythonic `range(start[, stop[, steps = 1]])` function that works in both `for / of` and with `value in range(...)` operations.

```js
import range from '@webreflection/range';

for (const i of range(0, 3))
  console.log(i); // 0, 1, 2

if (1 in range(0, 2))
  console.log('1 is in range [0, 1, 2]');
```

## API

  * `range(3)` is equivalent of `range(0, 3)` and yields `[0, 1, 2]`
  * `range(3, 5)` will yield `[3, 4]`
  * `range(0, 5, 2)` will yield `[0, 2, 4]`;
  * `1 in range(0, 2)` will be `true` but `2 in range(0, 2)` will be false
  * `[...range(0, 3)]` is valid as `for (const i of range(0, 3));`

That's it.
