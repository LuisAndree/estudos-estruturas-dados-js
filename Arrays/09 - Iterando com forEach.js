// 1. Criando um array de números
const numbers = [10, 20, 30, 40, 50];

// 2. Usando `forEach` para iterar sobre o array e imprimir cada número
numbers.forEach(function(num) {
    console.log("Número:", num);
});

// 3. Usando `forEach` com uma arrow function
numbers.forEach(num => console.log("Número (arrow function):", num));

// 4. Usando `forEach` para somar todos os números
let sum = 0;
numbers.forEach(function(num) {
    sum += num;
});
console.log("Soma de todos os números:", sum); 

// 5. Usando `forEach` para acessar o índice de cada elemento
numbers.forEach(function(num, index) {
    console.log(`O elemento no índice ${index} é: ${num}`);
});

// 6. Usando `forEach` com array de objetos
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

people.forEach(function(person) {
    console.log(`${person.name} tem ${person.age} anos.`);
});
