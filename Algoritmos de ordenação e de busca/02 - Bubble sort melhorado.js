function improvedBubbleSort(array) {
    const n = array.length;
    let lastSwappedIndex; // Última posição onde houve troca
    let limit = n - 1; // Limite inicial
  
    do {
      lastSwappedIndex = 0;
  
      for (let i = 0; i < limit; i++) {
        if (array[i] > array[i + 1]) {
          // Troca os elementos adjacentes
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          lastSwappedIndex = i; // Atualiza a última posição onde ocorreu a troca
        }
      }
  
      // Reduz o limite para evitar verificações desnecessárias
      limit = lastSwappedIndex;
  
    } while (lastSwappedIndex !== 0);
  
    return array;
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", arr);
  
  const sortedArr = improvedBubbleSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [64, 34, 25, 12, 22, 11, 90]
  // Array ordenado: [11, 12, 22, 25, 34, 64, 90]
  