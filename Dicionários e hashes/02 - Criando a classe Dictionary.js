class Dictionary {
    constructor() {
      this.items = {}; // Armazena os pares chave-valor
    }
  
    // Adiciona ou atualiza uma chave-valor
    set(key, value) {
      this.items[key] = value;
    }
  
    // Retorna o valor associado a uma chave
    get(key) {
      return this.has(key) ? this.items[key] : undefined;
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
  
  // Exemplo de uso
  const dict = new Dictionary();
  
  // Adicionando pares chave-valor
  dict.set("nome", "Luis");
  dict.set("idade", 25);
  dict.set("cidade", "São Luís");
  
  // Acessando valores
  console.log("Nome:", dict.get("nome")); // Saída: "Luis"
  console.log("Idade:", dict.get("idade")); // Saída: 25
  
  // Verificando se uma chave existe
  console.log("Contém 'cidade'?", dict.has("cidade")); // Saída: true
  
  // Removendo um item
  dict.remove("cidade");
  console.log("Contém 'cidade'?", dict.has("cidade")); // Saída: false
  
  // Listando chaves e valores
  console.log("Chaves:", dict.keys()); // Saída: ["nome", "idade"]
  console.log("Valores:", dict.values()); // Saída: ["Luis", 25]
  
  // Obtendo o tamanho do dicionário
  console.log("Tamanho:", dict.size()); // Saída: 2
  
  // Limpando o dicionário
  dict.clear();
  console.log("Tamanho após limpar:", dict.size()); // Saída: 0
  