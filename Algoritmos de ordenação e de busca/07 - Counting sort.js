function countingSort(array) {
    if (array.length <= 1) {
      return array; // Um único elemento já está ordenado
    }
  
    // Encontra o valor máximo no array
    const max = Math.max(...array);
  
    // Cria o array de contagem
    const count = new Array(max + 1).fill(0);
  
    // Conta a ocorrência de cada elemento
    for (let i = 0; i < array.length; i++) {
      count[array[i]]++;
    }
  
    // Modifica o array de contagem para conter as posições acumuladas
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  
    // Cria o array ordenado
    const sortedArray = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
      sortedArray[--count[array[i]]] = array[i];
    }
  
    return sortedArray;
  }
  
  // Exemplo de uso
  const arr = [4, 2, 2, 8, 3, 3, 1];
  console.log("Array original:", arr);
  
  const sortedArr = countingSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [4, 2, 2, 8, 3, 3, 1]
  // Array ordenado: [1, 2, 2, 3, 3, 4, 8]
  