// Função para a interseção de dois conjuntos
function intersecao(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(item => conjuntoB.has(item)));
  }
  
  // Criando dois conjuntos de exemplo
  const conjuntoA = new Set([1, 2, 3, 4]);
  const conjuntoB = new Set([3, 4, 5, 6]);
  
  // Realizando a operação de interseção
  const intersecaoAB = intersecao(conjuntoA, conjuntoB);
  
  // Exibindo o resultado da interseção
  console.log("Interseção de A e B:", [...intersecaoAB]); // Saída: [3, 4]
  