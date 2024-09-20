class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.size--;
        return value;
    }

    peek() {
        if (this.top === null) {
            return null;
        }
        return this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.top === null) {
            console.log("Pilha vazia");
        } else {
            let current = this.top;
            let result = "";
            while (current) {
                result += current.value + (current.next ? " -> " : "");
                current = current.next;
            }
            console.log(result);
        }
    }
}

const stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.pop());
stack.print();

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());
