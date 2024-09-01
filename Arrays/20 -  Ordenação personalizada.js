// Exemplo 1: Ordenando números pares antes de ímpares, mantendo a ordem relativa
const numbers = [5, 8, 3, 10, 1, 4, 6, 9];
numbers.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return -1; 
    if (a % 2 !== 0 && b % 2 === 0) return 1;  
    return a - b; 
});
console.log("Números ordenados (pares antes de ímpares):", numbers);

// Exemplo 2: Ordenando strings por comprimento, do menor para o maior
const strings = ["apple", "banana", "pear", "kiwi", "strawberry"];
strings.sort((a, b) => a.length - b.length);
console.log("Strings ordenadas por comprimento:", strings);

// Exemplo 3: Ordenando objetos por múltiplas propriedades (idade e nome)
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 },
    { name: "Dave", age: 20 }
];
people.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name); 
    }
    return a.age - b.age; 
});
console.log("Pessoas ordenadas por idade e nome:", people);

// Exemplo 4: Ordenando números em ordem absoluta
const mixedNumbers = [-3, -2, 5, 10, -8, 7];
mixedNumbers.sort((a, b) => Math.abs(a) - Math.abs(b));
console.log("Números ordenados por valor absoluto:", mixedNumbers);

