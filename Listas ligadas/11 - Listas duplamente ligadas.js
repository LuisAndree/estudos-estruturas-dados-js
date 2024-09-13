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

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    remove(value) {
        if (!this.head) return null;

        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                this.size--;
                return current.value;
            }
            current = current.next;
        }

        return null;
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

list.prepend(5);
list.print();

list.remove(20);
list.print();
