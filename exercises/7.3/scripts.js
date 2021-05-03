const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), 9, 'Quatro mais cinco é igual a nove');
assert.strictEqual(sum(0, 0), 0, 'Zero mais zero é igual a zero');
assert.throws(() => {
  sum(4,'5');
});
assert.throws(() => {
  sum(4,'5');
}, /^Error: parameters must be numbers$/);