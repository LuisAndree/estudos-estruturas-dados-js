class Deque {
    constructor() {
        this.items = [];
    }

    addBack(element) {
        this.items.push(element);
    }

    addFront(element) {
        this.items.unshift(element);
    }

    removeFront() {
        return this.items.shift();
    }

    removeBack() {
        return this.items.pop();
    }

    peekFront() {
        return this.items[0];
    }

    peekBack() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function isPalindromeUsingDeque(str) {
    const deque = new Deque();

    const cleanedStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    for (let char of cleanedStr) {
        deque.addBack(char);
    }

    while (deque.size() > 1) {
        const front = deque.removeFront();
        const back = deque.removeBack();

        if (front !== back) {
            return false;
        }
    }

    return true;
}

const testString1 = "A man, a plan, a canal: Panama";
const testString2 = "racecar";
const testString3 = "hello";

console.log(isPalindromeUsingDeque(testString1));
console.log(isPalindromeUsingDeque(testString2));
console.log(isPalindromeUsingDeque(testString3));
