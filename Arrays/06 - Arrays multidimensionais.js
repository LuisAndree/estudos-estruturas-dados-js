//Exemplos do livro

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

console.table(matrix3x3x3);

// 1. Criando um Array Multidimensional 5x5x5
const array5x5x5 = [];

let value = 1;
for (let i = 0; i < 5; i++) {
    array5x5x5[i] = [];
    for (let j = 0; j < 5; j++) {
        array5x5x5[i][j] = [];
        for (let k = 0; k < 5; k++) {
            array5x5x5[i][j][k] = value++;
        }
    }
}

// 2. Acessando elementos do Array Multidimensional
console.log("Elemento na posição [0][0][0]:", array5x5x5[0][0][0]);
console.log("Elemento na posição [4][4][4]:", array5x5x5[4][4][4]);

// 3. Iterando sobre o Array Multidimensional
console.log("Iterando sobre o array multidimensional 5x5x5:");
for (let i = 0; i < array5x5x5.length; i++) {
    for (let j = 0; j < array5x5x5[i].length; j++) {
        for (let k = 0; k < array5x5x5[i][j].length; k++) {
            console.log(`Elemento na posição [${i}][${j}][${k}]:`, array5x5x5[i][j][k]);
        }
    }
}

// 4. Modificando um elemento específico
array5x5x5[2][2][2] = 999;
console.log("Elemento na posição [2][2][2] após modificação:", array5x5x5[2][2][2]);

// 5. Adicionando uma nova camada ao Array Multidimensional
array5x5x5.push([
    [[126, 127, 128, 129, 130], [131, 132, 133, 134, 135], [136, 137, 138, 139, 140], [141, 142, 143, 144, 145], [146, 147, 148, 149, 150]],
    [[151, 152, 153, 154, 155], [156, 157, 158, 159, 160], [161, 162, 163, 164, 165], [166, 167, 168, 169, 170], [171, 172, 173, 174, 175]],
    [[176, 177, 178, 179, 180], [181, 182, 183, 184, 185], [186, 187, 188, 189, 190], [191, 192, 193, 194, 195], [196, 197, 198, 199, 200]],
    [[201, 202, 203, 204, 205], [206, 207, 208, 209, 210], [211, 212, 213, 214, 215], [216, 217, 218, 219, 220], [221, 222, 223, 224, 225]],
    [[226, 227, 228, 229, 230], [231, 232, 233, 234, 235], [236, 237, 238, 239, 240], [241, 242, 243, 244, 245], [246, 247, 248, 249, 250]]
]);

console.log("Novo elemento adicionado ao array multidimensional:");
console.log(array5x5x5[5]); 
