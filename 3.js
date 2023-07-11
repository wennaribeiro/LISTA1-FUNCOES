/*
    3. Faça uma função e um programa de teste para o cálculo do volume de uma esfera. Sendo que o raio e passado por parâmetro

*/

const entradaPrompt = require('prompt-sync')({ sigint: true })

let raio = parseInt(entradaPrompt("Informe o raio: "))
let resultado

function volume(raio) {
    let v = (4 / 3) * 3.14 * (raio ** 3)
    resultado = v.toFixed(2)
}
volume(raio)

console.log(`Volume da esfera: ${resultado}`)