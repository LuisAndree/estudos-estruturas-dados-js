class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isBalanced(expression) {
    let stack = new Stack();
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    const matches = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let char of expression) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.isEmpty()) {
                return false;
            }
            let top = stack.pop();
            if (matches[char] !== top) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

const expression1 = "{[()]}";
const expression2 = "{[(])}";
console.log(`A expressão "${expression1}" está balanceada? ${isBalanced(expression1)}`);
console.log(`A expressão "${expression2}" está balanceada? ${isBalanced(expression2)}`);
