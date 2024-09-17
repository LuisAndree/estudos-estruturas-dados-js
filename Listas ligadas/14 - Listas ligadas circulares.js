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
  
    removeAt(position) {
      if (position < 0 || position >= this.size) return null;
  
      let current = this.head;
      let previous = null;
  
      if (position === 0) {
        if (this.size === 1) {
          this.head = null;
        } else {
          while (current.next !== this.head) {
            current = current.next;
          }
          current.next = this.head.next;
          this.head = this.head.next;
        }
      } else {
        let index = 0;
        current = this.head;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
  
      this.size--;
      return current.value;
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
  
  list.removeAt(2);
  list.print();  
  
  list.removeAt(0);
  list.print();  
  