const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = array => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

