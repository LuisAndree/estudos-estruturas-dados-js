//Exemplos do livro 
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

// 1. Acessando Elementos em um Array
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Acessando o primeiro elemento (índice 0)
console.log(fruits[0]);

// Acessando o segundo elemento (índice 1)
console.log(fruits[1]);

// Acessando o último elemento (usando o comprimento do array)
console.log(fruits[fruits.length - 1]);

// Modificando um elemento no array
fruits[2] = "coconut";
console.log(fruits);

// 2. Iterando sobre um Array

// 2.1 Usando um loop `for`
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

// 2.2 Usando um loop `for...of`
for (const fruit of fruits) {
    console.log(fruit);
}

// 2.3 Usando `forEach` (método de array)
fruits.forEach(function (fruit, index) {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

// 2.4 Usando `map` para criar um novo array
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

// 2.5 Usando `filter` para criar um novo array com elementos que atendem a uma condição
const fruitsWithA = fruits.filter(fruit => fruit.includes("a"));
console.log(fruitsWithA);

// 2.6 Usando `reduce` para reduzir o array a um único valor
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength);

// 2.7 Usando `some` para verificar se pelo menos um elemento atende a uma condição
const hasBanana = fruits.some(fruit => fruit === "banana");
console.log(hasBanana);

// 2.8 Usando `every` para verificar se todos os elementos atendem a uma condição
const allHaveA = fruits.every(fruit => fruit.includes("a"));
console.log(allHaveA);

// 2.9 Iterando sobre um array multidimensional
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}]: ${matrix[i][j]}`);
    }
}
