// Função para unir dois conjuntos
function uniao(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA, ...conjuntoB]);
  }
  
  // Função para a interseção de dois conjuntos
  function intersecao(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(item => conjuntoB.has(item)));
  }
  
  // Função para a diferença entre dois conjuntos
  function diferenca(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(item => !conjuntoB.has(item)));
  }
  
  // Função para verificar se um conjunto é subconjunto de outro
  function isSubconjunto(conjuntoA, conjuntoB) {
    for (let item of conjuntoA) {
      if (!conjuntoB.has(item)) {
        return false;
      }
    }
    return true;
  }
  
  // Exemplo de uso com a classe Set
  
  // Criando conjuntos de exemplo
  const conjuntoA = new Set([1, 2, 3, 4]);
  const conjuntoB = new Set([3, 4, 5, 6]);
  
  // União
  const uniaoAB = uniao(conjuntoA, conjuntoB);
  console.log("União de A e B:", [...uniaoAB]); // Saída: [1, 2, 3, 4, 5, 6]
  
  // Interseção
  const intersecaoAB = intersecao(conjuntoA, conjuntoB);
  console.log("Interseção de A e B:", [...intersecaoAB]); // Saída: [3, 4]
  
  // Diferença (A - B)
  const diferencaAB = diferenca(conjuntoA, conjuntoB);
  console.log("Diferença de A e B (A - B):", [...diferencaAB]); // Saída: [1, 2]
  
  // Diferença (B - A)
  const diferencaBA = diferenca(conjuntoB, conjuntoA);
  console.log("Diferença de B e A (B - A):", [...diferencaBA]); // Saída: [5, 6]
  
  // Verificando subconjunto
  const conjuntoC = new Set([1, 2]);
  const resultadoSubconjunto = isSubconjunto(conjuntoC, conjuntoA);
  console.log("C é subconjunto de A?", resultadoSubconjunto); // Saída: true
  