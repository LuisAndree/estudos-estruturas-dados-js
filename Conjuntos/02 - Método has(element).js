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
  }
  
  const set = new CustomSet();
  set.add(1);
  set.add(2);
  
  console.log(set.has(1));  
  console.log(set.has(3));  
  