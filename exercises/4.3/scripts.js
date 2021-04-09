// Exercicio 1

let n = 5;
let symbol = "*";
let input = "";

for (let i = 0; i < n; i += 1) {
    input = input + symbol;
}
for (let i = 0; i < n; i += 1) {
    console.log(input)
}
input = "";

// Exercicio 2
for (let i = 0; i <= n; i += 1) {
    console.log(input)
    input = input + symbol;
}

// Exercicio 3
let inputPosition = n;

for (let i = 0; i <= n; i += 1) {
    for (let column = 0; column < n; column += 1) {
        if (column < inputPosition) {
            input = input + " ";
        } else {
            input = input + symbol;
        }
    }
    console.log(input)
    input = "";
    inputPosition -= 1;
}

// Exercicio 4
let midSpace = (n + 1) / 2;
let spaceLeft = midSpace; 
let spaceRight = midSpace;

for (let i = 0; i <= midSpace; i += 1) { 
    for (let column = 0; column <= n; column += 1) { 
        if (column > spaceLeft && column < spaceRight) {
            input = input + symbol;
        } else {
            input = input + " ";
        }
    }
    console.log(input)
    input = "";
    spaceRight += 1;
    spaceLeft -= 1;
}