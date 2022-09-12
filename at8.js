const prompt = require('prompt-sync')();

const custoFString = prompt('\n Informe o custo de fábrica:');

const custoF = Number(custoFString);

const pDistribuidor=custoF*0.28;

const imp=custoF*0.45;

const custoC=custoF+pDistribuidor+imp;

console.log(`\n O custo ao consumidor é em reais: ${custoC}`);
