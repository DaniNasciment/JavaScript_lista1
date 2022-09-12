const prompt = require('prompt-sync')();

const aString = prompt('\n Informe o valor de a :');

const a = Number(aString);


const bString = prompt('\n Informe o valor de b :');

const b = Number(bString);


const cString = prompt('\n Informe o valor de c :');

const c = Number(cString);


const dString = prompt('\n Informe o valor de d :');

const d = Number(dString);

const eString = prompt('\n Informe o valor de e :');

const e = Number(eString);

const fString = prompt('\n Informe o valor de f :');

const f = Number(fString);

const x=((c * e) - (b * f)) / ((a * e) - (b * d));

const y=((a * f) - (c * d)) / ((a * e) - (b * d));

console.log(`\n O valor de x e y é, respectivamente: ${x} , ${y}`);
