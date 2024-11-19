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
      this.table = {}; // Armazena os buckets
    }
  
    // Método para adicionar ou atualizar uma chave e valor
    set(key, value) {
      const index = hashCode(key); // Gera o índice usando a função de hash
      if (!this.table[index]) {
        this.table[index] = []; // Cria um bucket vazio caso não exista
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
  
  // Testando a inserção de chave e valor
  const hashTable = new HashTable();
  
  // Inserindo pares chave-valor
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  
  // Exibindo a tabela hash
  console.log("Tabela Hash após inserções:");
  console.log(hashTable.toString()); // Exibe os pares chave-valor
  