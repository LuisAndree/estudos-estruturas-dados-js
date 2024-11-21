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
  
    // Método para obter um valor associado a uma chave
    get(key) {
      const index = hashCode(key); // Gera o índice para a chave
      const bucket = this.table[index]; // Obtém o bucket do índice
      if (bucket) {
        for (const item of bucket) {
          if (item.key === key) {
            return item.value; // Retorna o valor correspondente à chave
          }
        }
      }
      return undefined; // Retorna undefined se a chave não for encontrada
    }
  
    // Método para remover um valor associado a uma chave
    remove(key) {
      const index = hashCode(key); // Gera o índice para a chave
      const bucket = this.table[index]; // Obtém o bucket do índice
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i].key === key) {
            bucket.splice(i, 1); // Remove o par chave-valor do bucket
            if (bucket.length === 0) {
              delete this.table[index]; // Remove o bucket vazio
            }
            return true; // Indica que a remoção foi bem-sucedida
          }
        }
      }
      return false; // Retorna false se a chave não for encontrada
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
  
  // Inserindo pares chave-valor
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  
  // Removendo um valor
  console.log("Removendo 'cidade':", hashTable.remove("cidade")); // true
  console.log("Removendo 'profissão':", hashTable.remove("profissão")); // false
  
  // Verificando os valores restantes
  console.log("Tabela Hash após remoções:");
  console.log(hashTable.toString()); // [nome: Luis], [idade: 25]
  