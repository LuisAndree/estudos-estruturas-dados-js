class Stack {
    constructor() {
      this.items = []; 
    }

    push(element) {
      this.items.push(element);
    }
  }

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.items); 
