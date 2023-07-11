/*
Crie uma função em javascript que recebe um inteiro positivo e teste para saber se ele é primo ou não. 
Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.
*/

const entradaPrompt = require('prompt-sync')({ sigint: true })

function Primo(num) {
     for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
function NumerosPrimo(numero) {
  let primeNumbers = [];
  for (let num = 2; num <= numero; num++) {
    if (Primo(num)) {
      primeNumbers.push(num);
    }
  }
  return primeNumbers;
}

let numero= parseInt(entradaPrompt("Digite um número inteiro positivo: "));
let primeNumbers = NumerosPrimo(numero);

console.log(`Números primos de 1 até ${numero}: ${primeNumbers}`);
