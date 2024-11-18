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
  
    // Obtém o valor associado a uma chave
    get(key) {
      return this.has(key) ? this.items[key].value : undefined;
    }
  
    // Verifica se uma chave existe
    has(key) {
      return Object.prototype.hasOwnProperty.call(this.items, key);
    }
  
    // Remove uma chave e seu valor
    remove(key) {
      if (this.has(key)) {
        delete this.items[key];
        return true;
      }
      return false;
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
  
    // Retorna todas as chaves
    keys() {
      return Object.keys(this.items);
    }
  
    // Retorna todos os valores
    values() {
      return Object.values(this.items).map((valuePair) => valuePair.value);
    }
  
    // Retorna todas as entradas (chave-valor como objetos ValuePair)
    entries() {
      return Object.values(this.items);
    }
  
    // Itera por cada ValuePair com um callback
    forEach(callback) {
      const entries = this.entries();
      for (const valuePair of entries) {
        callback(valuePair.key, valuePair.value);
      }
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
  
  // Usando a classe Dictionary
  
  const dict = new Dictionary();
  
  // Adicionando pares chave-valor
  dict.set("nome", "Luis");
  dict.set("idade", 25);
  dict.set("cidade", "São Luís");
  
  // Verificando as chaves, valores e pares
  console.log("Chaves:", dict.keys()); // Saída: ["nome", "idade", "cidade"]
  console.log("Valores:", dict.values()); // Saída: ["Luis", 25, "São Luís"]
  console.log("Pares chave-valor:");
  dict.entries().forEach((entry) => console.log(entry.toString()));
  // Saída:
  // [#nome: Luis]
  // [#idade: 25]
  // [#cidade: São Luís]
  
  // Obtendo valores individuais
  console.log("Nome:", dict.get("nome")); // Saída: "Luis"
  console.log("Cidade:", dict.get("cidade")); // Saída: "São Luís"
  
  // Verificando se uma chave existe
  console.log("Contém 'idade'?", dict.has("idade")); // Saída: true
  console.log("Contém 'profissão'?", dict.has("profissão")); // Saída: false
  
  // Atualizando um valor
  dict.set("idade", 26);
  console.log("Idade atualizada:", dict.get("idade")); // Saída: 26
  
  // Iterando com forEach
  dict.forEach((key, value) => {
    console.log(`Chave: ${key}, Valor: ${value}`);
  });
  // Saída:
  // Chave: nome, Valor: Luis
  // Chave: idade, Valor: 26
  // Chave: cidade, Valor: São Luís
  
  // Limpando o dicionário
  dict.clear();
  console.log("Tamanho após limpar:", dict.size()); // Saída: 0
  console.log("O dicionário está vazio?", dict.isEmpty()); // Saída: true
  console.log("Dicionário após limpar:", dict.toString()); // Saída: Dictionary is empty.
  