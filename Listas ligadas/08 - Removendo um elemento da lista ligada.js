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

    remove(value) {
        if (!this.head) return null;

        let current = this.head;
        let previous = null;

        if (current.value === value) {
            this.head = current.next;
        } else {
            while (current && current.value !== value) {
                previous = current;
                current = current.next;
            }

            if (current) {
                previous.next = current.next;
            } else {
                return null;
            }
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
list.remove(30);
list.print();
list.remove(10);
list.print();
list.remove(50);
list.print();
