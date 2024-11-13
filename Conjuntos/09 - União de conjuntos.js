// Função para a união de dois conjuntos
function uniao(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA, ...conjuntoB]);
  }
  
  // Criando dois conjuntos de exemplo
  const conjuntoA = new Set([1, 2, 3, 4]);
  const conjuntoB = new Set([3, 4, 5, 6]);
  
  // Realizando a operação de união
  const uniaoAB = uniao(conjuntoA, conjuntoB);
  
  // Exibindo o resultado da união
  console.log("União de A e B:", [...uniaoAB]); // Saída: [1, 2, 3, 4, 5, 6]
  