// Criando um array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando `map` para criar um novo array com cada número multiplicado por 2
const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log("Array com números dobrados:", doubledNumbers); 

// Usando `map` com uma arrow function para adicionar 1 a cada número
const incrementedNumbers = numbers.map(num => num + 1);

console.log("Array com números incrementados:", incrementedNumbers); 

// Usando `filter` para criar um novo array com apenas números pares
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Números pares:", evenNumbers); 

// Usando `filter` com uma arrow function para filtrar números maiores que 5
const numbersGreaterThanFive = numbers.filter(num => num > 5);

console.log("Números maiores que 5:", numbersGreaterThanFive); 

// Usando `filter` e `map` juntos para filtrar números maiores que 5 e dobrá-los
const doubledNumbersGreaterThanFive = numbers
  .filter(num => num > 5) 
  .map(num => num * 2);   

console.log("Números dobrados e maiores que 5:", doubledNumbersGreaterThanFive); 
