class Stack {
    #items = [];

    constructor() {

        let privateItems = [];

        this.push = function (element) {
            privateItems.push(element);
        };

        this.pop = function () {
            if (this.isEmpty()) {
                return "Underflow";
            }
            return privateItems.pop();
        };

        this.isEmpty = function () {
            return privateItems.length === 0;
        };

        this.peek = function () {
            if (this.isEmpty()) {
                return "No elements in Stack";
            }
            return privateItems[privateItems.length - 1];
        };

        this.clear = function () {
            privateItems = [];
        };

        this.toString = function () {
            return privateItems.join(', ');
        };
    }

    pushPrivate(element) {
        this.#items.push(element);
    }

    popPrivate() {
        if (this.isEmptyPrivate()) {
            return "Underflow";
        }
        return this.#items.pop();
    }

    isEmptyPrivate() {
        return this.#items.length === 0;
    }

    peekPrivate() {
        if (this.isEmptyPrivate()) {
            return "No elements in Stack";
        }
        return this.#items[this.#items.length - 1];
    }

    clearPrivate() {
        this.#items = [];
    }

    toStringPrivate() {
        return this.#items.join(', ');
    }

    get items() {
        return [...this.#items];
    }
}

let stackClosure = new Stack();
stackClosure.push(10);
stackClosure.push(20);
console.log(stackClosure.toString());
console.log(stackClosure.privateItems);

let stackPrivate = new Stack();
stackPrivate.pushPrivate(30);
stackPrivate.pushPrivate(40);
console.log(stackPrivate.toStringPrivate());

try {
    console.log(stackPrivate.#items);
} catch (e) {
    console.log(e.message);
}

console.log(stackPrivate.items);
stackPrivate.items.push(50);
console.log(stackPrivate.items);
