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

    removeAt(index) {
        if (index < 0 || index >= this.size) return null;

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            previous.next = current.next;
        }

        this.size--;
        return current.value;
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
list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.print();
list.removeAt(2);
list.print();
list.removeAt(0);
list.print();
list.removeAt(1);
list.print();
