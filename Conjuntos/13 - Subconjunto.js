// Função para verificar se conjuntoA é um subconjunto de conjuntoB
function isSubconjunto(conjuntoA, conjuntoB) {
    // Verifica se todos os elementos de conjuntoA estão em conjuntoB
    for (let item of conjuntoA) {
      if (!conjuntoB.has(item)) {
        return false; // Retorna false se algum elemento de conjuntoA não estiver em conjuntoB
      }
    }
    return true; // Retorna true se todos os elementos de conjuntoA estão em conjuntoB
  }
  
  // Criando dois conjuntos de exemplo
  const conjuntoA = new Set([1, 2]);
  const conjuntoB = new Set([1, 2, 3, 4]);
  
  // Verificando se conjuntoA é subconjunto de conjuntoB
  const resultado = isSubconjunto(conjuntoA, conjuntoB);
  console.log("conjuntoA é subconjunto de conjuntoB?", resultado); // Saída: true
  
  // Verificando um caso em que não é subconjunto
  const conjuntoC = new Set([1, 5]);
  const resultado2 = isSubconjunto(conjuntoC, conjuntoB);
  console.log("conjuntoC é subconjunto de conjuntoB?", resultado2); // Saída: false
  