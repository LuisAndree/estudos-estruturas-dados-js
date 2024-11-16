// Função para simular a diferença usando arrays
function diferencaSimuladaSemSet(arrayA, arrayB) {
    return arrayA.filter(item => !arrayB.includes(item)); // Filtra os elementos exclusivos de arrayA
  }
  
  // Arrays de exemplo
  const arrayA = [1, 2, 3, 4];
  const arrayB = [3, 4, 5, 6];
  
  // Realizando a operação de diferença simulada
  const diferencaArrayAB = diferencaSimuladaSemSet(arrayA, arrayB); // A - B
  const diferencaArrayBA = diferencaSimuladaSemSet(arrayB, arrayA); // B - A
  
  // Exibindo os resultados
  console.log("Diferença simulada sem Set (A - B):", diferencaArrayAB); // Saída: [1, 2]
  console.log("Diferença simulada sem Set (B - A):", diferencaArrayBA); // Saída: [5, 6]
  