// 1. Criando um Array Bidimensional (Matriz)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 2. Acessando elementos de um Array Bidimensional
console.log("Elemento na posição [0][0]:", matrix[0][0]); 
console.log("Elemento na posição [1][1]:", matrix[1][1]); 
console.log("Elemento na posição [2][2]:", matrix[2][2]); 

// 3. Iterando sobre um Array Bidimensional
console.log("Iterando sobre a matriz:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Elemento na posição [${i}][${j}]:`, matrix[i][j]);
    }
}

// 4. Criando um Array Multidimensional
const multiDimensionalArray = [
    [[1, 2], [3, 4]],  
    [[5, 6], [7, 8]]   
];

// 5. Acessando elementos de um Array Multidimensional
console.log("Elemento na posição [0][1][0]:", multiDimensionalArray[0][1][0]); 
console.log("Elemento na posição [1][0][1]:", multiDimensionalArray[1][0][1]); 

// 6. Iterando sobre um Array Multidimensional
console.log("Iterando sobre o array multidimensional:");
for (let i = 0; i < multiDimensionalArray.length; i++) {
    for (let j = 0; j < multiDimensionalArray[i].length; j++) {
        for (let k = 0; k < multiDimensionalArray[i][j].length; k++) {
            console.log(`Elemento na posição [${i}][${j}][${k}]:`, multiDimensionalArray[i][j][k]);
        }
    }
}

matrix[0].push(10); 
console.log("Matriz após adicionar 10 à primeira linha:", matrix);

const removedElement = matrix[1].splice(1, 1); 
console.log("Elemento removido:", removedElement);
console.log("Matriz após remover elemento:", matrix);
