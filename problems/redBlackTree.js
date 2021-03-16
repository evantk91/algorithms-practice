const { BFS } = require('./BFS.js');

class Node {
   constructor(value, parent, color) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = parent;
      this.color = color;    
   }
   
   getLeftChild = function() {
      return this.left;    
   }

   getRightChild = function() {
      return this.right;    
   }

   hasLeftChild = function() {
      return this.left !== null;    
   }

   hasRightChild = function() {
      return this.right !== null;    
   }

   grandparent() {
      if(this.parent === null) {
         return null;    
      }
      return this.parent.parent;    
   }

   pibling() {
      let p = this.parent;
      let gp = this.grandparent();
      if(gp === null) {
         return null;    
      }
      if(p === gp.left) {
         return gp.right;    
      }
      if(p === gp.right) {
         return gp.left;    
      }
   }
}

class RedBlackTree {
   constructor(root) {
      this.root = new Node(root, null, 'red');    
   }

   getRoot() {
      return this.root;    
   }
   
   insert(newValue) {
      let newNode = this.insertHelper(this.root, newValue);
      this.rebalance(newNode);     
   }

   insertHelper(current, newValue) {
      if(current.value < newValue) {
         if(current.right) {
            return this.insertHelper(current.right, newValue);
         } else {
            current.right = new Node(newValue, current, 'red');
            return current.right;
         }
      } else {
         if(current.left) {
            return this.insertHelper(current.left, newValue);
         } else {
            current.left = new Node(newValue, current, 'red');
            return current.left;
         }    
      }
   }

   search(value) {
      return false;
   }

   rotateLeft(node) {
      //save parent of sub tree we are rotating 
      let p = node.parent;
      
      let nodeMovingUp = node.right;
      //after node moves down, the right child of the node moving up 
      //will be the right child of the node
      node.right = nodeMovingUp.left;

      //node becomes left child of node moving up
      nodeMovingUp.left = node;
      node.parent = nodeMovingUp;

      //connect rotated sub tree to node's parent
      if(p) {
         if(node === p.left) {
            p.left = nodeMovingUp;
         } else {
            p.right = nodeMovingUp;    
         }    
      }
      nodeMovingUp.parent = p;
   }

   rotateRight(node) {
      //save parent of sub tree we are rotating 
      let p = node.parent;
    
      let nodeMovingUp = node.left;
      //after node moves down, the right child of the node moving up
      //will be the left child of the node
      node.left = nodeMovingUp.right;

      //node becomes left child of node moving up
      nodeMovingUp.right = node;
      node.parent = nodeMovingUp;

      //connect rotated sub tree to node's parent
      if(p) {
         if(node === p.left) {
            p.left = nodeMovingUp;
         } else {
            p.right = nodeMovingUp;    
         }    
      }
      nodeMovingUp.parent = p;
   }

   rebalance(node) {
      //case 1: 
      if(node.parent === null) {
         return;    
      }
      //case 2:
      if(node.parent.color === 'black') {
         return;    
      }
      
      //case 3: recolor parent, parent's sibling and grandparent
      if(node.pibling() && node.pibling().color === 'red') {
         node.pibling().color = 'black';
         node.parent.color = 'black';
         node.grandparent().color = 'red';
         //recursively call on node's grandparent to balance all ancestor nodes
         return this.rebalance(node.grandparent());     
      }

      let gp = node.grandparent();
      //if there is no grandparent, cases 4 and 5 do not apply
      if(!gp) {
         return;       
      }

      //case 4: inserted node's parent is red and sibling is black
      //parent and inserted node are not on the same side in reference to their parents
      if(gp.left && node === gp.left.right) {
         this.rotateLeft(node.parent);
         node = node.left;    
      } else if(gp.right && node === gp.right.left) {
         this.rotateRight(node.parent);
         node = node.right;    
      }

      //case 5: parent and inserted node are on the same side in reference to their parents
      let p = node.parent;
      gp = p.parent;
      if(node === p.left) {
         this.rotateRight(gp);
      } else {
         this.rotateLeft(gp);    
      }
      p.color = 'black';
      gp.color = 'red';
   }
}

const tree = new RedBlackTree(9);
tree.insert(6);
tree.insert(19);
tree.insert(13);
tree.insert(16);
console.log(BFS(tree));
// console.log(tree.search(1));