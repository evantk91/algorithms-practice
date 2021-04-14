const { Graph, GraphNode } = require('./graphs.js');
const { Stack } = require('./stack.js');

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

function DFS(root, searchVal) {
   const visited = new Set();
   const stack = new Stack();

   stack.push(root); //start stack with given root node

   //repeat until stack is empty
   while(!stack.isEmpty()) {
       //pop out node from stack and mark as visited
       let currentNode = stack.pop();
       visited.add(currentNode);

       if(currentNode.value === searchVal) {
          return currentNode;    
       }

       //check all neighbors
       //add all neighbors that are not visited or currently in the stack
       currentNode.children.forEach(child => {
           if(!visited.has(child) && !stack.list.includes(child)) {
               stack.push(child)
           }
       })

       console.log('current node:', currentNode)
       console.log('stack: ', stack.list)
       console.log('visited: ', visited)
   }
}

function DFSRecursiveStart(root, searchVal) {
   const visited = new Set();
   return DFSRecursive(root, visited, searchVal);    
}

function DFSRecursive(node, visited, searchVal) {
   //base case - return node when found 
   if(node.value === searchVal) {
      found = true;
      return node;    
   }
   
   visited.add(node);
   found = false;
   result = null;
   console.log(visited)

   node.children.forEach(child => {
      if(!visited.has(child)) {
         result = DFSRecursive(child, visited, searchVal);
      }    
   })

   return result;
}

//graph1.printGraph()

//console.log(nodeR.children)
console.log(DFSRecursiveStart(nodeS, 'A'))