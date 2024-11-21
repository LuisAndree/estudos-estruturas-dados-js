// Função de hash simples
function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Retorna o índice hash
  }
  
  // Classe Node para listas ligadas
  class Node {
    constructor(key, value, next = null) {
      this.key = key;
      this.value = value;
      this.next = next;
    }
  }
  
  // Classe HashTable com tratamento de colisões
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    set(key, value) {
      const index = hashCode(key);
      if (!this.table[index]) {
        this.table[index] = new Node(key, value); // Cria um novo nó
      } else {
        let current = this.table[index];
        while (current) {
          if (current.key === key) {
            current.value = value; // Atualiza o valor se a chave já existir
            return;
          }
          if (!current.next) {
            current.next = new Node(key, value); // Adiciona no final da lista ligada
            return;
          }
          current = current.next;
        }
      }
    }
  
    get(key) {
      const index = hashCode(key);
      let current = this.table[index];
      while (current) {
        if (current.key === key) {
          return current.value; // Retorna o valor correspondente à chave
        }
        current = current.next;
      }
      return undefined; // Retorna undefined se a chave não for encontrada
    }
  
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
          return true;
        }
        previous = current;
        current = current.next;
      }
      return false; // Retorna false se a chave não for encontrada
    }
  
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
  
  // Testando a tabela hash com tratamento de colisões
  
  const hashTable = new HashTable();
  hashTable.set("nome", "Luis");
  hashTable.set("idade", 25);
  hashTable.set("cidade", "São Luís");
  hashTable.set("enom", "Outro Valor"); // Colisão com "nome" (hashCode igual)
  
  console.log("Tabela Hash:");
  console.log(hashTable.toString());
  console.log("Valor para 'nome':", hashTable.get("nome"));
  console.log("Valor para 'enom':", hashTable.get("enom"));
  hashTable.remove("nome");
  console.log("Tabela Hash após remover 'nome':");
  console.log(hashTable.toString());
  