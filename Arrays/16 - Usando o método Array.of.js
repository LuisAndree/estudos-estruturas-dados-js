// Exemplo 1: Criando um array com elementos individuais
const array1 = Array.of(1, 2, 3);
console.log("Array1:", array1); 

// Exemplo 2: Criando um array com um único número
const array2 = Array.of(7);
console.log("Array2:", array2); 

// Exemplo 3: Criando um array com vários tipos de dados
const array3 = Array.of(10, 'Hello', true, {name: 'Alice'}, [1, 2, 3]);
console.log("Array3:", array3); 

// Exemplo 4: Diferença entre Array.of() e Array() com um único argumento
const array4 = Array.of(5);
console.log("Array4 com Array.of(5):", array4); 

const array5 = Array(5);
console.log("Array5 com Array(5):", array5); 
