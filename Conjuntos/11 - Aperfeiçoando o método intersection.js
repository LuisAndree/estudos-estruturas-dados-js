// Função otimizada para a interseção de dois conjuntos
function intersecao(conjuntoA, conjuntoB) {
    // Verifica qual conjunto é menor para reduzir o número de operações
    if (conjuntoA.size > conjuntoB.size) {
      [conjuntoA, conjuntoB] = [conjuntoB, conjuntoA];
    }
    
    // Filtra os elementos de `conjuntoA` que também estão em `conjuntoB`
    return new Set([...conjuntoA].filter(item => conjuntoB.has(item)));
  }
  
  // Criando dois conjuntos de exemplo
  const conjuntoA = new Set([1, 2, 3, 4]);
  const conjuntoB = new Set([3, 4, 5, 6, 7, 8]);
  
  // Realizando a operação de interseção
  const intersecaoAB = intersecao(conjuntoA, conjuntoB);
  
  // Exibindo o resultado da interseção
  console.log("Interseção de A e B:", [...intersecaoAB]); // Saída: [3, 4]
  