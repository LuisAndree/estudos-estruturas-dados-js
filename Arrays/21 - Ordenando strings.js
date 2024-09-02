// Exemplo 1: Ordenando strings em ordem alfabética
const fruits = ["banana", "apple", "grape", "cherry", "pear"];
fruits.sort();
console.log("Frutas em ordem alfabética:", fruits);

// Exemplo 2: Ordenando strings em ordem alfabética inversa
const fruitsDesc = ["banana", "apple", "grape", "cherry", "pear"];
fruitsDesc.sort().reverse();
console.log("Frutas em ordem alfabética inversa:", fruitsDesc);

// Exemplo 3: Ordenando strings ignorando maiúsculas e minúsculas
const mixedCaseFruits = ["Banana", "apple", "Grape", "cherry", "Pear"];
mixedCaseFruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Frutas ordenadas ignorando maiúsculas e minúsculas:", mixedCaseFruits);

// Exemplo 4: Ordenando strings por comprimento (do menor para o maior)
const fruitsByLength = ["banana", "apple", "grape", "cherry", "pear"];
fruitsByLength.sort((a, b) => a.length - b.length);
console.log("Frutas ordenadas por comprimento:", fruitsByLength);

// Exemplo 5: Ordenando strings por comprimento (do maior para o menor)
const fruitsByLengthDesc = ["banana", "apple", "grape", "cherry", "pear"];
fruitsByLengthDesc.sort((a, b) => b.length - a.length);
console.log("Frutas ordenadas por comprimento (maior para menor):", fruitsByLengthDesc);

// Exemplo 6: Ordenando strings com caracteres especiais
const specialChars = ["çebra", "árvore", "elefante", "baleia", "ímã"];
specialChars.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));
console.log("Strings com caracteres especiais ordenadas:", specialChars);
