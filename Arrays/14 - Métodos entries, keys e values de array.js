// Criando um array de exemplo
const array = ['a', 'b', 'c'];

// Usando o método entries()
const entries = array.entries();
console.log("Usando entries():");
for (const [index, element] of entries) {
    console.log(index, element); 
}

// Usando o método keys()
const keys = array.keys();
console.log("Usando keys():");
for (const key of keys) {
    console.log(key); 
}

// Usando o método values()
const values = array.values();
console.log("Usando values():");
for (const value of values) {
    console.log(value); 
}
