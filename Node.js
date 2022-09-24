/*
A Module containing an implementation of the Node data structure in JavaScript
A node contains data and one link to another node
this node's data will be specified when creating it, and the data will be immutable
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // the next node is initially set to null
  }

  // setter to update the link to next node
  setNextNode(node) {
    // check if the node passed is an instance of the Node class
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("node must be an instance of the Node class");
    }
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am another instance of a Node!");

firstNode.setNextNode(secondNode);

// secondNode.setNextNode("This is a string");
// this will throw an error

console.log(firstNode);
/*
  this logs out =>
  Node {
    data: 'I am an instance of a Node!',
    next: Node { data: 'I am another instance of a Node!', next: null } }
*/

// this lets us use this class(the Node data structure) outside of this module
module.exports = Node;
