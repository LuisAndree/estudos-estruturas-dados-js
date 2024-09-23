class CustomSet {
    constructor() {
      this.items = {};
    }
  
    has(element) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
    }
  
    add(element) {
      if (!this.has(element)) {
        this.items[element] = element;
        return true;
      }
      return false;
    }
  
    delete(element) {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }
      return false;
    }
  
    clear() {
      this.items = {};
    }
  }
  
  const set = new CustomSet();
  set.add(1);
  set.add(2);
  set.add(3);
  
  console.log(set.items);  
  
  console.log(set.delete(2));  
  console.log(set.items);  
  
  set.clear();
  console.log(set.items);  
  