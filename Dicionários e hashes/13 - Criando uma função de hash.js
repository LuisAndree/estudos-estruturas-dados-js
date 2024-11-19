// Função de hash para gerar índices
function hashCode(key) {
    if (typeof key === "number") return key; // Caso a chave já seja um número
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // Soma os códigos ASCII dos caracteres
    }
    return hash % 37; // Retorna o hash com base no módulo de 37
  }
  
  // Classe HashTable
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Adiciona ou atualiza um par chave-valor
    set(key, value) {
      const index = hashCode(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      // Verifica se a chave já existe no bucket
      for (const item of this.table[index]) {
        if (item.key === key) {
          item.value = value; // Atualiza o valor
          return;
        }
      }
      // Adiciona um novo par chave-valor
      this.table[index].push({ key, value });
    }
  
    // Obtém o valor associado a uma chave
    get(key) {
      const index = hashCode(key);
      const bucket = this.table[index];
      if (bucket) {
        for (const item of bucket) {
          if (item.key === key) {
            return item.value;
          }
        }
      }
      return undefined; // Retorna undefined se a chave não for encontrada
    }
  
    // Remove uma chave e seu valor
    remove(key) {
      const index = hashCode(key);
      const bucket = this.table[index];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            bucket.splice(i, 1); // Remove o par chave-valor
            if (bucket.length === 0) {
              delete this.table[index]; // Remove o bucket vazio
            }
            return true;
          }
        }
      }
      return false; // Retorna false se a chave não existir
    }
  
    // Retorna todas as chaves
    keys() {
      const keys = [];
      for (const index in this.table) {
        for (const item of this.table[index]) {
          keys.push(item.key);
        }
      }
      return keys;
    }
  
    // Retorna todos os valores
    values() {
      const values = [];
      for (const index in this.table) {
        for (const item of this.table[index]) {
          values.push(item.value);
        }
      }
      return values;
    }
  
    // Exibe a tabela hash como string
    toString() {
      if (Object.keys(this.table).length === 0) {
        return "HashTable is empty.";
      }
      const result = [];
      for (const index in this.table) {
        for (const item of this.table[index]) {
          result.push(`[${item.key}: ${item.value}]`);
        }
      }
      return result.join(", ");
    }
  }
  
  // Testando a classe HashTable
  const hashTable = new HashTable();
  
  // Adicionando pares chave-valor
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  hashTable.set("profissão", "Desenvolvedor");
  
  // Exibindo chaves e valores
  console.log("Chaves:", hashTable.keys()); // ["nome", "idade", "cidade", "profissão"]
  console.log("Valores:", hashTable.values()); // ["Luis", 25, "São Luís", "Desenvolvedor"]
  
  // Obtendo valores
  console.log("Valor para 'cidade':", hashTable.get("cidade")); // "São Luís"
  
  // Atualizando um valor
  hashTable.set("idade", 26);
  console.log("Valor atualizado para 'idade':", hashTable.get("idade")); // 26
  
  // Removendo uma chave
  hashTable.remove("profissão");
  console.log("Após remover 'profissão':", hashTable.keys()); // ["nome", "idade", "cidade"]
  
  // Exibindo a tabela como string
  console.log("Tabela Hash:", hashTable.toString());
  // [nome: Luis], [idade: 26], [cidade: São Luís]
  