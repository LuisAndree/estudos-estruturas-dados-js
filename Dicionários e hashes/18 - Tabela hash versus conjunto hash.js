// Função de hash simples
function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Retorna o índice hash
  }
  
  // Classe HashTable (Tabela Hash)
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    set(key, value) {
      const index = hashCode(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      for (const pair of this.table[index]) {
        if (pair.key === key) {
          pair.value = value; // Atualiza o valor
          return;
        }
      }
      this.table[index].push({ key, value }); // Insere um novo par
    }
  
    get(key) {
      const index = hashCode(key);
      const bucket = this.table[index];
      if (bucket) {
        for (const pair of bucket) {
          if (pair.key === key) {
            return pair.value;
          }
        }
      }
      return undefined; // Retorna undefined se a chave não existir
    }
  
    remove(key) {
      const index = hashCode(key);
      const bucket = this.table[index];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            bucket.splice(i, 1); // Remove o par chave-valor
            if (bucket.length === 0) {
              delete this.table[index];
            }
            return true;
          }
        }
      }
      return false;
    }
  
    toString() {
      const result = [];
      for (const index in this.table) {
        for (const pair of this.table[index]) {
          result.push(`[${pair.key}: ${pair.value}]`);
        }
      }
      return result.join(", ");
    }
  }
  
  // Classe HashSet (Conjunto Hash)
  class HashSet {
    constructor() {
      this.table = {};
    }
  
    add(value) {
      const index = hashCode(value.toString());
      if (!this.table[index]) {
        this.table[index] = [];
      }
      if (!this.table[index].includes(value)) {
        this.table[index].push(value); // Adiciona o valor se ele não existir
      }
    }
  
    has(value) {
      const index = hashCode(value.toString());
      const bucket = this.table[index];
      return bucket ? bucket.includes(value) : false;
    }
  
    delete(value) {
      const index = hashCode(value.toString());
      const bucket = this.table[index];
      if (bucket) {
        const valueIndex = bucket.indexOf(value);
        if (valueIndex !== -1) {
          bucket.splice(valueIndex, 1); // Remove o valor
          if (bucket.length === 0) {
            delete this.table[index];
          }
          return true;
        }
      }
      return false;
    }
  
    toString() {
      const result = [];
      for (const index in this.table) {
        for (const value of this.table[index]) {
          result.push(`[${value}]`);
        }
      }
      return result.join(", ");
    }
  }
  
  // Testando as classes
  
  // Tabela Hash
  const hashTable = new HashTable();
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  console.log("Tabela Hash:");
  console.log(hashTable.toString());
  console.log("Valor para 'nome':", hashTable.get("nome"));
  hashTable.remove("idade");
  console.log("Tabela Hash após remoção:");
  console.log(hashTable.toString());
  
  // Conjunto Hash
  const hashSet = new HashSet();
  hashSet.add("Luis");
  hashSet.add("João");
  hashSet.add("Luis"); // Não será adicionado novamente
  console.log("\nConjunto Hash:");
  console.log(hashSet.toString());
  console.log("Conjunto contém 'Luis'?", hashSet.has("Luis"));
  hashSet.delete("Luis");
  console.log("Conjunto Hash após remoção:");
  console.log(hashSet.toString());
  