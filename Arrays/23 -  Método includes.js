// Exemplo 1: Usando includes() em um array de números
const numbers = [1, 2, 3, 4, 5];

const hasThree = numbers.includes(3);
console.log("O array contém o número 3?", hasThree); 

const hasSeven = numbers.includes(7);
console.log("O array contém o número 7?", hasSeven); 

// Exemplo 2: Usando includes() em um array de strings
const fruits = ["apple", "banana", "mango", "pear"];

const hasBanana = fruits.includes("banana");
console.log("O array contém 'banana'?", hasBanana); 

const hasGrape = fruits.includes("grape");
console.log("O array contém 'grape'?", hasGrape); 

// Exemplo 3: Usando includes() com strings (verificar substring)
const phrase = "JavaScript é incrível";

const hasJavaScript = phrase.includes("JavaScript");
console.log("A frase contém 'JavaScript'?", hasJavaScript); 

const hasPython = phrase.includes("Python");
console.log("A frase contém 'Python'?", hasPython); 

// Exemplo 4: Usando includes() com arrays e índice inicial
const moreNumbers = [10, 20, 30, 40, 50];

const hasThirtyFromIndex2 = moreNumbers.includes(30, 2);
console.log("O array contém 30 a partir do índice 2?", hasThirtyFromIndex2); 

const hasTenFromIndex2 = moreNumbers.includes(10, 2);
console.log("O array contém 10 a partir do índice 2?", hasTenFromIndex2); 
