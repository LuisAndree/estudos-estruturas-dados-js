// Função de hash simples
function hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Retorna o índice hash
  }
  
  // Classe HashTable com o método remove
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
  
    // Método para remover uma chave e seu valor da tabela hash
    remove(key) {
      const index = hashCode(key);
      let position = index;
  
      // Localiza a posição da chave
      while (this.table[position] !== undefined) {
        if (this.table[position].key === key) {
          this.table[position] = undefined; // Remove o item
  
          // Reposiciona os elementos subsequentes
          position = (position + 1) % this.table.length;
          while (this.table[position] !== undefined) {
            const temp = this.table[position];
            this.table[position] = undefined; // Remove o item atual
            this.put(temp.key, temp.value); // Reinsere o item
            position = (position + 1) % this.table.length;
          }
          return true; // Indica que a remoção foi bem-sucedida
        }
        position = (position + 1) % this.table.length; // Incrementa circularmente
        if (position === index) break; // Evita loop infinito
      }
  
      return false; // Retorna falso se a chave não foi encontrada
    }
  
    // Método para exibir a tabela como string
    toString() {
      return this.table
        .map((entry, index) => (entry ? `[${index}: ${entry.key} => ${entry.value}]` : `[${index}: vazio]`))
        .join(", ");
    }
  }
  
  // Testando o método remove na HashTable
  
  const hashTable = new HashTable();
  
  // Adicionando pares chave-valor
  hashTable.put("nome", "Luis");
  hashTable.put("idade", 25);
  hashTable.put("cidade", "São Luís");
  hashTable.put("enom", "Outro Valor"); // Colisão com "nome"
  
  console.log("Tabela Hash (Antes da Remoção):");
  console.log(hashTable.toString());
  
  // Removendo itens
  console.log("\nRemovendo 'nome':", hashTable.remove("nome")); // true
  console.log("Removendo 'idade':", hashTable.remove("idade")); // true
  console.log("Removendo 'estado':", hashTable.remove("estado")); // false (não existe)
  
  console.log("\nTabela Hash (Após as Remoções):");
  console.log(hashTable.toString());
  