function bucketSort(array, bucketSize = 5) {
    if (array.length <= 1) {
      return array; // Um único elemento já está ordenado
    }
  
    // Determina os valores mínimo e máximo
    const min = Math.min(...array);
    const max = Math.max(...array);
  
    // Calcula o número de baldes
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);
  
    // Distribui os elementos nos baldes
    for (let i = 0; i < array.length; i++) {
      const bucketIndex = Math.floor((array[i] - min) / bucketSize);
      buckets[bucketIndex].push(array[i]);
    }
  
    // Ordena cada balde e concatena os resultados
    return buckets.reduce((sortedArray, bucket) => {
      if (bucket.length > 0) {
        bucket.sort((a, b) => a - b); // Ordena os elementos do balde
        sortedArray.push(...bucket);
      }
      return sortedArray;
    }, []);
  }
  
  // Exemplo de uso
  const arr = [29, 25, 3, 49, 9, 37, 21, 43];
  console.log("Array original:", arr);
  
  const sortedArr = bucketSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [29, 25, 3, 49, 9, 37, 21, 43]
  // Array ordenado: [3, 9, 21, 25, 29, 37, 43, 49]
  