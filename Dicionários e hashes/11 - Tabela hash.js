// Classe auxiliar para representar um par chave-valor
class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  
    toString() {
      return `[#${this.key}: ${this.value}]`;
    }
  }
  
  // Classe HashTable
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Função de hash simples para gerar índices
    hashCode(key) {
      if (typeof key === "number") return key;
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37; // Retorna o hash (37 é arbitrário e ajuda a evitar colisões)
    }
  
    // Adiciona ou atualiza uma chave-valor
    set(key, value) {
      const index = this.hashCode(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      // Verifica se a chave já existe e substitui
      for (const valuePair of this.table[index]) {
        if (valuePair.key === key) {
          valuePair.value = value;
          return;
        }
      }
      this.table[index].push(new ValuePair(key, value));
    }
  
    // Obtém o valor associado a uma chave
    get(key) {
      const index = this.hashCode(key);
      const bucket = this.table[index];
      if (bucket) {
        for (const valuePair of bucket) {
          if (valuePair.key === key) {
            return valuePair.value;
          }
        }
      }
      return undefined;
    }
  
    // Remove uma chave e seu valor
    remove(key) {
      const index = this.hashCode(key);
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
      return false;
    }
  
    // Retorna todas as chaves
    keys() {
      const keys = [];
      for (const index in this.table) {
        for (const valuePair of this.table[index]) {
          keys.push(valuePair.key);
        }
      }
      return keys;
    }
  
    // Retorna todos os valores
    values() {
      const values = [];
      for (const index in this.table) {
        for (const valuePair of this.table[index]) {
          values.push(valuePair.value);
        }
      }
      return values;
    }
  
    // Retorna a tabela como string
    toString() {
      if (Object.keys(this.table).length === 0) {
        return "HashTable is empty.";
      }
      const result = [];
      for (const index in this.table) {
        for (const valuePair of this.table[index]) {
          result.push(valuePair.toString());
        }
      }
      return result.join(", ");
    }
  }
  
  // Testando a HashTable
  
  const hashTable = new HashTable();
  
  // Adicionando pares chave-valor
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  hashTable.set("profissão", "Desenvolvedor");
  
  // Obtendo valores
  console.log("Valor para 'nome':", hashTable.get("nome")); // Saída: Luis
  console.log("Valor para 'profissão':", hashTable.get("profissão")); // Saída: Desenvolvedor
  
  // Exibindo todas as chaves e valores
  console.log("Chaves:", hashTable.keys()); // Saída: ['nome', 'idade', 'cidade', 'profissão']
  console.log("Valores:", hashTable.values()); // Saída: ['Luis', 25, 'São Luís', 'Desenvolvedor']
  
  // Removendo uma chave
  hashTable.remove("cidade");
  console.log("Após remover 'cidade':", hashTable.toString());
  
  // Exibindo a tabela completa
  console.log("Tabela Hash:", hashTable.toString());
  