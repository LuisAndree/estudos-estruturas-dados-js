class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    insert(value, position) {
        if (position < 0 || position > this.size) return false;

        const newNode = new Node(value);

        if (position === 0) {
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else if (position === this.size) {
            this.append(value);
        } else {
            let current = this.head;
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            previous.next = newNode;
            newNode.prev = previous;
            newNode.next = current;
            current.prev = newNode;
        }

        this.size++;
        return true;
    }

    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.value + (current.next ? ' <-> ' : '');
            current = current.next;
        }

        return result || "Lista vazia";
    }

    print() {
        console.log(this.toString());
    }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();

list.insert(15, 2);
list.print();

list.insert(5, 0);
list.print();

list.insert(35, 5);
list.print();
