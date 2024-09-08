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

    peek() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.items[0];
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

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Fila após adições: " + queue.toString());
console.log("Elemento removido: " + queue.dequeue());
console.log("Fila após remoção: " + queue.toString());
console.log("Primeiro elemento: " + queue.peek());
console.log("Fila está vazia? " + queue.isEmpty());
console.log("Tamanho da fila: " + queue.size());

queue.clear();
console.log("Fila após limpar: " + queue.toString());
console.log("Fila está vazia? " + queue.isEmpty());
