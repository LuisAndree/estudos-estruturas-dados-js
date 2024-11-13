// Função para a União de dois conjuntos
function uniao(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA, ...conjuntoB]);
  }
  
  // Função para a Interseção de dois conjuntos
  function intersecao(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(item => conjuntoB.has(item)));
  }
  
  // Função para a Diferença de dois conjuntos (elementos em A que não estão em B)
  function diferenca(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(item => !conjuntoB.has(item)));
  }
  
  // Criando dois conjuntos
  const conjuntoA = new Set([1, 2, 3, 4, 5]);
  const conjuntoB = new Set([4, 5, 6, 7, 8]);
  
  // Operação de União
  const uniaoAB = uniao(conjuntoA, conjuntoB);
  console.log("União de A e B:", [...uniaoAB]); // Saída: [1, 2, 3, 4, 5, 6, 7, 8]
  
  // Operação de Interseção
  const intersecaoAB = intersecao(conjuntoA, conjuntoB);
  console.log("Interseção de A e B:", [...intersecaoAB]); // Saída: [4, 5]
  
  // Operação de Diferença (A - B)
  const diferencaAB = diferenca(conjuntoA, conjuntoB);
  console.log("Diferença de A e B:", [...diferencaAB]); // Saída: [1, 2, 3]
  
  // Operação de Diferença (B - A)
  const diferencaBA = diferenca(conjuntoB, conjuntoA);
  console.log("Diferença de B e A:", [...diferencaBA]); // Saída: [6, 7, 8]
  