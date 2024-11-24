function fatorial(n) {
    // Caso Base: Se n é 0, retorna 1
    if (n === 0) {
      return 1;
    }
  
    // Chamada Recursiva
    return n * fatorial(n - 1);
  }
  
  console.log(fatorial(5)); // Saída: 120
  