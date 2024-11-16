// Classe para representar um multiconjunto (bag)
class Multiconjunto {
    constructor() {
      this.itens = new Map();
    }
  
    // Adiciona um elemento ao multiconjunto
    adicionar(elemento) {
      this.itens.set(elemento, (this.itens.get(elemento) || 0) + 1);
    }
  
    // Remove uma ocorrência do elemento
    remover(elemento) {
      if (this.itens.has(elemento)) {
        const frequencia = this.itens.get(elemento);
        if (frequencia > 1) {
          this.itens.set(elemento, frequencia - 1);
        } else {
          this.itens.delete(elemento);
        }
      }
    }
  
    // Retorna a frequência de um elemento
    frequencia(elemento) {
      return this.itens.get(elemento) || 0;
    }
  
    // Retorna todos os elementos como uma array (repetido conforme a frequência)
    elementos() {
      const resultado = [];
      for (const [elemento, freq] of this.itens.entries()) {
        resultado.push(...Array(freq).fill(elemento));
      }
      return resultado;
    }
  
    // Exibe o conteúdo do multiconjunto
    exibir() {
      console.log("Multiconjunto:", this.elementos());
    }
  }
  
  // Exemplo de uso
  const bag = new Multiconjunto();
  bag.adicionar(1);
  bag.adicionar(2);
  bag.adicionar(1); // Adiciona o elemento 1 novamente
  bag.adicionar(3);
  bag.adicionar(2); // Adiciona o elemento 2 novamente
  
  console.log("Frequência de 1:", bag.frequencia(1)); // Saída: 2
  console.log("Frequência de 2:", bag.frequencia(2)); // Saída: 2
  console.log("Frequência de 3:", bag.frequencia(3)); // Saída: 1
  
  bag.remover(1); // Remove uma ocorrência de 1
  bag.exibir(); // Saída: [1, 2, 2, 3]
  