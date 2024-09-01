// Exemplo 1: Copiar elementos dentro do array
const array1 = [1, 2, 3, 4, 5];
array1.copyWithin(0, 3);
console.log("Array após copyWithin(0, 3):", array1); 

// Exemplo 2: Copiar elementos para o início do array
const array2 = [10, 20, 30, 40, 50];
array2.copyWithin(1, 3);
console.log("Array após copyWithin(1, 3):", array2); 

// Exemplo 3: Usando copyWithin com valores negativos
const array3 = ['a', 'b', 'c', 'd', 'e'];
array3.copyWithin(-2, 0);
console.log("Array após copyWithin(-2, 0):", array3); 

// Exemplo 4: Copiar elementos especificando o índice final
const array4 = [1, 2, 3, 4, 5, 6];
array4.copyWithin(2, 0, 2);
console.log("Array após copyWithin(2, 0, 2):", array4); 
