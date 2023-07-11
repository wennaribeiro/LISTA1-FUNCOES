/*
Faça um programa que converta da notação de 24 horas para a notação de 12 horas. 
Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. 
Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. 
Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. 
Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. 
Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.
*/
const entradaPrompt = require('prompt-sync')({ sigint: true })

function converterHora(horaInformada, minuto) {
    let periodo = 'AM';
    let hora = horaInformada;
    if (horaInformada >= 12) {
        periodo = 'PM';
        if (horaInformada > 12) {
            hora = horaInformada - 12;
        }
    }
    if (horaInformada == 0) {
        hora = 12
    }
    imprimirHora(hora, periodo, minuto)

}

function imprimirHora(hora, periodo, minuto) {
    console.log(`${hora}:${minuto} ${periodo}`);
}

while (true) {
    let horaInformada = parseInt(entradaPrompt('Digite a hora (0-23):'));
    let minuto = parseInt(entradaPrompt('Digite o minuto (0-59):'));
    if (horaInformada >= 0 && horaInformada <= 23 && minuto >= 0 && minuto <= 59) {
        converterHora(horaInformada, minuto)
    }else{
        console.log('Valores inválidos. Tente novamente.');
    }

    i = entradaPrompt("Deseja converter outra hora? (S/N): ")
    if (i.toUpperCase() == "N") {
        break
    }
}

