class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toString() {
        return this.items.toString();
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toString());
console.log(queue.size());
