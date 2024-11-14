// Função para a diferença de dois conjuntos (elementos em conjuntoA que não estão em conjuntoB)
function diferenca(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(item => !conjuntoB.has(item)));
  }
  
  // Criando dois conjuntos de exemplo
  const conjuntoA = new Set([1, 2, 3, 4]);
  const conjuntoB = new Set([3, 4, 5, 6]);
  
  // Realizando a operação de diferença (A - B)
  const diferencaAB = diferenca(conjuntoA, conjuntoB);
  console.log("Diferença de A e B (A - B):", [...diferencaAB]); // Saída: [1, 2]
  
  // Realizando a operação de diferença (B - A)
  const diferencaBA = diferenca(conjuntoB, conjuntoA);
  console.log("Diferença de B e A (B - A):", [...diferencaBA]); // Saída: [5, 6]
  