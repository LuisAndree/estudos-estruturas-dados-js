class Stack {
    constructor() {
      this.items = []; 
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; 
      }
      return this.items.pop();
    }

    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack"; 
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }

let stack = new Stack();

console.log(stack.isEmpty()); 
stack.push(10);
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty()); 
