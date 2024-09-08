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

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const newNode = new Node(value);

        if (index === 0) {
            this.prepend(value);
        } else {
            let current = this.head;
            let previous;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            newNode.next = current;
            previous.next = newNode;
            this.size++;
        }
    }

}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);


