class Stack {
    constructor() {
      this.items = []; 
    }
  
    // Adiciona um elemento no topo da pilha
    push(element) {
      this.items.push(element);
    }
  
    // Remove e retorna o elemento do topo da pilha
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; 
      }
      return this.items.pop();
    }
  
    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack"; 
      }
      return this.items[this.items.length - 1];
    }
  
    // Verifica se a pilha está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Retorna o tamanho da pilha
    size() {
      return this.items.length;
    }
  
    // Limpa a pilha
    clear() {
      this.items = [];
    }
  
    // Exibe todos os elementos da pilha
    print() {
      console.log(this.items.toString());
    }
  }
  
  let stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); 
  
  stack.pop();
  console.log(stack.peek()); 
  
  stack.push(40);
  stack.print(); 
  
  console.log(stack.isEmpty()); 
  
  stack.clear();
  console.log(stack.isEmpty()); 
  