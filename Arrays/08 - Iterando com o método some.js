// 1. Criando um array de números
const numbers = [1, 3, 5, 7, 9];

// 2. Usando `some` para verificar se existe algum número par no array
const hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log("Existe algum número par:", hasEven); 

// 3. Criando outro array com números ímpares e pares
const mixedNumbers = [1, 2, 3, 4, 5, 6];

// 4. Usando `some` para verificar se existe algum número par no array misto
const hasEvenMixed = mixedNumbers.some(num => num % 2 === 0);

console.log("Existe algum número par no array misto:", hasEvenMixed); 

// 5. Verificando se existe algum número maior que 10
const greaterThanTen = numbers.some(num => num > 10);

console.log("Existe algum número maior que 10:", greaterThanTen); 

// 6. Verificando se existe algum número maior que 5
const greaterThanFive = mixedNumbers.some(num => num > 5);

console.log("Existe algum número maior que 5 no array misto:", greaterThanFive); 

// 7. Verificando se existe algum número em um array vazio
const emptyArray = [];
const checkEmpty = emptyArray.some(num => num > 0);

console.log("Array vazio passa na verificação:", checkEmpty); 
