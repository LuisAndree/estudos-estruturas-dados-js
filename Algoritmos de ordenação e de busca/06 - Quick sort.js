function quickSort(array) {
    if (array.length <= 1) {
      return array; // Um único elemento já está ordenado
    }
  
    // Escolhe o pivô (aqui usamos o último elemento)
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
  
    // Divide o array em duas partes
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    // Ordena as partes recursivamente e combina com o pivô
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", arr);
  
  const sortedArr = quickSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [64, 34, 25, 12, 22, 11, 90]
  // Array ordenado: [11, 12, 22, 25, 34, 64, 90]
  