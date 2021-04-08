let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Exercicio 2
let somaNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}
console.log(somaNumbers)

// Exercicio 3
for (let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}

let mediaNumbers = (somaNumbers / numbers.length);
console.log(mediaNumbers);

// Exercicio 4
for (let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}

if (mediaNumbers > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// Exercicio 5
let biggestNumber = Math.max(...numbers);
console.log(biggestNumber)

// Exercicio 6 
let oddNumber = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        oddNumber += 1; 
    }
}
if (oddNumber === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(oddNumber);
}

// Exercicio 7
let smallestNumber = 101;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}
console.log(smallestNumber)

// Exercicio 8
let newArray = [];

for (let index = 1; index <= 25; index += 1) {
        newArray.push(index);
}

console.log(newArray)

// Exercicio 9
let divisaoNewArray = [];

for (index = 0; index <= newArray.length; index += 1) {
    divisaoNewArray.push(index / 2);     
}
console.log(divisaoNewArray)

