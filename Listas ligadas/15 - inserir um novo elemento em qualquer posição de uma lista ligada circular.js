class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
      }
  
      this.size++;
    }
  
    insertAt(value, position) {
      if (position < 0 || position > this.size) return false;
  
      const newNode = new Node(value);
  
      if (position === 0) {
        if (!this.head) {
          this.head = newNode;
          newNode.next = this.head;
        } else {
          let current = this.head;
          while (current.next !== this.head) {
            current = current.next;
          }
          newNode.next = this.head;
          current.next = newNode;
          this.head = newNode;
        }
      } else {
        let current = this.head;
        let previous = null;
        let index = 0;
  
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
  
        newNode.next = current;
        previous.next = newNode;
      }
  
      this.size++;
      return true;
    }
  
    toString() {
      if (!this.head) return "Lista vazia";
  
      let current = this.head;
      let result = '';
  
      do {
        result += current.value + (current.next !== this.head ? ' -> ' : '');
        current = current.next;
      } while (current !== this.head);
  
      return result;
    }
  
    print() {
      console.log(this.toString());
    }
  }
  
  const list = new CircularLinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.print(); 
  
  list.insertAt(15, 1);
  list.print();  
  
  list.insertAt(5, 0);
  list.print();  
  
  list.insertAt(45, 6);
  list.print();  
  