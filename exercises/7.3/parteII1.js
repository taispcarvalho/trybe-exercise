const assert = require('assert');
// escreva a função addOne aqui
const addOne = array => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 1);
  }
  return output;
};

const myArray = [31, 57, 12, 5]; //array referencia
const unchanged = [31, 57, 12, 5]; //valor nao mudado
const expected = [32, 58, 13, 6]; //valor esperado
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

