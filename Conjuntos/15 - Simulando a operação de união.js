// Função para simular a operação de união entre dois conjuntos
function uniaoSimulada(conjuntoA, conjuntoB) {
    const resultado = new Set(conjuntoA); // Começamos com todos os elementos de conjuntoA
  
    for (let item of conjuntoB) {
      if (!resultado.has(item)) { // Verifica se o elemento de conjuntoB já está no resultado
        resultado.add(item); // Adiciona o elemento apenas se ele ainda não estiver presente
      }
    }
  
    return resultado;
  }
  
  // Criando dois conjuntos de exemplo
  const conjuntoA = new Set([1, 2, 3, 4]);
  const conjuntoB = new Set([3, 4, 5, 6]);
  
  // Realizando a operação de união simulada
  const uniaoAB = uniaoSimulada(conjuntoA, conjuntoB);
  
  // Exibindo o resultado
  console.log("União simulada de A e B:", [...uniaoAB]); // Saída: [1, 2, 3, 4, 5, 6]
  