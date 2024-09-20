class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SortedLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.head || this.head.value >= newNode.value) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next && current.next.value < newNode.value) {
                current = current.next;
            }
            newNode.next = current.next;
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

const list = new SortedLinkedList();
list.insert(30);
list.insert(10);
list.insert(50);
list.insert(20);
list.print();
