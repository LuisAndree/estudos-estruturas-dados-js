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
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack"; 
      }
      return this.items[this.items.length - 1];
    }
  
    clear() {
      this.items = [];
    }

    toString() {
      return this.items.join(', ');
    }
  }

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.toString());
stack.pop();
console.log(stack.toString());
