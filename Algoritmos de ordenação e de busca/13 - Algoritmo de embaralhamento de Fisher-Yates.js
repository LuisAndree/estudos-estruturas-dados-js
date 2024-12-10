function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Gera um índice aleatório entre 0 e i
      const randomIndex = Math.floor(Math.random() * (i + 1));
  
      // Troca os elementos array[i] e array[randomIndex]
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }
  
  // Exemplo de uso
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Array original:", arr);
  console.log("Array embaralhado:", fisherYatesShuffle([...arr]));
  
  // Saída esperada (varia a cada execução):
  // Array original: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // Array embaralhado: [4, 7, 1, 5, 2, 9, 8, 6, 3]
  