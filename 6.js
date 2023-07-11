/*
A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.
*/
function simulateDiceRolls(numRolls) {
    const frequencies = [0, 0, 0, 0, 0, 0]; 
  
    for (let i = 0; i < numRolls; i++) {
      const roll = Math.floor(Math.random() * 6) + 1; 
      frequencies[roll - 1]++;
    }
  
    return frequencies;
  }
  
  const numRolls = 20;
  const frequencies = simulateDiceRolls(numRolls);
  
  console.log(`Frequências após ${numRolls} lançamentos:`);
  for (let i = 0; i < frequencies.length; i++) {
    console.log(`Número ${i + 1}: ${frequencies[i]} (${(frequencies[i] / numRolls) * 100}%)`);
  }