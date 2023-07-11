/*
Faça uma função que receba 3 números inteiros como parâmetro, representando horas, minutos e segundos, e os converta em segundos.
*/

const entradaPrompt = require('prompt-sync')({ sigint: true })

let hora = parseInt(entradaPrompt("Digite um inteiro representado em hora: "))
let minuto = parseInt(entradaPrompt("Digite um inteiro representado em minutos: "))
let segundo = parseInt(entradaPrompt("Digite um inteiro representado em minutos: "))
let hora_Segundo, minutoSegundo
function Converter_Segundo(hora, minuto) {
    hora_Segundo = hora * 3600
    minutoSegundo = minuto * 60
}
Converter_Segundo(hora, minuto)

console.log(`${hora}h convertido em segundos: ${hora_Segundo}`)
console.log(`${minuto}min convertido em segundos: ${minutoSegundo}`)
console.log(`${segundo} convertido em segundos: ${segundo}`)