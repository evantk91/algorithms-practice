const { Graph, GraphNode } = require('./graphs.js');
const { Queue } = require('./queue.js');

let nodeG = new GraphNode('G')
let nodeR = new GraphNode('R')
let nodeA = new GraphNode('A')
let nodeP = new GraphNode('P')
let nodeH = new GraphNode('H')
let nodeS = new GraphNode('S')

let graph1 = new Graph([nodeG, nodeR, nodeA, nodeP, nodeH, nodeS])
graph1.addEdge(nodeG, nodeR)
graph1.addEdge(nodeA, nodeR)
graph1.addEdge(nodeA, nodeG)
graph1.addEdge(nodeR, nodeP)
graph1.addEdge(nodeH, nodeG)
graph1.addEdge(nodeH, nodeP)
graph1.addEdge(nodeS, nodeR)

function BFS(root, searchVal) {
   const visited = new Set();
   const queue = new Queue();

   //start queue with root node
   queue.enq(root);

   //repeat until queue is empty
   while(queue.length()) {
      //dequeue node from queue and mark as visited 
      let currentNode = queue.deq();
      visited.add(currentNode); 
      
      if(currentNode.value === searchVal) {
         return currentNode;    
      }

      //check all neighbors and enqueue neighbors that are not queued or visited
      currentNode.children.forEach(child => {
         if(!visited.has(child) && !queue.queue.includes(child)) {
            queue.enq(child);    
         }       
      })

      console.log('current node:', currentNode)
      console.log('queue: ', queue.queue)
      console.log('visited: ', visited)
   }
}

console.log(BFS(nodeS, 'A'));