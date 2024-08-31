// 1. Criando um array de números
const numbers = [10, 20, 30, 40, 50];

// 2. Usando `for...of` para iterar sobre cada número do array
for (const num of numbers) {
    console.log("Número:", num);
}

// 3. Usando `for...of` para iterar sobre uma string
const text = "JavaScript";

for (const char of text) {
    console.log("Caractere:", char);
}

// 4. Usando `for...of` para iterar sobre um array de objetos
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (const person of people) {
    console.log(`${person.name} tem ${person.age} anos.`);
}

// 5. Usando `for...of` com o objeto `Map`
const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// 6. Usando `for...of` com o objeto `Set`
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (const num of uniqueNumbers) {
    console.log("Número único:", num);
}
