// Exemplo 1: Preencher todo o array com um valor
const array1 = [1, 2, 3, 4, 5];
array1.fill(0);
console.log("Array preenchido com 0:", array1);

// Exemplo 2: Preencher parte do array com um valor
const array2 = [1, 2, 3, 4, 5];
array2.fill(9, 1, 4);
console.log("Array preenchido com 9 do índice 1 ao 3:", array2); 

// Exemplo 3: Usando fill() em um array vazio
const array3 = new Array(5);
array3.fill('x');
console.log("Array preenchido com 'x':", array3); 

// Exemplo 4: Preencher parte do array sem o argumento final
const array4 = [1, 2, 3, 4, 5];
array4.fill(7, 2);
console.log("Array preenchido com 7 a partir do índice 2:", array4); 
