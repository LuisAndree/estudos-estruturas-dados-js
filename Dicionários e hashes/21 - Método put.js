// Função de hash simples
function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Retorna o índice hash
  }
  
  // Classe Node para encadeamento separado
  class Node {
    constructor(key, value, next = null) {
      this.key = key;
      this.value = value;
      this.next = next;
    }
  }
  
  // Classe HashTable com encadeamento separado e método put
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Método put para adicionar ou atualizar um par chave-valor
    put(key, value) {
      const index = hashCode(key);
      if (!this.table[index]) {
        this.table[index] = new Node(key, value); // Cria um novo nó
      } else {
        let current = this.table[index];
        while (current) {
          if (current.key === key) {
            current.value = value; // Atualiza o valor se a chave existir
            return;
          }
          if (!current.next) {
            current.next = new Node(key, value); // Adiciona no final
            return;
          }
          current = current.next;
        }
      }
    }
  
    // Obtém o valor associado à chave
    get(key) {
      const index = hashCode(key);
      let current = this.table[index];
      while (current) {
        if (current.key === key) {
          return current.value; // Retorna o valor
        }
        current = current.next;
      }
      return undefined; // Retorna undefined se a chave não existir
    }
  
    // Remove um par chave-valor
    remove(key) {
      const index = hashCode(key);
      let current = this.table[index];
      let previous = null;
  
      while (current) {
        if (current.key === key) {
          if (previous) {
            previous.next = current.next; // Remove o nó ajustando a ligação
          } else {
            this.table[index] = current.next; // Remove o primeiro nó
          }
          return true; // Sucesso na remoção
        }
        previous = current;
        current = current.next;
      }
      return false; // Falha na remoção
    }
  
    // Retorna a representação da tabela hash como string
    toString() {
      const result = [];
      for (const index in this.table) {
        let current = this.table[index];
        while (current) {
          result.push(`[${current.key}: ${current.value}]`);
          current = current.next;
        }
      }
      return result.join(", ");
    }
  }
  
  // Testando a HashTable com o método put
  
  const hashTable = new HashTable();
  hashTable.put("nome", "Luis");
  hashTable.put("idade", 25);
  hashTable.put("cidade", "São Luís");
  hashTable.put("enom", "Outro Valor"); // Colisão com "nome"
  
  console.log("Tabela Hash:");
  console.log(hashTable.toString());
  console.log("Valor para 'nome':", hashTable.get("nome"));
  console.log("Valor para 'enom':", hashTable.get("enom"));
  console.log("Valor para 'idade':", hashTable.get("idade"));
  
  hashTable.remove("nome");
  console.log("\nTabela Hash após remover 'nome':");
  console.log(hashTable.toString());
  
  hashTable.put("idade", 30); // Atualizando "idade"
  console.log("\nTabela Hash após atualizar 'idade':");
  console.log(hashTable.toString());
  