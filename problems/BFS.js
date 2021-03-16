const { Node, Tree } = require('./tree.js');
const { Queue } = require('./queue.js');

function BFS(tree) {
    //initialize queue and visit order
    let q = new Queue()
    let visitOrder = [];
 
    //store root node in queue
    let node = tree.getRoot();
    q.enq(node);
 
    //while there are node in the queue
    while(q.length() > 0) {
       //visit node at the front of the queue
       node = q.deq();
       visitOrder.push({
           "value": node.value,
           "color": node.color,
           "left": node.left ? node.left.value : null,
           "right": node.right ? node.right.value : null
        });
 
       //enqueue nodes children
       if(node.hasLeftChild()) {
          q.enq(node.getLeftChild());
       }
       if(node.hasRightChild()) {
          q.enq(node.getRightChild());
       }
    }
 
    return visitOrder;
 }
 
 module.exports = {
    BFS,    
 }