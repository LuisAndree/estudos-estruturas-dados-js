// Função de hash simples
function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Retorna o índice hash
  }
  
  // Classe HashTable com sondagem linear
  class HashTable {
    constructor() {
      this.table = new Array(37); // Tamanho fixo da tabela
    }
  
    // Método para adicionar ou atualizar um par chave-valor
    put(key, value) {
      const index = hashCode(key);
      let position = index;
  
      // Sondagem linear para encontrar posição disponível
      while (this.table[position] !== undefined && this.table[position].key !== key) {
        position = (position + 1) % this.table.length; // Incrementa circularmente
      }
  
      // Armazena o valor na posição encontrada
      this.table[position] = { key, value };
    }
  
    // Método para obter o valor associado a uma chave
    get(key) {
      const index = hashCode(key);
      let position = index;
  
      // Sondagem linear para encontrar a chave
      while (this.table[position] !== undefined) {
        if (this.table[position].key === key) {
          return this.table[position].value;
        }
        position = (position + 1) % this.table.length; // Incrementa circularmente
        if (position === index) break; // Evita loop infinito
      }
  
      return undefined; // Retorna undefined se a chave não for encontrada
    }
  
    // Método para remover um par chave-valor
    remove(key) {
      const index = hashCode(key);
      let position = index;
  
      // Sondagem linear para encontrar a chave
      while (this.table[position] !== undefined) {
        if (this.table[position].key === key) {
          this.table[position] = undefined; // Marca como removido
          return true; // Remoção bem-sucedida
        }
        position = (position + 1) % this.table.length; // Incrementa circularmente
        if (position === index) break; // Evita loop infinito
      }
  
      return false; // Chave não encontrada
    }
  
    // Método para exibir a tabela como string
    toString() {
      return this.table
        .map((entry, index) => (entry ? `[${index}: ${entry.key} => ${entry.value}]` : `[${index}: vazio]`))
        .join(", ");
    }
  }
  
  // Testando a HashTable com sondagem linear
  
  const hashTable = new HashTable();
  
  // Adicionando pares chave-valor
  hashTable.put("nome", "Luis");
  hashTable.put("idade", 25);
  hashTable.put("cidade", "São Luís");
  hashTable.put("enom", "Outro Valor"); // Colisão com "nome"
  
  console.log("Tabela Hash (Sondagem Linear):");
  console.log(hashTable.toString());
  
  // Recuperando valores
  console.log("\nTestando o método get:");
  console.log("Valor para 'nome':", hashTable.get("nome")); // Luis
  console.log("Valor para 'idade':", hashTable.get("idade")); // 25
  console.log("Valor para 'enom':", hashTable.get("enom")); // Outro Valor
  console.log("Valor para 'estado':", hashTable.get("estado")); // undefined
  
  // Removendo valores
  console.log("\nTestando o método remove:");
  console.log("Removendo 'nome':", hashTable.remove("nome")); // true
  console.log("Removendo 'idade':", hashTable.remove("idade")); // true
  console.log("Tabela após remoções:");
  console.log(hashTable.toString());
  