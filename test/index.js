const range = require('../cjs');

const cached = range(0, 3);

console.assert([...cached].join(',') === '0,1,2');
console.assert([...cached].join(',') === '0,1,2');
console.assert(0 in cached);
console.assert(1 in cached);
console.assert(2 in cached);
console.assert(!(-1 in cached));
console.assert(!(3 in cached));
console.assert(!('a' in cached));

console.assert([...range(0, 3)].join(',') === '0,1,2');
console.assert([...range(0, 3)].join(',') === '0,1,2');
console.assert(0 in range(0, 3));
console.assert(1 in range(0, 3));
console.assert(2 in range(0, 3));
console.assert(!(3 in range(0, 3)));
