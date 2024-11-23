  // Função de hash simples aprimorada
function hashCodeBasic(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % 37; // Multiplica por um número primo
    }
    return hash;
  }
  
  // Função de hash aprimorada para tabelas maiores
  function hashCodeAdvanced(key, tableSize = 37) {
    let hash = 0;
    let primeMultiplier = 53; // Número primo maior para melhor distribuição
    for (let i = 0; i < key.length; i++) {
      hash = (hash * primeMultiplier + key.charCodeAt(i)) % tableSize;
    }
    return hash;
  }
  
  // Classe HashTable com suporte a diferentes funções de hash
  class HashTable {
    constructor(hashFunction = hashCodeBasic, tableSize = 37) {
      this.table = new Array(tableSize);
      this.hashFunction = hashFunction; // Permite usar funções de hash diferentes
      this.tableSize = tableSize;
    }
  
    // Método para adicionar ou atualizar um par chave-valor
    put(key, value) {
      const index = this.hashFunction(key, this.tableSize);
      let position = index;
  
      // Sondagem linear para encontrar posição disponível
      while (this.table[position] !== undefined && this.table[position].key !== key) {
        position = (position + 1) % this.tableSize; // Incrementa circularmente
      }
  
      this.table[position] = { key, value };
    }
  
    // Método para obter o valor associado a uma chave
    get(key) {
      const index = this.hashFunction(key, this.tableSize);
      let position = index;
  
      while (this.table[position] !== undefined) {
        if (this.table[position].key === key) {
          return this.table[position].value;
        }
        position = (position + 1) % this.tableSize;
        if (position === index) break; // Evita loop infinito
      }
  
      return undefined;
    }
  
    // Método para remover um par chave-valor
    remove(key) {
      const index = this.hashFunction(key, this.tableSize);
      let position = index;
  
      while (this.table[position] !== undefined) {
        if (this.table[position].key === key) {
          this.table[position] = undefined;
  
          position = (position + 1) % this.tableSize;
          while (this.table[position] !== undefined) {
            const temp = this.table[position];
            this.table[position] = undefined;
            this.put(temp.key, temp.value);
            position = (position + 1) % this.tableSize;
          }
          return true;
        }
        position = (position + 1) % this.tableSize;
        if (position === index) break;
      }
  
      return false;
    }
  
    // Método para exibir a tabela como string
    toString() {
      return this.table
        .map((entry, index) => (entry ? `[${index}: ${entry.key} => ${entry.value}]` : `[${index}: vazio]`))
        .join(", ");
    }
  }
  
  // Testando o HashTable com funções de hash melhoradas
  
  const hashTableBasic = new HashTable(hashCodeBasic);
  const hashTableAdvanced = new HashTable(hashCodeAdvanced, 101); // Tabela maior
  
  // Testando com a função básica
  console.log("Tabela Hash com Função Básica:");
  hashTableBasic.put("nome", "Luis");
  hashTableBasic.put("idade", 25);
  hashTableBasic.put("cidade", "São Luís");
  hashTableBasic.put("enom", "Outro Valor"); // Colisão com "nome"
  console.log(hashTableBasic.toString());
  
  // Testando com a função avançada
  console.log("\nTabela Hash com Função Avançada:");
  hashTableAdvanced.put("nome", "Luis");
  hashTableAdvanced.put("idade", 25);
  hashTableAdvanced.put("cidade", "São Luís");
  hashTableAdvanced.put("enom", "Outro Valor"); // Colisão reduzida
  console.log(hashTableAdvanced.toString());
  