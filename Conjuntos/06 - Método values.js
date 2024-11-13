// Criando um novo conjunto (Set)
const conjunto = new Set();

// Adicionando elementos ao conjunto
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);

// Usando o método values() para obter um iterador de valores
const iteradorValores = conjunto.values();

// Percorrendo os valores do conjunto
for (let valor of iteradorValores) {
  console.log(valor); // Saída: 1, 2, 3
}

// Alternativa: Usar diretamente o for...of no conjunto
for (let valor of conjunto) {
  console.log(valor); // Saída: 1, 2, 3
}
