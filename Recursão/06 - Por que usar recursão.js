// Por que usar recursão?
// 1. **Simplicidade**: Recursão pode tornar o código mais legível e próximo da definição matemática do problema.
// 2. **Problemas Divididos**: Recursão é ideal para problemas que podem ser divididos em subproblemas menores.
// 3. **Árvores e Grafos**: Estruturas como árvores binárias e grafos são naturalmente resolvidas com recursão.

// Exemplo: Soma de uma sequência usando recursão
function somaRecursiva(n) {
    if (n === 0) return 0; // Caso base
    return n + somaRecursiva(n - 1); // Subproblema menor
  }
  
  console.log(`Soma recursiva (5): ${somaRecursiva(5)}`); // Saída: 15
  
  // Soma usando iteração (equivalente)
  function somaIterativa(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }
  
  console.log(`Soma iterativa (5): ${somaIterativa(5)}`); // Saída: 15
  
  // **A recursão é mais rápida?**
  // Depende do problema e da implementação:
  // 1. **Overhead**: Recursão pode ser mais lenta devido à criação de novos quadros na pilha de chamadas.
  // 2. **Memória**: Recursão consome mais memória que iteração, especialmente em problemas profundos.
  // 3. **Tail Call Optimization**: Em ambientes que suportam, a recursão pode ser otimizada para ser tão rápida quanto iteração.
  
  // Teste de desempenho: Fibonacci
  function fibonacciRecursivo(n) {
    if (n < 2) return n; // Caso base
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2); // Chamadas recursivas
  }
  
  function fibonacciIterativo(n) {
    if (n < 2) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
  // Testando desempenho
  console.time("Fibonacci Recursivo");
  console.log(`Fibonacci Recursivo (30): ${fibonacciRecursivo(30)}`);
  console.timeEnd("Fibonacci Recursivo");
  
  console.time("Fibonacci Iterativo");
  console.log(`Fibonacci Iterativo (30): ${fibonacciIterativo(30)}`);
  console.timeEnd("Fibonacci Iterativo");
  
  // **Quando evitar recursão?**
  // 1. Problemas que envolvem muitos níveis de profundidade (exemplo: Fibonacci recursivo).
  // 2. Ambientes sem suporte para otimização de chamada de cauda.
  // 3. Quando a iteração é mais simples e eficiente.
  
  // **Conclusão**
  // A recursão é útil para problemas como árvores, grafos e subproblemas divididos,
  // mas geralmente não é mais rápida que a iteração. Escolha com base no problema!
  