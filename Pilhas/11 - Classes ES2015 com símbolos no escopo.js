const _name = Symbol('name'); 
const _age = Symbol('age');  

class User {
  constructor(name, age) {
    this[_name] = name; 
    this[_age] = age;
  }

  getName() {
    return this[_name];
  }

  setName(name) {
    this[_name] = name;
  }

  getAge() {
    return this[_age];
  }

  setAge(age) {
    this[_age] = age;
  }
}

let user = new User('Alice', 30);
console.log(user.getName()); 
user.setName('Bob');
console.log(user.getName()); 

console.log(user._name); 
console.log(user[_name]); 

console.log(Object.keys(user));
console.log(Object.getOwnPropertySymbols(user)); 
