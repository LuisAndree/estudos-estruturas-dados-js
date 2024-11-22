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
  
  // Classe HashTable com o método remove
  class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Método para adicionar ou atualizar um par chave-valor
    put(key, value) {
      const index = hashCode(key);
      if (!this.table[index]) {
        this.table[index] = new Node(key, value);
      } else {
        let current = this.table[index];
        while (current) {
          if (current.key === key) {
            current.value = value; // Atualiza o valor se a chave existir
            return;
          }
          if (!current.next) {
            current.next = new Node(key, value); // Adiciona ao final
            return;
          }
          current = current.next;
        }
      }
    }
  
    // Método para obter o valor associado a uma chave
    get(key) {
      const index = hashCode(key);
      let current = this.table[index];
      while (current) {
        if (current.key === key) {
          return current.value; // Retorna o valor correspondente
        }
        current = current.next;
      }
      return undefined; // Retorna undefined se a chave não for encontrada
    }
  
    // Método remove para excluir um par chave-valor
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
      return false; // Falha na remoção (chave não encontrada)
    }
  
    // Método para exibir a tabela como string
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
  
  // Testando o método remove na HashTable
  
  const hashTable = new HashTable();
  hashTable.put("nome", "Luis");
  hashTable.put("idade", 25);
  hashTable.put("cidade", "São Luís");
  hashTable.put("enom", "Outro Valor"); // Colisão com "nome"
  
  console.log("Tabela Hash:");
  console.log(hashTable.toString());
  
  console.log("\nRemovendo a chave 'nome':", hashTable.remove("nome")); // true
  console.log("Tabela Hash após remover 'nome':");
  console.log(hashTable.toString());
  
  console.log("\nRemovendo a chave 'idade':", hashTable.remove("idade")); // true
  console.log("Tabela Hash após remover 'idade':");
  console.log(hashTable.toString());
  
  console.log("\nTentando remover uma chave inexistente 'estado':", hashTable.remove("estado")); // false
  console.log("Tabela Hash:");
  console.log(hashTable.toString());
  