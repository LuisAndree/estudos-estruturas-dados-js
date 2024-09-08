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

deque.addBack(10);
deque.addBack(20);
deque.addFront(5);
deque.addFront(2);

console.log("Deque: " + deque.toString());
console.log("Removido da frente: " + deque.removeFront());
console.log("Removido do final: " + deque.removeBack());
console.log("Deque após remoções: " + deque.toString());
console.log("Elemento da frente: " + deque.peekFront());
console.log("Elemento do final: " + deque.peekBack());
console.log("Tamanho da deque: " + deque.size());
console.log("Deque está vazia? " + deque.isEmpty());

deque.clear();
console.log("Deque após limpar: " + deque.toString());
console.log("Deque está vazia? " + deque.isEmpty());
