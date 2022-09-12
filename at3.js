const prompt = require('prompt-sync')();

const segundosString = prompt('Informe o tempo de duração de um evento em uma fábrica expressa em segundos :');

const segundos = Number(segundosString);

const horas = (segundos/3600);

console.log(`\n A duração do evento em horas é: ${horas}`);

const minutos = (segundos%3600)/60;

console.log(`\n A duração do evento em minutos é: ${minutos}`);

const segundos2 = (segundos%3600)%60;

console.log(`\n A duração do evento em segundos é: ${segundos2}`);
