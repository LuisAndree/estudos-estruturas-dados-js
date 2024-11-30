const RED = true;
const BLACK = false;

class Node {
  constructor(key, color = RED, left = null, right = null, parent = null) {
    this.key = key;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

class RedBlackTree {
  constructor() {
    this.nil = new Node(null, BLACK); // NIL como sentinela
    this.root = this.nil;
  }

  // Rotação à esquerda
  rotateLeft(x) {
    let y = x.right; // y é o filho direito de x
    x.right = y.left; // T2 se torna o filho direito de x

    if (y.left !== this.nil) {
      y.left.parent = x;
    }

    y.parent = x.parent; // O pai de y será o pai de x

    if (x.parent === null) {
      this.root = y; // y se torna a nova raiz
    } else if (x === x.parent.left) {
      x.parent.left = y; // y se torna o filho esquerdo do pai de x
    } else {
      x.parent.right = y; // y se torna o filho direito
    }

    y.left = x; // x se torna o filho esquerdo de y
    x.parent = y;
  }

  // Rotação à direita
  rotateRight(y) {
    let x = y.left; // x é o filho esquerdo de y
    y.left = x.right; // T2 se torna o filho esquerdo de y

    if (x.right !== this.nil) {
      x.right.parent = y;
    }

    x.parent = y.parent; // O pai de x será o pai de y

    if (y.parent === null) {
      this.root = x; // x se torna a nova raiz
    } else if (y === y.parent.right) {
      y.parent.right = x; // x se torna o filho direito do pai de y
    } else {
      y.parent.left = x; // x se torna o filho esquerdo do pai de y
    }

    x.right = y; // y se torna o filho direito de x
    y.parent = x;
  }
}
