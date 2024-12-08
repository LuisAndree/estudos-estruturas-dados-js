function bubbleSort(array) {
    const n = array.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
  
      // Passa pelos elementos ainda não ordenados
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // Troca os elementos adjacentes se estiverem na ordem errada
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
  
      // Se nenhuma troca foi feita, o array já está ordenado
      if (!swapped) break;
    }
  
    return array;
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", arr);
  
  const sortedArr = bubbleSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [64, 34, 25, 12, 22, 11, 90]
  // Array ordenado: [11, 12, 22, 25, 34, 64, 90]
  