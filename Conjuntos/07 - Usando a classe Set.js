// Criando um novo Set
const conjunto = new Set([1, 2, 3, 4, 5]);

// Adicionando valores
conjunto.add(6);
conjunto.add(3); // Ignorado, pois 3 já existe no conjunto

// Removendo um valor
conjunto.delete(4); // Remove o valor 4 do conjunto

// Verificando se um valor existe
console.log("Conjunto tem o número 3?", conjunto.has(3)); // true
console.log("Conjunto tem o número 10?", conjunto.has(10)); // false

// Tamanho do conjunto
console.log("Tamanho do conjunto:", conjunto.size); // Saída: 5

// Iterando sobre os valores do Set usando forEach
console.log("Valores do conjunto usando forEach:");
conjunto.forEach((valor) => {
  console.log(valor); // Saída: 1, 2, 3, 5, 6
});

// Iterando sobre os valores do Set usando for...of
console.log("Valores do conjunto usando for...of:");
for (let valor of conjunto) {
  console.log(valor); // Saída: 1, 2, 3, 5, 6
}

// Usando o método values() para obter um iterador
console.log("Valores do conjunto usando values():");
const iterador = conjunto.values();
for (let valor of iterador) {
  console.log(valor); // Saída: 1, 2, 3, 5, 6
}

// Removendo duplicatas de um array usando Set
const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const arraySemDuplicatas = [...new Set(arrayComDuplicatas)];
console.log("Array sem duplicatas:", arraySemDuplicatas); // Saída: [1, 2, 3, 4, 5]

// Limpando todos os valores do conjunto
conjunto.clear();
console.log("Tamanho do conjunto após clear:", conjunto.size); // Saída: 0
