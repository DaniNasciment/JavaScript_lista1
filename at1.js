const prompt = require('prompt-sync')();

const anosString = prompt('Informe quantos anos você tem :')

const anos = Number(anosString)

const mesesString = prompt('Informe quantos meses você tem :')

const meses = Number(mesesString)

const diasString = prompt('Informe quantos dias você tem :')

const dias = Number(diasString)

const dias2 =((anos*365)+(meses*30)+dias)

console.log(`\n\n Sua idade expressa em dias é: ${dias2}}`)
