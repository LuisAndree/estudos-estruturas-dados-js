// Exemplo 1: Usando @@iterator com um Array
const numbers = [10, 20, 30];

// Obtendo o iterador do array usando Symbol.iterator
const iterator = numbers[Symbol.iterator]();

// Usando o iterador manualmente para percorrer os elementos do array
let result = iterator.next();
while (!result.done) {
    console.log("Valor:", result.value); 
    result = iterator.next();
}

// Exemplo 2: Implementando um Iterador Personalizado
const customIterable = {
    data: ['A', 'B', 'C'],
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;

        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// Usando for...of para iterar sobre o objeto personalizado
for (const letter of customIterable) {
    console.log("Letra:", letter); 
}

// Usando o iterador manualmente
const customIterator = customIterable[Symbol.iterator]();
let customResult = customIterator.next();
while (!customResult.done) {
    console.log("Valor:", customResult.value); 
    customResult = customIterator.next();
}
