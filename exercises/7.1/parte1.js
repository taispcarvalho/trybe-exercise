//Parte I

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// const testingScope = escopo => escopo === true ? `${'Não devo ser utilizada fora do meu escopo (if)'} ${' ótimo, fui utilizada no escopo !'}` : 'Não devo ser utilizada fora meu escopo (else)';

// console.log(testingScope(true));

//Parte II

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const inOder = (a, b) => a - b;
const rightOrder = oddsAndEvens.sort(inOder);

console.log(`Os números ${rightOrder} se encontram ordenados de forma crescente!`);


