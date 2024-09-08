class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.join(', ');
    }
}

function hotPotato(players, num) {
    const queue = new Queue();

    for (let i = 0; i < players.length; i++) {
        queue.enqueue(players[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        console.log(`${queue.dequeue()} foi eliminado(a).`);
    }

    return queue.front();
}

const players = ['Alice', 'Bob', 'Carlos', 'Diana', 'Eva'];
const num = 7;

const winner = hotPotato(players, num);
console.log(`O vencedor(a) é: ${winner}`);
