const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(value) {
    if(!this.treeRoot) {
      this.treeRoot = new Node(value);
    } else {
      this.treeRoot = this.addData(this.treeRoot, value);
    }
  }

  addData(node, value) {
    if (!node) {
      return new Node(value);
    }
    if (node.data === value) {
      return node;
    }
    if (value < node.data) {
      node.left = this.addData(node.left, value);
    } else {
      node.right = this.addData(node.right, value);
    }
    return node;
  }

  has(value) {
    if (this.search(this.treeRoot, value)) {
      return true;
    } else {
      return false;
    }
  }

  find(value) {
    return this.search(this.treeRoot, value);
  }

  search(node, value) {
    if (!node) {
      return null;
    }
    if (node.data === value) {
      return node;
    }
    if (value < node.data) {
      return this.search(node.left, value);
    } else {
      return this.search(node.right, value);
    }
  }

  remove(value) {
    this.treeRoot = this.deleteNode(this.treeRoot, value);
  }

  deleteNode(node, value) {
    if (!node) {
      return null;
    } 
    if (node.data < value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else if (node.data > value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
    }

    if (!node.left) {
      node = node.right;
      return node;
    }
    if (!node.right) {
      node = node.left;
      return node;
    }
    let minimum = node.right;
    while (minimum.left) {
      minimum = minimum.left;
    }
    node.data = minimum.data;
    node.right = this.deleteNode(node.right, minimum.data);
    return node;
  }

  min() {
    if (!this.treeRoot) {
      return null;
    } else {
      return this.findMinimum(this.treeRoot).data;
    }
  }

  findMinimum(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  findMaximum(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    } else {
      return this.findMaximum(this.treeRoot).data
    }
  }
}

module.exports = {
  BinarySearchTree
};