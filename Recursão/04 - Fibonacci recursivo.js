function fibonacciRecursivo(n) {
    if (n < 2) {
      return n; // Caso base
    }
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2); // Chamada recursiva
  }
  
  console.log(fibonacciRecursivo(10)); // Saída: 55
  