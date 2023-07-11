/*
    5. Crie um programa que receba três valores (obrigatoriamente maiores que zero), representando as medidas dos três lados de um triangulo. Elabore funções para:
        a. Determinar se eles lados formam um triangulo, sabendo que:
            i. O comprimento de cada lado de um triangulo é menor do que a soma dos outros dois lados.
        b. Determinar e mostrar o tipo de triangulo, caso as medidas formem um triangulo. Sendo que:
            i. Chama-se equilátero o triangulo que tem três lados iguais.
            ii. Denominam-se isósceles o triangulo que tem o comprimento de dois lados iguais.
            iii. Recebe o nome de escaleno o triangulo que tem os três lados diferentes.
*/

const entradaPrompt = require('prompt-sync')({ sigint: true })

let l1 = parseInt(entradaPrompt("Digite o primeiro lado do triângulo: "))
let l2 = parseInt(entradaPrompt("Digite o segundo lado do triângulo: "))
let l3 = parseInt(entradaPrompt("Digite o terceiro lado do triângulo: "))
let resultadoTriangulo, resultadoTipoTriangulo
function tipoTriangulo(l1, l2, l3) {
    if (l1 == l2 && l1 == l3) {
        resultadoTipoTriangulo = "Tem três lados iguais: Triângulo equilátero!"
    } else {
        if (l1 != l2 && l1 != l3 && l2 != l3) {
            resultadoTipoTriangulo = "Os três lados diferentes: Triângulo escaleno"
        } else {
            resultadoTipoTriangulo = "Tem o comprimento de dois lados iguais: Triângulo isóseles!"
        }
    }
}

function triangulo(l1, l1, l3) {
    if (l1 < l2 + l3 & l2 < l1 + l3 & l3 < l1 + l2) {
        resultadoTriangulo = "Os lados forma um triângulo!"
    } else {
        resultadoTriangulo = "Os lados não formam!"
    }
}
tipoTriangulo(l1, l2, l3)
triangulo(l1, l2, l3)

console.log(`${resultadoTriangulo}`)
console.log(`${resultadoTipoTriangulo}`)
