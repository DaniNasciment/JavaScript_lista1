const prompt = require('prompt-sync')();

const diasString = prompt('Informe sua idade em dias ');

const dias = Number(diasString);

const anos= (dias/365);

console.log(`\n Sua idade em anos é: ${Math.floor(anos)}`);

const meses =(dias%365)/30;

console.log(`\n Sua idade em meses é: ${Math.floor(meses)}`);

const dias2 = (dias%365)%30;

console.log(`\n Sua idade em dias é: ${dias2}`);
