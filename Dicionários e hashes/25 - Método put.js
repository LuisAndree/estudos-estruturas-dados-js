// Função de hash simples
function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Retorna o índice hash
  }
  
  // Classe HashTable com o método put
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
  
    // Método para exibir a tabela como string
    toString() {
      return this.table
        .map((entry, index) => (entry ? `[${index}: ${entry.key} => ${entry.value}]` : `[${index}: vazio]`))
        .join(", ");
    }
  }
  
  // Testando o método put na HashTable
  
  const hashTable = new HashTable();
  
  // Adicionando pares chave-valor
  hashTable.put("nome", "Luis");
  hashTable.put("idade", 25);
  hashTable.put("cidade", "São Luís");
  hashTable.put("enom", "Outro Valor"); // Colisão com "nome"
  
  console.log("Tabela Hash (Sondagem Linear):");
  console.log(hashTable.toString());
  