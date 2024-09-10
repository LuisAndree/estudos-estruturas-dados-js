// Exemplos do livro
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// removendo do final do array
numbers.pop();
console.log(numbers);

// removendo do inicio 
numbers.shift();
console.log(numbers);

//posição especifica splice(indice/qntd/add...);
numbers.splice(5, 1); // 1 elemento
console.log(numbers); 

numbers.splice(5, 3); // varios elemento
console.log(numbers); 

//splice para add
numbers.splice(5, 0, 6, 7, 8); // add 3 elementos(6, 7, 8) a partir do indice 5
console.log(numbers);

numbers.splice(3, 2, 14, 15); // maneira de substituir elementos 
console.log(numbers);

// 1. Inicializando um array de frutas
const fruits = ["apple", "banana", "cherry", "date"];

// 2. Usando `pop()` para remover o último elemento
console.log("Array original:", fruits);
const lastFruit = fruits.pop();
console.log("Último elemento removido:", lastFruit);
console.log("Array após pop():", fruits); 

// 3. Usando `shift()` para remover o primeiro elemento
const firstFruit = fruits.shift();
console.log("Primeiro elemento removido:", firstFruit);
console.log("Array após shift():", fruits); 

// 4. Usando `splice()` para remover um elemento em uma posição específica
const indexToRemove = 1; 
const removedFruits = fruits.splice(indexToRemove, 1);
console.log("Elemento removido com splice():", removedFruits);
console.log("Array após splice():", fruits); 

// 5. Usando `filter()` para criar um novo array sem elementos indesejados
const allFruits = ["apple", "banana", "cherry", "date"];
const filteredFruits = allFruits.filter(fruit => fruit !== "banana");
console.log("Array original:", allFruits);
console.log("Array após filter() (removendo 'banana'):", filteredFruits); 

// 6. Exibindo o array original para mostrar que não foi alterado
console.log("Array original após filter():", allFruits); 
