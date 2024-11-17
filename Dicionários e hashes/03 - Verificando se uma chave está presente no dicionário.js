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
  
  // Verificando se uma chave está presente
  console.log("A chave 'nome' está presente?", dict.has("nome")); // Saída: true
  console.log("A chave 'profissao' está presente?", dict.has("profissao")); // Saída: false
  
  // Acessando valores
  console.log("Nome:", dict.get("nome")); // Saída: "Luis"
  
  // Removendo uma chave
  dict.remove("nome");
  console.log("A chave 'nome' está presente?", dict.has("nome")); // Saída: false
  