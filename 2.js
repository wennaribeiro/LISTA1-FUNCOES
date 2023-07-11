/*
Faça uma função que receba a data atual (dia, mês e ano em inteiro) e exiba-a na tela no formato textual por extenso. Exemplo: Data: 01/01/2000, Imprimir: 1 de janeiro de 2000.
*/

const entradaPrompt = require('prompt-sync')({ sigint: true })

let data_informada = entradaPrompt("Digite uma data: ")

let dia = data_informada.split('/')[0];
let mes = data_informada.split('/')[1];
let ano = data_informada.split('/')[2];
let resultadomes;
function mostrar_mes(mes) {
    switch (mes) {
        case '01': resultadomes = 'Janeiro'
            break;
        case '02': resultadomes = 'Fevereiro'
            break;
        case '03': resultadomes = 'Março'
            break;
        case '04': resultadomes = 'Abril'
            break;
        case '05': resultadomes = 'Maio'
            break;
        case '06': resultadomes = 'Junho'
            break;
        case '07': resultadomes = 'Julho'
            break;
        case '08': resultadomes = 'Agosto'
            break;
        case '09': resultadomes = 'Setembro'
            break;
        case '10': resultadomes = 'Outubro'
            break;
        case '11': resultadomes = 'Novembro'
        default: resultadomes = 'Dezembro'

    }
}
mostrar_mes(mes)
console.log(`Data: ${dia} de ${resultadomes} de ${ano}`)