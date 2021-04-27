// Exercicio 1
const fatorialResult = n => {
  let fatorial = 1; 
  
  for (let i = 2; i <= n; i++) {
    fatorial = fatorial * i;
  }
  return fatorial;
}

  console.log(fatorialResult(5));

// Exercicio 2
const findBiggestWord = frase => {
  let divide = frase.split(' ');
  let biggestWord = '';

  for (let i in divide) {
    if (divide[i].length > biggestWord.length) {
      biggestWord = divide[i];
    }
  }
  return biggestWord;
}
  
console.log(findBiggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercicio 3 


