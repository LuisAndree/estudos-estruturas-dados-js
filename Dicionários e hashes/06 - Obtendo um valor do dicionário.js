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
  
    // Remove o primeiro par que contém o valor especificado
    removeByValue(value) {
      for (const key in this.items) {
        if (this.items[key].value === value) {
          delete this.items[key];
          return true;
        }
      }
      return false; // Valor não encontrado
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
  
    // Retorna o número de pares chave-valor
    size() {
      return Object.keys(this.items).length;
    }
  
    // Remove todos os itens do dicionário
    clear() {
      this.items = {};
    }
  }
  
  // Testando o dicionário
  
  const dict = new Dictionary();
  
  // Adicionando pares chave-valor
  dict.set("nome", "Luis");
  dict.set("idade", 25);
  dict.set("cidade", "São Luís");
  
  // Obtendo valores do dicionário
  console.log("Nome:", dict.get("nome")); // Saída: "Luis"
  console.log("Idade:", dict.get("idade")); // Saída: 25
  console.log("Cidade:", dict.get("cidade")); // Saída: "São Luís"
  
  // Verificando se uma chave existe
  console.log("Contém 'cidade'?", dict.has("cidade")); // Saída: true
  console.log("Contém 'profissao'?", dict.has("profissao")); // Saída: false
  
  // Atualizando valores existentes
  dict.set("nome", "André");
  console.log("Nome atualizado:", dict.get("nome")); // Saída: "André"
  
  // Listando todas as chaves e valores
  console.log("Chaves:", dict.keys()); // Saída: ["nome", "idade", "cidade"]
  console.log("Valores:", dict.values()); // Saída: ["André", 25, "São Luís"]
  
  // Removendo por valor
  console.log("Removendo o valor 'São Luís':", dict.removeByValue("São Luís")); // Saída: true
  console.log("Chaves após remoção por valor:", dict.keys()); // Saída: ["nome", "idade"]
  
  // Removendo por chave
  dict.remove("idade");
  console.log("Chaves após remover 'idade':", dict.keys()); // Saída: ["nome"]
  
  // Limpando o dicionário
  dict.clear();
  console.log("Tamanho após limpar:", dict.size()); // Saída: 0
  