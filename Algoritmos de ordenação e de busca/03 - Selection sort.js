function selectionSort(array) {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i; // Assume que o primeiro elemento é o menor
  
      // Encontra o índice do menor elemento no restante do array
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j; // Atualiza o índice do menor elemento
        }
      }
  
      // Troca o elemento atual com o menor elemento encontrado
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
  
    return array;
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", arr);
  
  const sortedArr = selectionSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [64, 34, 25, 12, 22, 11, 90]
  // Array ordenado: [11, 12, 22, 25, 34, 64, 90]
  