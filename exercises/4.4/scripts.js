// Exercicio 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem vinda" + ", " + info.personagem)

// Exercicio 2
info.recorrente = "Sim"
console.log(info)

// Exercicio 3
for (let keys in info) {
  console.log(keys)
}

// Exercicio 4
for (let value in info) {
  console.log(info[value])
}

// Exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas', 
  recorrente: 'Sim',  
}
for (let properties in info) {
  if (info[properties] === info.recorrente && info[properties] === "Sim" && info2[properties] === "Sim") {
        console.log("Ambos Recorrentes");
      } else {
        console.log(info[properties] + " e " + info2[properties]);
      }
    }

    