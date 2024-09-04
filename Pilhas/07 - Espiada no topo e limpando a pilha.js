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
  }

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); 
console.log(stack.items); 
stack.clear();
console.log(stack.items);
console.log(stack.isEmpty()); 
