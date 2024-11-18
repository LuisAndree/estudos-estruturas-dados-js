// Classe auxiliar para representar um par chave-valor
class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  
    toString() {
      return `[#${this.key}: ${this.value}]`;
    }
  }
  
  // Classe Dictionary
  class Dictionary {
    constructor() {
      this.items = {}; // Armazena pares chave-valor como objetos
    }
  
    // Adiciona ou atualiza uma chave-valor
    set(key, value) {
      this.items[key] = new ValuePair(key, value);
    }
  
    // Remove todos os itens do dicionário
    clear() {
      this.items = {};
    }
  
    // Retorna o número de pares chave-valor
    size() {
      return Object.keys(this.items).length;
    }
  
    // Verifica se o dicionário está vazio
    isEmpty() {
      return this.size() === 0;
    }
  
    // Converte o dicionário para uma string legível
    toString() {
      if (this.isEmpty()) {
        return "Dictionary is empty.";
      }
      return Object.values(this.items)
        .map((valuePair) => valuePair.toString())
        .join(", ");
    }
  }
  
  // Testando os métodos clear, size, isEmpty e toString
  
  const dict = new Dictionary();
  
  // Adicionando pares chave-valor
  dict.set("nome", "Luis");
  dict.set("idade", 25);
  dict.set("cidade", "São Luís");
  
  console.log("Tamanho do dicionário:", dict.size()); // Saída: 3
  console.log("O dicionário está vazio?", dict.isEmpty()); // Saída: false
  
  // Exibindo o dicionário como string
  console.log("Dicionário:", dict.toString());
  // Saída: [#nome: Luis], [#idade: 25], [#cidade: São Luís]
  
  // Limpando o dicionário
  dict.clear();
  
  console.log("Tamanho após limpar:", dict.size()); // Saída: 0
  console.log("O dicionário está vazio?", dict.isEmpty()); // Saída: true
  console.log("Dicionário após limpar:", dict.toString()); // Saída: Dictionary is empty.
  