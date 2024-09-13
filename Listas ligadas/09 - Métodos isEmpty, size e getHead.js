class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.value + (current.next ? ' -> ' : '');
            current = current.next;
        }

        console.log(result || "Lista vazia");
    }
}

const list = new LinkedList();
console.log(list.isEmpty());
list.append(10);
list.append(20);
list.append(30);
list.print();
console.log(list.getSize());
console.log(list.getHead());
