// Criando um novo conjunto (Set)
const conjunto = new Set();

// Adicionando elementos ao conjunto
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add(1); // Esse elemento não será adicionado novamente, pois já existe no conjunto

// Obtendo o tamanho do conjunto
console.log(conjunto.size); // Saída: 3

// Exibindo os elementos do conjunto
console.log(conjunto); // Saída: Set { 1, 2, 3 }
