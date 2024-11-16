// Função para simular a interseção usando arrays
function intersecaoSimuladaSemSet(arrayA, arrayB) {
    return arrayA.filter(item => arrayB.includes(item)); // Retorna apenas os elementos comuns
  }
  
  // Arrays de exemplo
  const arrayA = [1, 2, 3, 4];
  const arrayB = [3, 4, 5, 6];
  
  // Realizando a interseção simulada
  const intersecaoArray = intersecaoSimuladaSemSet(arrayA, arrayB);
  
  // Exibindo o resultado
  console.log("Interseção simulada sem Set:", intersecaoArray); // Saída: [3, 4]
  