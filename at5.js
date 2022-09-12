const prompt = require('prompt-sync')();

const nota1String = prompt('\nInforme a primeira nota:');

const nota1 = Number(nota1String);

const nota2String = prompt('\nInforme a segunda nota:');

const nota2 = Number(nota2String);

const nota3String = prompt('\nInforme a terceira nota:');

const nota3 = Number(nota3String);

const media=(((nota1*2)+(nota2*3)+(nota3*5))/(nota1+nota2+nota3));

console.log(`\n Sua média ponderada é: ${media}`);
