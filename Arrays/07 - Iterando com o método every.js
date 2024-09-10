const numbers = [2, 4, 6, 8, 10];

// 2. Usando `every` para verificar se todos os números são pares
const allEven = numbers.every(function(num) {
    return num % 2 === 0;
});

console.log("Todos os números pares:", allEven); 

// 3. Criando outro array com números ímpares e pares
const mixedNumbers = [1, 2, 3, 4, 5, 6];

// 4. Usando `every` para verificar se todos os números são pares
const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);

console.log("Todos os números são pares no array misto:", allEvenMixed); 

// 5. Iterando sobre o array e verificando se todos os números são menores que 10
const lessThanTen = numbers.every(num => num < 10);

console.log("Todos os números são menores que 10:", lessThanTen); 

// 6. Verificando se todos os números em um array vazio satisfazem uma condição
const emptyArray = [];
const checkEmpty = emptyArray.every(num => num < 10);

console.log("Array vazio passa na verificação:", checkEmpty); 
