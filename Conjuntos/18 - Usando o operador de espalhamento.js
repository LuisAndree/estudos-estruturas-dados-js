// Diferença com espalhamento usando apenas arrays
function diferencaArrayEspalhamento(arrayA, arrayB) {
    return arrayA.filter(item => !arrayB.includes(item));
  }
  
  // Arrays de exemplo
  const arrayA = [1, 2, 3, 4];
  const arrayB = [3, 4, 5, 6];
  
  // Realizando a operação de diferença
  const diferencaArrayAB = diferencaArrayEspalhamento(arrayA, arrayB); // A - B
  const diferencaArrayBA = diferencaArrayEspalhamento(arrayB, arrayA); // B - A
  
  // Exibindo os resultados
  console.log("Diferença (A - B):", diferencaArrayAB); // Saída: [1, 2]
  console.log("Diferença (B - A):", diferencaArrayBA); // Saída: [5, 6]
  