class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getAge() {
        return this._age;
    }

    setAge(age) {
        this._age = age;
    }
}

class Calculator {
    add(a, b) {
        return this._validate(a, b) ? a + b : null;
    }

    subtract(a, b) {
        return this._validate(a, b) ? a - b : null;
    }

    _validate(a, b) {
        return typeof a === 'number' && typeof b === 'number';
    }
}

let user = new User('Alice', 30);
console.log(user.getName());
user.setName('Bob');
console.log(user.getName());
console.log(user._name);
let calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator._validate(10, 5));
