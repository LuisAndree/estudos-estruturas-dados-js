function countingSortForRadix(array, digitPlace) {
    const n = array.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);
  
    // Calcula a contagem dos dígitos
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(array[i] / digitPlace) % 10;
      count[digit]++;
    }
  
    // Atualiza a contagem para posições acumuladas
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    // Constrói o array ordenado com base no dígito
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(array[i] / digitPlace) % 10;
      output[--count[digit]] = array[i];
    }
  
    // Copia o resultado para o array original
    for (let i = 0; i < n; i++) {
      array[i] = output[i];
    }
  }
  
  function radixSort(array) {
    // Encontra o número máximo para determinar o número de dígitos
    const max = Math.max(...array);
  
    // Aplica o Counting Sort para cada posição decimal
    let digitPlace = 1;
    while (Math.floor(max / digitPlace) > 0) {
      countingSortForRadix(array, digitPlace);
      digitPlace *= 10;
    }
    return array;
  }
  
  // Exemplo de uso
  const arr = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log("Array original:", arr);
  
  const sortedArr = radixSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [170, 45, 75, 90, 802, 24, 2, 66]
  // Array ordenado: [2, 24, 45, 66, 75, 90, 170, 802]
  