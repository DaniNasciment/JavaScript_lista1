const prompt = require('prompt-sync')()

const aString = prompt('Informe o primeiro numero inteiro e positivo:')

const a = Number(aString)

const bString = prompt('Informe o segundo numero inteiro e positivo:')

const b = Number(bString)

const cString = prompt('Informe o terceiro numero inteiro e positivo:')

const c = Number(cString)

const r= Math.pow((a+b))

const s= Math.pow((b+c))

const d=((r+s)/2)

console.log(`\n O valor de d é: ${d}}`)