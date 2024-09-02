// Exemplo 1: Usando find() para encontrar o primeiro número par em um array
const numbers = [5, 8, 12, 19, 21, 7];
const firstEven = numbers.find(num => num % 2 === 0);
console.log("Primeiro número par encontrado:", firstEven); 

// Exemplo 2: Usando findIndex() para encontrar o índice do primeiro número par em um array
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("Índice do primeiro número par encontrado:", firstEvenIndex);

// Exemplo 3: Usando find() para encontrar um objeto com base em uma propriedade
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
const person = people.find(person => person.age === 30);
console.log("Pessoa com 30 anos encontrada:", person); 

// Exemplo 4: Usando findIndex() para encontrar o índice de um objeto com base em uma propriedade
const personIndex = people.findIndex(person => person.age === 30);
console.log("Índice da pessoa com 30 anos encontrada:", personIndex); 

// Exemplo 5: Usando find() quando nenhum elemento atende à condição
const notFound = numbers.find(num => num > 100);
console.log("Resultado de find() quando nenhum elemento é encontrado:", notFound); 

// Exemplo 6: Usando findIndex() quando nenhum elemento atende à condição
const notFoundIndex = numbers.findIndex(num => num > 100);
console.log("Resultado de findIndex() quando nenhum elemento é encontrado:", notFoundIndex); 
