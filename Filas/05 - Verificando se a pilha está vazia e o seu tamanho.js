class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
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
        return this.items.toString();
    }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
console.log(stack.size());
