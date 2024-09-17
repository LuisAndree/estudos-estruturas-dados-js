class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    removeAt(position) {
      if (position < 0 || position >= this.size) return null;
  
      let current = this.head;
  
      if (position === 0) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = current.next;
          this.head.prev = null;
        }
      } else if (position === this.size - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let index = 0;
        while (index < position) {
          current = current.next;
          index++;
        }
  
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
  
      this.size--;
      return current.value;
    }
  
    toString() {
      let current = this.head;
      let result = '';
  
      while (current) {
        result += current.value + (current.next ? ' <-> ' : '');
        current = current.next;
      }
  
      return result || "Lista vazia";
    }
  
    print() {
      console.log(this.toString());
    }
  }
  
  const list = new DoublyLinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  list.append(50);
  list.print();  
  
  list.removeAt(2);
  list.print();  
  
  list.removeAt(0);
  list.print();  
  
  list.removeAt(2);
  list.print();  
  