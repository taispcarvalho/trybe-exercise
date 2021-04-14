let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  } 

for (let person in names) {
    console.log('Olá ' + names[person]);
}

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

for (let value in carro) {
    console.log(value, carro[value]);
}