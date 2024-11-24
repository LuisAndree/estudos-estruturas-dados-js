function fibonacciIterativo(n) {
    if (n < 2) {
      return n; // Caso base
    }
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
  console.log(fibonacciIterativo(50)); // Saída: 12586269025
  