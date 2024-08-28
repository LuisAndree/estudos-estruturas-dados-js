// 1. Acrescentando Elementos a um Array

const fruits = ["apple", "banana", "cherry"];

// 1.1 Usando o método `push()` para acrescentar elementos ao final do array
fruits.push("date");
console.log(fruits); 

// Acrescentando múltiplos elementos ao final
fruits.push("elderberry", "fig", "grape");
console.log(fruits); 

// 1.2 Usando o método `unshift()` para acrescentar elementos no início do array
fruits.unshift("apricot");
console.log(fruits); 

// Acrescentando múltiplos elementos no início
fruits.unshift("blackberry", "blueberry");
console.log(fruits); 

// 1.3 Usando o método `splice()` para acrescentar elementos em uma posição específica
fruits.splice(3, 0, "cantaloupe");
console.log(fruits); 

// Acrescentando múltiplos elementos em uma posição específica
fruits.splice(5, 0, "durian", "honeydew");
console.log(fruits); 

// 1.4 Usando o spread operator para combinar arrays ou acrescentar elementos em qualquer posição

// Acrescentando elementos no final
const moreFruits = ["kiwi", "lime"];
const combinedFruits = [...fruits, ...moreFruits];
console.log(combinedFruits); 

// Acrescentando elementos no início
const newFruits = ["mango", "nectarine"];
const fruitsWithNewStart = [...newFruits, ...fruits];
console.log(fruitsWithNewStart);  

// Acrescentando elementos no meio
const mixedFruits = [...fruits.slice(0, 4), "orange", "papaya", ...fruits.slice(4)];
console.log(mixedFruits); 

// 1.5 Usando o método `concat()` para acrescentar elementos a um array existente
const tropicalFruits = ["pineapple", "mango"];
const allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); 

// 1.6 Usando o método `length` para adicionar um elemento manualmente no final do array
fruits[fruits.length] = "raspberry";
console.log(fruits); 

// 1.7 Acrescentando elementos a um array multidimensional
const matrix = [
    [1, 2],
    [3, 4]
];

// Acrescentando uma nova linha
matrix.push([5, 6]);
console.log(matrix); 

// Acrescentando um elemento a uma linha específica
matrix[1].push(7);
console.log(matrix); 
