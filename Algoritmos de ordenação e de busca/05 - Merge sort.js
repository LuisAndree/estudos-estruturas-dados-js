function mergeSort(array) {
    if (array.length <= 1) {
      return array; // Um único elemento já está ordenado
    }
  
    // Dividir o array em duas metades
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
  
    // Ordena as duas metades e as mescla
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    // Mescla os arrays enquanto há elementos em ambos
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Adiciona os elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Exemplo de uso
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array original:", arr);
  
  const sortedArr = mergeSort(arr);
  console.log("Array ordenado:", sortedArr);
  
  // Saída esperada:
  // Array original: [64, 34, 25, 12, 22, 11, 90]
  // Array ordenado: [11, 12, 22, 25, 34, 64, 90]
  