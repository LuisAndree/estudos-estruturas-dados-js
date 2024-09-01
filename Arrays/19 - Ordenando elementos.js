// Exemplo 1: Ordenando números em ordem crescente
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numbers); 

// Exemplo 2: Ordenando números em ordem decrescente
const numbersDesc = [4, 2, 5, 1, 3];
numbersDesc.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numbersDesc); 

// Exemplo 3: Ordenando strings em ordem alfabética
const fruits = ["banana", "apple", "grape", "cherry"];
fruits.sort();
console.log("Frutas em ordem alfabética:", fruits); 

// Exemplo 4: Ordenando strings em ordem alfabética inversa
const fruitsDesc = ["banana", "apple", "grape", "cherry"];
fruitsDesc.sort().reverse();
console.log("Frutas em ordem alfabética inversa:", fruitsDesc); 

// Exemplo 5: Ordenando objetos por uma propriedade
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
people.sort((a, b) => a.age - b.age);
console.log("Pessoas ordenadas por idade:", people);

