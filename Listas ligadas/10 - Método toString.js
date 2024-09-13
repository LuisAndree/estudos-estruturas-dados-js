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

    toString() {
        if (!this.head) return "Lista vazia";

        let current = this.head;
        let result = '';

        while (current) {
            result += current.value + (current.next ? ' -> ' : '');
            current = current.next;
        }

        return result;
    }

    print() {
        console.log(this.toString());
    }
}

const list = new LinkedList();
console.log(list.toString());
list.append(10);
list.append(20);
list.append(30);
list.print();
