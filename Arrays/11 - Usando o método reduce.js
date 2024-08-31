// 1. Criando um array de números
const numbers = [1, 2, 3, 4, 5];

// 2. Usando `reduce` para somar todos os números do array
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Soma de todos os números:", sum); // 15

// 3. Usando `reduce` para multiplicar todos os números do array
const product = numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log("Produto de todos os números:", product); // 120

// 4. Usando `reduce` para encontrar o maior número no array
const maxNumber = numbers.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}, numbers[0]);

console.log("Maior número do array:", maxNumber); // 5

// 5. Usando `reduce` para transformar um array de valores em um objeto que conta a ocorrência de cada valor
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce(function(accumulator, currentValue) {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 1;
    } else {
        accumulator[currentValue]++;
    }
    return accumulator;
}, {});

console.log("Contagem de frutas:", fruitCount); 

