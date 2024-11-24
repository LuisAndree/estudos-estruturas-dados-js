// Criando um WeakMap
const weakMap = new WeakMap();

let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

// Adicionando pares chave-valor
weakMap.set(obj1, 'Valor para o obj1');
weakMap.set(obj2, 'Valor para o obj2');

// Recuperando valores
console.log(weakMap.get(obj1)); // Valor para o obj1

// Verificando chaves
console.log(weakMap.has(obj2)); // true

// Removendo uma chave
weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // false

// Se obj2 não for mais referenciado, será removido automaticamente
obj2 = null; // Garbage collector poderá limpar obj2
