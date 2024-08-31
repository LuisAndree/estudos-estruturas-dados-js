// Exemplo 1: Converter uma string em um array
const str = "Hello";
const strArray = Array.from(str);
console.log("Array from string:", strArray); 

// Exemplo 2: Criar um array a partir de um Set
const set = new Set([1, 2, 3, 4, 5]);
const arrayFromSet = Array.from(set);
console.log("Array from Set:", arrayFromSet); 

// Exemplo 3: Criar um array a partir de um Map (somente valores)
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
const arrayFromMap = Array.from(map.values());
console.log("Array from Map values:", arrayFromMap); 

// Exemplo 4: Criar um array de números a partir de um objeto com a propriedade length
const arrayLikeObject = { length: 5 };
const numbers = Array.from({ length: 5 }, (v, i) => i + 1);
console.log("Array from length:", numbers);

// Exemplo 5: Usando Array.from() com uma função de mapeamento
const doubled = Array.from([1, 2, 3], x => x * 2);
console.log("Array with map function:", doubled); 
