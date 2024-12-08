function insertionSort(array) {
    const n = array.length;
  
    for (let i = 1; i < n; i++) {
      let current = array[i]; // Elemento atual
      let j = i - 1;
  
      // Move os elementos maiores que o elemento atual para a direita
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
  
      // Insere o elemento na posição correta
      array[j + 1] = current;
    }
  
    return array;
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", arr);
  
  const sortedArr = insertionSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [64, 34, 25, 12, 22, 11, 90]
  // Array ordenado: [11, 12, 22, 25, 34, 64, 90]
  