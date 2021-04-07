// Exercicio 1
let a = 10;
let b = 2;
let c = 5;

console.log(soma = a + b);
console.log(subtracao = a - b);
console.log(multiplicacao = a * b);
console.log(divisao = a / b);
console.log(modulo = a % b);

// Exercicio 2
if (a > b) {
  console.log(a);
} else {
  console.log(b);    
};

// Exercicio 3
if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  };

// Exercicio 4
if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero')
}

// Exercicio 5
let angulo1 = 90;
let angulo2 = 60;
let angulo3 = 30;
let somaDosAngulos = angulo1 + angulo2 + angulo3;
let angulosValidos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosValidos) {
if (somaDosAngulos == 180) {
    console.log(true);
} else {
    console.log(false);
};
} else {
    console.log("ERRO");
};

// Exercicio 6
let piece;
let newPiece = piece.toLowerCase();

if (newPiece = "king") {
    console.log("front");
} else if (newPiece = "queen") {
    console.log("all directions");
} else if (newPiece = "bishop") {
    console.log("diagonals");
} else if (newPiece = "horse") {
    console.log("L shape");
} else if (newPiece = "tower") {
    console.log("front or side");
} else if (newPiece = "pawn") {
    console.log("only one front");
} else {
    console.log("ERRO");
};

// Exercicio 7
let nota;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else if (nota < 0 && nota > 100) {
    console.log("ERRO");
}

// Exercicio 8
let number1;
let number2;
let number3;

let even = false;

if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)) {
  even = true;
};
  console.log(even);

// Exercicio 9 
let number1;
let number2;
let number3;

let odd = false;

if ((number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0)) {
  odd = true;
};
  console.log(odd);

// Exercicio 10
let valorCusto;
let valorDeVenda;

let valorCustoTotal = (1.2 * valorCusto);
let lucro = valorDeVenda - valorCustoTotal;

if (valorDeVenda < 0 || valorCusto < 0) {
    console.log("ERRO");
} else {
    console.log(lucro)
}

// Exercicio 11
let salarioBruto;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    inss = (0.8 * salarioBruto);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = (0.9 * salarioBruto);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = (0.11 * salarioBruto);
} else {
    inss = (570.88);
}

let salarioInssDescontado = (salarioBruto - inss);

if (salarioInssDescontado > 0 && salarioInssDescontado <= 1903.08) {
    ir = (0);
} else if (salarioInssDescontado >= 1903.99 && salarioInssDescontado <= 2826.65) {
    ir = ((0.075 * salarioInssDescontado) - 142.80);
}  else if (salarioInssDescontado >= 2826.66 && salarioInssDescontado <= 3751.05) {
    ir = ((0.15 * salarioInssDescontado) - 354.80);
} else if (salarioInssDescontado >= 3751.06 && salarioInssDescontado <= 4664.68) {
    ir = ((0.225 * salarioInssDescontado) - 636.13);
} else {
    ir = ((0.275 * salarioInssDescontado) - 869.36);
}

let salarioLiquido = (salarioInssDescontado - ir);
