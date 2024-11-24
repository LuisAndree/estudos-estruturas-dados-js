// Função para testar o limite da pilha
let contador = 0;

function testarPilha() {
  contador++;
  console.log(`Chamadas: ${contador}`);
  testarPilha(); // Chamada recursiva infinita
}

try {
  testarPilha();
} catch (e) {
  console.log(`Erro: ${e.message}`); // Exibe o erro quando o limite é atingido
}

// Função iterativa para evitar stack overflow
function fatorialIterativo(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(`Fatorial Iterativo (5): ${fatorialIterativo(5)}`); // Saída: 120

// Função recursiva otimizada com tail call
function fatorialTail(n, acumulador = 1) {
  if (n === 0 || n === 1) return acumulador; // Caso base
  return fatorialTail(n - 1, acumulador * n); // Chamada otimizada
}

console.log(`Fatorial Recursivo com Tail Call (5): ${fatorialTail(5)}`); // Saída: 120

// Função recursiva limitada por profundidade
function recursivoComLimite(n, limite) {
  if (limite <= 0) {
    console.log("Limite de recursão atingido!");
    return;
  }
  if (n === 0) return;
  console.log(n);
  recursivoComLimite(n - 1, limite - 1); // Chamada recursiva controlada
}

recursivoComLimite(10, 5); // Controla o número máximo de chamadas recursivas
