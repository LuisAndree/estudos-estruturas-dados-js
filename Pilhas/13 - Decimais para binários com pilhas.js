class Stack {
    constructor() {
      this.items = []; 
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }

    clear() {
      this.items = [];
    }
  
    toString() {
      return this.items.join('');
    }
  }
  
  function decimalToBinary(decimalNumber) {
    let stack = new Stack();
    let binaryString = '';
  
    if (decimalNumber === 0) {
      return '0';
    }
  
    while (decimalNumber > 0) {
      let remainder = decimalNumber % 2; 
      stack.push(remainder);             
      decimalNumber = Math.floor(decimalNumber / 2); 
    }
  
    while (!stack.isEmpty()) {
      binaryString += stack.pop();
    }
  
    return binaryString;
  }
  
  let decimalNumber = 233;
  let binaryRepresentation = decimalToBinary(decimalNumber);
  console.log(`O número decimal ${decimalNumber} em binário é: ${binaryRepresentation}`);
  