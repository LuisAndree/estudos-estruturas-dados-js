// 1. Criando e Inicializando Arrays

// 1.1 Criando um array vazio
const emptyArray = [];
console.log(emptyArray); 

// 1.2 Criando um array com elementos pré-definidos
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); 

const fruits = ["apple", "banana", "cherry"];
console.log(fruits); 

// 1.3 Criando um array com um tamanho específico (mas sem elementos definidos)
const arrayWithSize = new Array(5);
console.log(arrayWithSize); 

// 1.4 Criando um array e inicializando todos os elementos com o mesmo valor
const filledArray = new Array(5).fill(0);
console.log(filledArray); 

// 1.5 Criando um array usando o construtor Array
const arrayConstructor = Array.of(10, 20, 30);
console.log(arrayConstructor); 

// 1.6 Criando um array a partir de outra estrutura de dados (como uma string ou um objeto iterable)
const stringToArray = Array.from("hello");
console.log(stringToArray);

// Criando um array a partir de um Set (conjunto)
const uniqueNumbersSet = new Set([1, 2, 3, 4, 4, 5]);
const uniqueNumbersArray = Array.from(uniqueNumbersSet);
console.log(uniqueNumbersArray); 

// 1.7 Criando um array usando um loop ou um mapeamento
const arrayWithMapping = Array.from({ length: 5 }, (_, index) => index * 2);
console.log(arrayWithMapping); 

// 1.8 Criando um array multidimensional (array de arrays)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// 1.9 Inicializando um array com valores gerados dinamicamente
const randomNumbersArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
console.log(randomNumbersArray); 

// 1.10 Criando um array de objetos
const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 22 }
];
console.log(people);

// 1.11 Copiando um array existente (shallow copy)
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); 

// 1.12 Criando um array concatenando outros arrays
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); 

// Usando o spread operator
const spreadConcatenatedArray = [...array1, ...array2];
console.log(spreadConcatenatedArray); 
