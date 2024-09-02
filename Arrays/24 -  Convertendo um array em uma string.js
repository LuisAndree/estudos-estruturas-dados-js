// Exemplo 1: Usando o método join()
const fruits = ["apple", "banana", "mango", "pear"];

// Converte o array em uma string, separando os elementos por vírgula (padrão)
const fruitsString = fruits.join();
console.log("Array convertido em string (separador padrão):", fruitsString);

// Converte o array em uma string, separando os elementos por um hífen
const fruitsStringWithHyphen = fruits.join(" - ");
console.log("Array convertido em string (com hífen):", fruitsStringWithHyphen);

// Converte o array em uma string, separando os elementos por um espaço
const fruitsStringWithSpace = fruits.join(" ");
console.log("Array convertido em string (com espaço):", fruitsStringWithSpace);

// Exemplo 2: Usando o método toString()
const numbers = [1, 2, 3, 4, 5];

// Converte o array em uma string, separando os elementos por vírgula
const numbersString = numbers.toString();
console.log("Array convertido em string usando toString():", numbersString);
