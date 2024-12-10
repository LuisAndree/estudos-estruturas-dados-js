function interpolationSearch(array, target) {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high && target >= array[low] && target <= array[high]) {
      // Evita divisão por zero
      if (array[low] === array[high]) {
        return array[low] === target ? low : -1;
      }
  
      // Calcula a posição estimada
      const mid = low + Math.floor(
        ((target - array[low]) * (high - low)) / (array[high] - array[low])
      );
  
      if (array[mid] === target) {
        return mid; // Elemento encontrado
      }
  
      if (array[mid] < target) {
        low = mid + 1; // Busca na parte superior
      } else {
        high = mid - 1; // Busca na parte inferior
      }
    }
  
    return -1; // Elemento não encontrado
  }
  
  // Exemplo de uso
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const target = 70;
  
  const result = interpolationSearch(arr, target);
  if (result !== -1) {
    console.log(`Elemento ${target} encontrado no índice ${result}`);
  } else {
    console.log(`Elemento ${target} não encontrado.`);
  }
  
  // Saída esperada:
  // Elemento 70 encontrado no índice 6
  