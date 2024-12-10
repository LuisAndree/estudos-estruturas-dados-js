function binarySearchRecursive(array, target, low = 0, high = array.length - 1) {
    if (low > high) {
      return -1; // Elemento não encontrado
    }
  
    const mid = Math.floor((low + high) / 2);
  
    if (array[mid] === target) {
      return mid; // Elemento encontrado
    }
  
    if (array[mid] < target) {
      return binarySearchRecursive(array, target, mid + 1, high); // Metade superior
    } else {
      return binarySearchRecursive(array, target, low, mid - 1); // Metade inferior
    }
  }
  
  // Exemplo de uso
  const arr2 = [2, 4, 6, 8, 10, 12];
  const target2 = 8;
  
  const result2 = binarySearchRecursive(arr2, target2);
  if (result2 !== -1) {
    console.log(`Elemento ${target2} encontrado no índice ${result2}`);
  } else {
    console.log(`Elemento ${target2} não encontrado.`);
  }
  
  // Saída esperada:
  // Elemento 8 encontrado no índice 3
  