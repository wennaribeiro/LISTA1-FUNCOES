/*
Crie uma função que recebe como parâmetro um número inteiro e devolve o seu dobro.
*/
const entradaPrompt = require('prompt-sync')({ sigint: true })

let numero = parseInt(entradaPrompt(" Digite um número: "))


function dobroNumero(numero) {
    let dobro = numero * 2
    console.log(dobro)
}

dobroNumero(numero)