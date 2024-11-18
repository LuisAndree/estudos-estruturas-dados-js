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
  
    // Retorna o número de pares chave-valor
    size() {
      return Object.keys(this.items).length;
    }
  
    // Remove todos os itens do dicionário
    clear() {
      this.items = {};
    }
  }
  
  // Testando o método forEach
  
  const dict = new Dictionary();
  
  // Adicionando pares chave-valor
  dict.set("nome", "Luis");
  dict.set("idade", 25);
  dict.set("cidade", "São Luís");
  
  // Iterando pelos pares chave-valor com forEach
  dict.forEach((key, value) => {
    console.log(`Chave: ${key}, Valor: ${value}`);
  });
  // Saída:
  // Chave: nome, Valor: Luis
  // Chave: idade, Valor: 25
  // Chave: cidade, Valor: São Luís
  