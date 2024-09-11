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

    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
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
console.log(list.indexOf(30));
console.log(list.indexOf(50));
