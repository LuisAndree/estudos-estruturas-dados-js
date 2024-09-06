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

    isEmpty() {
        return this.items.length === 0;
    }
}

function baseConverter(decimalNumber, base) {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let stack = new Stack();
    let baseString = '';

    if (base < 2 || base > 36) {
        return 'Base inválida. Use uma base entre 2 e 36.';
    }

    if (decimalNumber === 0) {
        return '0';
    }

    while (decimalNumber > 0) {
        let remainder = decimalNumber % base;
        stack.push(remainder);
        decimalNumber = Math.floor(decimalNumber / base);
    }

    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];

        return baseString;
    }

    let decimalNumber = 233;
    let base = 16;
    let result = baseConverter(decimalNumber, base);
    console.log(`O número decimal ${decimalNumber} convertido para base ${base} é: ${result}`);
}