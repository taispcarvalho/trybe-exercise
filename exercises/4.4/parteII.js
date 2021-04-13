// 1
function palindromo(palavra) {
    if (palavra.split('').reverse().join('') === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara'));

// 2 
function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indice] > numeros[indiceMaior]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 

// 3 
function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indice] < numeros[indiceMenor]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// 4
function biggestName(names) {
    let biggerName = names[0];
    for (let indice in names) {
      if (names[indice].length > biggerName.length) {
        biggerName = names[indice];
      }
    }
    return biggerName;  
  }
  
  console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5
function repeatNumber(numbers) {
    let repetition = 0;
    let repetitionNumber = 0;
    let indexRepetitionNumber = 0;
    for (let index in numbers) {
      let checkNumber = numbers[index];
      for (let index2 in numbers) {
        if (checkNumber === numbers[index2]) {
          repetitionNumber += 1;
        }
      }
      if (repetitionNumber > repetition) {
        repetition = repetitionNumber;
        indexRepetitionNumber = index;
      }
      repetitionNumber = 0;
    }
    return numbers[indexRepetitionNumber];
  }
  
  console.log(repeatNumber([2, 3, 2, 5, 8, 2, 3]));

  // 6
  function soma(n) {
    let soma = 0;
    for(let index = 0; index <= n; index++) {
     soma = soma + index;
    }
    return soma;
  }
  
  console.log(soma(5));

  // 7
  function sameEnd(word, ending) {
    if ((word.substr(-ending.length)) === ending) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(sameEnd('trybe', 'be'));