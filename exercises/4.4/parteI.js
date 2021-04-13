// 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);

// 2
info['recorrente'] = 'Sim';

console.log(info);

// 3
for (let keys in info) {
    console.log(keys);
}

// 4
for (let value in info) {
    console.log(info[value]);
}

// 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (let keys in info) {
    if ( info[keys] === info.recorrente &&
        info[keys] === 'Sim' &&
        info2[keys] === 'Sim') {
            console.log('Ambos recorrentes');
        } else {
            console.log(info[keys] + ' e ' + info2[keys]);
        }
} 