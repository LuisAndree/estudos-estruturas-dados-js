function fibonacciMemoizado(n, memo = {}) {
    if (n < 2) {
      return n; // Caso base
    }
    if (memo[n]) {
      return memo[n]; // Retorna o valor armazenado
    }
    memo[n] = fibonacciMemoizado(n - 1, memo) + fibonacciMemoizado(n - 2, memo);
    return memo[n];
  }
  
  console.log(fibonacciMemoizado(50)); // Saída: 12586269025
  