class Deque {
    constructor() {
        this.items = [];
    }

    addFront(element) {
        this.items.unshift(element);
    }

    addBack(element) {
        this.items.push(element);
    }

    removeFront() {
        if (this.isEmpty()) {
            return 'Deque is empty';
        }
        return this.items.shift();
    }

    removeBack() {
        if (this.isEmpty()) {
            return 'Deque is empty';
        }
        return this.items.pop();
    }

    peekFront() {
        if (this.isEmpty()) {
            return 'Deque is empty';
        }
        return this.items[0];
    }

    peekBack() {
        if (this.isEmpty()) {
            return 'Deque is empty';
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toString() {
        return this.items.join(', ');
    }
}

const deque = new Deque();

deque.addFront(10);
deque.addFront(20);
deque.addFront(30);

console.log("Deque: " + deque.toString());

deque.addFront(40);
deque.addFront(50);

console.log("Deque após mais inserções na frente: " + deque.toString());
