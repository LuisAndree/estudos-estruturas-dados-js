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
  
  // Classe HashTable com encadeamento separado
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Adiciona ou atualiza um par chave-valor
    set(key, value) {
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
  
  // Testando a HashTable com encadeamento separado
  
  const hashTable = new HashTable();
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  hashTable.set("enom", "Outro Valor"); // Colisão com "nome"
  
  console.log("Tabela Hash:");
  console.log(hashTable.toString());
  console.log("Valor para 'nome':", hashTable.get("nome"));
  console.log("Valor para 'enom':", hashTable.get("enom"));
  console.log("Valor para 'idade':", hashTable.get("idade"));
  
  hashTable.remove("nome");
  console.log("\nTabela Hash após remover 'nome':");
  console.log(hashTable.toString());
  
  hashTable.set("idade", 30); // Atualizando "idade"
  console.log("\nTabela Hash após atualizar 'idade':");
  console.log(hashTable.toString());
