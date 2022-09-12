const prompt = require('prompt-sync')();

const x1String = prompt('\n Informe o valor de x1');

const x1 = Number(x1String);

const y1String = prompt('\n Informe o valor de y1');

const y1 = Number(y1String);

const x2String = prompt('\n Informe o valor de x2');

const x2 = Number(x2String);

const y2String = prompt('\n Informe o valor de y2');

const y2 = Number(y2String);

const d = (Math.pow(x2-x1)+Math.pow(y2-y1));

const d2 = Math. sqrt(d);

console.log(`\n A distancia entre eles é:${d2}`);


