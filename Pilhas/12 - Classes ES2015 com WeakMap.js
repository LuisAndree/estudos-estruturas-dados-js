const _name = new WeakMap();  
const _age = new WeakMap();   

class User {
  constructor(name, age) {
    _name.set(this, name);
    _age.set(this, age);
  }

  getName() {
    return _name.get(this); 
  }

  setName(name) {
    _name.set(this, name); 
  }

  getAge() {
    return _age.get(this); 
  }

  setAge(age) {
    _age.set(this, age); 
  }
}

let user = new User('Alice', 30);
console.log(user.getName()); 
user.setName('Bob');
console.log(user.getName()); 

console.log(user._name); 
console.log(_name.get(user)); 

console.log(Object.keys(user)); 
